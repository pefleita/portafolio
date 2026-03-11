# Pedro Fleita - Portfolio

Personal portfolio website showcasing my work as a WordPress Developer & Full Stack.

## 🌐 Live Demo

**https://pedrofleita.vercel.app/**

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + CSS Variables
- **i18n**: Spanish & English support
- **Deployment**: Vercel

## ✨ Features

- Fully responsive design
- Dark theme with custom design system
- Multi-language support (ES/EN)
- Contact form with WhatsApp integration
- Smooth animations and transitions
- Accessible (WCAG compliant)
- SEO optimized

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
├── app/                 # Next.js App Router pages
├── components/         # React components
├── context/            # React Context (i18n)
├── messages/          # Translation files (es.json, en.json)
├── public/            # Static assets (images, PDFs)
└── .env.example       # Environment variables template
```

## 🌎 Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_WHATSAPP_PHONE=your-number
```

## 📄 License

MIT
