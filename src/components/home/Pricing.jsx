"use client";
import { plans } from '@/constants/data';
import Link from 'next/link';

export default function Pricing() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
            90% OFF - SPECIAL LAUNCH OFFER
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unlimited Word Search Generator
          </h2>
          <p className="text-xl text-gray-600">
            Limited Time Special Launch Discount
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 border-2 border-blue-600 shadow-xl relative overflow-hidden">
          <div className="absolute top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-full transform rotate-12">
            Save ${plans.monthly.standard.originalPrice - plans.monthly.standard.price}
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Complete Package</h3>
            <div className="mb-4">
              <span className="text-5xl font-bold text-green-600">${plans.monthly.standard.price}</span>
              <span className="text-lg text-gray-600">/month</span>
              <span className="text-2xl line-through text-gray-400 ml-2">${plans.monthly.standard.originalPrice}/mo</span>
            </div>
            <p className="text-gray-600 mb-8">90% Off - Limited Time Offer!</p>
          </div>

          <ul className="space-y-4 mb-8">
            {plans.monthly.standard.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2">{feature.split(" ")[0]}</span>
                <span>{feature.split(" ").slice(1).join(" ")}</span>
              </li>
            ))}
          </ul>

          <Link 
            href="https://warriorplus.com/o2/buy/xzp148/k2fb2h/zmnfrg"
            className="w-full inline-block py-4 px-8 bg-green-600 text-white rounded-full text-lg font-semibold hover:bg-green-700 transition-colors text-center"
          >
            Get Started for Just $4.7/month
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 inline" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
          
          <p className="text-center text-sm text-gray-500 mt-4">
            Lock in this special price now before it goes back to ${plans.monthly.standard.originalPrice}/month!
          </p>
        </div>
      </div>
    </section>
  );
}
