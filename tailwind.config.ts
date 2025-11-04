// tailwind.config.ts (DOĞRU İÇERİK)

import type { Config } from 'tailwindcss'

const config: Config = {
    // Bu 'content' dizisi, Tailwind'e hangi dosyaları
    // tarayacağını söyler (RENKLERİ BURADAN BULACAK!)
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            // Özel site renkleri: bg-site-gray ve text-site-beige gibi sınıflar kullanabilirsiniz
            colors: {
                'site-gray': '#2f2f2f',
                'site-gray-dark': '#232323',
                'site-beige': '#E6D8B7',
            },
        },
    },
    plugins: [],
}
export default config