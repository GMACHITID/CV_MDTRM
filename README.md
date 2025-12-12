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
│       └── chat.js     # Cloudflare Worker function for secure API proxying
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Setup Instructions

### 1. Customize Your CV Content

Edit `index.html` and update the following sections with your information:

- **Name and Title**: Update the `<h1>` and `.title` in the header
- **About Section**: Modify the "About Me" section with your personal introduction
- **Work Experience**: Replace the example experience items with your own
- **Education**: Update the education section with your academic background
- **Footer**: Update copyright and social media links

### 2. Configure Gemini API Key

The project uses a Cloudflare Worker function (`functions/api/chat.js`) to securely proxy API calls. This keeps your API key server-side and never exposes it to the client.

#### For Cloudflare Pages Deployment:

1. Go to your Cloudflare Pages project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Variable name**: `GEMINI_API_KEY`
   - **Value**: Your Gemini API key
   - **Environment**: Production (and Preview if desired)
4. The Worker function will automatically use this environment variable

**Note**: Never commit your API key to the repository. The Worker function ensures the API key stays secure on the server side.

### 3. Getting a Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the generated API key
5. Add it to your Cloudflare Pages environment variables or local `config.js` file

## Deployment to Cloudflare Pages

### Method 1: Direct Upload

1. Zip all files (index.html, styles.css, script.js)
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click "Create a project"
4. Choose "Upload assets"
5. Upload your zip file
6. Configure environment variables (see above)
7. Deploy!

### Method 2: Git Integration

1. Push your code to a Git repository (GitHub, GitLab, etc.)
2. Go to Cloudflare Pages dashboard
3. Click "Create a project"
4. Connect your Git repository
5. Configure build settings:
   - **Build command**: (leave empty - no build needed)
   - **Build output directory**: `/` (root)
6. Add environment variable `GEMINI_API_KEY`
7. Deploy!

### Method 3: Wrangler CLI

1. Install Wrangler: `npm install -g wrangler`
2. Login: `wrangler login`
3. Deploy: `wrangler pages deploy .`

## Local Development

### Option 1: Using Cloudflare Pages Dev (Recommended)

1. Install Wrangler CLI: `npm install -g wrangler`
2. Login: `wrangler login`
3. Create a `.dev.vars` file in the project root:
```
GEMINI_API_KEY=your-api-key-here
```
4. Run local server: `wrangler pages dev .`
5. Open the provided local URL

### Option 2: Simple HTTP Server

1. Clone or download this repository
2. Use a local HTTP server (required for CORS):
   - Python: `python -m http.server 8000`
   - Node.js: `npx http-server`
   - VS Code: Use Live Server extension
3. Note: Chat functionality requires Cloudflare Pages deployment or local Wrangler dev server to work (due to Worker function requirement)

## Customization

### Colors

Edit the CSS variables in `styles.css`:
```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1e40af;
    /* ... other colors ... */
}
```

### Fonts

Change the font family in the `body` selector in `styles.css`.

### Print Styles

Modify the `@media print` section in `styles.css` to customize how your CV appears when printed or saved as PDF.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Security Notes

- API keys are stored as environment variables, never in the code
- The `.gitignore` file prevents accidental commits of sensitive data
- Always use HTTPS in production

## Future Enhancements

- Backend integration for contact form
- Analytics integration
- Dark mode toggle
- Multi-language support
- Additional sections (skills, projects, etc.)

## License

This project is open source and available for personal and educational use.

## Support

For issues or questions, please check the documentation or create an issue in your repository.

