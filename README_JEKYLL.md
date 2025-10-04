# Jekyll Portfolio Site

This is your personal portfolio website built with Jekyll, converted from React.

## Quick Start

### 1. Install Jekyll
```bash
# Install Ruby (if not already installed)
# Windows: Download from https://rubyinstaller.org/
# macOS: brew install ruby
# Linux: sudo apt install ruby-full

# Install Jekyll and Bundler
gem install jekyll bundler
```

### 2. Install Dependencies
```bash
bundle install
```

### 3. Run Locally
```bash
bundle exec jekyll serve
```

Visit `http://localhost:4000` to see your site!

## Site Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page layouts
│   └── default.html
├── _includes/           # Reusable components
│   ├── header.html      # Navigation
│   ├── footer.html      # Site footer
│   ├── about.html       # About section
│   ├── timeline.html    # Interactive timeline
│   ├── projects.html    # Project showcase
│   └── research.html    # Research section
├── _data/               # Content data
│   ├── milestones.yml   # Timeline milestones
│   ├── phases.yml       # Timeline phases
│   ├── projects.yml     # Project data
│   ├── publications.yml # Research publications
│   └── research_projects.yml # Research experiments
├── assets/              # Static assets
│   ├── css/main.scss    # Main stylesheet
│   ├── js/main.js       # JavaScript
│   ├── images/          # Images
│   └── pdfs/            # PDF files
├── index.html           # Homepage
└── Gemfile              # Ruby dependencies
```

## Content Management

### Adding New Milestones
Edit `_data/milestones.yml`:
```yaml
- id: new-milestone
  title: New Achievement
  date: Jan 2025
  phase: research
  type: achievement
  organization: University
  description: Description here
```

### Adding New Projects
Edit `_data/projects.yml`:
```yaml
- title: New Project
  description: Project description
  technologies: [Python, React]
  status: Completed
  category: Web Development
  links:
    github: https://github.com/username/repo
    demo: https://demo.com
```

### Adding Publications
Edit `_data/publications.yml`:
```yaml
- title: Paper Title
  authors: Author Name
  year: 2025
  venue: Conference Name
  abstract_link: /pdfs/paper.pdf
  status: Published
```

## Features

✅ **Interactive Timeline** - Phase switching, milestone cards  
✅ **Project Showcase** - GitHub links, demos, papers  
✅ **Research Section** - Publications, experiments, ongoing work  
✅ **Responsive Design** - Mobile-friendly navigation  
✅ **Smooth Animations** - Fade-ins, hover effects  
✅ **Academic Theme** - Warm, professional aesthetic  

## Deployment

### GitHub Pages (Recommended)
1. Push to GitHub repository
2. Go to repository Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch
5. Your site will be available at `https://username.github.io/repository-name`

### Custom Domain
1. Add `CNAME` file with your domain
2. Update DNS settings
3. Configure SSL

## Development

### Local Development
```bash
bundle exec jekyll serve --livereload
```

### Build for Production
```bash
bundle exec jekyll build
```

### Update Dependencies
```bash
bundle update
```

## Troubleshooting

### Common Issues

**Jekyll not found:**
```bash
gem install jekyll bundler
```

**Bundle install fails:**
```bash
bundle install --path vendor/bundle
```

**CSS not loading:**
- Check `assets/css/main.scss` has proper front matter
- Ensure Jekyll is processing SCSS files

**JavaScript not working:**
- Check browser console for errors
- Ensure `assets/js/main.js` is included in layout

## Support

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages](https://pages.github.com/)
- [Liquid Templating](https://shopify.github.io/liquid/)

Your portfolio is now ready to deploy! 🚀
