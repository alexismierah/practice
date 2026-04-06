"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600 hover:text-blue-500 transition-colors">
        <Link href="/">Tech Company</Link>
      </div>

      {/* Navigation */}
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6 items-center">
          
          {/* Home */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/">Home</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* About */}
          <NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link href="/about">About</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          {/* Services Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent className="rounded-lg shadow-lg border bg-white p-4 w-[260px]">
              <div className="grid gap-2">
                <NavigationMenuLink asChild>
                  <Link href="/services" className="font-semibold">All Services</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/services/structured-cabling">Structured Cabling</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/services/cctv">CCTV</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/services/ip-ipbx">IP-PBX System</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/services/access-control">Access Control</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/services/public-address">Public Address</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/services/network-security">Network & Security</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/services/conference">Conference System</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/services/parking">Parking System</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/services/solar">Solar Power</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/services/ups">UPS</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/services/led-display">LED Display</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="/services/video-intercom">Video Intercom</Link>
                </NavigationMenuLink>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          {/* Contact Button */}
          <NavigationMenuItem>
            <Button asChild variant="outline" className="hover:bg-blue-50">
              <Link href="/contact">Contact</Link>
            </Button>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}