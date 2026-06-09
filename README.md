# 🌽 Revelyst Cornhole Classic — Website

This is the official website for the Revelyst Hyde Park Facility Cornhole Classic.

---

## 📁 Files

- `index.html` — Main website page
- `style.css` — Styles and design
- `script.js` — Interactive features
- `README.md` — This guide

---

## 🚀 Step-by-Step: Publish to GitHub Pages (Free)

### Step 1 — Create a GitHub Account
If you don't have one, go to **https://github.com** and sign up for a free account.

### Step 2 — Create a New Repository
1. After logging in, click the **"+"** button in the top-right corner
2. Select **"New repository"**
3. Name it exactly: `revelyst-cornhole` (or whatever you like)
4. Make sure it is set to **Public**
5. Leave everything else as default and click **"Create repository"**

### Step 3 — Upload Your Files
1. On your new repository page, click **"uploading an existing file"** (or drag & drop)
2. Upload all four files: `index.html`, `style.css`, `script.js`, and `README.md`
3. Scroll down and click **"Commit changes"**

### Step 4 — Enable GitHub Pages
1. In your repository, click the **"Settings"** tab (top menu)
2. In the left sidebar, scroll down and click **"Pages"**
3. Under **"Source"**, select **"Deploy from a branch"**
4. Under **"Branch"**, choose **"main"** and folder **"/ (root)"**
5. Click **Save**

### Step 5 — Get Your Live URL
- GitHub will show you a green banner with your site URL in about 1-2 minutes
- Your URL will be: `https://YOUR-USERNAME.github.io/revelyst-cornhole/`
- **Share this link with all Hyde Park employees!** 🎉

---

## 🎯 Embedding the Bracket (PrintYourBrackets.com)

1. Go to **https://www.printyourbrackets.com**
2. Click **"Create Bracket"** and choose **Double Elimination**
3. Enter the number of teams and add team names
4. After creating the bracket, look for a **"Share"** or **"Embed"** option
5. Copy the **iframe embed code** they provide
6. Open `index.html` in a text editor
7. Find the comment that says `PASTE YOUR IFRAME EMBED CODE HERE`
8. Replace the `<div class="bracket-placeholder">...</div>` block with your iframe code
9. Re-upload `index.html` to GitHub (just drag the new file onto the repository page and commit)

---

## 📝 Setting Up Real Team Registration

The registration form is currently a demo. To collect real signups, here are two easy free options:

### Option A: Google Forms (Easiest)
1. Go to **https://forms.google.com** and create a form with the same fields
2. Click **"Send"** → **Embed** tab → copy the iframe code
3. In `index.html`, replace the `<form class="register-form">` section with your Google Form iframe

### Option B: Netlify Forms (Free, keeps same design)
1. Add `netlify` attribute to your form tag: `<form class="register-form" netlify>`
2. Deploy the site to **https://netlify.com** (also free) instead of GitHub Pages
3. Netlify will automatically email you registrations

---

## ✏️ Customizing the Website

- **Add a date/time**: Edit `index.html` and add the tournament date to the hero eyebrow or a new section
- **Add a location**: Add the specific outdoor area or room at the Hyde Park facility
- **Change colors**: Edit `style.css` — look for `--orange: #FF6B00` to change the accent color
- **Add your bracket**: Follow the PrintYourBrackets instructions above

---

## 🏆 Good luck to all teams!

*A Revelyst employee event — Hyde Park, Utah*
