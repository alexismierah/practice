export default function Portfolio() {
    return (
      <main className="min-h-screen px-6 py-20 bg-background">
  
        <div className="max-w-6xl mx-auto">
  
          <h1 className="text-3xl md:text-4xl font-semibold [font-family:var(--font-playfair)] text-center">
            Our Portfolio
          </h1>
  
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
            A collection of our artificial grass and landscaping projects
            designed to bring life and elegance to every space.
          </p>
  
          {/* GRID */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
  
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="h-56 rounded-xl border bg-green-50/20 dark:bg-green-950/10 flex items-center justify-center text-muted-foreground hover:scale-[1.02] transition"
              >
                Project {item}
              </div>
            ))}
  
          </div>
  
        </div>
  
      </main>
    )
  }