import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Services } from "@/components/Services";
import { TechStack } from "@/components/TechStack";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-grow">
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <TechStack />
        <Testimonials />
        <CTA />
      </div>

      <Footer />
    </main>
  );
}

