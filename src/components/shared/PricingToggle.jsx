"use client";

export default function PricingToggle({ selected, onToggle }) {
  return (
    <div className="flex justify-center items-center space-x-4">
      <span className={`cursor-pointer ${selected === 'monthly' ? 'text-blue-600' : 'text-gray-500'}`}
            onClick={() => onToggle('monthly')}>
        Monthly
      </span>
      <button 
        className={`w-16 h-8 rounded-full p-1 transition-colors duration-200 ${
          selected === 'yearly' ? 'bg-blue-600' : 'bg-gray-200'
        }`}
        onClick={() => onToggle(selected === 'monthly' ? 'yearly' : 'monthly')}
      >
        <div className={`w-6 h-6 rounded-full bg-white transform transition-transform duration-200 ${
          selected === 'yearly' ? 'translate-x-8' : ''
        }`} />
      </button>
      <span className={`cursor-pointer ${selected === 'yearly' ? 'text-blue-600' : 'text-gray-500'}`}
            onClick={() => onToggle('yearly')}>
        Yearly (Save 20%)
      </span>
    </div>
  );
}