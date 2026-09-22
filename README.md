# Language Personality Theory Research Collaborative (LPT-RC)
## Static Website for GitHub Pages (`https://lpt-research.github.io/`)

This repository contains the pure static website for the **Language Personality Theory Research Collaborative (LPT-RC)**. 

The website requires **no build step, no npm, no package manager, and no server-side compilation**. It can be opened directly in any web browser by opening `index.html`, and can be deployed directly to GitHub Pages.

---

### Table of Contents
1. [Replacing the Contact Email](#1-replacing-the-contact-email)
2. [Adding the Founder's ORCID URL](#2-adding-the-founders-orcid-url)
3. [Placing the University Concept Note PDF](#3-placing-the-university-concept-note-pdf)
4. [Testing the Site Locally](#4-testing-the-site-locally)
5. [Uploading Files to the GitHub Repository (`lpt-research.github.io`)](#5-uploading-files-to-the-github-repository)
6. [Enabling GitHub Pages](#6-enabling-github-pages)
7. [Updating the Website Later](#7-updating-the-website-later)
8. [Checking for Broken Links](#8-checking-for-broken-links)
9. [Scientific Integrity & Guardrails Checklist](#9-scientific-integrity--guardrails-checklist)

---

### 1. Replacing the Contact Email

The public files contain the placeholder `REPLACE_WITH_CONTACT_EMAIL`. By default, the website detects this placeholder and displays a neutral *"Contact details forthcoming"* notice so visitors never see a broken link or raw template code.

To activate the direct email buttons:
1. Open `index.html` in any text editor (such as Notepad, TextEdit, or VS Code).
2. Use the Search/Find function (`Ctrl+F` or `Cmd+F`) to find:
   ```html
   REPLACE_WITH_CONTACT_EMAIL
   ```
3. Replace all occurrences with your verified contact address (e.g. `collaborate@lpt-research.org` or `golubkovsv@gmail.com`):
   ```html
   href="mailto:collaborate@lpt-research.org?subject=LPT-RC%20Scientific%20Scoping%20Meeting"
   ```
4. Save `index.html`. The buttons will now open the visitor's mail client with the pre-filled subject line.

---

### 2. Adding the Founder's ORCID URL

In `index.html`, the ORCID profile container has the placeholder `REPLACE_WITH_ORCID_URL` and `data-orcid-placeholder="true"`. By default, this element is automatically hidden so no dead links appear publicly.

To display the founder's ORCID profile:
1. Open `index.html` in a text editor.
2. Locate the ORCID section:
   ```html
   <div id="orcid-container" data-orcid-placeholder="true">
     <a href="REPLACE_WITH_ORCID_URL" target="_blank" rel="noopener noreferrer" class="reference-doi" id="founder-orcid-link">
       ORCID Profile
     </a>
   </div>
   ```
3. Replace `REPLACE_WITH_ORCID_URL` with the full ORCID link (e.g., `https://orcid.org/0000-0002-XXXX-XXXX`).
4. Remove the attribute `data-orcid-placeholder="true"`.
5. Save `index.html`.

---

### 3. Placing the University Concept Note PDF

The website includes links to download the document `University Concept Note v0.2`.

1. Obtain or export your PDF document.
2. Name the file exactly:
   ```
   LPT_RC_University_Concept_Note_v0.2.pdf
   ```
3. Place this file inside the `assets/` folder of this project:
   ```
   assets/LPT_RC_University_Concept_Note_v0.2.pdf
   ```
4. If this file is not yet present, the website automatically displays the download button in a clean disabled state with a descriptive tooltip so visitors do not encounter a 404 error.

---

### 4. Testing the Site Locally

You do not need to install Node.js, Python, or any software.

- **Option A (Instant View):** Double-click `index.html` on your computer (or right-click → *Open With* → Google Chrome, Firefox, Safari, or Edge). The website will render completely with all styles and interactions.
- **Option B (Local Web Server in browser extensions or VS Code):** You can use the "Live Server" extension in VS Code or any standard local server utility.

---

### 5. Uploading Files to the GitHub Repository

To host the website under `https://lpt-research.github.io/`:

1. Log into your GitHub account and go to the repository:
   `https://github.com/lpt-research/lpt-research.github.io`
   *(If the repository does not exist yet, create a new public repository named `lpt-research.github.io`)*.
2. Ensure you are on the `main` branch.
3. Click the **Add file** button near the top right, then select **Upload files**.
4. Drag and drop all the files from this folder directly into GitHub:
   - `index.html` (must be at the root of the repository)
   - `styles.css`
   - `script.js`
   - `favicon.svg`
   - `404.html`
   - `robots.txt`
   - `sitemap.xml`
   - `README.md`
   - `assets/` folder (containing `LPT_RC_University_Concept_Note_v0.2.pdf`)
5. In the commit message box at the bottom, enter `Initial publication of LPT-RC academic website`.
6. Click **Commit changes**.

---

### 6. Enabling GitHub Pages

1. In your GitHub repository (`lpt-research.github.io`), click on **Settings** in the top navigation tab.
2. In the left sidebar, click on **Pages** (under the "Code and automation" section).
3. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch**.
   - **Branch**: Select `main` from the dropdown, and leave the folder as `/ (root)`.
4. Click **Save**.
5. Within 1–2 minutes, GitHub will display a banner at the top of the Pages settings stating:
   *"Your site is live at https://lpt-research.github.io/"*.

---

### 7. Updating the Website Later

Whenever you want to modify texts, add research updates, or refine partnership terms:
1. Open the file directly on GitHub by clicking on it, then clicking the pencil icon (**Edit this file**), or edit your local copy and re-upload.
2. Make your edits.
3. Click **Commit changes**. GitHub Pages will automatically refresh the published site within 60 seconds.

---

### 8. Checking for Broken Links

All external and internal links have been configured and verified:
- **Internal anchors:** `#about`, `#architecture`, `#research-questions`, `#pilot`, `#horizon`, `#partnership`, `#independence`, `#contact`.
- **Foundational DOI links:**
  - 2026 Master Manuscript: `https://doi.org/10.5281/zenodo.22727605`
  - 2026 Applied Bridge: `https://doi.org/10.13140/RG.2.2.33949.06886`
  - 2002 Foundational Article: `https://doi.org/10.2224/sbp.2002.30.6.571`
- If you change any file names or paths, verify that the relative links in `index.html` match the exact folder names.

---

### 9. Scientific Integrity & Guardrails Checklist

Before making public announcements or modifying texts, ensure that none of the following non-negotiable boundaries are breached:

1. **No Institutional Overreach:**
   - Do NOT describe LPT-RC as a "university laboratory", "affiliated institute", "research centre", or an organisation already hosted by a university.
   - Clarify that LPT-RC is an independent international project-based research network seeking university partners.
2. **Distinguish Formal Entailment from Psychological Validation:**
   - The formal count of 28 relations (12 1D + 12 2D + 4 3D) does NOT prove that there are 28 psychologically distinct contradiction classes.
   - Do NOT describe the 28 relations as established psychological types.
   - Do NOT describe the eight ideal configurations as fixed personality types.
   - Do NOT describe the eight manifestations as "eight validated components".
3. **Staged Generativities & Extensions:**
   - Clearly maintain that Generativities II–IV, developmental hypotheses, embodied/physiological claims, and DCC feasibility programmes are conditional on passing upstream decision gates.
   - Keep commercial activities (Inner Dialectica, DCC) strictly separate from the research programme.
4. **British English Conventions:**
   - Maintain British English spelling throughout (`operationalise`, `programme`, `organisation`, `behaviour`, etc.).
