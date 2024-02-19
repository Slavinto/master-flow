import type { Config } from "tailwindcss";

const config: Config = {
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
            lg: ["18px", "21.94px"],
            xl: ["20px", "24.38px"],
            "2xl": ["24px", "29.26px"],
            "3xl": ["28px", "50px"],
            "4xl": ["48px", "58px"],
            "8xl": ["96px", "106px"],
        },
        fontFamily: {
            sans: ["Gilroy-Regular", "sans-serif"],
        },
        extend: {
            colors: {
                primary: "#175cff",
                dark: "#57586E",
                "dark-blue": "#17154b",
                "darker-blue": "#0A083B",
                "light-gray": "#959ead",
                "stroke-gray": "#E5E5E5",
                "light-green": "#36b37e",
            },
            boxShadow: {
                "3xl": "0 10px 40px rgba(0, 0, 0, 0.1)",
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
