/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // myScheme.gov.in Official Color Theme
        'gov-orange': '#FF6B35',      // Primary orange (inspired by Indian flag)
        'gov-orange-light': '#FF8A5B',  // Light orange for hover states
        'gov-orange-dark': '#E55A2B',   // Dark orange for active states
        
        'gov-blue': '#1E3A8A',        // Deep blue (government official)
        'gov-blue-light': '#2563EB',    // Light blue for hover
        'gov-blue-dark': '#1E40AF',     // Darker blue for active
        
        'gov-green': '#16A34A',       // Success green (flag inspired)
        'gov-green-light': '#22C55E',   // Light green
        'gov-green-dark': '#15803D',    // Dark green
        
        'gov-red': '#DC2626',         // Danger/error red
        'gov-red-light': '#EF4444',
        'gov-red-dark': '#B91C1C',
        
        'gov-gray-50': '#F9FAFB',
        'gov-gray-100': '#F3F4F6',          // Page background
        'gov-gray-200': '#E5E7EB',
        'gov-gray-300': '#D1D5DB',
        'gov-gray-400': '#9CA3AF',
        'gov-gray-500': '#6B7280',          // Muted text
        'gov-gray-600': '#4B5563',
        'gov-gray-700': '#374151',
        'gov-gray-800': '#1F2937',
        'gov-gray-900': '#111827',
      }
    },
  },
  plugins: [],
}