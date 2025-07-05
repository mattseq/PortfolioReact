<<<<<<< HEAD
# Portfolio React App

A modern, responsive portfolio website built with React, Framer Motion, and Lucide React icons. The app features smooth animations, parallax effects, and a modular component architecture.

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── BackgroundEffects.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── SectionHeader.jsx
├── constants/           # Static data and configuration
│   └── data.js
├── utils/              # Utility functions and animations
│   └── animations.js
├── App.jsx             # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles
```

## 🧩 Components

### Core Components

- **App.jsx**: Main application component that orchestrates all sections and manages scroll-based parallax effects
- **BackgroundEffects.jsx**: Handles animated background elements including gradient orbs and floating particles
- **Hero.jsx**: Landing section with typing effect, call-to-action buttons, and scroll indicator
- **About.jsx**: Personal information section with animated statistics
- **Skills.jsx**: Technical skills organized by categories with hover animations
- **Projects.jsx**: Portfolio projects showcase with image overlays and tech tags
- **Contact.jsx**: Contact information and social media links

### Utility Components

- **SectionHeader.jsx**: Reusable section header component with animated icons and text

## 📊 Data Management

### Constants (`src/constants/data.js`)

- **projects**: Array of project objects with metadata
- **skillCategories**: Organized skills by frontend, backend, and DevOps
- **stats**: About section statistics
- **socialLinks**: Contact section social media links
- **sectionData**: Section titles and subtitles

### Animations (`src/utils/animations.js`)

- **staggerContainer**: Staggered animation container
- **fadeInUp**: Fade in from bottom animation
- **slideInLeft/Right**: Slide in animations
- **scaleIn**: Scale in animation
- **floatingAnimation**: Continuous floating motion
- **pulseAnimation**: Pulsing scale effect
- **rotateAnimation**: Continuous rotation
- **shimmerAnimation**: Shimmer effect for backgrounds

## 🎨 Features

- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Animations**: Framer Motion powered animations
- **Parallax Effects**: Scroll-based parallax for depth
- **Interactive Elements**: Hover effects and micro-interactions
- **Modular Architecture**: Reusable components and utilities
- **Performance Optimized**: Efficient animation and rendering

## 🚀 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## 📦 Dependencies

- **React**: UI library
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Vite**: Build tool and dev server

## 🎯 Key Benefits of Modular Structure

1. **Maintainability**: Each component has a single responsibility
2. **Reusability**: Components can be easily reused across the app
3. **Testability**: Individual components can be tested in isolation
4. **Scalability**: Easy to add new sections or modify existing ones
5. **Code Organization**: Clear separation of concerns
6. **Performance**: Components can be optimized individually

## 🔧 Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and use `SectionHeader` for consistent styling
3. Add section data to `src/constants/data.js`
4. Import and add the component to `App.jsx`

### Modifying Animations

1. Add new animation variants to `src/utils/animations.js`
2. Import and use in your components
3. Customize timing and easing as needed

### Updating Content

1. Modify data in `src/constants/data.js`
2. Update images, links, and text content
3. Customize colors and styling in `src/index.css`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
=======
A portfolio using React.
>>>>>>> 88a9ed36f5fe6cb82b0d17c553e7e48ec1d0d2a6
