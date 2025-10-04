# Jekyll Migration Guide

This document outlines the migration from React to Jekyll for your personal portfolio website.

## What's Been Created

### 1. Jekyll Structure
- `_config.yml` - Jekyll configuration
- `Gemfile` - Ruby dependencies
- `_layouts/default.html` - Main layout template
- `_includes/header.html` - Navigation header
- `_includes/footer.html` - Site footer
- `index.html` - Homepage content

### 2. Data Files
- `_data/milestones.yml` - Timeline milestones
- `_data/phases.yml` - Timeline phases
- `_data/projects.yml` - Project showcase
- `_data/publications.yml` - Research publications
- `_data/research_projects.yml` - Research experiments

### 3. Assets
- `assets/css/main.scss` - Main stylesheet (converted from Tailwind)
- `assets/js/main.js` - JavaScript functionality

## Next Steps

### 1. Install Jekyll
```bash
# Install Ruby and Jekyll
gem install jekyll bundler

# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve
```

### 2. Complete the Migration

#### A. Timeline Component
- Create `_includes/timeline.html` with interactive timeline
- Add JavaScript for timeline interactions
- Implement phase switching and milestone selection

#### B. Project Showcase
- Create `_includes/projects.html` 
- Add project cards with links
- Implement filtering by category

#### C. Research Section
- Create `_includes/research.html`
- Add publications and research projects
- Include PDF links and external links

#### D. Navigation
- Implement smooth scrolling
- Add active section highlighting
- Mobile menu functionality

### 3. Content Migration

#### A. Copy Assets
```bash
# Copy PDFs
cp -r public/pdfs/ assets/pdfs/

# Copy images
cp -r public/*.png assets/images/
cp -r public/*.jpg assets/images/
cp -r public/*.ico assets/images/
```

#### B. Update Links
- Update all internal links to use Jekyll syntax
- Fix asset paths
- Update external links

### 4. Deployment

#### A. GitHub Pages
1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to "Deploy from a branch"
4. Select main branch

#### B. Custom Domain (Optional)
1. Add `CNAME` file with your domain
2. Update DNS settings
3. Configure SSL

## Benefits of Jekyll

### 1. Simpler Maintenance
- No build process required
- Content updates via Markdown
- Version control with Git

### 2. Better Performance
- Static HTML generation
- Faster loading times
- Better SEO

### 3. Academic Focus
- Better for content-heavy sites
- Built-in blog functionality
- Markdown support for research notes

### 4. Cost Effective
- Free hosting on GitHub Pages
- No server maintenance
- Automatic deployments

## File Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page layouts
│   └── default.html
├── _includes/           # Reusable components
│   ├── header.html
│   ├── footer.html
│   ├── timeline.html
│   ├── projects.html
│   └── research.html
├── _data/               # Data files
│   ├── milestones.yml
│   ├── phases.yml
│   ├── projects.yml
│   ├── publications.yml
│   └── research_projects.yml
├── assets/              # Static assets
│   ├── css/
│   ├── js/
│   ├── images/
│   └── pdfs/
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

## Development Workflow

1. **Local Development**
   ```bash
   bundle exec jekyll serve
   ```
   Visit `http://localhost:4000`

2. **Content Updates**
   - Edit YAML files in `_data/`
   - Update HTML in `_includes/`
   - Modify styles in `assets/css/`

3. **Deployment**
   - Commit changes to Git
   - Push to GitHub
   - GitHub Pages automatically rebuilds

## Migration Checklist

- [x] Jekyll project structure
- [x] Basic layouts and includes
- [x] Data files for content
- [x] CSS conversion from Tailwind
- [x] JavaScript functionality
- [ ] Timeline component implementation
- [ ] Project showcase
- [ ] Research section
- [ ] Asset migration
- [ ] Link updates
- [ ] Testing
- [ ] Deployment

## Support

For Jekyll documentation, visit: https://jekyllrb.com/docs/
For GitHub Pages, visit: https://pages.github.com/
