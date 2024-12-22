"use client";
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-blue-600">
            WordSearch Puzzle Book Generator
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link 
              href="https://amz-kappa.vercel.app" 
              className="text-gray-600 hover:text-gray-900"
            >
              Login
            </Link>
            <Link 
              href="https://amz-kappa.vercel.app/register" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}