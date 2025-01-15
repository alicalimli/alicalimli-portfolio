# Developer Portfolio Template

A minimalistic and beautifully animated developer portfolio template built with:

- **Next.js (Version 13)**
- **Tailwind CSS**
- **Framer Motion**
- **TypeScript**

https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fv2-portfolio-preview.mp4?alt=media&token=1cd02826-1b31-4ae1-9658-7ce9e2d4d2bd

---

## Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd <repository-folder>
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

---

## Customization

### Modify Content

All website content, including meta tags, titles, descriptions, and project details, can be edited in the `data.ts` file located in the root directory.

The main page of the portfolio is located in `pages/index.tsx`, and all the sections of the website are imported from the `sections/` folder.

### Project Images

- I recommend to use **square-sized images** for project thumbnails as it fits the square aspect ratio.
- place images in the `public` folder for easy access or you can upload your images in a cloud storage.

### Theming

- Update the `tailwind.config.js` file to modify colors and other theme-related properties.

### Favicon and Profile Image

- Replace the default favicon and profile image located in the `public` folder with your own files.

### Deploy

- Use platforms like **Vercel**, **Netlify**, or **GitHub Pages** for hosting.
- For Vercel:
  1. Link your GitHub repository.
  2. Deploy directly from the main branch.

---

## Recommended Tools

- **Image Optimization**: You can use [CloudConvert](https://cloudconvert.com/png-to-webp) to convert from png to webp.

---
