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
            // (İleride özel renkler eklemek istersek burayı kullanacağız)
        },
    },
    plugins: [],
}
export default config