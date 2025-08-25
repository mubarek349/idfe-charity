import { NextResponse } from 'next/server';
import { getHeroContent } from '@/actions/hero';
import { getAboutContent } from '@/actions/about';
import { getPrograms } from '@/actions/programs';
import { getImpactStats } from '@/actions/impact';
import { getCTAContent } from '@/actions/cta';
import { getContactInfo } from '@/actions/contact';
import { getFooterContent } from '@/actions/footer';

export async function GET() {
  try {
    const [heroData, aboutData, programsData, impactData, ctaData, contactData, footerData] = await Promise.all([
      getHeroContent(),
      getAboutContent(),
      getPrograms(),
      getImpactStats(),
      getCTAContent(),
      getContactInfo(),
      getFooterContent()
    ]);

    return NextResponse.json({
      hero: heroData,
      about: aboutData,
      programs: programsData,
      impact: impactData,
      cta: ctaData,
      contact: contactData,
      footer: footerData
    });
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json({ error: 'Failed to fetch content' }, { status: 500 });
  }
}