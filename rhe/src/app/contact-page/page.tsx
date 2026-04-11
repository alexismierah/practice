import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <main className="min-h-screen bg-background">

      {/* HERO */}
      <section className="px-6 py-20 text-center bg-gradient-to-b from-green-50/40 to-background dark:from-green-950/20">
        <h1 className="text-4xl font-semibold [font-family:var(--font-playfair)]">
          Get In Touch
        </h1>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-sm">
          Let’s bring your space to life with premium artificial grass and
          plant solutions. Send us a message and we’ll get back to you quickly.
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        {/* FORM */}
        <div className="border rounded-xl p-6 bg-background shadow-sm">
          <h2 className="text-lg font-semibold mb-6">Send a Message</h2>

          <div className="space-y-4">

            <Input placeholder="Your Name" />
            <Input placeholder="Email Address" type="email" />
            <Input placeholder="Phone Number" />
            <Textarea placeholder="Your Message..." rows={5} />

            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
              Send Message
            </Button>

          </div>
        </div>

        {/* INFO */}
        <div className="space-y-8">

          <div>
            <h2 className="text-lg font-semibold mb-2">Contact Information</h2>
            <p className="text-sm text-muted-foreground">
              We’re here to help you design your perfect green space.
            </p>
          </div>

          <div className="space-y-4 text-sm text-muted-foreground">

            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-green-600" />
              hello@richhaven.com
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-green-600" />
              +63 912 345 6789
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-green-600" />
              Philippines
            </div>

          </div>

          {/* EXTRA CARD */}
          <div className="border rounded-xl p-5 bg-green-50/30 dark:bg-green-950/10">
            <h3 className="font-semibold">Business Hours</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Monday – Saturday <br />
              9:00 AM – 6:00 PM
            </p>
          </div>

        </div>

      </section>

    </main>
  )
}