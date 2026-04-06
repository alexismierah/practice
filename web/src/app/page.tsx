"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <div className="flex flex-col">

      {/* Landing Section */}
      <section className="h-screen bg-blue-50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">Welcome to Tech Company</h1>
        <p className="text-lg text-gray-700 mb-6">
          Professional tech solutions to make your business thrive.
        </p>
        <Link href="/services">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors">
            View Services
          </button>
        </Link>
      </section>

      {/* About Us Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          Tech Company provides innovative solutions in structured cabling, CCTV systems, network security, and more. We focus on quality, reliability, and customer satisfaction.
        </p>
        <Link href="/about">
          <button className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors">
            Read More
          </button>
        </Link>
      </section>

      {/* Brief Services Section */}
      <section className="bg-gray-50 py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Service Card Example */}
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Structured Cabling</h3>
            <p className="text-gray-600">Efficient and reliable cabling infrastructure for your business.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">CCTV Systems</h3>
            <p className="text-gray-600">High-quality surveillance solutions to keep your premises secure.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-2">Network & Security</h3>
            <p className="text-gray-600">Advanced networking solutions with security at its core.</p>
          </div>
        </div>
        <div className="mt-8">
          <Link href="/services">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-colors">
              More Services
            </button>
          </Link>
        </div>
      </section>

      {/* Brand Partners Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Partners</h2>
        <div className="flex flex-wrap justify-center items-center gap-8 max-w-6xl mx-auto">
          {/* Replace these with real logos */}
          <div className="bg-gray-200 w-40 h-20 flex justify-center items-center rounded-lg">Brand 1</div>
          <div className="bg-gray-200 w-40 h-20 flex justify-center items-center rounded-lg">Brand 2</div>
          <div className="bg-gray-200 w-40 h-20 flex justify-center items-center rounded-lg">Brand 3</div>
          <div className="bg-gray-200 w-40 h-20 flex justify-center items-center rounded-lg">Brand 4</div>
        </div>
      </section>

    </div>
  )
}