# CineMatch | Find Your Perfect Movie & TV Show

CineMatch is a premium, fully responsive interactive landing page designed to solve "endless scrolling syndrome" on streaming platforms. It serves as a curated catalog and a smart recommendation engine that matches titles to users' mood, format choice, and time availability.

This project was built as **Task 01: Responsive Landing Page** for the web development internship.

---

## ✨ Features
1. **Interactive Mood Matcher Engine**: A client-side recommendation wizard that filters movies and TV shows instantly based on media type (Movie / TV Series) and mood (Mind-bending, Dark, Romantic, Suspenseful).
2. **Dynamic Multi-Attribute Filtering Grid**: Explore curated films and TV series by content format or specific genres (Mystery, Thriller, Sci-Fi, Romance, Horror, Crime) with zero page reloads.
3. **Glassmorphism & Neon Visual Styling**: Sleek, modern user interface utilizing smooth CSS gradients, glass cards, box-shadow glows, and fluid responsive design principles.
4. **Fluid Micro-Animations**: Features custom slide-ins, scale on hover for film posters, fade-in animations on load, and an interactive hamburger menu.
5. **Interactive Media Lightbox**: Click on any movie card poster to view it in full screen via a responsive modal.
6. **Title Request Form**: Seamless suggestions form with complete HTML5 client-side validations and animated toast feedback for requesting new titles.
7. **Intersection Observer Navigation Tracker**: The navigation header updates automatically to highlight the active section as you scroll down the page.

---

## 🛠️ Built With
- **Frontend Core**: Semantic HTML5, Vanilla CSS3 (Custom Variables, Grid, Flexbox, Animations)
- **Programming Logic**: Vanilla JavaScript (ES6+, Intersection Observer API)
- **Typography & Icons**: Google Fonts (Inter, Space Grotesk)
- **Assets**: Curated custom movie poster graphics inside `images/` directory (with built-in SVG data-URI fallbacks for missing posters).

---

## 📂 Project Structure
```text
├── index.html       # Primary semantic structure, forms, and layout grid
├── style.css        # Core design tokens, layout variables, typography, and responsive media queries
├── script.js        # Navbar scroll hooks, menu drawers, intersection observer, grid filtering, and recommendations
└── images/          # Assets and movie poster graphics
```

---

## 🚀 Getting Started
To view the project locally:
1. Clone this repository:
   ```bash
   git clone https://github.com/jeyapradeepgms/Task-01.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Task-01
   ```
3. Open `index.html` in any web browser.

---

## 📱 Responsiveness
This landing page is built from the ground up to support all screen widths:
- **Desktop (1024px and up)**: Expanded floating grid layout, double-column matcher, horizontal navigation menu.
- **Tablet (768px - 1023px)**: Two-column grid, responsive container alignment.
- **Mobile (320px - 767px)**: Stacked single-column card layouts, full-screen overlay hamburger navigation menu, touch-optimized interactive controls.
