"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-blue-400 mb-2">Tech Company</h2>
          <p className="text-gray-300">
            Providing professional tech solutions to make your business thrive.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-400 transition-colors">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Social / Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-900 text-gray-400 text-sm py-4 text-center">
        &copy; {new Date().getFullYear()} Tech Company. All rights reserved.
      </div>
    </footer>
  )
}