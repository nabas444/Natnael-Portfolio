# Complete Setup Guide — Crafty Code Desk (React + CSS)

Follow these steps in order to set up the project, install everything, and run it in VS Code.

---

## Prerequisites (do this first)

### Step 0: Install Node.js (if not already installed)

1. Go to **https://nodejs.org**
2. Download the **LTS** version (e.g. 20.x or 22.x).
3. Run the installer and follow the prompts (leave defaults).
4. **Verify installation:**  
   Open a **new** Command Prompt or PowerShell and run:
   ```bash
   node -v
   npm -v
   ```
   You should see version numbers (e.g. `v20.10.0` and `10.2.0`).

---

## Option A: You already have the project folder (e.g. `crafty-code-desk-main`)

### Step 1: Create / locate the project folder

- If the project is already downloaded (e.g. from GitHub or a zip):
  - Unzip it if needed.
  - Note the full path, e.g.  
    `C:\Users\TOSHIBA\3D Objects\portfolyo\crafty-code-desk-main`

### Step 2: Open the project in VS Code

1. Open **VS Code**.
2. Go to **File → Open Folder** (or `Ctrl+K Ctrl+O`).
3. Select the project folder (e.g. `crafty-code-desk-main`).
4. Click **Select Folder**.  
   The left sidebar should show your project files (`src`, `public`, `package.json`, etc.).

### Step 3: Open the terminal in VS Code

1. Go to **Terminal → New Terminal** (or press **Ctrl+`**).
2. Make sure the terminal is in the project root (path should end with your project folder name).

### Step 4: Install all Node modules

In the VS Code terminal, run:

```bash
npm install
```

- Wait until it finishes (no red errors).
- This installs React, React Router, Vite, ESLint, Vitest, and other dependencies from `package.json`.
- A `node_modules` folder will appear (you can ignore it in the file explorer).

### Step 5: Run the development server

In the same terminal, run:

```bash
npm run dev
```

- You should see something like:
  - `VITE v5.x.x  ready in xxx ms`
  - `Local:   http://localhost:8080/`
- Open a browser and go to **http://localhost:8080/** to see your portfolio.

### Step 6: Stop the server (when you’re done)

- In the terminal, press **Ctrl+C** to stop the dev server.

---

## Option B: Start from scratch (new folder + same project)

If you want to create a new folder and put the project there:

### Step 1: Create a new folder

1. Open **File Explorer** and go to where you want the project (e.g. `C:\Users\TOSHIBA\Projects` or your Desktop).
2. Right-click → **New → Folder**.
3. Name it (e.g. `crafty-code-desk` or `my-portfolio`).

### Step 2: Copy the project files

- Copy **all** files and folders from your current project (e.g. from `crafty-code-desk-main`) into this new folder.  
  You must have at least:
  - `package.json`
  - `index.html`
  - `vite.config.ts`
  - `vitest.config.ts`
  - `eslint.config.js`
  - `src/` (with `main.jsx`, `App.jsx`, `pages/`, `components/`, `styles/`, `data/`)
  - `public/` (if it exists)

### Step 3: Open in VS Code

1. Open **VS Code**.
2. **File → Open Folder** and select the new folder you created.
3. Then follow **Option A, Step 3 → Step 6** (terminal, `npm install`, `npm run dev`).

---

## Useful commands (reference)

| Command            | What it does                          |
|--------------------|----------------------------------------|
| `npm install`      | Installs all dependencies (run once)   |
| `npm run dev`       | Starts dev server at http://localhost:8080 |
| `npm run build`     | Builds for production (output in `dist/`) |
| `npm run preview`   | Serves the production build locally   |
| `npm run lint`      | Runs ESLint to check code style       |
| `npm run test`      | Runs Vitest tests                     |

---

## If something goes wrong

1. **“npm is not recognized”**  
   - Node.js is not installed or not in PATH. Install Node.js (Step 0) and restart VS Code and the terminal.

2. **Red errors after `npm install`**  
   - Delete the `node_modules` folder and the file `package-lock.json`, then run `npm install` again.

3. **Port 8080 already in use**  
   - Either close the other app using 8080, or change the port in `vite.config.ts` (e.g. `port: 3000`).

4. **Blank page in browser**  
   - Check the terminal for errors. Make sure you opened `http://localhost:8080/` (with the port number).

---

## Summary checklist

- [ ] Node.js installed (`node -v` and `npm -v` work)
- [ ] Project folder opened in VS Code
- [ ] Terminal opened in project root
- [ ] `npm install` completed without errors
- [ ] `npm run dev` started
- [ ] Opened http://localhost:8080/ in the browser and saw the portfolio

Once all steps are done, your environment is set up and the project is running.
