/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                fadeInLeft: {
                    '0%': { transform: 'translateX(-50px)', opacity: '0' },
                    '100%': { transform: 'translateX(0)', opacity: '1' },
                },
                fadeOutLeft: {
                    '0%': { opacity: '1' },
                    '100%': { transform: 'translateX(-50px)', opacity: '0' },
                },
            },
            animation: {
                fadeInLeft: 'fadeInLeft 0.2s ease-in-out both',
                fadeOutLeft: 'fadeOutLeft 0.2s ease-in-out both',
            },
        },
    },
    plugins: [],
}
