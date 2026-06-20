# Jesutoba Lopez — Portfolio

> Machine Learning Engineer · Data Engineer · Software Engineer · Platform / SRE

Built with **Next.js 14 + TypeScript + Tailwind CSS**. Deployable to Vercel in ~2 minutes.

---

## Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + CSS variables
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (recommended) or GitHub Pages

---

## Quickstart

```bash
# 1. Clone
git clone https://github.com/Dav-lopez/-jesutoba-portfolio/jesutoba-portfolio.git
cd jesutoba-portfolio

# 2. Install
npm install

# 3. Run locally
npm run dev
# → Open http://localhost:3000
```

---

## Project Structure

```
jesutoba-portfolio/
├── public/
│   ├── images/
│   │   └── profile.jpg          ← Your photo (already included)
│   └── resume.pdf               ← Add your resume PDF here
├── src/
│   ├── app/
│   │   ├── layout.tsx           ← Root layout + SEO metadata
│   │   ├── page.tsx             ← Main page (assembles all sections)
│   │   ├── error.tsx            ← Error boundary
│   │   └── loading.tsx          ← Loading state
│   ├── components/
│   │   ├── Navbar.tsx           ← Sticky nav with mobile support
│   │   ├── Hero.tsx             ← Hero section
│   │   ├── Metrics.tsx          ← Stats strip (GPA, accuracy, etc.)
│   │   ├── About.tsx            ← About + photo
│   │   ├── Skills.tsx           ← Technology stack grid
│   │   ├── Experience.tsx       ← Career timeline
│   │   ├── Projects.tsx         ← Featured projects grid
│   │   ├── Github.tsx           ← Live GitHub stats + contrib heatmap
│   │   ├── Contact.tsx          ← Contact cards + availability banner
│   │   └── Footer.tsx           ← Footer with links
│   ├── data/
│   │   └── index.ts             ← All content: projects, experience, skills
│   ├── types/
│   │   └── index.ts             ← TypeScript interfaces
│   └── styles/
│       └── globals.css          ← Global styles + CSS variables
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── vercel.json
└── package.json
```

---

## Customization

### Update your content

All text content lives in **`src/data/index.ts`**:

- `projects` — add/edit featured projects
- `experiences` — your career history
- `skills` — grouped technology skills
- `metrics` — the stats strip numbers

### Update your email

In `src/components/Contact.tsx`, update:
```ts
value: "jesutobalopez@gmail.com",
href: "mailto:jesutobalopez@gmail.com",
```

### Add your resume

Drop your resume PDF at:
```
public/resume.pdf
```

The "Download Resume" button will automatically serve it.

### Update your photo

Your photo is already at `public/images/profile.jpg`.  
To update: replace the file with the same name.

---

## Deploy to Vercel (Recommended — Free)

### Option A: Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Done in ~90 seconds.

### Option B: Vercel Dashboard

1. Go to [vercel.com](https://vercel.com) → **New Project**
2. Import your GitHub repo (`Dav-lopez/jesutoba-portfolio`)
3. Framework: **Next.js** (auto-detected)
4. Click **Deploy**

### Custom Domain

1. Buy `jesutobalopez.com` (Namecheap / Google Domains / Cloudflare)
2. In Vercel dashboard → Settings → Domains → Add `jesutobalopez.com`
3. Follow DNS instructions (takes ~10 min to propagate)

---

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/Dav-lopez/-jesutoba-portfolio/jesutoba-portfolio.git
git push -u origin main
```

After pushing, Vercel auto-deploys on every commit to `main`.

---

## Build for Production

```bash
npm run build
npm run start
```

---

## Sections

| Section | Description |
|---------|-------------|
| Hero | Headline, roles, CTA buttons |
| Metrics | 4.0 GPA, 95% ML accuracy, 75% downtime reduction, etc. |
| About | Photo + bio |
| Skills | 6 technology groups |
| Experience | Timeline: Guardian Life → APSU → NIBSS |
| Projects | 6 featured project cards |
| GitHub | Live stats from GitHub API + contribution heatmap |
| Contact | Email, LinkedIn, GitHub, Resume download + availability banner |
| Footer | Links |

---

## License

Personal portfolio — all rights reserved by Jesutoba Lopez.
