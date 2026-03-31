=========================================
HOW TO EDIT YOUR PORTFOLIO WEBSITE
=========================================

This website is built using React, Vite, and Tailwind CSS.
Don't worry if you aren't a frontend expert! Editing the content is very straightforward.

-----------------------------------------
1. WHERE TO FIND THE FILES
-----------------------------------------
All the visible content on your website lives inside the `src/components/` folder.
Each section of the website has its own file.

-----------------------------------------
2. HOW TO EDIT EACH SECTION
-----------------------------------------
To change text, simply open the corresponding file, find the text you want to change, and type your new text.

- NAVBAR & LOGO (src/components/Navbar.tsx)
  Here you can change the "PrasannParab." logo text or the navigation links.

- HERO SECTION (src/components/Hero.tsx)
  This is the top part of the website. Open this file to update your headline, summary paragraph, and the links to your GitHub/LinkedIn.

- METRICS (src/components/Metrics.tsx)
  Open this file to update the 4 numbers shown below the hero section (e.g., "80%", "5m"). Look for the `const metrics = [...]` list at the top of the file.

- SKILLS (src/components/Skills.tsx)
  Look for the `const skills = [...]` list at the top to add or remove technical skills.

- PROJECTS (src/components/Projects.tsx)
  Look for the `const projects = [...]` list at the top. You can easily add a new project by copying an existing block, or edit the text, metrics, and GitHub links of current projects.

- EXPERIENCE & EDUCATION (src/components/Experience.tsx)
  Open this file to add new jobs, update your current role, or add new certifications. Just look for the text you want to change.

- CONTACT SECTION (src/components/Contact.tsx)
  Open this file to update your email address or social media links shown at the bottom of the page.

-----------------------------------------
3. HOW TO UPDATE YOUR RESUME PDF
-----------------------------------------
When you get a new version of your resume:
1. Name the file exactly: Prasann_Parab_Resume.pdf
2. Place it inside the `public/` folder of this project (replace the old one).
(If you change the file name, you will also need to update the download links in Navbar.tsx and Hero.tsx).

-----------------------------------------
4. HOW TO RUN AND DEPLOY
-----------------------------------------
- To test the website locally on your computer:
  Open your terminal and run: npm run dev

- To build the website for production (before uploading to AWS/Vercel/Netlify):
  Open your terminal and run: npm run build
  (This will create a `dist/` folder containing your ready-to-deploy static website files).
