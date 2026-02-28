## Sandesh N. Shinde – Data Science Portfolio

A clean, modern, and fully responsive personal portfolio website for **Sandesh N. Shinde**, a final year IT engineering student and aspiring entry‑level Data Scientist.

The site is built with semantic HTML5, modern CSS (Flexbox/Grid), and a small amount of vanilla JavaScript. It is optimized for GitHub Pages deployment.

---

### Features

- **Modern, minimal design** with a dark‑blue + white professional palette  
- **Mobile‑first responsive layout** using CSS Grid and Flexbox  
- **Sticky navigation bar** with smooth scrolling and active section highlighting  
- **Hero section** with profile image and quick contact details  
- **Objective, Education, Internship, Projects, Skills, Activities, and Contact sections**  
- **Project cards** with hover effects and clear bullet‑point highlights  
- **Scroll reveal animations** using the Intersection Observer API  
- **Accessible and SEO‑friendly**: semantic landmarks, alt text, proper contrast, and meta tags  
- **Lightweight and fast‑loading**: no frameworks or heavy dependencies  

---

### File Structure

Place the files in the root of the repository:

```text
.
├── index.html
├── style.css
├── script.js
└── images
    ├── profile.jpg
    ├── project1.png
    └── project2.png
```

> **Important:**  
> - Use exactly these image paths so that the site works on GitHub Pages.  
> - You can export or crop your resume photo to `images/profile.jpg`.  
> - You can use any preview images or simple placeholders for `project1.png` and `project2.png`.

---

### Local Development

1. Clone or download the repository to your machine.
2. Ensure the images are placed in the `images` folder as shown above.
3. Open `index.html` directly in a browser, or use a simple local server (for example, with VS Code Live Server).

---

### Deploying to GitHub Pages

1. Create a new public repository on GitHub (for example, `my-portfolio`).
2. Commit `index.html`, `style.css`, `script.js`, and the `images` folder.
3. Push to the `main` (or `master`) branch.
4. In the GitHub repository:
   - Go to **Settings → Pages**.
   - Under **Source**, select `Deploy from a branch`.
   - Choose the `main` branch and the `/root` folder, then click **Save**.
5. Wait a few minutes; your portfolio will be available at:

   ```text
   https://<your-github-username>.github.io/<repository-name>/
   ```

---

### Customization Tips

- **Update content**: All personal information is in `index.html`. You can adjust sections or add new ones (for example, Certifications or Blog).
- **Change colors**: Edit the CSS variables at the top of `style.css` (for example, `--color-primary` or `--color-bg`).
- **Replace images**: Keep the same filenames but swap in higher‑quality or better‑cropped images for a more professional look.
- **Add links**: You can add GitHub, LinkedIn, or resume download buttons in the hero or contact section using regular `<a>` tags.

---

### Accessibility

The site uses:

- Semantic elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- Descriptive `alt` attributes for images
- High‑contrast colors suitable for dark mode
- Keyboard‑focus outlines (`:focus-visible`)
- Reduced‑motion support via the `prefers-reduced-motion` media query

---

### License

You are free to use and modify this portfolio for your own personal and professional use.

# My-Portfolio
this my portfolio repository
