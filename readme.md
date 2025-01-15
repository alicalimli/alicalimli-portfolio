# Developer Portfolio Template

A minimalistic and beautifully animated developer portfolio template built with:

- **Next.js (Version 13)**
- **Tailwind CSS**
- **Framer Motion**
- **TypeScript**

![Portfolio Website Screenshot](https://firebasestorage.googleapis.com/v0/b/webdev-visuals.appspot.com/o/misc%2Fv2-portfolio.png?alt=media&token=27f89225-e3c0-4c7c-8026-0c1edb864479)

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

## Contact Form Activation

The contact form in this portfolio uses [FormSubmit](https://formsubmit.co) for handling form submissions.

Its free to use and I have been using it personally.

Follow these steps to activate the contact form:

1. Once you deploy your website, Use the contact form to send a test message.
2. Check your email inbox for an activation email from FormSubmit.
3. Click the "Activate" button in the email.

That's it! Your contact form will now work as intended.

You can send another message to test it out.

FormSubmit is free and works well for me.

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
