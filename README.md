# Bryan Chan - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS.

![Portfolio Website](https://## ## �📞 Contact

Bryan Chan - [cky.bryan@gmail.com](mailto:cky.bryan@gmail.com)

Project Link: [https://github.com/ckybryan/my-site](https://github.com/ckybryan/my-site)tact

Bryan Chan - [cky.bryan@gmail.com](mailto:cky.bryan@gmail.com)

Project Link: [https://github.com/ckybryan/my-site](https://github.com/ckybryan/my-site)hields.io/badge/React-18.2.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0.2-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-blue?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.4.10-green?style=flat-square&logo=vite)

## 🚀 Features

- **Modern Design**: Clean, professional, and responsive design
- **TypeScript**: Fully typed for better development experience
- **Responsive**: Optimized for all device sizes
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **SEO Optimized**: Meta tags and semantic HTML structure
- **Smooth Animations**: Beautiful animations and transitions
- **Interactive Contact Form**: Functional contact form with validation

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Linting**: ESLint
- **Code Formatting**: Prettier (ready to be configured)

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Skills.tsx      # Skills section
│   ├── Projects.tsx    # Projects showcase
│   ├── Experience.tsx  # Work experience
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── config/             # Configuration files
│   └── site.ts         # Site configuration
├── types/              # TypeScript type definitions
│   └── index.ts        # Common types
├── App.tsx             # Main App component
├── main.tsx            # App entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ckybryan/my-site.git
cd my-site
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update the following files with your personal information:

1. **Site Configuration** (`src/config/site.ts`):
   - Name, title, description
   - Social media links
   - Contact information

2. **Components**: Update content in each component file:
   - `Hero.tsx` - Main introduction
   - `About.tsx` - Personal story and values
   - `Skills.tsx` - Technical skills and proficiency
   - `Projects.tsx` - Portfolio projects
   - `Experience.tsx` - Work experience
   - `Contact.tsx` - Contact information

### Styling

- **Colors**: Modify the color palette in `tailwind.config.js`
- **Fonts**: Update font imports in `index.html` and Tailwind config
- **Animations**: Customize animations in `src/index.css`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Deploy to Netlify

1. Run `npm run build`
2. Upload the `dist` folder to Netlify

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ckybryan/my-site/issues).

## 🚀 Deployment

This site is served by **Cloudflare Workers** as static assets — there is no server runtime, so
`express`, `server.js` and the old Railway/Docker config are gone.

```bash
npm run build         # tsc && vite build  ->  dist/
npx wrangler deploy   # uploads dist/ and binds the custom domains
```

- `wrangler.jsonc` declares the assets directory, the SPA fallback
  (`not_found_handling: "single-page-application"`) and both custom domains, so a deploy is a single
  command and needs no dashboard work.
- `public/_headers` carries the cache policy: HTML is never cached, so a deploy is visible
  immediately, while the fingerprinted bundles under `/assets/*` are cached for a year.
- Deploying needs a Cloudflare API token with Workers Scripts and DNS edit permissions; Wrangler
  reads it from the `CLOUDFLARE_API_TOKEN` environment variable.
- `www.bryan.wtf` is canonical. The apex `bryan.wtf` is bound to the same Worker, and a zone-level
  redirect rule sends it to www.

## �📞 Contact

Bryan Chan - [cky.bryan@gmail.com](mailto:cky.bryan@gmail.com)

Project Link: [https://github.com/ckybryan/my-site](https://github.com/ckybryan/my-site)

---

⭐️ If you found this helpful, please give it a star!
