import { Metadata } from "next"
import AboutClient from "./aboutpage"

export const metadata: Metadata = {
  title: "About Us",
}

export default function AboutPage() {
  return <AboutClient />
}