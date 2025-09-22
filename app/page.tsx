import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { getSiteContent } from "@/lib/firebase/site-content"

export default async function HomePage() {
  const content = await getSiteContent('en');

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
