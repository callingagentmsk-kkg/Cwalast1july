# CWA SCIENCE CLASSES — Concept with Abhishek

Modern, mobile-first, 3D-animated coaching website for **CWA SCIENCE CLASSES**, built for Bihar Board students of Class 9th–12th (Physics, Chemistry, Maths) taught by **Abhishek Garg Sir**.

## Features
- 🎨 White 3D-animated hero background with floating science shapes (atom, flask, formulas, orbit)
- 📱 Mobile-first responsive design (bottom tab bar, drawer menu) — optimized for the 90%+ mobile visitors
- 🖼️ Hero image slider + floating info cards
- 📢 Scrolling notice marquee bar below hero
- 👨‍🏫 About Sir section with animated photo card
- 📚 Batch-wise tabs (Class 9 / 10 / 11 / 12 PCM) with chapter cards containing **Video lecture (modal player) + downloadable PDF notes**
- 📝 Weekly Test Result checker — student enters Class + Mobile Number and gets an instant demo result card (marks, rank, remark, animated progress bar)
- ⭐ Testimonials slider, feature highlights, photo gallery
- 🗺️ Google Map embed + full contact details
- 📞 Floating WhatsApp / Call buttons + footer with helpline, social icons, sitemap links
- ✨ Scroll-reveal animations, animated counters, marquee, 3D hover effects throughout

## Structure
```
index.html          Main page
css/style.css        All styles (3D animation, responsive, theme)
js/data.js            Batch/chapter/video/pdf data
js/main.js            All interactivity (slider, tabs, result form, reveal animations)
assets/img/           Images (teacher, classroom, chemistry, blackboard)
assets/pdf/           Sample chapter-wise PDF notes (Class 9-12 Physics/Chemistry/Maths)
```

## Run locally
```
python3 -m http.server 8080
```
Then open `http://localhost:8080`.

## Notes
- Weekly Test Result is a front-end demo: any valid Class + 10-digit mobile number generates a deterministic sample result. Connect to a real backend/database to show live results.
- Video lectures use YouTube embed placeholders — replace `js/data.js` video IDs with actual CWA Science Classes YouTube videos.
- Replace Google Map embed query in `index.html` with the exact coaching center address/coordinates.
