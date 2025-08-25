# IDFE Charity - Professional Chat Application

A modern, professional web application built with Next.js, React, and Tailwind CSS, featuring a dynamic left sidebar and real-time footer updates.

## ✨ Features

### 🎯 Professional Left Sidebar
- **Toggle Functionality**: Click the hamburger menu (☰) in the navbar to show/hide the sidebar on mobile
- **Responsive Design**: Automatically shows on large screens (lg+), collapsible on mobile
- **Smooth Animations**: Beautiful slide-in/out transitions with backdrop blur effects
- **Navigation Menu**: Clean, icon-based navigation with hover effects
- **Quick Actions**: Easy access to donation, volunteer, and contact options
- **Impact Statistics**: Display of community impact metrics

### 🕐 Dynamic Footer
- **Real-time Clock**: Updates every second showing current local time
- **Current Date**: Displays full date with day, month, and year
- **Professional Styling**: Beautiful time display with emojis and modern design
- **Automatic Updates**: No manual refresh needed

### 🎨 Modern UI Components
- **HeroUI Integration**: Uses @heroicons/react for consistent iconography
- **Tailwind CSS**: Modern, utility-first CSS framework
- **Responsive Design**: Works perfectly on all device sizes
- **Smooth Transitions**: Professional animations throughout the interface

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <your-repo-url>
cd "IDFE Charity"

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your database URL and other settings

# Set up database
npx prisma generate
npx prisma db push
npx prisma db seed

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
npm start
```

### Database Management
```bash
# Generate Prisma client
npx prisma generate

# Push schema changes to database
npx prisma db push

# Seed database with initial data
npm run db:seed

# View database in Prisma Studio
npx prisma studio
```

## 🛠️ Technology Stack

- **Frontend**: Next.js 15, React 19
- **Styling**: Tailwind CSS 4
- **Icons**: Heroicons React, Lucide React
- **UI Components**: Headless UI, Radix UI
- **Language**: TypeScript
- **Database**: Prisma with MySQL
- **Authentication**: NextAuth.js
- **Notifications**: React Hot Toast
- **Forms**: React Hook Form with Zod validation

## 📱 Usage

### Sidebar Navigation
1. **Desktop**: Sidebar is always visible on large screens
2. **Mobile**: Click the ☰ menu button in the navbar to toggle
3. **Navigation**: Click any menu item to navigate to sections
4. **Quick Actions**: Use the action buttons for common tasks

### Footer Features
- Time and date automatically update every second
- No configuration needed - uses local system time
- Beautiful display with emojis and professional styling

## 🎨 Customization

### Sidebar Content
Edit `components/LeftSidebar.tsx` to:
- Add/remove navigation items
- Modify quick actions
- Update impact statistics
- Change colors and styling

### Footer Styling
Edit `components/Footer.tsx` to:
- Modify time format
- Change date display
- Update styling and layout
- Add additional information

### Colors and Theme
The application uses a green-based color scheme:
- Primary: Green-600 (#059669)
- Secondary: Green-50 (#f0fdf4)
- Accent: Blue-50 (#eff6ff)

## 🔌 API Routes

### Public API
- `GET /api/content` - Fetch all website content

### Admin API
- `GET|POST|PUT /api/admin/hero` - Hero section management
- `GET|POST|PUT /api/admin/about` - About section management
- `GET|POST|PUT|DELETE /api/admin/programs` - Programs management
- `GET|POST|PUT|DELETE /api/admin/impact` - Impact statistics management
- `GET|POST|PUT /api/admin/contact` - Contact information management
- `GET|POST|PUT /api/admin/cta` - Call-to-action management
- `GET|POST|PUT /api/admin/footer` - Footer content management

## 🔧 Development

### File Structure
```
IDFE Charity/
├── app/                    # Next.js app directory
│   ├── admin/              # Admin panel pages
│   ├── api/                # API routes
│   │   ├── admin/          # Admin API endpoints
│   │   └── content/        # Public content API
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/             # React components
│   ├── ui/                 # UI components
│   ├── LeftSidebar.tsx     # Main sidebar
│   ├── Navbar.tsx          # Navigation bar
│   ├── Footer.tsx          # Footer with time
│   └── ...                 # Other components
├── actions/                # Server actions
├── lib/                    # Utility functions
├── prisma/                 # Database schema & migrations
└── public/                 # Static assets
```

### Key Components

#### LeftSidebar.tsx
- Manages sidebar state and visibility
- Handles responsive behavior
- Contains navigation and quick actions

#### Navbar.tsx
- Includes sidebar toggle button
- Responsive navigation menu
- Logo and branding

#### Footer.tsx
- Real-time clock and date display
- Social media links
- Company information

## 📱 Responsive Behavior

- **Large Screens (lg+)**: Sidebar always visible, content adjusts
- **Medium Screens (md)**: Sidebar hidden, toggle button visible
- **Small Screens**: Sidebar overlay with backdrop blur
- **Mobile**: Full mobile-optimized experience

## 🎯 Future Enhancements

- [ ] Add sidebar collapse/expand functionality
- [ ] Implement dark mode toggle
- [ ] Add user authentication
- [ ] Include real-time notifications
- [ ] Add search functionality
- [ ] Implement breadcrumb navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
