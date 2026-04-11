import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">

      {/* HERO */}
      <section className="relative flex items-center justify-center text-center px-6 py-28 bg-gradient-to-b from-green-50/40 to-background dark:from-green-950/20">

        <div className="max-w-3xl">
          
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight [font-family:var(--font-playfair)]">
            Premium Artificial Grass & Green Spaces
          </h1>

          <p className="mt-5 text-muted-foreground text-sm md:text-base leading-relaxed">
            Rich Haven Enterprises transforms homes, offices, and outdoor spaces
            with high-quality artificial grass and decorative plants — built for
            beauty, designed for low maintenance.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            
            {/* FIXED BUTTON */}
            <Link href="/contact-page">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                Get a Quote
              </Button>
            </Link>

            <Button variant="outline">
              View Portfolio
            </Button>

          </div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-3 gap-10 text-center">

        <div>
          <h3 className="font-semibold text-lg">Low Maintenance</h3>
          <p className="text-sm text-muted-foreground mt-2">
            No watering, no trimming — just always-green spaces.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Premium Quality</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Durable artificial grass and realistic plant designs.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg">Custom Design</h3>
          <p className="text-sm text-muted-foreground mt-2">
            Tailored landscaping solutions for any space.
          </p>
        </div>

      </section>

    </main>
  )
}