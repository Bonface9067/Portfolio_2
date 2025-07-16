# Bonface Odhiambo - Professional Portfolio

A modern, responsive portfolio website for Bonface Odhiambo, showcasing expertise in geospatial data science and backend development.

## Features

- **Modern Design**: Clean, professional UI with smooth animations and interactions
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Dynamic Content**: Integrated with Supabase for easy content management
- **Interactive Elements**: Project modals, skill filters, and smooth scrolling navigation
- **Professional Sections**: Comprehensive showcase of skills, experience, projects, and publications
- **Contact Form**: Functional contact form with validation
- **Portfolio Updates**: Dynamic feed for latest achievements and news

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Fill in your Supabase credentials in the `.env` file.

4. Start the development server:
   ```bash
   npm run dev
   ```

## Supabase Setup

To set up the database for dynamic content management:

1. Create a new Supabase project
2. Run the SQL migrations in `/supabase/migrations/`
3. Configure Row Level Security (RLS) policies
4. Add your Supabase credentials to the `.env` file

## Project Structure

```
src/
|-- assets
|   |--images
|      |--python_logo.jpg
├── components/
│   ├── Layout/
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── Sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Publications.tsx
│       ├── PortfolioUpdates.tsx
│       └── Contact.tsx
├── lib/
│   └── supabase.ts
├── types/
│   └── index.ts
└── App.tsx
```

## Deployment

The application can be deployed on modern hosting platforms. After deployment, you can update portfolio content through Supabase:

### Deployment Options:
- **Netlify**: Automatic deployment from Git repository (recommended)
- **Vercel**: Seamless integration with GitHub
- **Custom Server**: Build with `npm run build`

### Updating Portfolio Content After Deployment:

The portfolio is designed for easy content updates without redeployment:

#### 1. **Image and Logo Updates:**
   - Replace placeholder images with actual logos and photos
   - Update the hero section profile image (currently shows "BO" initials)
   - Add company logos for employers and clients
   - Update project images and screenshots
   
   **How to update images:**
   - Upload images to a CDN service (Cloudinary, AWS S3, etc.)
   - Replace placeholder URLs in the component files
   - For profile image: Update the Hero component's profile section
   - For logos: Update the Organizations component with actual logo URLs

#### 2. **Content Updates via Supabase:**
   - **Projects**: Add new projects, update descriptions, technologies
   - **Work Experience**: Add new positions, update achievements
   - **Publications**: Add new papers, workshops, presentations
   - **Portfolio Updates**: Add latest news, certifications, collaborations
   - **Skills**: Update proficiency levels, add new technologies
   - **Contact Messages**: View and manage form submissions
   
   **How to update via Supabase:**
   - Access your Supabase dashboard
   - Navigate to the Table Editor
   - Add/edit records in relevant tables
   - Changes appear immediately on the live site

#### 3. **Quick Content Updates:**
   For immediate updates without touching the database:
   - Edit component files directly for static content
   - Push changes to your Git repository
   - Automatic redeployment (if using Netlify/Vercel)

#### 4. **Media Management Best Practices:**
   - Use consistent image dimensions for logos (120x120px recommended)
   - Optimize images for web (WebP format preferred)
   - Use descriptive alt text for accessibility
   - Maintain aspect ratios for professional appearance

## Content Management System

The portfolio uses Supabase for dynamic content management with the following capabilities:

- **Real-time Updates**: Changes in Supabase appear immediately
- **Secure Access**: Row-level security for data protection
- **Easy Management**: User-friendly interface for non-technical updates
- **Scalable**: Handles growing content without performance issues

## Performance

- **Lighthouse Score**: Optimized for 90+ scores across all categories
- **Image Optimization**: Responsive images with proper alt text
- **Code Splitting**: Lazy loading for optimal performance
- **SEO**: Comprehensive meta tags and structured data

## License

© 2024 Bonface Odhiambo. All rights reserved.

## Contact

For questions or collaborations:
- Email: bonfaceodhiambo291@gmail.com
- LinkedIn: [linkedin.com/in/bonface-odhiambo](linkedin.com/in/bonface-odhiambo-17245a1ab)
- GitHub: [github.com/bonface-odhiambo](https://github.com/Bonface9067)