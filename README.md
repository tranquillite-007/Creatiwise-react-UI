Portfolio Website - Modern Design Portfolio
===========================================

A modern, responsive portfolio website built with React showcasing design work, expertise, and professional experience. Features a clean aesthetic with smooth animations and interactive elements.

Table of Contents
-----------------

*   [Features](#features)
    
*   [Tech Stack](#tech-stack)
    
*   [File Structure](#file-structure)
    
*   [Installation](#installation)
    
*   [Development](#development)
    
*   [Deployment](#deployment)
 

Features
--------

### Key Sections

*   **Hero Section**: Bold typography with animated brand marquee
    
*   **Expertise**: Grid layout showcasing skills with bullet-point indicators
    
*   **Works**: Case study cards with hover effects
    
*   **Experience**: Timeline-style professional history
    
*   **Blog**: Article previews with tags
    
*   **Testimonials**: Interactive carousel with navigation controls
    
*   **FAQ**: Expandable question/answer component
    
*   **Footer**: Animated marquee with contact information
    

### Interactive Elements

*   Active state navigation
    
*   Auto-rotating testimonial carousel
    
*   Expandable FAQ section
    
*   Responsive design for all screen sizes
    
*   Smooth animations and transitions
    

Tech Stack
----------

### Frontend

*   **React** (v18+): Component-based architecture
    
*   **CSS Modules**: Scoped styling for components
    
*   **HTML5**: Semantic markup
    
*   **CSS3**: Modern styling with flexbox/grid
    
*   **JavaScript ES6+**: Modern syntax and features
    

### Design System

*   **Typography**: Syne (headings) and Poppins (body) from Google Fonts
    
*   **Color Scheme**: Dark theme with white accents (#010208 background)
    
*   **Icons**: SVG icons for navigation and controls
    
*   **Spacing**: Consistent 8px baseline grid
    

### Build Tools

*   **Vite** or **Create React App**: Project scaffolding
    
*   **npm**: Package management
    
*   **Git**: Version control
    

File Structure
--------------

```
portfolio/
├── public/
│   ├── index.html
│   └── (other static assets)
├── src/
│   ├── assets/
│   │   ├── fonts.css
│   │   ├── images/
│   │   │   ├── user1.jpg
│   │   │   ├── user2.png
│   │   │   ├── (...all other images)
│   │   └── images.js
│   ├── components/
│   │   ├── (all component folders with .jsx and .css)
│   ├── styles/
│   │   └── global.css
│   ├── utils/
│   │   └── constants.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── .gitignore
└── package.json
```


Installation
------------

1.  git clone [https://github.com/youruse/portfolio.gitcd portfolio](https://github.com/tranquillite-007/Creatiwise-react-UI.git)
    
2.  npm install
    
3.  npm run dev
    
4.  **Open in browser**: The app should automatically open at http://localhost:3000
    

Development
-----------

### Available Scripts

*   npm run dev: Starts development server
    
*   npm run build: Creates production build
    
*   npm run lint: Runs ESLint
    
*   npm run preview: Previews production build locally
    

### Component Architecture

Each section is built as an independent React component with:

*   Own JSX for structure
    
*   CSS Module for styling
    
*   Self-contained state management
    
*   Responsive design considerations
    

### Adding New Content

*   **Add new work items**:Edit Works.jsx and add to the worksData array
    
*   **Update testimonials**:Modify the testimonials array in Testimonial.jsx
    
*   **Change expertise items**:Update the expertiseData array in Expertise.jsx
    

Deployment
----------

### Vercel (Recommended)

1.  npm install -g vercel
    
2.  vercel
    

## Contact

If you have any questions, feel free to contact me at [sinhaaman655@gmail.com](mailto:sinhaaman655@hotmail.com).



Aman Sinha ® sinhaaman655@hotmail.com
