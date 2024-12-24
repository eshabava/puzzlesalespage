"use client";
import React from 'react';

export default function ComingSoon() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-8 inline-block">
            Coming Soon - At No Extra Cost!
          </span>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Math Worksheet Generator
            <span className="block text-blue-600 mt-2">
              Create Professional Math Practice Books
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 mb-8">
            Generate unlimited math worksheets and practice books. Perfect for teachers, tutors, and educational publishers.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">➕</div>
                <p className="text-gray-600">Addition</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">➖</div>
                <p className="text-gray-600">Subtraction</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">✖️</div>
                <p className="text-gray-600">Multiplication</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">➗</div>
                <p className="text-gray-600">Division</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">¼</div>
                <p className="text-gray-600">Fractions</p>
              </div>
            </div>

            <hr className="my-8" />

            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Multiple difficulty levels
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Answer keys included
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Professional layouts
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                KDP-ready export
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-semibold text-blue-600">Included at no extra cost with your subscription!</span>
              </li>
            </ul>

            <button 
              className="w-full mt-8 py-4 px-8 bg-gray-100 text-gray-600 rounded-full text-lg font-semibold cursor-not-allowed opacity-75"
              disabled
            >
              Coming Soon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
