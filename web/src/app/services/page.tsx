"use client"

import Link from "next/link"
import Image from "next/image"

const services = [
  {
    name: "Structured & Network Cabling",
    desc: "We design and implement reliable cabling infrastructure that forms the backbone of your connectivity — built for scale, speed, and long-term performance.",
    tag: "Infrastructure",
    href: "/services/structured-cabling",
    img: "/images/services/structured-cabling.jpg",
  },
  {
    name: "CCTV Surveillance",
    desc: "Our solutions include IP camera networks for continuous site monitoring, remote security management, and intelligent video analytics.",
    tag: "Security",
    href: "/services/cctv",
    img: "/images/services/cctv.jpg",
  },
  {
    name: "IP-PBX System",
    desc: "We design and implement scalable VoIP telephony architectures that manage internal and external voice communications over a unified data network.",
    tag: "Communication",
    href: "/services/ip-pbx",
    img: "/images/services/ip-pbx.jpg",
  },
  {
    name: "Access Control System",
    desc: "Secure and efficient entry management using smart card readers, biometric authentication, and centralized access policies across your premises.",
    tag: "Security",
    href: "/services/access-control",
    img: "/images/services/access-control.jpg",
  },
  {
    name: "Public Address System",
    desc: "Clear and reliable audio systems for announcements, emergency broadcasts, and background audio across large facilities and multi-zone environments.",
    tag: "Audio",
    href: "/services/public-address",
    img: "/images/services/public-address.jpg",
  },
  {
    name: "Network & Security",
    desc: "Robust enterprise networking architecture with integrated firewall, intrusion detection, and end-to-end encryption for comprehensive protection.",
    tag: "Network",
    href: "/services/network-security",
    img: "/images/services/network-security.jpg",
  },
  {
    name: "Conference System",
    desc: "Professional audio-visual conference setups with seamless integration for hybrid meetings, presentations, and collaboration in any room size.",
    tag: "AV",
    href: "/services/conference",
    img: "/images/services/conference.jpg",
  },
  {
    name: "Parking System",
    desc: "Smart parking management with automated barriers, ANPR cameras, and real-time monitoring for efficient vehicle flow and space utilization.",
    tag: "Automation",
    href: "/services/parking",
    img: "/images/services/parking.jpg",
  },
  {
    name: "Solar Power",
    desc: "Sustainable photovoltaic energy systems designed for commercial and industrial applications, reducing costs and carbon footprint.",
    tag: "Energy",
    href: "/services/solar",
    img: "/images/services/solar.jpg",
  },
  {
    name: "UPS Systems",
    desc: "Reliable uninterruptible power supply solutions that protect critical equipment and ensure business continuity during outages.",
    tag: "Energy",
    href: "/services/ups",
    img: "/images/services/ups.jpg",
  },
  {
    name: "LED Display",
    desc: "High-brightness LED display installations for indoor and outdoor advertising, wayfinding, and dynamic information boards.",
    tag: "Display",
    href: "/services/led-display",
    img: "/images/services/led-display.jpg",
  },
  {
    name: "Video Intercom",
    desc: "Integrated video intercom systems for residential and commercial buildings with remote door access and mobile app connectivity.",
    tag: "Security",
    href: "/services/video-intercom",
    img: "/images/services/video-intercom.jpg",
  },
]

export default function ServicesPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="mb-12 pb-8 border-b border-gray-200">
        <p className="text-xs font-medium tracking-widest uppercase text-gray-400 mb-2">
          What we offer
        </p>
        <h1 className="font-serif text-4xl font-normal text-gray-900 mb-2 leading-tight">
          Our Services
        </h1>
        <p className="text-sm text-gray-500 font-light">
          Professional technology solutions for modern businesses.
        </p>
      </div>

      {/* Service rows */}
      <div className="flex flex-col divide-y divide-gray-100">
        {services.map((service, index) => (
          <Link
            key={service.href}
            href={service.href}
            className="group grid grid-cols-2 gap-10 py-10 px-1 rounded-md hover:bg-gray-50 transition-colors duration-200 items-center"
          >
            {/* Left: text */}
            <div className="flex flex-col gap-3 pr-4">

              {/* Meta row */}
              <div className="flex items-center gap-3">
                <span className="font-serif text-xs text-gray-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase px-2 py-0.5 rounded-full border border-gray-200 bg-gray-100 text-gray-400">
                  {service.tag}
                </span>
              </div>

              {/* Title */}
              <h2 className="font-serif text-2xl font-normal text-gray-900 leading-snug group-hover:text-blue-700 transition-colors duration-200">
                {service.name}
              </h2>

              {/* Description */}
              <p className="text-sm font-light text-gray-500 leading-relaxed">
                {service.desc}
              </p>

              {/* Read more */}
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 mt-1 group-hover:gap-2.5 transition-all duration-200">
                Read more <span>→</span>
              </span>

            </div>

            {/* Right: image */}
            <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-100">
              <Image
                src={service.img}
                alt={service.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}