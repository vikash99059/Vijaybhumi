/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071326',
          900: '#0B1B3D', // Corporate Deep Navy (from reference)
          850: '#0E244F',
          800: '#132E64',
          700: '#1C4088',
          600: '#2554B0',
          50: '#F0F5FF',
        },
        gold: {
          50: '#FFFDF0',
          100: '#FFF9C2',
          400: '#FACC15',
          500: '#EAB308', // Vibrant Industrial Gold / Yellow (from reference)
          600: '#CA8A04',
          700: '#A16207',
        },
        industrial: {
          orange: '#E67E22',
          orangeDark: '#D35400',
          amber: '#F59E0B',
          yellow: '#EAB308',
          gold: '#C89B3C',
        },
        surface: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          card: '#FFFFFF',
          dark: '#0B1B3D',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'card-subtle': '0 2px 12px -2px rgba(11, 27, 61, 0.08), 0 1px 4px -1px rgba(11, 27, 61, 0.04)',
        'card-hover': '0 12px 28px -6px rgba(11, 27, 61, 0.12), 0 4px 12px -2px rgba(11, 27, 61, 0.06)',
        'navy-glow': '0 8px 24px -4px rgba(11, 27, 61, 0.35)',
        'gold-glow': '0 6px 20px -2px rgba(234, 179, 8, 0.4)',
      },
      borderRadius: {
        'wave': '0 0 50% 50% / 0 0 15% 15%',
      }
    },
  },
  plugins: [],
}
