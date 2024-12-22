"use client";
import Link from 'next/link';
import { footerLinks, disclaimer } from '@/constants/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 pt-16 pb-12 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Legal Links */}
        <div className="flex justify-center space-x-8 mb-8">
          {footerLinks.legal.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-gray-600 hover:text-gray-900 text-sm"
            >
              {link.title}
            </Link>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-4xl mx-auto mb-8">
          <p className="text-xs text-gray-500 leading-relaxed">
            {disclaimer.text}
          </p>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-500">
          <p>© {currentYear} AMZKDP WordSearch Book Generator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}