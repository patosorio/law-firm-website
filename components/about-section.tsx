import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Globe, Users, Award } from "lucide-react"
import { AboutContent } from "@/lib/types/site-content"

const iconMap = {
  Award,
  Globe,
  Users,
  CheckCircle,
};

interface AboutSectionProps {
  content: AboutContent;
}

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-normal text-foreground mb-6">
              {content.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-6 font-light leading-relaxed">
              {content.description1}
            </p>
            <p className="text-lg text-muted-foreground mb-8 font-light leading-relaxed">
              {content.description2}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {content.highlights.map((highlight, index) => {
                const IconComponent = iconMap[Object.keys(iconMap)[index % Object.keys(iconMap).length] as keyof typeof iconMap];
                return (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <IconComponent className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-normal text-foreground mb-1">{highlight.title}</h3>
                      <p className="text-sm text-muted-foreground font-light">{highlight.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <Card className="border-border">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-24 h-24 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="h-12 w-12 text-accent" />
                  </div>
                  <h3 className="font-serif text-2xl font-normal text-foreground mb-4">{content.cardTitle}</h3>
                  <ul className="space-y-3 text-left">
                    {content.cardItems.map((item, index) => (
                      <li key={index} className="flex items-center text-muted-foreground font-light">
                        <CheckCircle className="h-4 w-4 text-accent mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
