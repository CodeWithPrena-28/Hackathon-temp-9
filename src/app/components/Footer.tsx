import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Clock, Facebook, Instagram, Mail, Twitter, } from 'lucide-react'


export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container px-4 py-12 mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">
              <span className="text-orange-500">St</span>ill You Need Our Support ?
            </h2>
            <p className="text-gray-400">Don&apos;t wait make a smart & logical quote here. Its pretty easy.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <Input 
              type="email" 
              placeholder="Enter Your Email" 
              className="bg-transparent border-gray-700"
            />
            <Button className="bg-orange-500 hover:bg-orange-600">
              Subscribe Now
            </Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-gray-800 pt-12">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us.</h3>
            <p className="text-gray-400 mb-4">
              Corporate clients and leisure travelers hasbeen relying on Groundlink for dependablesafe, and professional chauffeured carservice in major cities across World.
            </p>
            <div className="flex items-start gap-3">
              <Clock className="text-orange-500 mt-1" />
              <div>
                <h4 className="font-bold">Opening Hours</h4>
                <p className="text-gray-400">Mon - Sat(8:00 - 6:00)</p>
                <p className="text-gray-400">Sunday - Closed</p>
              </div>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/partners">Partners</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/menu">Menu</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/pages">Pages</Link></li>
              <li><Link href="/shop">Shop</Link></li>
              <li><Link href="/cart">Account</Link></li>
              <li><Link href="/cart">Cart</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-xl font-bold mb-4">Help?</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/term">Term & Condition</Link></li>
              <li><Link href="/reporting">Reporting</Link></li>
              <li><Link href="/documentation">Documentation</Link></li>
              <li><Link href="/support">Support Policy</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div>
            <h3 className="text-xl font-bold mb-4">Recent Post</h3>
            <div className="space-y-4">
              {[
                "Is fastfood good for your body?",
                "Change your food habit With organic food",
                "Do you like fastfood for your life?"
              ].map((title, index) => (
                <div key={index} className="flex gap-3">
                  <Image
                    src="/home-pic-1.png"
                    alt="Blog post thumbnail"
                    width={50}
                    height={50}
                    className="rounded"
                  />
                  <div>
                    <Link href="#" className="hover:text-orange-500 transition-colors">
                      {title}
                    </Link>
                    <p className="text-sm text-gray-500">February 28,2022</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-800 mt-12 pt-8">
          <p className="text-gray-400">Copyright © 2022 by Ayeman. All Rights Reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {[
              { name: 'Facebook', icon: Facebook },
              { name: 'Twitter', icon: Twitter },
              { name: 'Instagram', icon: Instagram },
              { name: 'Email', icon: Mail },
              
            ].map(({ name, icon: Icon }) => (
              <Link
                key={name}
                href={`#${name.toLowerCase()}`}
                className="bg-gray-800 p-2 rounded-full hover:bg-orange-500 transition-colors"
              >
                <span className="sr-only">{name}</span>
                <Icon className="w-5 h-5 text-white" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

