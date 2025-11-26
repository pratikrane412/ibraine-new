import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Clients } from '@/components/sections/Clients'; 
import { TrustGrid } from '@/components/sections/TrustGrid'; 
import { Stats } from '@/components/sections/Stats'; 
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process'; 
import { Testimonials } from '@/components/sections/Testimonials'; 
import { Contact } from '@/components/sections/Contact'; 
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#050505] min-h-screen text-zinc-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Clients />
      <Services />
      <TrustGrid />
      <Stats />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}