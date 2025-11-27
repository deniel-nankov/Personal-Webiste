# Personal Website

A modern, responsive personal portfolio website built with React, Vite, and Tailwind CSS. This website showcases projects, skills, and professional information with a beautiful, animated interface.

## 🚀 Features

- **Modern React Architecture**: Built with React 19 and React Router for smooth navigation
- **Beautiful UI**: Styled with Tailwind CSS 4 and enhanced with Framer Motion animations
- **Responsive Design**: Fully responsive layout that works on all devices
- **Fast Performance**: Powered by Vite for lightning-fast development and optimized builds
- **Markdown Support**: Integrated React Markdown with syntax highlighting for blog posts and project descriptions
- **Icon Library**: Lucide React icons for consistent, beautiful iconography

## 📋 Prerequisites

Before running this website, make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/deniel-nankov/Personal-Webiste.git
   cd Personal-Webiste
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🏃 Running the Website

### Development Mode

To run the website in development mode with hot module replacement (HMR):

```bash
npm run dev
```

The website will be available at `http://localhost:5173` (or another port if 5173 is in use). The terminal will display the exact URL.

### Production Build

To create an optimized production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
personal_website/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, fonts, and other assets
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   └── index.css       # Global styles and Tailwind configuration
├── index.html          # HTML template
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
└── tailwind.config.js  # Tailwind CSS configuration
```

## 🧰 Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **React Markdown** - Markdown rendering
- **Lucide React** - Icon library

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## 🔧 Configuration

The project uses:
- **ESLint** for code linting
- **PostCSS** with Autoprefixer for CSS processing
- **Vite** for fast builds and HMR

## 📝 License

This project is private and for personal use.

## 👤 Author

Deniel Nankov

---

Built with ❤️ using React and Vite
