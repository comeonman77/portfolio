# MinJun Choi Portfolio

A modern, responsive portfolio website with built-in content management and file handling.

![Portfolio Preview](https://via.placeholder.com/800x400/0a0a0f/6366f1?text=Portfolio+Preview)

## ✨ Features

- **Modern Dark Theme** - Developer-focused aesthetic with smooth animations
- **Easy Content Editing** - Admin panel to update all sections without touching code
- **File Upload/Download** - Store and share files directly from your portfolio
- **Fully Responsive** - Looks great on desktop, tablet, and mobile
- **GitHub Pages Ready** - Automatic deployment via GitHub Actions
- **Data Export/Import** - Backup and restore your portfolio content

## 🚀 Quick Start

### Option 1: Deploy to GitHub Pages

1. **Create a new GitHub repository**
   ```bash
   # Initialize git in this folder
   git init
   git add .
   git commit -m "Initial portfolio setup"
   ```

2. **Push to GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under "Build and deployment", select **GitHub Actions**
   - The workflow will automatically run and deploy your site

4. **Access your site**
   - Your portfolio will be live at `https://YOUR_USERNAME.github.io/YOUR_REPO/`

### Option 2: Local Development

1. **Open with a local server**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   
   # Using PHP
   php -S localhost:8000
   ```

2. **Open in browser**
   - Visit `http://localhost:8000`

## 📝 Editing Your Portfolio

### Using the Admin Panel

1. Click the **Edit** button in the navigation bar (or go to `admin.html`)
2. Navigate between tabs to edit different sections:
   - **Personal Info** - Name, title, contact details, bio
   - **Education** - School, degree, dates
   - **Experience** - Work history with highlights
   - **Projects** - Portfolio projects with descriptions
   - **Skills** - Programming languages, tools, databases
3. Click **Save Changes** to save your edits

### Data Management

- **Export Data** - Download your portfolio content as JSON for backup
- **Import Data** - Restore from a previously exported JSON file
- **Reset to Default** - Restore the original content

### File Upload

1. Go to the **Files & Downloads** section
2. Drag & drop files or click to browse
3. Supported formats: PDF, DOC, DOCX, PNG, JPG, JPEG, GIF
4. Maximum file size: 10MB
5. Files are stored in your browser's localStorage

## 📁 Project Structure

```
portfolio/
├── index.html          # Main portfolio page
├── admin.html          # Content editor panel
├── styles.css          # Main stylesheet
├── admin.css           # Admin panel styles
├── app.js              # Portfolio functionality
├── admin.js            # Editor functionality
├── data.js             # Portfolio data & storage
├── assets/             # Images and static files
└── .github/
    └── workflows/
        └── deploy.yml  # GitHub Actions deployment
```

## 🎨 Customization

### Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --accent-primary: #6366f1;    /* Main accent color */
    --accent-secondary: #818cf8;  /* Secondary accent */
    --bg-primary: #0a0a0f;        /* Background */
    --text-primary: #f0f0f5;      /* Text color */
}
```

### Fonts

The portfolio uses:
- **Outfit** - Display and body text
- **JetBrains Mono** - Code and monospace text

To change fonts, update the Google Fonts import in `index.html` and the CSS variables.

## 🔧 Technical Details

- **No build step required** - Pure HTML, CSS, and JavaScript
- **No dependencies** - Works without npm or any package manager
- **localStorage** - Data persists in the browser
- **Progressive enhancement** - Works without JavaScript for basic content

## 📱 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📄 License

MIT License - Feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

Built with ❤️ by MinJun Choi
