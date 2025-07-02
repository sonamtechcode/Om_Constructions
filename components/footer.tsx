import { Building2, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Building2 className="h-8 w-8 text-orange-600" />
              <span className="text-xl font-bold">OmConscructions</span>
            </div>
            <p className="text-slate-300 mb-4">
              Building excellence since 2008. We specialize in residential, commercial, and industrial construction
              projects across India.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-400 hover:text-orange-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-300 hover:text-orange-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-orange-600 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-300 hover:text-orange-600 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-slate-300 hover:text-orange-600 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-orange-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-slate-300">Residential Construction</li>
              <li className="text-slate-300">Commercial Buildings</li>
              <li className="text-slate-300">Industrial Facilities</li>
              <li className="text-slate-300">Renovation & Remodeling</li>
              <li className="text-slate-300">Project Management</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                <div className="text-slate-300">
                  <p>Sector 45, Plot No. 123</p>
                  <p>Noida, UP 201301, India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <div className="text-slate-300">
                  <p>+91-9876543210</p>
                  <p>+91-9876543211</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-orange-600 flex-shrink-0" />
                <div className="text-slate-300">
                  <p>info@xyzconstructions.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">© {currentYear} OmConscructions. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-slate-400 hover:text-orange-600 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-600 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-slate-400 hover:text-orange-600 text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
