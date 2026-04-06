"use client"

import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="flex flex-col">

      {/* Hero Section */}
      <section className="h-[50vh] bg-blue-50 flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-5xl font-bold text-blue-600 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 max-w-2xl">
          Tech Company is dedicated to providing innovative technology solutions for businesses of all sizes.
        </p>
      </section>

      {/* Company Story Section */}
      <section className="bg-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Story</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Founded with a passion for technology and innovation, Tech Company started as a small team of IT enthusiasts
            determined to make professional tech solutions accessible to every business. Over the years, we have grown
            into a trusted partner for structured cabling, CCTV systems, network and security solutions, and more. Our
            commitment has always been to deliver reliable, efficient, and tailored solutions that help our clients
            succeed in the digital world.
          </p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Today, we combine expertise, cutting-edge tools, and a client-first approach to ensure that every project we
            undertake exceeds expectations. At Tech Company, we believe in building long-term relationships and
            contributing to the growth of businesses through technology.
          </p>
        </div>
      </section>

    </div>
  )
}