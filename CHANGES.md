# CHANGES Guide

A practical guide for developers to modify and extend this multipage React project. Use this as a reference when updating content, adding new pages, adjusting styles, or troubleshooting issues.

## 1) Overview
This document explains how to:
- Change text and images
- Update navigation links and routes
- Add new pages and register them with React Router v6+
- Modify styles (CSS/SCSS/Tailwind)
- Reuse components safely
- Resolve common issues quickly

## 2) Changing Text Content
Locate the relevant React component or page and edit the JSX. Most page-level content is in `src/pages/*`, while reusable UI lives in `src/components/*`.

\`\`\`jsx
// src/pages/Home.jsx
export default function Home() {
  return (
    <section>
      <h1>Welcome to Our Site</h1> {/* Edit text here */}
      <p>We build modern React apps.</p> {/* Edit text here */}
    </section>
  )
}
\`\`\`

Tips:
- Keep content changes confined to the appropriate component/page.
- If text is reused, consider extracting it into a component or constants file.

## 3) Updating Images
Add or replace images in `src/assets/` (or `public/` for static assets you want served as-is).

- Importing from `src/assets`:
\`\`\`jsx
import heroImg from "../assets/hero.jpg"

export default function Hero() {
  return <img src={heroImg || "/placeholder.svg"} alt="Product hero" />
}
\`\`\`

- Referencing from `public/`:
\`\`\`jsx
export default function Logo() {
  return <img src="/logo.png" alt="Company logo" />
}
\`\`\`

Remember to update alt text for accessibility.

## 4) Editing Navigation Links
Navigation is typically defined in a header or navbar component (e.g., `src/components/Header.jsx` or `Navbar.jsx`) and routes in `src/App.jsx` (or `src/routes/*`).

- Update nav links:
\`\`\`jsx
// src/components/Header.jsx
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li> {/* Add or rename links */}
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
\`\`\`

- Ensure the route exists:
\`\`\`jsx
// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}
\`\`\`

## 5) Adding a New Page
Create a new page component in `src/pages`, import it, and register a route. Then add a link in the navbar.

1) Create the page:
\`\`\`jsx
// src/pages/Services.jsx
export default function Services() {
  return (
    <section>
      <h1>Services</h1>
      <p>What we offer.</p>
    </section>
  )
}
\`\`\`

2) Register the route:
\`\`\`jsx
// src/App.jsx
import Services from "./pages/Services"

<Routes>
  {/* ...other routes... */}
  <Route path="/services" element={<Services />} />
</Routes>
\`\`\`

3) Add a nav link:
\`\`\`jsx
// src/components/Header.jsx
<li><Link to="/services">Services</Link></li>
\`\`\`

## 6) Modifying Styles
You can use plain CSS, CSS Modules, or Tailwind CSS depending on the setup.

- Global CSS:
\`\`\`css
/* src/index.css */
:root {
  --brand: #0ea5e9;
}
body { margin: 0; font-family: system-ui, sans-serif; }
h1 { color: var(--brand); }
\`\`\`

\`\`\`css
/* src/components/Button.module.css */
.btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
}
\`\`\`

- Tailwind CSS (if enabled):
\`\`\`jsx
export default function Card({ title, children }) {
  return (
    <div className="rounded-lg border p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="text-sm text-gray-600">{children}</div>
    </div>
  )
}
\`\`\`

## 7) Reusing Components
- Keep components small and focused; pass data via props.
- Avoid hard-coding text/images; make them configurable.
- Extract shared logic into hooks/utilities when appropriate.

\`\`\`jsx
// src/components/Section.jsx
export default function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      <div>{children}</div>
    </section>
  )
}
\`\`\`

\`\`\`jsx
// src/pages/About.jsx
import Section from "../components/Section"

export default function About() {
  return (
    <>
      <Section title="Our Story">
        We started with a mission to build delightful products.
      </Section>
      <Section title="Our Team">
        Small, senior, and focused on outcomes.
      </Section>
    </>
  )
}
\`\`\`

## 8) Common Issues & Fixes

- Route not found (404)
  - Ensure the `<Route path="...">` exists and the link path matches.
  - Verify you’re using `<BrowserRouter>` in the app shell.

- Images not loading
  - If importing from `src/assets`, confirm the relative path.
  - If serving from `public/`, reference with a leading `/`.

- Build shows blank page
  - For static hosting, ensure SPA fallback is enabled (Netlify `_redirects`, Vercel config, or a 404.html that redirects to `/index.html`).

- CSS not applying
  - Confirm your stylesheet is imported (e.g., `import "./styles/global.css"`).
  - Check for class name collisions or missing Tailwind setup (if used).

- Fast refresh not updating
  - Close and restart the dev server if HMR becomes unresponsive.
  - Check for runtime errors in the console.
