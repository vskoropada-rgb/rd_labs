import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import FacadeProcess from "@/components/FacadeProcess";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { getContent } from "@/lib/content";

export default async function Home() {
  const content = await getContent();

  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <Stats />
      <WhyUs />
      <Portfolio initialItems={content.portfolio} />
      <FacadeProcess />
      <Process />
      <Testimonials />
      <ContactForm contact={content.contact} />
      <Footer />
      <FloatingCTA phone={content.contact.phone} />
    </main>
  );
}
