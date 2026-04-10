import { Metadata } from "next"
import ServicesPage from "./servicespage"

export const metadata: Metadata = {
  title: "Services",
}

export default function Page() {
  return <ServicesPage />
}