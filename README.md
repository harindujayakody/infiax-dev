# infiax-dev

A production-ready **Next.js** application configured for self-hosted deployment on Coolify and Docker.

## Tech Stack
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Output:** Standalone mode for ultra-fast, lightweight Docker builds
- **Hosting:** VPS with Coolify & Traefik Reverse Proxy

## 🚀 One-Click Deploy on Coolify
1. Go to your Coolify dashboard: [https://panel.infiax.dev](https://panel.infiax.dev)
2. Click **+ Projects** &rarr; select or create an environment.
3. Click **+ New Resource** &rarr; **Public Repository** (or **GitHub**).
4. Paste repository URL: `https://github.com/harindujayakody/infiax-dev`
5. Branch: `main`
6. Enter Domain: `https://app.infiax.dev` (or `https://infiax.dev`)
7. Click **Deploy**.

## Local Development
```bash
npm install
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
