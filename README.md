# Abhinav Ratnala — Salesforce Developer Portfolio

A responsive personal portfolio based on React, Vite, Tailwind CSS and Framer Motion. Content is based on the resume supplied for Abhinav Ratnala. Client engagement highlights are presented as work experience highlights, not as personal side projects.

## Run locally

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Open the integrated terminal and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

## Update content

- `src/data/portfolioData.js` — name, contact details, skills, experience, client engagements, certifications and education.
- `public/abhinav-profile.jpeg` — profile photograph.
- `public/Abhinav_Ratnala_Resume.pdf` — downloadable resume.

## Deployment

The project can be deployed to Vercel by importing its Git repository and using the default Vite settings (`npm run build`, output directory `dist`).
