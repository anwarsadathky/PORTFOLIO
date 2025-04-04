# Personal Portfolio Website

A modern, responsive portfolio website built with React and Vite, featuring smooth animations, interactive components, and a custom cursor.

## 🌟 Features

- **Modern Design**: Clean and professional layout with a dark theme
- **Interactive Components**:
  - Custom cursor with touch support
  - Smooth scroll animations
  - Glowing skill cards
  - Interactive contact form with EmailJS integration
- **Responsive Layout**: Fully responsive design that works on all devices
- **Performance Optimized**: Fast loading times and smooth animations
- **Contact Form**: Integrated with EmailJS for seamless communication
- **GitHub Pages Deployment**: Automated deployment workflow

## 🚀 Technologies Used

- React
- Vite
- Framer Motion
- EmailJS
- Tailwind CSS
- React Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/anwarsadathky/PORTFOLIO.git
cd PORTFOLIO
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials:
```env
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
```

4. Start the development server:
```bash
npm run dev
```

## 🛠️ Development

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

## 📱 Components

### Custom Cursor
- Responsive to both mouse and touch events
- Smooth animations using Framer Motion
- Custom styling with glow effects

### Loading Screen
- Animated entrance
- Smooth transition to main content
- Scroll indicator

### Skills Section
- Interactive skill cards with glow effects
- Responsive grid layout
- Animated icons

### Contact Form
- EmailJS integration
- Form validation
- Success/error notifications
- Progress bar for submission status

## 🚀 Deployment

The project is configured for automatic deployment to GitHub Pages:

1. Push changes to the main branch
2. GitHub Actions workflow automatically:
   - Builds the project
   - Deploys to GitHub Pages
3. Site is available at: https://anwarsadathky.github.io/PORTFOLIO/

## 🔧 Configuration

### Vite Config
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/PORTFOLIO/', // GitHub Pages base URL
})
```

### GitHub Actions Workflow
Located in `.github/workflows/deploy.yml`, handles:
- Node.js setup
- Dependency installation
- Build process
- GitHub Pages deployment

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

Anwar Sadath KY
- GitHub: [@anwarsadathky](https://github.com/anwarsadathky)
- LinkedIn: [Anwar Sadath KY](https://www.linkedin.com/in/anwar-sadath-ky/)
- Twitter: [@anwarsadathky](https://twitter.com/anwarsadathky)
