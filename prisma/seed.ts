import { PrismaClient } from '../app/generated/prisma';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create Hero Content
  await prisma.heroContent.upsert({
    where: { id: 'hero-1' },
    update: {},
    create: {
      id: 'hero-1',
      title: 'Making a Difference Together',
      subtitle: 'IDFE Charity',
      description: 'Join us in our mission to create positive change in communities worldwide. Together, we can build a better future for everyone.',
      buttonText: 'Get Involved',
      buttonLink: '#contact',
      imageUrl: '/hero-image.jpg',
      isActive: true,
    },
  });

  // Create About Content
  await prisma.aboutContent.upsert({
    where: { id: 'about-1' },
    update: {},
    create: {
      id: 'about-1',
      title: 'About IDFE Charity',
      description: 'IDFE Charity is dedicated to improving lives and building stronger communities through sustainable development programs.',
      mission: 'To empower communities through education, healthcare, and sustainable development initiatives.',
      vision: 'A world where every person has access to opportunities for growth and prosperity.',
      values: [
        { title: 'Integrity', description: 'We operate with transparency and honesty in all our activities.' },
        { title: 'Compassion', description: 'We approach every situation with empathy and understanding.' },
        { title: 'Excellence', description: 'We strive for the highest standards in everything we do.' },
        { title: 'Sustainability', description: 'We focus on long-term solutions that benefit communities.' }
      ],
      imageUrl: '/about-image.jpg',
      isActive: true,
    },
  });

  // Create Programs
  const programs = [
    {
      id: 'program-1',
      title: 'Education Initiative',
      description: 'Providing quality education and learning resources to underserved communities.',
      category: 'Education',
      imageUrl: '/education-program.jpg',
      status: 'active',
      targetGroup: 'Children and Youth',
      location: 'Global',
    },
    {
      id: 'program-2',
      title: 'Healthcare Access',
      description: 'Improving healthcare accessibility and quality in remote areas.',
      category: 'Healthcare',
      imageUrl: '/healthcare-program.jpg',
      status: 'active',
      targetGroup: 'All Ages',
      location: 'Rural Communities',
    },
    {
      id: 'program-3',
      title: 'Clean Water Project',
      description: 'Building sustainable water systems for communities in need.',
      category: 'Infrastructure',
      imageUrl: '/water-program.jpg',
      status: 'active',
      targetGroup: 'Communities',
      location: 'Africa & Asia',
    },
  ];

  for (const program of programs) {
    await prisma.program.upsert({
      where: { id: program.id },
      update: {},
      create: program,
    });
  }

  // Create Impact Stats
  const impactStats = [
    {
      id: 'impact-1',
      title: 'Lives Impacted',
      value: '50,000+',
      description: 'People reached through our programs',
      icon: '👥',
      order: 1,
    },
    {
      id: 'impact-2',
      title: 'Communities Served',
      value: '200+',
      description: 'Communities across the globe',
      icon: '🏘️',
      order: 2,
    },
    {
      id: 'impact-3',
      title: 'Projects Completed',
      value: '150+',
      description: 'Successful development projects',
      icon: '✅',
      order: 3,
    },
    {
      id: 'impact-4',
      title: 'Years of Service',
      value: '15+',
      description: 'Years of dedicated service',
      icon: '📅',
      order: 4,
    },
  ];

  for (const stat of impactStats) {
    await prisma.impactStat.upsert({
      where: { id: stat.id },
      update: {},
      create: stat,
    });
  }

  // Create Contact Info
  await prisma.contactInfo.upsert({
    where: { id: 'contact-1' },
    update: {},
    create: {
      id: 'contact-1',
      address: '123 Charity Street, Hope City, HC 12345',
      phone: '+1 (555) 123-4567',
      email: 'info@idfecharity.org',
      website: 'https://idfecharity.org',
      socialMedia: {
        facebook: 'https://facebook.com/idfecharity',
        twitter: 'https://twitter.com/idfecharity',
        instagram: 'https://instagram.com/idfecharity',
        linkedin: 'https://linkedin.com/company/idfecharity'
      },
      mapUrl: 'https://maps.google.com/embed?pb=!1m18!1m12!1m3!1d3024.123!2d-74.006!3d40.713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1',
      isActive: true,
    },
  });

  // Create CTA Content
  await prisma.cTAContent.upsert({
    where: { id: 'cta-1' },
    update: {},
    create: {
      id: 'cta-1',
      title: 'Ready to Make a Difference?',
      description: 'Join our mission to create positive change in communities worldwide. Your support can help us reach more people and create lasting impact.',
      buttonText: 'Donate Now',
      buttonLink: '/donate',
      bgColor: '#059669',
      textColor: '#ffffff',
      isActive: true,
    },
  });

  // Create Footer Content
  await prisma.footerContent.upsert({
    where: { id: 'footer-1' },
    update: {},
    create: {
      id: 'footer-1',
      description: 'IDFE Charity is committed to creating positive change through sustainable development programs and community empowerment initiatives.',
      quickLinks: [
        { title: 'About Us', url: '/about' },
        { title: 'Programs', url: '/programs' },
        { title: 'Get Involved', url: '/volunteer' },
        { title: 'Donate', url: '/donate' },
        { title: 'Contact', url: '/contact' },
        { title: 'Privacy Policy', url: '/privacy' }
      ],
      socialLinks: [
        { platform: 'Facebook', url: 'https://facebook.com/idfecharity', icon: 'facebook' },
        { platform: 'Twitter', url: 'https://twitter.com/idfecharity', icon: 'twitter' },
        { platform: 'Instagram', url: 'https://instagram.com/idfecharity', icon: 'instagram' },
        { platform: 'LinkedIn', url: 'https://linkedin.com/company/idfecharity', icon: 'linkedin' }
      ],
      copyright: '© 2024 IDFE Charity. All rights reserved.',
      isActive: true,
    },
  });

  // Create Admin User
  await prisma.user.upsert({
    where: { phone: '+1234567890' },
    update: {},
    create: {
      id: 'admin-1',
      name: 'Admin User',
      username: 'admin',
      phone: '+1234567890',
      email: 'admin@idfecharity.org',
      password: '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
      role: 'admin',
      isActive: true,
    },
  });

  console.log('✅ Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });