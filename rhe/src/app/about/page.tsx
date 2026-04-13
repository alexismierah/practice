export default function About() {
    return (
      <main className="min-h-screen px-6 py-20 bg-background">
  
        <div className="max-w-4xl mx-auto">
  
          <h1 className="text-3xl md:text-4xl font-semibold [font-family:var(--font-playfair)]">
            About Rich Haven Enterprises
          </h1>
  
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Rich Haven Enterprises is dedicated to transforming spaces through
            premium artificial grass and plant solutions. We focus on creating
            elegant, long-lasting green environments without the hassle of
            maintenance.
          </p>
  
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Our mission is to bring nature-inspired beauty into modern living
            and commercial spaces using high-quality, sustainable materials and
            creative design.
          </p>
  
          {/* VALUES */}
          <div className="mt-10 grid md:grid-cols-3 gap-8">
  
            <div>
              <h3 className="font-semibold">Quality</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We use durable, realistic materials that last for years.
              </p>
            </div>
  
            <div>
              <h3 className="font-semibold">Design</h3>
              <p className="text-sm text-muted-foreground mt-2">
                Every project is tailored to match your space and style.
              </p>
            </div>
  
            <div>
              <h3 className="font-semibold">Service</h3>
              <p className="text-sm text-muted-foreground mt-2">
                We prioritize client satisfaction from start to finish.
              </p>
            </div>
  
          </div>
  
        </div>
  
      </main>
    )
  }