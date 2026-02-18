module.exports = {
    content: [
        "./pages/**/*.{vue,js}",
        "./components/**/*.{vue,js}",
        "./layouts/**/*.{vue,js}",
        "./plugins/**/*.{js,ts}",
        "./nuxt.config.{js,ts}"
    ],
    darkMode: '.p-dark',
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '16px',   // по умолчанию (мобилки)
                sm: '16px',
                md: '24px',
                lg: '20px',
                xl: '0',
                '2xl': '0'
            },
            screens: {
                sm: '640px',
                md: '990px',
                lg: '1200px',
                xl: '1340px',
                '2xl': '1340px'
            }
        },
        extend: {
            colors: {
                primary: '#1E37A3', // Добавляем свой основной цвет
                secondary: '#9333EA', // Добавляем второй цвет
                customGray: '#B0B0B0', // Добавляем пользовательский серый
            },
        },
    },
    plugins: [require('tailwindcss-primeui')]
}
