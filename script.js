// Smooth Scrolling Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // Scroll spy for navigation
    const sections = document.querySelectorAll('.section');
    const navItems = document.querySelectorAll('.nav-link');

    function updateActiveNav() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.clientHeight;
            if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call

    // Scroll animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Contact Form Handling
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name-input');
    const emailInput = document.getElementById('email-input');
    const messageInput = document.getElementById('message-input');
    const formStatus = document.getElementById('form-status');

    // Email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Clear error messages
    function clearErrors() {
        document.querySelectorAll('.error-message').forEach(error => {
            error.textContent = '';
        });
    }

    // Show error message
    function showError(inputId, message) {
        const errorElement = document.getElementById(inputId + '-error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    // Form validation
    function validateForm() {
        let isValid = true;
        clearErrors();

        // Name validation
        if (nameInput.value.trim() === '') {
            showError('name', 'Name is required');
            isValid = false;
        }

        // Email validation
        if (emailInput.value.trim() === '') {
            showError('email', 'Email is required');
            isValid = false;
        } else if (!validateEmail(emailInput.value)) {
            showError('email', 'Please enter a valid email address');
            isValid = false;
        }

        // Message validation
        if (messageInput.value.trim() === '') {
            showError('message', 'Message is required');
            isValid = false;
        }

        return isValid;
    }

    // Form submission
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        if (validateForm()) {
            // Disable submit button during submission
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalBtnText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            try {
                // Send form data to Cloudflare Worker function
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: nameInput.value.trim(),
                        email: emailInput.value.trim(),
                        message: messageInput.value.trim()
                    })
                });

                const data = await response.json();

                if (!response.ok) {
                    throw new Error(data.error || 'Failed to send message');
                }

                // Show success message
                formStatus.textContent = data.message || 'Thank you for your message! I will get back to you soon.';
                formStatus.className = 'form-status success';
                
                // Reset form
                contactForm.reset();
                clearErrors();

                // Hide status message after 5 seconds
                setTimeout(() => {
                    formStatus.className = 'form-status';
                    formStatus.textContent = '';
                }, 5000);
            } catch (error) {
                console.error('Form submission error:', error);
                formStatus.textContent = 'Sorry, there was an error sending your message. Please try again later.';
                formStatus.className = 'form-status error';
                
                setTimeout(() => {
                    formStatus.className = 'form-status';
                    formStatus.textContent = '';
                }, 5000);
            } finally {
                // Re-enable submit button
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        }
    });

    // Real-time validation
    nameInput.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            showError('name', 'Name is required');
        } else {
            showError('name', '');
        }
    });

    emailInput.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            showError('email', 'Email is required');
        } else if (!validateEmail(this.value)) {
            showError('email', 'Please enter a valid email address');
        } else {
            showError('email', '');
        }
    });

    messageInput.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            showError('message', 'Message is required');
        } else {
            showError('message', '');
        }
    });

    // Chat Widget Functionality
    const chatToggle = document.getElementById('chat-toggle');
    const chatContainer = document.getElementById('chat-container');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');
    const chatMessages = document.getElementById('chat-messages');

    // Toggle chat
    chatToggle.addEventListener('click', function() {
        chatContainer.classList.toggle('active');
        if (chatContainer.classList.contains('active')) {
            chatInput.focus();
        }
    });

    chatClose.addEventListener('click', function() {
        chatContainer.classList.remove('active');
    });

    // Send message function
    function sendMessage() {
        const message = chatInput.value.trim();
        if (message === '') return;

        // Add user message to chat
        addMessage(message, 'user');
        chatInput.value = '';

        // Show loading message
        const loadingId = addMessage('Thinking...', 'bot', true);

        // Call Gemini API
        callGeminiAPI(message, loadingId);
    }

    // Add message to chat
    function addMessage(text, sender, isLoading = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}${isLoading ? ' loading' : ''}`;
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        if (isLoading) {
            return messageDiv;
        }
        return null;
    }

    // Update loading message with response
    function updateMessage(messageElement, text) {
        if (messageElement) {
            messageElement.textContent = text;
            messageElement.classList.remove('loading');
        }
    }

    // Gemini API Integration via Cloudflare Worker
    async function callGeminiAPI(userMessage, loadingElement) {
        try {
            // Use Cloudflare Worker function to proxy API calls securely
            // The API key is stored server-side in Cloudflare Pages environment variables
            const apiUrl = '/api/chat';
            
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: userMessage
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `API error: ${response.status}`);
            }

            const data = await response.json();
            
            if (data.response) {
                updateMessage(loadingElement, data.response);
            } else {
                throw new Error('Invalid response format');
            }
        } catch (error) {
            console.error('Chat API Error:', error);
            updateMessage(loadingElement, 'Sorry, I encountered an error. Please try again later. If the issue persists, check your API configuration in Cloudflare Pages.');
        }
    }

    // Send message on button click
    chatSend.addEventListener('click', sendMessage);

    // Send message on Enter key
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });

    // Initialize chat with welcome message
    setTimeout(() => {
        addMessage('Hello! I\'m here to help answer questions about this CV. How can I assist you?', 'bot');
    }, 500);

    // Mobile tap trace effect
    function createTapTrace(x, y) {
        const trace = document.createElement('div');
        trace.style.position = 'fixed';
        trace.style.left = `${x}px`;
        trace.style.top = `${y}px`;
        trace.style.width = '4px';
        trace.style.height = '4px';
        trace.style.borderRadius = '50%';
        trace.style.backgroundColor = 'rgba(220, 38, 38, 0.8)';
        trace.style.pointerEvents = 'none';
        trace.style.zIndex = '9999';
        trace.style.transform = 'translate(-50%, -50%)';
        trace.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        document.body.appendChild(trace);
        
        // Animate and remove
        requestAnimationFrame(() => {
            trace.style.opacity = '0';
            trace.style.transform = 'translate(-50%, -50%) scale(2)';
        });
        
        setTimeout(() => {
            if (trace.parentNode) {
                trace.parentNode.removeChild(trace);
            }
        }, 500);
    }

    // Detect mobile devices
    function isMobileDevice() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
               (window.innerWidth <= 768 && 'ontouchstart' in window);
    }

    // Add touch event listeners for mobile
    if (isMobileDevice()) {
        document.addEventListener('touchstart', function(e) {
            const touch = e.touches[0];
            createTapTrace(touch.clientX, touch.clientY);
        }, { passive: true });
    }
});

