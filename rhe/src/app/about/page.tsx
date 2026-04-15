import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-12 md:px-24 py-24">

      {/* Eyebrow */}
      <p className="font-sans text-[14px] tracking-[0.18em] text-gray-400 mb-5">
        Where nature meets permanence
      </p>

      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-16">

        {/* Left: Text */}
        <div className="flex-1">

          {/* Headline */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-normal text-gray-900 leading-tight mb-1">
            Rich Haven
          </h1>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-normal text-emerald-700 italic leading-tight mb-8">
            Artificial Garden
          </h1>

          {/* Body Copy */}
          <div className="space-y-6">
            <p className="font-serif text-base md:text-lg leading-[1.8] text-gray-500">
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

        </div>

        {/* Right: Image */}
        <div className="w-full lg:w-[480px] -mt-6 lg:-mt-12 relative">

          {/* Shadow BG Flower */}
          <Image
            src="/Untitled design (2).png"
            alt=""
            aria-hidden="true"
            width={800}
            height={600}
            className="absolute inset-0 w-full h-auto object-contain rounded-2xl opacity-[0.13]"
            style={{ filter: "blur(8px) saturate(0.3) brightness(0.4)", top: "-14%", left: "-10%", width: "120%" }}
          />

          {/* Main Flower */}
          <Image
            src="/Untitled design (2).png"
            alt="Rich Haven Artificial Garden"
            width={800}
            height={600}
            className="relative z-10 w-full h-auto object-contain rounded-2xl"
          />

        </div>

      </div>

    </main>
  );
}