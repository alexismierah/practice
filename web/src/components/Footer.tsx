"use client"

import { useState } from "react"

export default function Footer() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, just log the form data. In production, integrate with API/email
    console.log("Quote Request Submitted:", formData)
    alert("Thank you! Your request has been submitted.")
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
        
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
            <li className="hover:text-blue-400 transition-colors">Home</li>
            <li className="hover:text-blue-400 transition-colors">About</li>
            <li className="hover:text-blue-400 transition-colors">Services</li>
            <li className="hover:text-blue-400 transition-colors">Contact</li>
          </ul>
        </div>

        {/* Request a Quote Form */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Request a Quote</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="px-3 py-2 rounded text-gray-800"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="px-3 py-2 rounded text-gray-800"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Request"
              required
              rows={3}
              className="px-3 py-2 rounded text-gray-800"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-500 transition-colors text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-gray-400 text-sm py-4 text-center">
        &copy; {new Date().getFullYear()} Tech Company. All rights reserved.
      </div>
    </footer>
  )
}