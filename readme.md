# Sneha Deepa Hospital Website

Welcome to the Sneha Deepa Hospital website repository. This project is a modern, responsive website for Sneha Deepa Hospital, a mission hospital by the Marthoma Society in Trivandrum, Kerala, India.

## Features

- Modern, responsive design optimized for all devices
- Fast loading with Next.js and image optimization
- SEO-friendly structure
- Comprehensive information about hospital services, doctors, and facilities
- Contact form and appointment request functionality
- Image gallery showcasing hospital facilities and events
- Bilingual support (English and Malayalam)

## Technology Stack

- **Frontend**: React.js with Next.js
- **Styling**: Tailwind CSS
- **Deployment**: AWS Amplify / Vercel (recommended options)

## Prerequisites

- Node.js 14.x or later
- npm 7.x or later

## Getting Started

Follow these steps to set up the project locally:

```bash
# Clone the repository
git clone https://github.com/your-username/sneha-deepa.git
cd sneha-deepa

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then, open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## Project Structure

```
sneha-deepa/
├── public/               # Static files
│   ├── images/           # Image assets
│   ├── favicon.ico       # Favicon
├── src/
│   ├── components/       # Reusable components
│   │   ├── layout/       # Layout components
│   │   ├── ui/           # UI components
│   │   ├── sections/     # Page sections
│   ├── pages/            # Next.js pages
│   ├── styles/           # Global styles
│   ├── utils/            # Utility functions
│   ├── data/             # Static data
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

## Development

### Customizing Content

The website content is primarily stored in the following locations:

- Static data for services, doctors, etc. can be found in `src/data/`
- Page components are in `src/pages/`
- Reusable UI components are in `src/components/`

### Adding Images

Place images in the appropriate subdirectories of the `public/images/` directory:

- `public/images/doctors/` - Doctor profile images
- `public/images/services/` - Service-related images
- `public/images/gallery/` - Gallery images
- etc.

### Styles

This project uses Tailwind CSS for styling. The main configuration file is `tailwind.config.js`, and global styles are in `src/styles/globals.css`.

## Building for Production

To build the website for production:

```bash
# Build the application
npm run build

# Start the production server
npm start
```

## Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions on deploying the website to AWS or Vercel.

## SEO and Performance

The website is built with SEO and performance in mind:

- Next.js provides server-side rendering for optimal SEO
- Image optimization with next/image
- Responsive design for all devices
- Fast loading times

## Accessibility

The website follows accessibility best practices:

- Semantic HTML
- Appropriate alt text for images
- Keyboard navigation support
- Color contrast compliance
- ARIA attributes where necessary

## Browser Support

The website is compatible with all modern browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Marthoma Society for their mission to provide healthcare in Trivandrum
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- All contributors and supporters of Sneha Deepa Hospital