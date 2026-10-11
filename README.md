# 🚀 Tekno Krraft 2026 - GDG @ SOA, ITER Chapter

A cutting-edge, futuristic developer conference landing page built for **Google Developer Group (GDG) ITER Chapter**.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom Google 4-Color design tokens (`#4285F4`, `#EA4335`, `#FBBC04`, `#34A853`)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Micro-Interactions**: [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti)
- **Deployment**: Ready for Netlify / Vercel

---

## 📂 Project Structure

```text
tekno-krraft-2026/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Floating glassmorphic navigation bar with mobile drawer
│   │   ├── Hero.jsx                 # Live countdown timer, Google brand glows, stats bar
│   │   ├── AboutFest.jsx            # The 4 core pillars: Code, Cloud, AI, Innovation
│   │   ├── SchedulePlanner.jsx      # 3-Day schedule, search, category filters, Google Calendar links
│   │   ├── Tracks.jsx               # Interactive track & workshop deep dive
│   │   ├── HackathonSpotlight.jsx   # 24-Hour Hack Sprint, ₹1.5L+ prizes breakdown
│   │   ├── SpeakersGrid.jsx         # Keynotes & mentors showcase
│   │   ├── SponsorsSection.jsx      # Google Cloud Title card, partner tiers, sponsor CTA
│   │   ├── FaqSection.jsx           # Accordion FAQ with live search & categories
│   │   ├── VenueGuide.jsx           # ITER SOA campus details & transit guide
│   │   ├── TicketGeneratorModal.jsx # Live customizable holographic VIP pass generator
│   │   ├── RegisterModal.jsx        # Free registration modal with confetti confirmation
│   │   ├── SponsorModal.jsx         # Sponsor deck inquiry modal
│   │   └── Footer.jsx               # GDG disclaimer, links, Netlify badge, back to top
│   ├── data/
│   │   ├── scheduleData.js          # All schedule items across Day 1, 2, 3
│   │   ├── tracksData.js            # Tracks, workshops & speaker profiles
│   │   ├── sponsorsData.js          # Tiered sponsors list
│   │   └── faqData.js               # Event FAQs with categories
│   ├── App.jsx                      # App root tying all components together
│   ├── index.css                    # Tailwind directives, custom glassmorphism, glow utilities
│   └── main.jsx                     # Vite React entrypoint
├── index.html                       # HTML root with JetBrains Mono, Inter & Space Grotesk fonts
├── tailwind.config.js               # Custom GDG colors, keyframes, box shadows
└── vite.config.js                   # Vite config running on port 3000
```

---

## 🏃 How to Run Locally

```bash
# 1. Navigate to project directory
cd tekno-krraft-2026

# 2. Start Vite Development Server
npm run dev
```

Open your browser at `http://localhost:3000` (or the port Vite prints in terminal).

### Production Build
```bash
npm run build
npm run preview
```

---

## ✍️ How to Write & Extend Code

1. **Add or Edit Sessions**: Modify `src/data/scheduleData.js`. Add a new item to `scheduleEvents`.
2. **Add or Edit FAQs**: Modify `src/data/faqData.js`.
3. **Add or Edit Sponsors**: Modify `src/data/sponsorsData.js`.
4. **Tweak Styles / Colors**: Change classes in `src/index.css` or `tailwind.config.js`.
