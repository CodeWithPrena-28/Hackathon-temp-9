import React from 'react'
import { Search, ShoppingBag, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'


export default function page() {
  return (
    <div className='min-h-screen'>


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
        <Link href="/blog" className="text-white hover:text-orange-500">
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
        <button className="text-orange-500">
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
      <h1 className="mb-4 text-5xl font-bold text-white">Sign Up Page</h1>
      <div className="flex items-center gap-2 text-lg">
        <Link href="/" className="text-white hover:text-orange-500">
          Home
        </Link>
        <span className="text-white">&gt;</span>
        <span className="text-orange-500">Sign Up</span>
      </div>
    </div>
  </div>
    </header>
    {/* navbar end */}





    <div className="max-w-sm mx-auto mt-14 mb-14 p-6 bg-white shadow-2xl rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>
      <form>
        {/* Name Input */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Password Input */}
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500"
          />
        </div>

        {/* Remember Me Checkbox */}
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            className="h-4 w-4 text-orange-500 border-gray-300 rounded"
          />
          <label className="ml-2 text-sm text-gray-700">Remember me?</label>
        </div>

        {/* Sign Up Button */}
        <button
          type="button"
          className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
        >
          Sign Up
        </button>
      </form>

      {/* Forgot Password */}
      <div className="mt-4 text-center">
        <Link href="#" className="text-sm text-orange-500 hover:underline">
          Forgot password?
        </Link>
      </div>
      <div className="mt-4 text-center">
        <Link href="/account/login" className="text-sm text-orange-500 hover:underline">
          Login?
        </Link>
      </div>

      {/* OR Separator */}
      <div className="flex items-center my-6">
        <div className="flex-grow h-px bg-gray-300"></div>
        <span className="px-4 text-sm text-gray-500">OR</span>
        <div className="flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Social Sign Up */}
      <div className="flex flex-col space-y-4">
        <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
          <Image src="/google.png" alt="Google" width={5} height={5} className="w-5 h-5 mr-2" />
          Sign up with Google
        </button>
        <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
          <Image src="/apple.png" alt="Apple" width={5} height={5} className="w-5 h-5 mr-2" />
          Sign up with Apple
        </button>
      </div>
    </div>
    </div>
  )
}
