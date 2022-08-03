/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            screens: {
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
            },
            colors: {
                headingColor: '#2e2e2e',
                textColor: "#515151",
                cartNumBg: "#c800fd",
                primary: "#f5f3f3",
                cardOverlay: "rgba(256,256,256,0.4)",
                lighttextGray: "#9ca0ab",
                card: "rgba(256,256,256,0.8)",
                cartBg: "#282a2c",
                cartItem: "#2e3033",
                cartTotal: "#343739"
            },
            height: {
                42: "42px",
                225: "225px",
                370: "370px",
                420: "420px",
                650: "650px",
            },
            width: {
                190: "190px",
                225: "225px",
                275: "275px",
                300: "300px",
                340: "340px",
                350: "350px",
                375: "375px"
            }
        },
    },
    plugins: [
        require('tailwind-scrollbar')
    ],
}