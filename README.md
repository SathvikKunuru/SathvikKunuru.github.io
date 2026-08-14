# Helloooo! 👋

This is the source code for my personal portfolio website! 

✨ **Have a look at it live right here:** <a href="https://SathvikKunuru.github.io" target="_blank">https://SathvikKunuru.github.io</a> ✨

---

## Want to make your own? Steal it! 🛸

If you like the design and want to use it for yourself, it's super easy:
1. **Fork this repository** (Click the "Fork" button in the top right of GitHub).
2. Name your new repository `[yourgithubusername].github.io`.
3. Copy the massive prompt below and paste it into your favorite AI agent. It will clone your new repo and customize it for you!

### 🤖 Give this prompt to your Agent:

> Hey [Agent Name]! I want to build my own portfolio website based on an awesome template. 
> 
> Please perform the following actions sequentially:
> 
> **1. CLONE THE REPOSITORY:**
> I have already forked the template repository to my account. Please clone my new repository locally from:
> `https://github.com/[myusername]/[myusername].github.io.git`
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
> **3. UPDATE THE NEURAL NET & SKILLS:**
> Open `next-portfolio/keywords.md` and replace the existing skills with my own, keeping the Markdown list format under the category headers. 
> After updating the file, run this command in the terminal from the `next-portfolio` directory:
> `npm run sync-keywords`
> This will automatically generate the 3D Neural Net nodes and connections for my skills!
> 
> **4. UPDATE THE PROJECTS:**
> Open `next-portfolio/src/components/Projects.jsx`. Replace the dummy objects in the `projectsData` array with my actual projects. Make sure the `tech` arrays in those objects exactly match some of the skills I put in `keywords.md` so that the Neural Net can link them properly.
> 
> **5. UPDATE THE PROFILE PICTURE:**
> I have placed a picture of myself in `next-portfolio/public/profile.png`. Please make sure the Hero section and favicon use this image. (Note: The template natively forces a circular crop via CSS, so just make sure the image is linked correctly!).
> 
> **6. CONFIGURE FOR GITHUB PAGES:**
> Check `next.config.mjs`. If I am deploying to a root domain (e.g. `[myusername].github.io`), ensure that `basePath` and `assetPrefix` are completely removed. If I am deploying to a subpath (e.g. `[myusername].github.io/portfolio`), ensure the `basePath` is set correctly.
> 
> **7. COMMIT, PUSH AND DEPLOY:**
> Finally, help me commit the changes and push them to my repository. Walk me through activating GitHub Actions so my new portfolio goes live on GitHub Pages!
