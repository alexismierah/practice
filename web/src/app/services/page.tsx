export default function ServicesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Our Services</h1>
      <p>We provide a wide range of tech solutions:</p>

      <ul className="mt-4 list-disc list-inside">
        <li><a href="/services/structured-cabling">Structured & Network Cabling</a></li>
        <li><a href="/services/cctv">CCTV</a></li>
        <li><a href="/services/ip-pbx">IP-PBX System</a></li>
        <li><a href="/services/access-control">Access Control System</a></li>
        <li><a href="/services/public-address">Public Address System</a></li>
        <li><a href="/services/network-security">Network & Security</a></li>
        <li><a href="/services/conference">Conference System</a></li>
        <li><a href="/services/parking">Parking System</a></li>
        <li><a href="/services/solar">Solar Power</a></li>
        <li><a href="/services/ups">UPS</a></li>
        <li><a href="/services/led-display">LED Display</a></li>
        <li><a href="/services/video-intercom">Video Intercom</a></li>
      </ul>
    </div>
  )
}