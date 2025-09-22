import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="font-serif text-2xl font-semibold text-foreground">Abogado Gentile</span>
            </Link>
            <p className="text-muted-foreground font-light mb-4 max-w-md">
              Trusted legal support for expatriates, entrepreneurs, and individuals seeking a fresh start in Spain.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <a href="tel:+34645045864" className="font-light hover:text-accent transition-colors">
                  +34 645 04 58 64
                </a>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <a href="mailto:abogadogentile@icab.cat" className="font-light hover:text-accent transition-colors">
                  abogadogentile@icab.cat
                </a>
              </div>
              <div className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a 
                  href="https://maps.app.goo.gl/RktLxyWn9vo6Amdr6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-light hover:text-accent transition-colors"
                >
                  Gran Via de les Corts Catalanes, 594 - Atico I<br />
                  08007 Barcelona, Spain
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-normal text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-light">
                  Immigration Law
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-light">
                  Second Chance Law
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-light">
                  Business Formation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-light">
                  Criminal Defense
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-light">
                  Intellectual Property
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-normal text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-sm text-muted-foreground hover:text-foreground font-light">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-sm text-muted-foreground hover:text-foreground font-light">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground font-light">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-light">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground font-light">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Abogado Gentile. All rights reserved. | Professional legal services in Barcelona, Spain.
          </p>
        </div>
      </div>
    </footer>
  )
}
