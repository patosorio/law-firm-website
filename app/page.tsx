import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { getSiteContentServer } from "@/lib/firebase/site-content-server"

export default async function HomePage() {
  const content = await getSiteContentServer('en');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection content={content.hero} />
        <ServicesSection content={content.services} />
        <AboutSection content={content.about} />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
