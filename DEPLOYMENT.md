# Deployment Guide

## Prerequisites

- Node.js 18+ installed
- MySQL database (local or cloud)
- Environment variables configured

## Environment Setup

1. Copy environment variables:
```bash
cp .env.example .env
```

2. Configure your `.env` file:
```env
DATABASE_URL="mysql://username:password@localhost:3306/idfe_charity"
NEXT_PUBLIC_BASE_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-production-secret"
NEXTAUTH_URL="https://yourdomain.com"
```

## Database Setup

1. Generate Prisma client:
```bash
npm run db:generate
```

2. Push schema to database:
```bash
npm run db:push
```

3. Seed database with initial data:
```bash
npm run db:seed
```

## Local Development

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Production Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Manual Deployment

1. Build the application:
```bash
npm run build
```

2. Start production server:
```bash
npm start
```

### Docker Deployment

1. Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

2. Build and run:
```bash
docker build -t idfe-charity .
docker run -p 3000:3000 idfe-charity
```

## Post-Deployment Checklist

- [ ] Database is accessible and seeded
- [ ] Environment variables are set correctly
- [ ] SSL certificate is configured
- [ ] Admin panel is accessible at `/admin`
- [ ] All API endpoints are working
- [ ] Error monitoring is set up
- [ ] Backup strategy is in place

## Monitoring

### Health Check Endpoint
Create `/api/health` for monitoring:
```typescript
export async function GET() {
  return Response.json({ status: 'ok', timestamp: new Date().toISOString() });
}
```

### Error Tracking
Consider integrating:
- Sentry for error tracking
- Vercel Analytics for performance monitoring
- Uptime monitoring service

## Backup Strategy

1. **Database Backups**:
   - Set up automated daily backups
   - Test restore procedures regularly

2. **File Backups**:
   - Backup uploaded images/files
   - Version control for code changes

## Security Considerations

- Use HTTPS in production
- Set secure environment variables
- Regular security updates
- Database access restrictions
- Rate limiting on API endpoints

## Performance Optimization

- Enable Next.js Image Optimization
- Use CDN for static assets
- Database query optimization
- Caching strategies
- Bundle size analysis with `npm run analyze`