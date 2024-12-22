export default function Button({ children, variant = "primary", className = "", ...props }) {
    const baseStyles = "px-4 py-2 rounded-lg font-semibold transition-colors duration-200";
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "border border-blue-600 text-blue-600 hover:bg-blue-50",
      white: "bg-white text-blue-600 hover:bg-gray-100"
    };
  
    return (
      <button 
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }