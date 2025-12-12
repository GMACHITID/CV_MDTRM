// Set header height to match image dimensions
function setHeaderHeight() {
    const header = document.querySelector('header');
    const img = new Image();
    img.src = 'bckgr.jpeg';
    img.onload = function() {
        // Calculate height based on image aspect ratio and container width
        const containerWidth = header.offsetWidth || window.innerWidth;
        const aspectRatio = this.naturalHeight / this.naturalWidth;
        const calculatedHeight = containerWidth * aspectRatio;
        // Add padding to account for content
        header.style.height = `${calculatedHeight}px`;
        header.style.minHeight = `${calculatedHeight}px`;
    };
    img.onerror = function() {
        // Fallback if image fails to load
        header.style.minHeight = '400px';
    };
}

// Translations object
// To add Georgian translations, replace the placeholder text in the 'ka' object below
// All keys that exist in 'en' should also exist in 'ka' for complete translation
const translations = {
    en: {
        name: "Giorgi Machitidze",
        title: "Business Development Manager",
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.education": "Education",
        "nav.contact": "Contact",
        "about.title": "About Me",
        "about.para1": "Welcome to my professional portfolio. I am a dedicated professional with experience in Business Development. This CV showcases my work experience, education, and skills.",
        "about.para2": "Feel free to explore my background and reach out if you'd like to connect or learn more about my work.",
        "experience.title": "Work Experience",
        "experience.exp1.title": "Business Development Manager",
        "experience.exp1.company": "FINA LLC",
        "experience.exp1.description": "Drove end-to-end business growth initiatives by leading client outreach campaigns (cold/warm calling) and optimizing conversion strategies through AI-driven automation. Acted as the key liaison between marketing, sales, and development teams, ensuring strategic alignment and timely project delivery across multiple verticals. Managed the company's eCommerce division, overseeing Shopify-based solutions and directly participating in custom app development (Pay-in-Installments system for Georgia, FinSync accounting integration) and CRM pipeline structuring. Partnered with the AI research team to develop FinAssist, an intelligent chatbot tailored for banks and financial professionals; contributed to Microsoft's AI Acceleration Program in product testing, pitching, and consultation. Engineered automated lead funnels and workflows using Zapier and n8n, integrating custom SMS webhook systems to enhance lead nurturing and conversion rates. Crafted an image conversion pipeline that processes any picture format and outputs WebP images with transparent backgrounds, centered product focus, and 100% preserved quality, optimized for eCommerce storefronts. Designed and implemented an Excel-to-SMS automation tool using Visual Basic and KDEConnect, streamlining mass communication processes for marketing operations. Attended the eCommerce Day 2025 held in Georgia as a part of my networking program.",
        "experience.exp2.title": "Customer Operations Expert II (Hybrid)",
        "experience.exp2.company": "Teleperformance Georgia",
        "experience.exp2.description": "Processing Outbound/Inbound cases in English and German over spoken and written communication channels, achieving indispensable communication skills in the German language (C1 tier). Volunteered in training newcomers in my specialty, as well as the IT-systems adaptability during overtime hours. Established strong connections and various communication abilities through working in 4 departments and 3 languages. Solidified time management skills by having worked with tight and flexible scheduling.",
        "experience.exp3.title": "Data analysis/Data Entry",
        "experience.exp3.company": "S/P Giorgi Machitidze",
        "experience.exp3.description": "Spearhead data processing & Accounting. Supervise customer relations over various communication channels, including face-to-face meetings. Assist with creating financial reports using Python modules, decreasing financial discrepancies by exactly 50%. Technology used: NumPy Pandas Matplotlib",
        "education.title": "Education",
        "education.edu1.title": "Data Engineering Trainee",
        "education.edu1.institution": "EPAM",
        "education.edu2.title": "Bachelor of Computer Science (English, External Mobility)",
        "education.edu2.institution": "Georgian Technical University",
        "education.edu2.description": "Currently enrolled after external mobility as a VII semester student with an ongoing 92% average grade.",
        "education.edu3.title": "Bachelor of Computer Science (English)",
        "education.edu3.institution": "Caucasus University",
        "education.edu3.description": "Was invited to a cultural visit to the European Parliament in Strasbourg upon achieving a high score in \"History as a Subject\". Took part in different competitions through university partnerships, including \"The Proggy Buggy international\".",
        "contact.title": "Get in Touch",
        "contact.name": "Name",
        "contact.email": "Email Address",
        "contact.message": "Message",
        "contact.submit": "Send Message"
    },
    ka: {
        // Georgian translations - Replace placeholders with actual Georgian text
        name: "გიორგი მაჩიტიძე",
        title: "ბიზნეს დეველოპმენტ მენეჯერი",
        "nav.about": "ჩემ შესახებ",
        "nav.experience": "გამოცდილება",
        "nav.education": "განათლება",
        "nav.contact": "კონტაქტი",
        "about.title": "ჩემ შესახებ",
        "about.para1": "ბიზნეს დეველოპერი ტექნოლოგიების, მონაცემებისა და ბიზნეს სტრატეგიის შეთავსების გამოცდილებით.",
        "about.para2": " წარმატებული eCommerce და AI ინიციატივების მართვაში, მათ შორის Shopify აპლიკაციების შემუშავებაში, CRM ოპტიმიზაციასა და ავტომატიზაციის სამუშაო პროცესების დანერგვაში. ორიენტირებული ვარ მონაცემებზე დაფუძნებულ გადაწყვეტილებებსა და ახალი ტექნოლოგიების ინტეგრაციაზე მასშტაბური სისტემების შესაქმნელად. ამჟამად, FINA2.NET-ში განვითარების პროექტების პარალელურად, ვიღრმავებ ცოდნას მონაცემთა ინჟინერიაში.",
        "experience.title": "სამუშაო გამოცდილება",
        "experience.exp1.title": "ბიზნეს დეველოპმენტ მენეჯერი",
        "experience.exp1.company": "FINA LLC",
        "experience.exp1.description": "ბიზნესის ზრდის სრული ციკლის ინიციატივების მართვა კლიენტებთან აქტიური დაკავშირების (ცივი/თბილი ზარები) გზით და კონვერსიის სტრატეგიების ოპტიმიზაცია AI-ზე დაფუძნებული ავტომატიზაციით.\
ძირითადი დამაკავშირებელი პირის ფუნქციის შესრულება მარკეტინგის, გაყიდვებისა და დეველოპმენტის გუნდებს შორის, სტრატეგიული თანხვედრისა და მრავალ სეგმენტში პროექტების დროულად მიწოდების უზრუნველყოფა.\
კომპანიის ელექტრონული კომერციის (eCommerce) დივიზიონის მართვა, მათ შორის Shopify-ზე დაფუძნებული გადაწყვეტილებების ზედამხედველობა, მორგებული აპლიკაციების განვითარება („ნაწილ-ნაწილ გადახდის“ სისტემა საქართველოსთვის, FinSync-ის ბუღალტრული ინტეგრაცია) და CRM მილსადენის სტრუქტურირება.\
AI კვლევით გუნდთან პარტნიორობა FinAssist-ის შესაქმნელად — ბანკებისა და ფინანსური პროფესიონალებისთვის შექმნილი ინტელექტუალური ჩატბოტი; Microsoft-ის AI Acceleration Program-ში წვლილის შეტანა პროდუქტის ტესტირების, პრეზენტაციის სტრუქტურირებისა და კონსულტაციის მიმართულებით.\
ავტომატიზირებული ლიდების ფილტრებისა და სამუშაო პროცესების შექმნა Zapier-ისა და n8n-ის გამოყენებით, მორგებული SMS ვებჰუკ სისტემების ინტეგრირებით ლიდების მოზიდვისა და კონვერსიის მაჩვენებლების ასამაღლებლად.\
Excel-დან SMS-ზე ავტომატიზაციის ხელსაწყოს შემუშავება და დანერგვა Visual Basic-ისა და KDEConnect-ის მეშვეობით, მარკეტინგული ოპერაციებისთვის მასობრივი კომუნიკაციის პროცესების გასამარტივებლად.\
გამოსახულების კონვერტაციის უნიკალური პაიპლაინის აგება, რომელიც ამუშავებს ნებისმიერ ფოტო ფორმატს და აწარმოებს WebP სურათებს გამჭვირვალე ფონით, ცენტრში მოქცეული პროდუქტით და 100% ხარისხის შენარჩუნებით, eCommerce-ის მაღაზიებისთვის ოპტიმიზირებული სახით.\
კომპანიის წარმოდგენა eCommerce Day 2025-ზე, სტრატეგიული პარტნიორობის გაფართოება და რეგიონალურ ციფრული ტრანსფორმაციის ლიდერებთან ნეთვორქინგი.",
        "experience.exp2.title": "კლიენტთა ოპერაციების ექსპერტი II (ჰიბრიდული)",
        "experience.exp2.company": "Teleperformance Georgia",
        "experience.exp2.description": "ვამუშავებ ელ.ფოსტისა და ზარების Inbound/Outbound ქეისებს ინგლისურად და გერმანულად, რისი მეშვეობითაც მივაღწიე გერმანული ენის ცოდნის უმაღლეს დონეს.\
როგორც მოხალისე, ვმონაწილეობ ახალბედა თანამშრომლების დატრენინგებაში როგორც ჩემს საქმეში, ისევე IT- სისტემების გამართვასა და ტესტირებაში სწრაფად და ეფექტურად, ზეგანაკვეთურად.\
დავამყარე ძლიერი კავშირები და კომუნიკაციის უნარები მულტიკულტურულ საზოგადოებაში 4 ენასა და 3 დეპარტამენტში მუშაობის საფუძველზე.\
გავიმყარე დროისა და განრიგების მენეჯმენტის უნარები.",
        "experience.exp3.title": "მონაცემთა შეყვანა/დამუშავება",
        "experience.exp3.company": "ი/მ გიორგი მაჩიტიძე",
        "experience.exp3.description": "ვაორგანიზებ მონაცემთა დამუშავებასა და დამკვეთებთან ურთიერთობას.\
ჩამოვაყალიბე ძლიერი კავშირგაბმულობა დამკვეთებთან მრავალი საკომუნიკაციო საშუალებით.\
ვეხმარები ფინანსური რეპორტების შექმნასა და ვიზუალიზაციაში ოფისისა და Python-ის მოდულების მეშვეობით, რითაც\
       მივაღწიე მონაცემთა სიზუსტის გაუმჯობესებას დაახლოებით 50%-ით.",
        "education.title": "განათლება",
        "education.edu1.title": "მონაცემთა ინჟინერიის შესავალი",
        "education.edu1.institution": "EPAM",
        "education.edu2.title": "კომპიუტერული მეცნიერების ბაკალავრი (ინგლისურენოვანი, გარე მობილობა)",
        "education.edu2.institution": "საქართველოს ტექნიკური უნივერსიტეტი",
        "education.edu2.description": "ამჟამად გარე მობილობის შემდეგ, საქართველოს ტექნიკური უნივერსიტეტის",
        "education.edu3.title": "კომპიუტერული მეცნიერების ბაკალავრი (ინგლისურენოვანი)",
        "education.edu3.institution": "კავკასიის უნივერსიტეტი",
        "education.edu3.description": "მოწვეული ვიყავი სტრასბურგში კულტურულ ვიზიტზე “ისტორია, როგორც საგნის” მაღალი შედეგების საფუძველზე.\
ვიღებდი სხვადასხვა შეჯიბრებებში მონაწილეობას, როგორიცაა მკლავჭიდი და “Proggy Buggy International”",
        "contact.title": "დაკავშირება",
        "contact.name": "სახელი",
        "contact.email": "ელფოსტა",
        "contact.message": "შეტყობინება",
        "contact.submit": "გაგზავნა"
    }
};

// Language switching functionality
let currentLang = localStorage.getItem('language') || 'en';

function switchLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = lang;
}

// Smooth Scrolling Navigation
document.addEventListener('DOMContentLoaded', function() {
    // Initialize language
    switchLanguage(currentLang);
    
    // Language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
    
    // Set header height to match image
    setHeaderHeight();
    
    // Recalculate on window resize
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(setHeaderHeight, 100);
    });
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

