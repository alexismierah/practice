export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-12 md:px-24 py-24">

      {/* Eyebrow */}
      <p className="font-sans text-[11px] tracking-[0.18em] text-gray-400 uppercase mb-8">
        Who we are &nbsp;·&nbsp; Rich Haven Artificial Garden
      </p>

      <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-normal text-gray-900 leading-tight mb-1">
        Where nature
      </h1>
      <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-normal text-emerald-700 italic leading-tight mb-16">
        meets permanence.
      </h1>

      {/* Ornamental rule */}
      <div className="flex items-center gap-4 mb-16">
        <div className="flex-1 h-px bg-gray-200" />
        <div className="w-1.5 h-1.5 bg-gray-500 rotate-45 flex-shrink-0" />
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <div className="mb-24">
        <p className="font-serif text-base md:text-lg leading-[1.8] text-gray-500 mb-8">
          At Rich Haven Artificial Garden, we bring nature-inspired beauty to every
          space — without the maintenance. We specialize in high-quality artificial
          greenery, including potted plants, wall greens, hanging plants, and
          artificial turf, thoughtfully designed to enhance homes, offices, and
          commercial spaces.
        </p>

        <p className="font-serif text-base md:text-lg leading-[1.8] text-gray-500">
          Our products combine realistic aesthetics with durability, offering a
          lasting green solution that stays fresh and vibrant all year round.
          Whether you're elevating an interior, transforming an outdoor area, or
          creating a calming atmosphere, Rich Haven delivers style, quality, and
          timeless greenery you can rely on.
        </p>
      </div>

      {/* Signature line */}
      <div className="flex items-center gap-4 mt-16">
        <div className="w-8 h-px bg-gray-200" />
        <span className="font-serif text-sm italic text-gray-400">
          Timeless greenery, thoughtfully made.
        </span>
      </div>

    </main>
  );
}