// Cloudflare Worker function to proxy Gemini API calls
// This keeps the API key secure on the server side

export async function onRequestPost(context) {
    const { request, env } = context;
    
    // Get API key from environment variable
    const apiKey = env.GEMINI_API_KEY;
    
    if (!apiKey) {
        return new Response(
            JSON.stringify({ error: 'API key not configured' }),
            { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }

    try {
        // Get the user message from request body
        const body = await request.json();
        const userMessage = body.message;

        if (!userMessage) {
            return new Response(
                JSON.stringify({ error: 'Message is required' }),
                { 
                    status: 400,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        // Call Gemini API
        const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${apiKey}`;
        
        const response = await fetch(geminiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: userMessage
                    }]
                }]
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            return new Response(
                JSON.stringify({ error: `Gemini API error: ${response.status}`, details: errorText }),
                { 
                    status: response.status,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }

        const data = await response.json();
        
        // Extract the response text
        if (data.candidates && data.candidates[0] && data.candidates[0].content) {
            const botResponse = data.candidates[0].content.parts[0].text;
            return new Response(
                JSON.stringify({ response: botResponse }),
                { 
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        } else {
            return new Response(
                JSON.stringify({ error: 'Invalid response format from Gemini API' }),
                { 
                    status: 500,
                    headers: { 'Content-Type': 'application/json' }
                }
            );
        }
    } catch (error) {
        return new Response(
            JSON.stringify({ error: 'Internal server error', details: error.message }),
            { 
                status: 500,
                headers: { 'Content-Type': 'application/json' }
            }
        );
    }
}

