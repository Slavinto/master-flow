import type { Config } from "tailwindcss";

const config: Config = {
    "editor.quickSuggestions": {
        strings: true,
        other: true,
        comments: true,
    },
    "css.validate": false,
    "editor.inlineSuggest.enabled": true,
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontSize: {
            xs: ["12px", "16px"],
            sm: ["14px", "20px"],
            base: ["16px", "19.5px"],
            lg: ["18px", "32px"],
            xl: ["20px", "24.38px"],
            "2xl": ["24px", "34px"],
            "3xl": ["28px", "50px"],
            "4xl": ["48px", "60px"],
            "8xl": ["96px", "106px"],
        },
        fontFamily: {
            light: ["Gilroy-Light", "sans-serif"],
            sans: ["Gilroy-Regular", "sans-serif"],
            medium: ["Gilroy-Medium", "sans-serif"],
            semibold: ["Gilroy-Semibold", "sans-serif"],
            bold: ["Gilroy-Bold", "sans-serif"],
            extrabold: ["Gilroy-ExtraBold", "sans-serif"],
        },
        extend: {
            colors: {
                primary: "#175cff",
                "primary-transparent": "rgba(23, 92, 255, 0.2)",
                dark: "#57586E",
                "dark-blue": "#17154b",
                "darker-blue": "#0A083B",
                "question-darker-blue": "#242256",
                "light-gray": "#959ead",
                "stroke-gray": "#E5E5E5",
                "stroke-gray2": "#d8d8d8",
                "stroke-gray3": "rgba(216, 216, 216, 0.38)",
                "light-green": "#36b37e",
            },
            boxShadow: {
                "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
            },
            backgroundColor: {
                "canvas-darker-blue": "#242256",
                "gray-canvas": "#E5E5E5",
                "gray-canvas2": "#f4f4f4",
            },
            backgroundImage: {
                hero: "url('assets/images/collection-background.svg')",
                card: "url('assets/images/thumbnail-background.svg')",
            },
            screens: {
                wide: "1440px",
            },
        },
    },
    plugins: [],
};
export default config;
