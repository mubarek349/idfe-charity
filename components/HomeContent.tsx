"use client";

import { useState, useEffect, Suspense } from "react";
import dynamic from "next/dynamic";
import Hero from "./Hero";
import About from "./About";

const Programs = dynamic(() => import("./Programs"), {
  loading: () => <div className="animate-pulse h-64 bg-gray-100 rounded-lg" />,
});

const Impact = dynamic(() => import("./Impact"), {
  loading: () => <div className="animate-pulse h-64 bg-gray-100 rounded-lg" />,
});

const CTA = dynamic(() => import("./CTA"), {
  loading: () => <div className="animate-pulse h-32 bg-gray-100 rounded-lg" />,
});

const Contact = dynamic(() => import("./Contact"), {
  loading: () => <div className="animate-pulse h-96 bg-gray-100 rounded-lg" />,
});

const Footer = dynamic(() => import("./Footer"), {
  loading: () => <div className="animate-pulse h-24 bg-gray-100" />,
});

const defaultData = {
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

export default function HomeContent() {
  const [data, setData] = useState(defaultData);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch('/api/content');
        if (response.ok) {
          const fetchedData = await response.json();
          setData(fetchedData);
        }
      } catch (error) {
        console.error('Error fetching content:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="flex pt-16">
          <main className="flex-1 transition-all duration-300 ease-in-out" role="main">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="animate-pulse space-y-8">
                <div className="h-96 bg-gray-100 rounded-lg"></div>
                <div className="h-64 bg-gray-100 rounded-lg"></div>
                <div className="h-64 bg-gray-100 rounded-lg"></div>
                <div className="h-64 bg-gray-100 rounded-lg"></div>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="flex pt-16">
        <main className="flex-1 transition-all duration-300 ease-in-out" role="main">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <header>
              <Hero data={data.hero} />
            </header>

            <section aria-label="About us">
              <About data={data.about} />
            </section>

            <Suspense fallback={<div className="animate-pulse h-64 bg-gray-100 rounded-lg" />}>
              <section aria-label="Our programs">
                <Programs data={data.programs} />
              </section>
            </Suspense>

            <Suspense fallback={<div className="animate-pulse h-64 bg-gray-100 rounded-lg" />}>
              <section aria-label="Our impact">
                <Impact data={data.impact} />
              </section>
            </Suspense>

            <Suspense fallback={<div className="animate-pulse h-32 bg-gray-100 rounded-lg" />}>
              <section aria-label="Call to action">
                <CTA data={data.cta} />
              </section>
            </Suspense>

            <Suspense fallback={<div className="animate-pulse h-96 bg-gray-100 rounded-lg" />}>
              <section aria-label="Contact information">
                <Contact data={data.contact} />
              </section>
            </Suspense>
          </div>

          <Suspense fallback={<div className="animate-pulse h-24 bg-gray-100" />}>
            <Footer data={data.footer} />
          </Suspense>
        </main>
      </div>
    </div>
  );
}