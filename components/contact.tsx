import { Mail, Phone, Instagram } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-serif font-bold mb-6">Let's Create Together</h2>
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
            I'm always excited to collaborate on creative projects, discuss design opportunities, or simply connect with
            fellow artists and professionals.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center gap-3 p-6 bg-muted rounded-lg">
              <Mail className="w-6 h-6 text-accent" />
              <p className="text-sm font-medium">Email</p>
              <a
                href="mailto:tanishka.aga03@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm break-all"
              >
                tanishka.aga03@gmail.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-muted rounded-lg">
              <Phone className="w-6 h-6 text-accent" />
              <p className="text-sm font-medium">Phone</p>
              <a href="tel:7046800219" className="text-muted-foreground hover:text-foreground transition-colors">
                +91 7046800219
              </a>
            </div>
            <div className="flex flex-col items-center gap-3 p-6 bg-muted rounded-lg">
              <Instagram className="w-6 h-6 text-accent" />
              <p className="text-sm font-medium">Instagram</p>
              <a
                href="https://www.instagram.com/tanishkaartwork.03?igsh=YjY0b2NudWV2NGdr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                @tanishkaartwork.03
              </a>
            </div>
          </div>
        </div>
      </div>
      <footer className="mt-24 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        <p>© 2025 Tanishka Agarwal. All rights reserved.</p>
      </footer>
    </section>
  )
}
