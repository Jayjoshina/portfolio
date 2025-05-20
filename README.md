# Jay Joshina Portfolio Website

A modern, responsive portfolio website built with React and TypeScript.

## Project Overview

This portfolio website showcases Jay Joshina's academic background, technical skills, projects, experience, and contact information. It features a clean, modern design with smooth scrolling and responsive layout.

## Features

- Responsive design for all device sizes
- Modern UI with animations and transitions
- Section-based layout with smooth scrolling
- Project filtering capability
- Contact form
- Dark/light theme support

## Technologies Used

- React
- TypeScript
- Styled Components for styling
- React Scroll for smooth scrolling

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager)

### Installation

1. Make sure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/).

2. Open a command prompt or terminal with Node.js in path.

3. Navigate to the project directory:
   ```
   cd path\to\portfolio-website
   ```

4. Install the dependencies:
   ```
   npm install
   ```

5. Start the development server:
   ```
   npm start
   ```

6. Open your browser and visit:
   ```
   http://localhost:3000
   ```

### Alternative Setup (Windows)

1. Double-click the `start-portfolio.bat` file in the project directory.
2. This will install dependencies, build the project, and start a server.
3. The website will open automatically in your default browser.

## Project Structure

```
portfolio-website/
├── public/               # Public assets
│   ├── images/           # Image assets
│   ├── index.html        # HTML template
│   └── manifest.json     # Web app manifest
├── src/                  # Source files
│   ├── components/       # React components
│   │   ├── about/        # About section
│   │   ├── education/    # Education section
│   │   ├── skills/       # Skills section
│   │   ├── projects/     # Projects section
│   │   ├── experience/   # Experience section
│   │   └── contact/      # Contact section
│   ├── styles/           # Global styles
│   ├── App.tsx           # Main App component
│   └── index.tsx         # Entry point
└── package.json          # Package configuration
```

## Customization

- Update personal information in each component file
- Add your own images in the `public/images` directory
- Modify styling in the component files or in `src/styles/index.css`

## Building for Production

To create a production build, run:

```
npm run build
```

This will create a `build` folder with optimized files ready for deployment.

## Deployment

You can deploy this website to services like:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using React and TypeScript
