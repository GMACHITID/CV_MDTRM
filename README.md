# CV Website with Gemini Chat Integration

A modern, responsive CV website built with vanilla HTML, CSS, and JavaScript, featuring an integrated chat interface powered by Google's Gemini API and optimized for Cloudflare Pages hosting.

## Features

- **Semantic HTML5 Structure**: Uses proper semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`) for better accessibility and SEO
- **Responsive Design**: CSS Grid and Flexbox layouts that work seamlessly on mobile, tablet, and desktop
- **Print-Optimized**: Print media queries allow visitors to save a formatted PDF directly from their browser
- **Smooth Scrolling Navigation**: JavaScript-powered smooth scrolling with active section highlighting
- **Scroll Animations**: Sections fade in as you scroll down the page
- **Contact Form**: Client-side validated contact form (backend integration ready for future implementation)
- **Gemini AI Chat**: Integrated chat widget powered by Google's Gemini API for visitor support

## File Structure

```
Midterm/
├── index.html          # Main HTML structure
├── styles.css          # All styling including print media queries
├── script.js           # JavaScript for interactions and API integration
├── functions/
│   └── api/
│       ├── chat.js     # Cloudflare Worker function for Gemini API proxying
│       └── contact.js # Cloudflare Worker function for contact form submissions
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Environment Variables

The following environment variables need to be configured in Cloudflare Pages:

### Required Variables

1. **GEMINI_API_KEY**
   - Your Google Gemini API key for chat functionality
   - Get it from [Google AI Studio](https://makersuite.google.com/app/apikey)

2. **RECIPIENT_EMAIL**
   - The email address where contact form submissions should be sent
   - This is kept private and never exposed to the client
   - Example: `your-email@example.


## Contact Form

The contact form sends submissions to the `/api/contact` endpoint, which:
- Validates the form data
- Uses the `RECIPIENT_EMAIL` environment variable (kept private)
- Sends emails via Resend API using `RESEND_API_KEY`

**Email Sending**: The form is fully integrated with Resend and will send emails to your recipient address. The sender email is currently set to `onboarding@resend.dev` (Resend's default). To use your own domain:

1. Verify your domain in Resend Dashboard
2. Update the `from` field in `functions/api/contact.js` to use your verified domain (e.g., `noreply@yourdomain.com`)

## Support

For issues or questions, please check the documentation or create an issue in your repository.

