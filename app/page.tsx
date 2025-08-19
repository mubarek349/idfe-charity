"use client";
import Hero from "../components/Hero";
import About from "../components/About";
import Programs from "../components/Programs";
import Impact from "../components/Impact";
import CTA from "../components/CTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
 

  return (
    <div className="min-h-screen bg-white">
      <div className="flex pt-16">
        <main className={`flex-1 transition-all duration-300 ease-in-out`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <About />
            <Programs />
            <Impact />
            <CTA />
            <Contact />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}


