# Software Agency Website

<a href="https://software-agency-website.vercel.app/" target="_blank"><img src="https://github.com/Danielkhakbaz/Danielo-Portfolio/blob/master/public/images/projects/software-agency-website/screen-shot.png" alt="The screen-shot of the daniel's portfolio" /></a>

A professional website for showcasing services, portfolio, and expertise of a software agency. Built with [Next.js](https://nextjs.org/), this project leverages the latest web technologies to create a fast, interactive, and user-friendly experience for potential clients.

## Project Overview

This software agency website highlights key services, project case studies, and the team behind the agency's success. With a responsive and engaging design, it’s optimized for performance and built to provide users with a seamless navigation experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Development Scripts](#development-scripts)
- [Folder Structure](#folder-structure)

## Features

- **Responsive Design**: Fully optimized layout for desktop, tablet, and mobile devices.
- **Dynamic Content**: Smooth transitions and animations to enhance user experience.
- **Carousel Integration**: Showcases client testimonials and featured projects with an interactive carousel.
- **Performance Analytics**: Vercel analytics for monitoring website performance.
- **Code Quality Tools**: ESLint and Prettier ensure consistent coding standards and formatting.

## Technologies Used

- **[Next.js](https://nextjs.org/)** - React framework for building SSR and static websites.
- **[React](https://reactjs.org/)** - JavaScript library for building interactive UIs.
- **[Tailwind CSS](https://tailwindcss.com/)** - CSS framework for utility-first styling.
- **[Embla Carousel](https://www.embla-carousel.com/)** - Lightweight carousel library with custom autoplay and styling.
- **[Vercel Analytics](https://vercel.com/docs/concepts/analytics)** - Performance tracking for web apps.
- **[TypeScript](https://www.typescriptlang.org/)** - Typed JavaScript for better development and maintenance.

## Folder Structure

Here's an overview of the project structure:

```plaintext
software-agency-website/
├── public/                    # Public assets like images, icons, etc.
│
├── app/                       # Main source directory for app components and pages
│
├── components/                # Reusable UI components for sections and features
│
├── constants/                 # All the constants getting used through the app
│
├── hooks/                     # Custom hooks written for the app
│
│── layout/                    # The layout components for the pages
│
│── providers/                 # All the providers (eg. Context, ...)
│
│── styles/                    # Styles folder
│
│── theme/                     # Custom theme for the project
│
│── utils/                     # Utility functions
│
├── .eslintrc.json             # ESLint configuration for code quality
├── .prettierrc                # Prettier configuration for code formatting
├── next.config.js             # Next.js configuration for app settings
├── package.json               # Project metadata, scripts, and dependencies
└── README.md                  # Project documentation
```

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Danielkhakbaz/Software-Agency-Website
   cd danielo-portfolio

2. **Install dependencies**:
   ```tsx
   yarn

3. **Run the development server**:
   ```tsx
   yarn dev

4. **Open http://localhost:3000 in your browser to see the project**.

## Development Scripts

Here are some helpful scripts to assist in the development and maintenance of this project:

```dev```: Runs the app in development mode. <br/><br/>
```build```: Compiles the app for production. <br/><br/>
```start```: Starts the production server. <br/><br/>
```lint```: Lints and fixes files using ESLint. <br/><br/>
```fix```: Formats files using Prettier. <br/><br/>
```check-prettier```: Checks the code format without making changes.
