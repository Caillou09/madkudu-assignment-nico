module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}", "./public/index.html"],
    darkMode: "class",
    mode: "jit",
    important: true, // important in prod is must be
    theme: {
        extend: {
            colors: {
                "dark-blue": " #182b52",
                "slate-blue": "#4b9fefff",
                "lavender-green": "#4dccbdff",
                "yellow": " #efc932",
            },
        },
    },
    plugins: [],
};
