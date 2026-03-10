# Hanson Hotline

Hanson Hotline is a React-based archive of Hanson interviews and transcripts.

The project is built with **React, TypeScript, and Vite** and deployed globally through **Cloudflare Pages**.

Live site:  
https://hansonhotline.com

## Stack

- React
- TypeScript
- Vite
- Cloudflare Pages (hosting, CDN, SSL)
- GitHub (version control and deployment trigger)

The site is deployed as a **static build**, distributed globally at the edge through Cloudflare.

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the production version:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deployment

Deployment is automatic through **Cloudflare Pages**.

Workflow:

1. Push changes to GitHub
2. Cloudflare triggers a build
3. Vite generates the static build (`dist`)
4. Cloudflare deploys the site globally

## Project Goal

Hanson Hotline began as a long-running fan archive and is now being rebuilt as a modern, searchable transcript and interview repository.

The goal of the project is to preserve interviews, transcripts, and historical material from the early Hanson internet era in a structured and accessible format.
