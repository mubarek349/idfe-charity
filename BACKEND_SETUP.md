# IDFE Charity Backend Setup

This document explains how to set up and use the backend content management system for your IDFE charity website.

## Features

The backend provides a complete content management system with:

- **Hero Section Management**: Edit main banner content, titles, descriptions, and call-to-action buttons
- **About Section Management**: Update organization information, mission, vision, and values
- **Programs Management**: Add, edit, and delete charity programs with full details
- **Impact Statistics**: Manage and display impact numbers and achievements
- **Contact Information**: Update contact details and social media links
- **Call-to-Action Management**: Edit promotional sections and donation buttons
- **Footer Content**: Manage footer links and information
- **Admin Dashboard**: Overview of all content with quick access to editing tools

## Database Models

The system includes the following content models:

- `HeroContent` - Main banner content
- `AboutContent` - Organization information
- `Program` - Charity programs and initiatives
- `ImpactStat` - Impact statistics and numbers
- `ContactInfo` - Contact details and social media
- `CTAContent` - Call-to-action sections
- `FooterContent` - Footer information
- `User` - Admin users for content management

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Database Setup

Make sure you have a MySQL database ready. Update your `.env` file with the database connection string:

```env
DATABASE_URL="mysql://username:password@localhost:3306/idfe_charity"
```

### 3. Generate Prisma Client

```bash
npx prisma generate
```

### 4. Run Database Migrations

```bash
npx prisma db push
```

### 5. Seed the Database

```bash
npx prisma db seed
```

This will create:
- Default admin user (admin@idfe-charity.org / admin123)
- Sample content for all sections
- Default programs and impact statistics

### 6. Start the Development Server

```bash
npm run dev
```

## Using the Admin Interface

### Access the Admin Panel

1. Navigate to `http://localhost:3000/admin`
2. The admin interface provides a sidebar navigation with all content sections

### Admin Features

#### Dashboard (`/admin`)
- Overview of all content sections
- Quick action buttons for common tasks
- Recent activity summary
- Statistics overview

#### Hero Section (`/admin/hero`)
- Edit main banner title and subtitle
- Update description text
- Modify call-to-action button text and link
- Add hero image URL
- Live preview of changes

#### Programs Management (`/admin/programs`)
- View all charity programs
- Add new programs with full details
- Edit existing programs
- Delete or deactivate programs
- Set program status (active, inactive, completed)
- Add program categories, target groups, and locations

#### Impact Statistics (`/admin/impact`)
- Manage impact numbers and statistics
- Add new statistics
- Edit existing statistics
- Set display order
- Add icons and descriptions

#### Other Sections
- About section management
- Contact information updates
- CTA section editing
- Footer content management

## API Endpoints

The backend provides RESTful API endpoints for all content:

### Hero Content
- `GET /api/hero` - Get current hero content
- `POST /api/hero` - Create new hero content
- `PUT /api/hero` - Update hero content

### Programs
- `GET /api/programs` - Get all programs
- `POST /api/programs` - Create new program
- `GET /api/programs/[id]` - Get specific program
- `PUT /api/programs/[id]` - Update program
- `DELETE /api/programs/[id]` - Delete program

### Impact Statistics
- `GET /api/impact` - Get all impact statistics
- `POST /api/impact` - Create new impact statistic

### Contact Information
- `GET /api/contact` - Get contact information
- `POST /api/contact` - Create/update contact information
- `PUT /api/contact` - Update contact information

### CTA Content
- `GET /api/cta` - Get CTA content
- `POST /api/cta` - Create new CTA content
- `PUT /api/cta` - Update CTA content

### Footer Content
- `GET /api/footer` - Get footer content
- `POST /api/footer` - Create new footer content
- `PUT /api/footer` - Update footer content

### About Content
- `GET /api/about` - Get about content
- `POST /api/about` - Create new about content
- `PUT /api/about` - Update about content

## Frontend Integration

To integrate the backend with your existing frontend components, update each component to fetch data from the API endpoints:

```typescript
// Example: Fetching hero content in Hero component
useEffect(() => {
  fetch('/api/hero')
    .then(res => res.json())
    .then(data => setHeroContent(data));
}, []);
```

## Default Admin Credentials

After running the seed script:
- **Email**: admin@idfe-charity.org
- **Password**: admin123

**Important**: Change these credentials in production!

## Production Deployment

1. Set up your production database
2. Update the `DATABASE_URL` in your production environment
3. Run migrations: `npx prisma db push`
4. Seed the database: `npx prisma db seed`
5. Deploy your application

## Security Notes

- The current setup is for development purposes
- In production, implement proper authentication and authorization
- Use environment variables for sensitive data
- Consider implementing role-based access control
- Add input validation and sanitization
- Use HTTPS in production

## Troubleshooting

### Database Connection Issues
- Verify your `DATABASE_URL` is correct
- Ensure your MySQL server is running
- Check database permissions

### Prisma Client Issues
- Run `npx prisma generate` after schema changes
- Clear node_modules and reinstall if needed

### API Errors
- Check browser console for error messages
- Verify API endpoints are accessible
- Check database connection

## Support

For questions or issues with the backend setup, please refer to:
- Prisma documentation: https://www.prisma.io/docs
- Next.js API routes: https://nextjs.org/docs/api-routes/introduction