import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Clients } from '@/components/sections/Clients'; 
import { TrustGrid } from '@/components/sections/TrustGrid'; 
import { Stats } from '@/components/sections/Stats'; 
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process'; 
import { Testimonials } from '@/components/sections/Testimonials'; 
import { Footer } from '@/components/layout/Footer';
import { Team } from '@/components/sections/Team';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { WorkShowcase } from '@/components/sections/WorkShowcase';
import { TechStack } from '@/components/sections/TechStack';
import { Contact } from '@/components/sections/Contact';
import { VerifiedBy } from '@/components/sections/VerifiedBy';

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#050505] min-h-screen text-zinc-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <TechStack />
      <TrustGrid />
      <Stats />
      <Process />
      <Team />
      <WhyChooseUs />
      <Testimonials />
      <VerifiedBy />
      <Contact /> 
      <Footer />
    </main>
  );
}