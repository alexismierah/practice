import { Metadata } from "next"
import AboutUs from "./aboutpage"

export const metadata: Metadata = {
  title: "About Us | Unifix ICT Solutions",
}

export default function AboutPage() {
  return <AboutUs />
}