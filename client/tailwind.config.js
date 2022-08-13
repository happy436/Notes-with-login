/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        colors: {
            slate: colors.slate,
            orange: colors.orange,
            green: colors.green,
            teal: colors.teal,
            cyan: colors.cyan,
            sky: colors.sky,
            indigo: colors.indigo,
            violet: colors.violet,
            fuchsia: colors.fuchsia,
            rose: colors.rose
        }
    },
    plugins: []
};
