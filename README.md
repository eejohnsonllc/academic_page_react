# Evan Johnson Academic Page - React Version

This is a React Vite application that recreates the academic page of Dr. Evan Johnson, styled to match the ArcLight Analytics design system.

## Features

- **Modern React Architecture**: Built with React 18 and Vite for optimal performance
- **Responsive Design**: Mobile-first approach with Bootstrap and Bulma CSS frameworks
- **ArcLight Styling**: Matches the exact styling of the ArcLight Analytics application
- **Dynamic Content**: CSV data integration for teaching courses
- **Interactive Navigation**: Tab-based navigation system
- **Font Awesome Icons**: Professional iconography throughout

## Sections

1. **Home**: Personal introduction and research overview
2. **Publications**: Working papers, peer-reviewed publications, and policy reports
3. **Data Visualizations**: Interactive Tableau visualizations
4. **Teaching**: Dynamic course listings loaded from CSV
5. **Consulting**: Information about ArcLight Analytics

## Technology Stack

- React 18
- Vite
- Bootstrap 5
- Bulma CSS
- Font Awesome
- AOS (Animate On Scroll)
- Papa Parse (CSV parsing)
- Typewriter Effect

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the provided local URL (typically `http://localhost:5173`)

## Build for Production

```bash
npm run build
```

## Styling

The application uses a custom CSS system that combines:
- Futura font family for modern typography
- Teal color scheme (#2C7F7F primary, #245F5F hover)
- Gradient backgrounds
- Hover animations and transitions
- Mobile-responsive design

## Assets

- Images are stored in `/public/pics/`
- CSV data for courses is in `/public/syllabi.csv`
- All external links open in new tabs for better UX# academic_page_react
