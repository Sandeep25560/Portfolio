# Sandeep Enamandala · Portfolio

Personal portfolio for a **Full Stack Software Engineer** with **4+ years of experience** building applications with ASP.NET Core, React, TypeScript, SQL Server, AWS, and Azure.

[Portfolio website](https://portfolio-sandeeps-projects-1fc0f8c5.vercel.app/) · [LinkedIn](https://www.linkedin.com/in/enamandala/) · [Résumé](public/Sandeep_Enamandala_Resume.pdf) · [Contact](mailto:sandeep.enamandala@gmail.com)

## What's inside

- **Home:** professional introduction, production metrics, career overview, and résumé link.
- **About:** engineering approach, technical skills, education, and cloud certifications.
- **Experience:** roles at Cognizant and ValueLabs, including responsibilities and measurable outcomes.
- **Projects:** Cloud-Native E-Commerce, Real-Time Chat, SmartSpend, and Planventory.
- **Contact:** email and phone links, plus an EmailJS-powered message form.
- Responsive layouts, light/dark themes, animated sections, smooth navigation, and a profile card.

## Portfolio stack

This repository contains the **frontend portfolio website**, not the backend services or project implementations described in its content.

| Purpose | Technology |
| --- | --- |
| UI | React 19, TypeScript |
| Styling | Tailwind CSS 3, PostCSS |
| Animation | Framer Motion, React Simple Typewriter |
| Navigation & icons | React Scroll, React Icons |
| Contact form | EmailJS Browser SDK |
| Build tooling | Create React App / react-scripts 5 |
| Tests | Jest, React Testing Library |

## Featured work

| Project | Engineering focus |
| --- | --- |
| Cloud-Native E-Commerce Platform | ASP.NET Core and React microservices, RabbitMQ, Redis, Docker, AWS EKS, and CI/CD |
| Real-Time Chat Application | SignalR, WebSockets, Redis backplane, JWT authentication, and Azure |
| SmartSpend | ML-assisted financial runway forecasting, transaction dashboards, and early risk alerts |
| Planventory | Relational inventory models, weekly ordering, secure APIs, and SQL optimization |

Project descriptions appear in [src/pages/Projects.tsx](src/pages/Projects.tsx). This repository does not include their source code.

## Run locally

Install Node.js and npm, then clone and start the application:

```bash
git clone https://github.com/Sandeep25560/Portfolio.git
cd Portfolio
npm ci
npm start
```

Open [localhost:3000](http://localhost:3000). The development server reloads when source files change.

## Checks and production build

```bash
# Run tests once
npm test -- --watchAll=false --runInBand

# Create an optimized production build
npm run build
```

Production output is written to `build/`. For a static hosting setup, use `npm run build` as the build command and `build` as the output directory.

## Where to edit

| Content | File |
| --- | --- |
| Introduction, highlights, career summary | [src/pages/Home.tsx](src/pages/Home.tsx) |
| Skills, education, certifications | [src/pages/About.tsx](src/pages/About.tsx) |
| Professional experience | [src/pages/Experience.tsx](src/pages/Experience.tsx) |
| Project descriptions | [src/pages/Projects.tsx](src/pages/Projects.tsx) |
| Contact details and EmailJS configuration | [src/pages/Contact.tsx](src/pages/Contact.tsx) |
| Navigation, profile card, résumé link | [src/components/Navbar.tsx](src/components/Navbar.tsx) |
| Theme behavior | [src/hooks/useTheme.ts](src/hooks/useTheme.ts) |
| Shared styles | [src/index.css](src/index.css) |
| Browser title and description | [public/index.html](public/index.html) |
| App metadata | [public/manifest.json](public/manifest.json) |
| Downloadable résumé | [public/Sandeep_Enamandala_Resume.pdf](public/Sandeep_Enamandala_Resume.pdf) |
| Content and link regression test | [src/App.test.tsx](src/App.test.tsx) |

Keep repeated details in Home, About, Experience, Contact, and the profile card consistent when updating the résumé.

### Contact form configuration

The current form uses EmailJS service, template, and public-key values configured in `src/pages/Contact.tsx`. If adapting this repository, replace them with your own EmailJS configuration and ensure the template matches the form fields: `name`, `email`, and `message`. Configure the recipient in EmailJS; changing the visible email link alone does not change the form's recipient. Never place private credentials in client-side code.

## Contact

**Sandeep Enamandala**  
[ sandeep.enamandala@gmail.com ](mailto:sandeep.enamandala@gmail.com) · [LinkedIn](https://www.linkedin.com/in/enamandala/) · [GitHub](https://github.com/Sandeep25560)
