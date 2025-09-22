import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { HeroContent } from "@/lib/types/site-content"

interface HeroSectionProps {
  content: HeroContent;
}

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="absolute inset-0 bg-[url('/elegant-barcelona-cityscape-with-gothic-architectu.jpg')] bg-cover bg-center opacity-15"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-normal text-foreground mb-6 leading-tight">
          Trusted Legal Support for Your <span className="text-accent">Fresh Start</span> in Spain
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto font-light leading-relaxed">
          {content.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-light px-8 py-3">
            <Link href="#contact">
              {content.primaryButton}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="font-light px-8 py-3 bg-transparent border-accent text-accent hover:bg-accent hover:text-accent-foreground">
            {content.secondaryButton}
          </Button>
        </div>
      </div>
    </section>
  )
}
