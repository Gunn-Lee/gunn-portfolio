# Gunn's Portfolio

A modern, responsive portfolio website built with Next.js, featuring both blog posts and project showcases. This portfolio demonstrates web development skills and serves as a platform to share thoughts and showcase work.

## ✨ Features

- **Blog & Projects**: Unified content management for both blog posts and project showcases
- **MDX Support**: Rich content creation with Markdown and React components
- **SEO Optimized**: Complete with sitemap, robots.txt, and JSON-LD schema
- **RSS Feed**: Combined feed for blog posts and projects
- **Dynamic OG Images**: Auto-generated social media preview images
- **Dark Mode**: Full dark/light theme support
- **Responsive Design**: Mobile-first design that works on all devices
- **Syntax Highlighting**: Beautiful code blocks with syntax highlighting
- **Modern Stack**: Built with Next.js 15, React 19, TypeScript, and Tailwind CSS
- **Performance**: Optimized with Vercel Speed Insights and Web Analytics

## 🚀 Live Demo

Visit the live portfolio: [https://github.com/gunnLeeUSP/gunn-portfolio](https://github.com/gunnLeeUSP/gunn-portfolio)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX for rich content
- **Font**: Geist Sans & Mono
- **Analytics**: Vercel Speed Insights & Web Analytics
- **Deployment**: Vercel

## 📁 Project Structure

```
├── app/
│   ├── blog/                 # Blog posts and routing
│   ├── projects/             # Project showcase and routing
│   ├── components/           # Reusable React components
│   ├── lib/                  # Utility functions and helpers
│   ├── og/                   # Dynamic OG image generation
│   └── rss/                  # RSS feed generation
├── posts/                    # Blog post MDX files
└── projects/                 # Project MDX files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/gunnLeeUSP/gunn-portfolio.git
cd gunn-portfolio
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📝 Content Management

### Adding Blog Posts

Create new `.mdx` files in the `app/blog/posts/` directory:

```markdown
---
title: 'Your Blog Post Title'
publishedAt: '2025-01-01'
summary: 'A brief summary of your post'
---

Your content here...
```

### Adding Projects

Create new `.mdx` files in the `app/projects/posts/` directory:

```markdown
---
title: 'Project Name'
publishedAt: '2025-01-01'
summary: 'Project description'
techStack: ['React', 'TypeScript', 'Tailwind']
githubUrl: 'https://github.com/username/project'
liveUrl: 'https://project-demo.com'
---

Project details and description...
```

## 🎨 Customization

- **Personal Information**: Update contact details in `app/components/footer.tsx`
- **Navigation**: Modify navigation items in `app/components/nav.tsx`
- **Styling**: Customize colors and styles in `app/global.css`
- **Metadata**: Update site metadata in `app/layout.tsx`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/gunnLeeUSP/gunn-portfolio/issues).

## 📞 Contact

- **GitHub**: [@gunnLeeUSP](https://github.com/gunnLeeUSP)
- **LinkedIn**: [Gunn Lee](https://www.linkedin.com/in/gunn-leee)

---

Built with ❤️ using Next.js and TypeScript
