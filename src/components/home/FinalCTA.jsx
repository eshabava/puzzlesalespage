import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="py-20 bg-blue-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-8">
          Ready to Start Creating Your Word Search Puzzle Books?
        </h2>
        <Link 
          href="https://warriorplus.com/o2/buy/xzp148/k2fb2h/zmnfrg"
          className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100 transition-colors"
        >
          Get Started Now
        </Link>
      </div>
    </section>
  );
}
