import React from 'react'
import { Search, ShoppingBag, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function page() {
  return (
    <div className='min-h-screen'>
        {/* navbar */}
        <header className="top-0 left-0 right-0 z-50">
      <nav className="bg-black px-4 md:px-6">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center text-xl font-bold text-white">
            Food<span className="text-orange-500">tuck</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            
            <Link href="/" className="text-white hover:text-orange-500">
              Home
            </Link>
            <Link href="/menu" className="text-white hover:text-orange-500">
              Menu
            </Link>
            <Link href="/blog" className="text-orange-500">
              Blog
            </Link>
            <Link href="/pages" className="text-white hover:text-orange-500">
              Pages
            </Link>
            <Link href="/about" className="text-white hover:text-orange-500">
              About
            </Link>
            <Link href="/shop" className="text-white hover:text-orange-500">
              Shop
            </Link>
            <Link href="/contact" className="text-white hover:text-orange-500">
              Contact
            </Link>
          </div>

          {/* Right Icons */}
          <div className="flex items-center gap-4">
            
            <button className="text-white hover:text-orange-500">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </button>
            <Link
            href="/account">
            <button className="text-white hover:text-orange-500">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </button>
            </Link>
            <Link href="/cart">
            <button className="text-white hover:text-orange-500">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Cart</span>
            </button>
            </Link>
            </div>
          </div>
      </nav>

      {/* Hero Section */}
      <div className="relative h-[300px] w-full bg-cover bg-center" style={{ backgroundImage: `url('/home-pic-1.png')` }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
          <h1 className="mb-4 text-5xl font-bold text-white">Blog List</h1>
          <div className="flex items-center gap-2 text-lg">
            <Link href="/" className="text-white hover:text-orange-500">
              Home
            </Link>
            <span className="text-white">&gt;</span>
            <span className="text-orange-500">Blog</span>
          </div>
        </div>
      </div>
        </header>
        {/* navbar end */}


        {/* main content */}

        <div className="flex flex-col lg:flex-row gap-6 p-8">
        {/* Left Side - Multiple Images with Content */}
        <div className="flex-1 flex flex-col gap-8">
        {[
          {
            src: "/blog-1.png", // Replace with your image path
            title: "10 Reasons To Do A Digital Detox Challenge",
            description: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
          },
          {
            src: "/blog-2.png", // Replace with your image path
            title: "Traditional Soft Pretzels with Sweet Beer Cheese",
            description: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
          },
          {
            src: "/blog-3.png", // Replace with your image path
            title: "Egg Burger",
            description: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
          },
          {
            src: "/blog-4.png", // Replace with your image path
            title: "Pizza toast",
            description: "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat",
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            {/* Image */}
            <div className="  bg-gray-300 rounded-lg overflow-hidden">
              <Image
                src={item.src}
                alt={`Image `}
                width={871}
                height={520}
                className=""
              />
            </div>
            {/* Content */}
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-gray-800">{item.title}</h1>
              <p className="text-gray-600">{item.description}</p>
              <Link href="/blog/blog-details">
              <button className="mt-4 px-4 py-2 flex items-center justify-center gap-2 text-orange-500 border border-orange-500 rounded hover:bg-orange-100 transition-colors">
                    Read More
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                    </svg>
                    </button>
                    </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Right Side - Long Sidebar Image */}
      <div className="flex-1">
        <div className="w-full h-full bg-gray-300 rounded-lg overflow-hidden">
          <Image
            src="/blog-5.png" // Replace with your sidebar image path
            alt="Sidebar Image"
            className="w-full h-[calc(100%-1rem)] object-cover"
            width={425}
            height={2501}
          />
        </div>
      </div>
    </div>

            
        <div className='flex justify-center mt-7 mb-7'>
            <Image
            src="/blog-6.png"
            alt='shop'
            height={500}
            width={500}
            className=''/>
        </div>
        
    
    </div>

  )
}
