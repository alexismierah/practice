import { Metadata } from "next"
import ServicesPage from "./servicespage"

export const metadata: Metadata = {
  title: "Services | Unifix ICT Solutions",
}

export default function Page() {
  return <ServicesPage />
}