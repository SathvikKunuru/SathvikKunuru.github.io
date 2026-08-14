# Helloooo! 👋

This is the source code for my personal portfolio website! 

✨ **Have a look at it live right here:** [https://SathvikKunuru.github.io](https://SathvikKunuru.github.io) ✨

---

## Want to make your own? Steal it! 🛸

If you like the design and want to use it for yourself, it's super easy. Just copy the massive prompt below and paste it into your favorite AI agent (like Cursor, GitHub Copilot, or Gemini). It will do all the heavy lifting to clone the codebase and customize it for you!

### 🤖 Give this prompt to your Agent:

> Hey Agent! I want to build my own portfolio website based on an awesome template. 
> 
> Please perform the following actions sequentially:
> 
> **1. CLONE THE REPOSITORY:**
> Please clone the template repository from this exact URL:
> `https://github.com/SathvikKunuru/SathvikKunuru.github.io.git`
> 
> **2. SWAP ALL PERSONAL INFORMATION:**
> Scan the components in `next-portfolio/src/components/` (specifically `Hero.jsx`, `Projects.jsx`, `Experience.jsx`, and `Contact.jsx`) and replace all of Sathvik Kunuru's information with my own. 
> 
> Here are my details:
> - Name: [Your Name]
> - Title: [Your Job Title]
> - Tagline: [A short sentence about what you do]
> - GitHub URL: [Your GitHub Link]
> - LinkedIn URL: [Your LinkedIn Link]
> - About Me: [A short paragraph about your skills and goals]
> 
> **3. UPDATE THE PROFILE PICTURE:**
> I have placed a picture of myself in `next-portfolio/public/profile.png`. Please make sure the Hero section and favicon use this image. (Note: The template natively forces a circular crop via CSS, so just make sure the image is linked correctly!).
> 
> **4. CONFIGURE FOR GITHUB PAGES:**
> Check `next.config.mjs`. If I am deploying to a root domain (e.g. `[myusername].github.io`), ensure that `basePath` and `assetPrefix` are completely removed. If I am deploying to a subpath (e.g. `[myusername].github.io/portfolio`), ensure the `basePath` is set correctly.
> 
> **5. PUSH AND DEPLOY:**
> Finally, help me initialize a new git repository for this code, commit the changes, and push it to my own GitHub account. Walk me through activating GitHub Actions so my new portfolio goes live immediately!
