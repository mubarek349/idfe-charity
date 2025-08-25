import { Suspense } from "react";
import dynamic from "next/dynamic";

// Static imports for above-the-fold content
import Hero from "../components/Hero";
import About from "../components/About";

// Dynamic imports for below-the-fold content (performance optimization)
const Programs = dynamic(() => import("../components/Programs"), {
  loading: () => <div className="animate-pulse h-64 bg-gray-100 rounded-lg" />,
});

const Impact = dynamic(() => import("../components/Impact"), {
  loading: () => <div className="animate-pulse h-64 bg-gray-100 rounded-lg" />,
});

const CTA = dynamic(() => import("../components/CTA"), {
  loading: () => <div className="animate-pulse h-32 bg-gray-100 rounded-lg" />,
});

const Contact = dynamic(() => import("../components/Contact"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-100 rounded-lg" />,
});

const Footer = dynamic(() => import("../components/Footer"), {
  loading: () => <div className="animate-pulse h-24 bg-gray-100" />,
});

async function fetchContent() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL  || 'http://localhost:3000';
    const response = await fetch(`${baseUrl}/api/content`, {
      cache: 'no-store',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching content:', error);
    // Return default fallback data
    return {
      hero: {
        title: "Making a Difference",
        subtitle: "Together",
        description: "Join us in our mission to create positive change in communities around the world.",
        buttonText: "Get Involved",
        buttonLink: "#contact"
      },
      about: {
        title: "About IDFE Charity",
        description: "Founded with a vision to create lasting positive change, IDFE Charity has been serving communities for over a decade.",
        mission: "Our mission is to empower individuals and communities through education, healthcare, and economic development programs.",
        vision: "A world where every person has access to opportunities for growth and prosperity.",
        values: [
          { title: "Integrity", description: "We operate with transparency and honesty" },
          { title: "Compassion", description: "We approach every situation with empathy" },
          { title: "Excellence", description: "We strive for the highest standards" },
          { title: "Sustainability", description: "We focus on long-term solutions" }
        ]
      },
      programs: [],
      impact: [],
      cta: {
        title: "Ready to Make a Difference?",
        description: "Join our mission to create positive change in communities worldwide.",
        buttonText: "Get Involved",
        buttonLink: "#contact"
      },
      contact: {
        address: "123 Charity Street, Hope City",
        phone: "+1 (555) 123-4567",
        email: "info@idfecharity.org",
        socialMedia: {}
      },
      footer: {
        description: "IDFE Charity is committed to creating positive change through sustainable development programs.",
        quickLinks: [],
        socialLinks: [],
        copyright: "© 2024 IDFE Charity. All rights reserved."
      }
    };
  }
}

export default async function Home() {
  const { hero: heroData, about: aboutData, programs: programsData, impact: impactData, cta: ctaData, contact: contactData, footer: footerData } = await fetchContent();
  return (
    <div className="min-h-screen bg-white">
      <div className="flex pt-16">
        <main className="flex-1 transition-all duration-300 ease-in-out" role="main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero section - above the fold */}
            <header>
              <Hero data={heroData} />
            </header>

            {/* Main content sections */}
            <section aria-label="About us">
              <About data={aboutData} />
            </section>

            <Suspense fallback={<div className="animate-pulse h-64 bg-gray-100 rounded-lg" />}>
              <section aria-label="Our programs">
                <Programs data={programsData} />
              </section>
            </Suspense>

            <Suspense fallback={<div className="animate-pulse h-64 bg-gray-100 rounded-lg" />}>
              <section aria-label="Our impact">
                <Impact data={impactData} />
              </section>
            </Suspense>

            <Suspense fallback={<div className="animate-pulse h-32 bg-gray-100 rounded-lg" />}>
              <section aria-label="Call to action">
                <CTA data={ctaData} />
              </section>
            </Suspense>

            <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 rounded-lg" />}>
              <section aria-label="Contact information">
                <Contact data={contactData} />
              </section>
            </Suspense>
          </div>

          {/* Footer - consistent placement within main */}
          <Suspense fallback={<div className="animate-pulse h-24 bg-gray-100" />}>
            <Footer data={footerData} />
          </Suspense>
        </main>
      </div>
    </div>
  );
}