import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-800 px-12 md:px-24 py-24">

      {/* Eyebrow */}
      <p className="font-sans text-[14px] tracking-[0.18em] text-gray-400 mb-5">
        Where nature meets permanence
      </p>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-16 mb-16">

        {/* LEFT SIDE: Text */}
        <div className="flex-1">

          {/* Headline */}
          <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-normal text-gray-900 leading-tight mb-1">
            Rich Haven
          </h1>
          <h1 className="font-serif text-3xl md:text-4xl lg:text-6xl font-normal text-emerald-700 italic leading-tight mb-8">
            Artificial Garden
          </h1>

          {/* Body */}
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

        {/* RIGHT SIDE: Image (moved up) */}
        <div className="w-full lg:w-[480px] -mt-6 lg:-mt-12">
          <Image
            src="/Untitled design (2).png"
            alt="Rich Haven Artificial Garden"
            width={800}
            height={600}
            className="w-full h-auto object-contain rounded-2xl"
          />
        </div>

      </div>

      {/* Signature line (moved up) */}
      {/*<div className="flex items-center gap-4 mt-0">
        <div className="w-8 h-px bg-gray-200" />
        <span className="font-serif text-sm italic text-gray-400">
          Timeless greenery, thoughtfully made.
        </span>
      </div> */}

    </main>
  );
}