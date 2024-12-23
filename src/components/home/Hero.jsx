"use client";
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-8">
            Create & Sell Word Search Puzzle Books
            <span className="text-blue-600 block mt-2">
              In Minutes, Not Months!
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed">
            Generate professional, print-ready word search puzzle books for Amazon KDP. 
            No design skills needed. Just add your words and let our AI do the magic!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link 
              href="https://warriorplus.com/o2/buy/xzp148/k2fb2h/zmnfrg" 
              className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-200"
            >
              Start Creating
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
            <button 
              onClick={() => document.getElementById('demo-video').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:text-gray-900 transition-colors duration-200"
            >
              Watch Demo
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          <div id="demo-video" className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="aspect-video rounded-lg mb-8 relative overflow-hidden">
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://www.youtube.com/embed/tXo0bS2vwIo?rel=0&modestbranding=1"
                title="Word Search Puzzle Generator Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
