const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: [
        "./src/components/**/*.{js,md,ts,jsx,mdx,tsx}",
        "./src/context/**/*.{js,md,ts,jsx,mdx,tsx}",
        "./src/hooks/**/*.{js,md,ts,jsx,mdx,tsx}",
        "./src/lib/**/*.{js,md,ts,jsx,mdx,tsx}",
        "./src/pages/**/*.{js,md,ts,jsx,mdx,tsx}"
    ],
    theme: {
        screens: {
            xxs: "375px",
            xs: "400px",
            xxl: "1300px",
            xsPlus: "477px",
            ...defaultTheme.screens
        },
        extend: {
            colors: {
                primary: "#2A3747",
                "primary-dark": "#111827",
                secondary: colors.indigo["100"],
                "secondary-dark": colors.indigo["200"],
                danger: colors.red["400"],
                "danger-dark": colors.red["500"],
                "danger-darker": colors.red["600"],
                "danger-darkest": colors.red["900"],
                info: colors.blue["400"],
                "info-dark": colors.blue["500"],
                success: colors.green["400"],
                "success-dark": colors.green["500"],
                warning: colors.amber["400"],
                "warning-dark": "#5F4B06"
            },
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans]
            },

            fontSize: {
                xxs: "0.65rem"
            }
        }
    },
    variants: {
        extend: {}
    },
    plugins: [
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography")
    ]
};
