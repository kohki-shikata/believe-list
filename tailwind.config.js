/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            'sm': '640px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 1024px) { ... }

            'lg': '1100px',
            // => @media (min-width: 1280px) { ... }

            'xl': '1440px',
            // => @media (min-width: 1440px) { ... }
        },
        extend: {

        },
    },
    plugins: [],
}