# Video Editor Portfolio

A modern, animated portfolio website for a professional video editor built with React, Vite, and Tailwind CSS.

## Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** React Icons
- **Language:** JavaScript (ES6+)

## Features

- Fully responsive design (mobile, tablet, desktop)
- Smooth page transitions and scroll animations
- Animated gradient backgrounds
- Glassmorphism UI elements
- Dark cinematic theme
- Scroll progress indicator
- Mobile hamburger menu
- Contact form
- Portfolio grid with hover effects

## Project Structure

```
src/
├── components/
│   ├── AnimatedBackground.jsx
│   ├── Navbar.jsx
│   └── ScrollProgress.jsx
├── pages/
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Work.jsx
│   ├── Testimonials.jsx
│   └── Contact.jsx
├── hooks/
│   └── useScrollProgress.js
├── assets/
├── App.jsx
├── main.jsx
└── index.css
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment

The built files in the `dist` folder can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## Customization

- Update personal information in the respective page components
- Replace placeholder images in the `public` folder
- Modify colors and animations in Tailwind classes and Framer Motion configurations
- Add more sections or modify existing ones in `App.jsx`

## License

This project is open source and available under the [MIT License](LICENSE).
