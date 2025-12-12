// Cloudflare Worker function to handle contact form submissions
// Recipient email is stored securely as an environment variable

export async function onRequestPost(context) {
    const { request, env } = context;
    
    // Get recipient email from environment variable
    const recipientEmail = env.RECIPIENT_EMAIL;
    const resendApiKey = env.RESEND_API_KEY;
    
    if (!recipientEmail) {
        return new Response(
            JSON.stringify({ error: 'Recipient email not configured' }),
            { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }

    if (!resendApiKey) {
        return new Response(
            JSON.stringify({ error: 'Resend API key not configured' }),
            { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }

    try {
        // Get form data from request body
        const body = await request.json();
        const { name, email, message } = body;

        // Validate required fields
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ error: 'All fields are required' }),
                { 
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(
                JSON.stringify({ error: 'Invalid email format' }),
                { 
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Sanitize HTML to prevent XSS attacks
        function escapeHtml(text) {
            const map = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            };
            return text.replace(/[&<>"']/g, m => map[m]);
        }

        const sanitizedName = escapeHtml(name);
        const sanitizedEmail = escapeHtml(email);
        const sanitizedMessage = escapeHtml(message);

        // Prepare email content
        const emailSubject = `Contact Form Message from ${sanitizedName}`;
        const emailText = `Name: ${sanitizedName}\nEmail: ${sanitizedEmail}\n\nMessage:\n${sanitizedMessage}`;
        const emailHtml = `
            <!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <style>
                    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                    .header { background-color: #2563eb; color: white; padding: 20px; border-radius: 5px 5px 0 0; }
                    .content { background-color: #f9fafb; padding: 20px; border-radius: 0 0 5px 5px; }
                    .field { margin-bottom: 15px; }
                    .label { font-weight: bold; color: #1f2937; }
                    .message-box { background-color: white; padding: 15px; border-left: 4px solid #2563eb; margin-top: 10px; }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h2>New Contact Form Submission</h2>
                    </div>
                    <div class="content">
                        <div class="field">
                            <span class="label">Name:</span> ${sanitizedName}
                        </div>
                        <div class="field">
                            <span class="label">Email:</span> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a>
                        </div>
                        <div class="field">
                            <span class="label">Message:</span>
                            <div class="message-box">${sanitizedMessage.replace(/\n/g, '<br>')}</div>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `;

        // Send email via Resend API
        const resendResponse = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${resendApiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                from: 'onboarding@resend.dev', // Resend default sender (replace with your verified domain)
                to: recipientEmail,
                reply_to: email,
                subject: emailSubject,
                text: emailText,
                html: emailHtml,
            }),
        });

        const resendData = await resendResponse.json();

        // Check if Resend API call was successful
        if (!resendResponse.ok) {
            console.error('Resend API error:', resendData);
            return new Response(
                JSON.stringify({ 
                    error: 'Failed to send email',
                    details: resendData.message || 'Unknown error'
                }),
                { 
                    status: resendResponse.status,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Log successful submission
        console.log('Contact form submission sent successfully:', {
            recipient: recipientEmail,
            from: email,
            name: name,
            resendId: resendData.id
        });

        return new Response(
            JSON.stringify({ 
                success: true,
                message: 'Your message has been received. We will get back to you soon!'
            }),
            { 
                headers: { 'Content-Type': 'application/json' }
            }
        );
    } catch (error) {
        console.error('Contact form error:', error);
        return new Response(
            JSON.stringify({ error: 'Internal server error', details: error.message }),
            { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
}

