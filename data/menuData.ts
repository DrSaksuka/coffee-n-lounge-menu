// data/menuData.ts (TÜM YAZIM HATALARI DÜZELTİLMİŞ NİHAİ SÜRÜM)

// Önce her bir ürün için bir tür (type) tanımlayalım
export interface MenuItem {
    name: string;
    price?: number; // Fiyat TL cinsinden
}

// Menü kategorileri için bir tür tanımlayalım
export interface MenuCategory {
    categoryName: string;
    imagePath: string; // Her kategori için resim yolu
    items: MenuItem[];
}

// Tüm menü verilerimiz
export const menuData: MenuCategory[] = [
    {
        categoryName: "Kahvaltılar",
        imagePath: "/categories/serpme-kahvalti.png",
        items: [
            { name: "Karışık Tost", price: 200 },
            { name: "Kaşarlı Tost", price: 200 },
            { name: "Sucuklu Tost", price: 180 },
            { name: "Sebzeli Tost", price: 210 },
            { name: "Sebzeli Kaşarlı Tost", price: 200 },
            { name: "Kavurmalı Tost", price: 220 },
            { name: "Cips Tabağı (Patates-Soğan)", price: 150 },
            { name: "Sıcak Sepeti", price: 220 },
            { name: "Pizza Karışık (M)", price: 350 },
            { name: "Pizza Kavurmalı (M)", price: 350 },
            { name: "Pizza Karışık (L)", price: 375 },
            { name: "Pizza Kavurmalı (L)", price: 375 },
        ],
    },
    {
        categoryName: "Sıcak İçecekler",
        imagePath: "/categories/sicak-icecekler.jpg",
        items: [
            { name: "ESPRESSO", price: 125 },
            { name: "AMERICANO", price: 135 },
            { name: "LATTE", price: 160 },
            { name: "MOCHA", price: 160 },
            { name: "CARAMEL MOCHA", price: 175 },
            { name: "WHITE CHOC. MOCHA", price: 175 },
            { name: "CAPPUCCINO", price: 160 },
            { name: "SICAK ÇİKOLATA", price: 200 },
            { name: "SAHLEP", price: 150 },
            { name: "AROMALI SAHLEP", price: 160 },
        ],
    },
    {
        categoryName: "Çaylar",
        imagePath: "/categories/caylar.jpeg",
        items: [
            { name: "Demleme Çay", price: 35 },
            { name: "Fincan Çay", price: 50 },
            { name: "Kivi Çayı", price: 40 },
            { name: "Elma Çayı", price: 40 },
            { name: "Portakal Çayı", price: 40 },
            { name: "Karadut Çayı", price: 40 },
            { name: "Nane Limon", price: 40 },
            { name: "Kuşburnu", price: 40 },
            { name: "Ihlamur", price: 40 },
            { name: "Limon", price: 40 },
        ],
    },
    {
        categoryName: "Bitki Çayları",
        imagePath: "/categories/bitki-caylari.jpg",
        items: [
            { name: "Ihlamur Çayı", price: 150 },
            { name: "Ada Çayı", price: 150 },
            { name: "Papatya Çayı", price: 150 },
            { name: "Yeşil Çay", price: 150 },
            { name: "Nane Limon", price: 150 },
            { name: "Kış Çayı", price: 150 },
            { name: "Elma Tarçın", price: 150 },
        ],
    },
    {
        categoryName: "Türk Kahveleri",
        imagePath: "/categories/turk-kahveleri.jpeg",
        items: [
            { name: "Türk Kahvesi", price: 125 },
            { name: "Damla Sakızlı Türk Kah.", price: 130 },
            { name: "Vanilyalı Türk Kah.", price: 130 },
            { name: "Çikolatalı Türk Kah.", price: 130 },
            { name: "Dibek Kahvesi", price: 130 },
            { name: "Menengiç Kahvesi", price: 130 },
            { name: "Sütlü Türk Kahvesi", price: 130 },
            { name: "Osmanlı Türk Kahvesi (İkram Su ve Şekerleme)", price: 130 },
        ],
    },
    {
        categoryName: "Dünya Kahveleri",
        imagePath: "/categories/dunya-kahveleri.jpeg",
        items: [
            { name: "Guatemala", price: 160 },
            { name: "Kenya", price: 160 },
            { name: "Colombia", price: 160 },
            { name: "Filtre Kahve", price: 140 },
            { name: "Süt Potu", price: 100 },
        ],
    },
    {
        categoryName: "Espresso Bazlı Soğuk İçecekler",
        imagePath: "/categories/espresso-soguk-kahve.jpg",
        items: [
            { name: "Ice Latte", price: 170 },
            { name: "Ice Americano", price: 160 },
            { name: "Ice Coffe Mocha", price: 170 },
            { name: "Ice White Choc. Mocha", price: 170 },
            { name: "Ice Caramel Mocha", price: 175 },
            { name: "Cf Special Coffe", price: 175 },
        ],
    },
    {
        categoryName: "Milkshakeler",
        imagePath: "/categories/milkshakeler.jpg",
        items: [
            { name: "Çilekli", price: 180 },
            { name: "Karamelli", price: 180 },
            { name: "Muzlu", price: 180 },
            { name: "Çikolatalı", price: 180 },
            { name: "Vanilyalı", price: 180 },
            { name: "Hindistan Cevizli", price: 180 },
            { name: "Oreolu", price: 210 },
            { name: "Çilekli Oreolu", price: 210 },
            { name: "Gofretli", price: 180 },
        ],
    },
    {
        categoryName: "Frozenlar",
        imagePath: "/categories/frozenlar.jpg",
        items: [
            { name: "Elma", price: 200 },
            { name: "Çilek", price: 200 },
            { name: "Karadut", price: 200 },
            { name: "Kavun", price: 200 },
            { name: "Çikolata Frappe", price: 200 },
        ],
    },
    {
        categoryName: "Tatlılar",
        imagePath: "/categories/tatlilar.jpg",
        items: [
            { name: "Fıstık Rüyası", price: 250 },
            { name: "Sihirli Top", price: 250 },
            { name: "Tiramisu", price: 250 },
            { name: "Suffle (Dondurma İle)", price: 250 },
            { name: "Devils", price: 250 },
            { name: "Çikolatalı Cup", price: 250 },
        ],
    },
    {
        categoryName: "Soğuk İçecekler",
        imagePath: "/categories/soguk-icecekler.jpg",
        items: [
            { name: "Su", price: 30 },
            { name: "Coca Cola", price: 125 },
            { name: "Sprite", price: 125 },
            { name: "Fanta", price: 125 },
            { name: "Coca Cola Zero", price: 125 },
            { name: "Ice Tea", price: 130 },
            { name: "Cappy", price: 100 },
            { name: "Sade Soda", price: 100 },
            { name: "Meyveli Sodalar", price: 125 },
            { name: "Limon,Karpuz,Çilek,Nar,Elma", price: 110 },
            { name: "Red Bull", price: 175 },
            { name: "Sıkma Portakal Suyu", price: 110 },
            { name: "Limonata", price: 100 },
            { name: "Çilekli Limonata", price: 110 },
            { name: "Naneli Limonata", price: 110 },
            { name: "Churchill", price: 125 },
            { name: "Enerji", price: 110 },
            { name: "Atom Enerji", price: 150 },
        ],
    },
    {
        categoryName: "Kokteyller",
        imagePath: "/categories/kokteyller.png",
        items: [
            { name: "Mojito", price: 220 },
            { name: "Çilekli Mojito", price: 230 },
            { name: "Elmalı Mojito", price: 230 },
            { name: "Swimming Pool", price: 230 },
            { name: "Pina Colada", price: 230 },
            { name: "Enerji Mix", price: 240 },
            { name: "Meyveli Kokteyl", price: 240 },
        ],
    },
    {
        categoryName: "Ekstralar",
        imagePath: "/categories/ekstralar.jpg",
        items: [
            { name: "Karışık Kuruyemiş", price: 150 },
            { name: "Meyve Tabağı (Mevsim Meyveleri)", price: 200 },
            { name: "Dondurma (3Top)", price: 125 },
        ],
    },
    {
        categoryName: "Nargile Çeşitleri",
        imagePath: "/categories/nargile-cesitleri.webp",
        items: [
            { name: "İnferno", price: 325 },
            { name: "Love 66", price: 325 },
            { name: "Lady Killer", price: 325 },
            { name: "Del Pierro", price: 325 },
            { name: "İzmir Romantik", price: 325 },
            { name: "Absalito Zero", price: 325 },
            { name: "İsabız Nane", price: 325 },
            { name: "Tatlı Cadı", price: 325 },
            { name: "Dejavu", price: 325 },         // DÜZELTME
            { name: "Enjoy", price: 325 },
            { name: "Turkiş Mastik", price: 325 },  // DÜZELTME
            { name: "Pişmiş Şeftali", price: 325 },
            { name: "Limon", price: 325 },
            { name: "Nane", price: 325 },
            { name: "Anason (Alfakhir)", price: 325 },
            { name: "Nakla", price: 325 },
            { name: "Cappicino", price: 325 },
            { name: "Matmazel", price: 325 },
            { name: "Dark Limon", price: 325 },
            { name: "Coffeein Enerjisi", price: 325 },
            { name: "Zamazinngo", price: 325 },
            { name: "Coffeein Mix", price: 325 },
            { name: "Twist", price: 325 },
            { name: "İce Cola", price: 325 },
            { name: "Red Dream", price: 325 },
            { name: "Pastalya", price: 325 },
            { name: "Klopatra", price: 325 },
            { name: "Egzotica", price: 325 },
            { name: "Laydi Finger", price: 325 },
            { name: "Fantastik", price: 325 },
            { name: "Tropical", price: 325 },
            { name: "Tarçın Sakız", price: 325 },
            { name: "Dominik", price: 325 },
            { name: "Momento", price: 325 },
            { name: "İnfinity", price: 325 },
            { name: "Sweps", price: 325 },          // DÜZELTME
            { name: "Karpuz Nane", price: 325 },
            { name: "Portakal Nane", price: 325 },
            { name: "Üzüm", price: 325 },
            { name: "Elma", price: 325 },
        ],
    },
    {
        categoryName: "Nargile Sunumları",
        imagePath: "", // Resimsiz kart için boş bırakıldı
        items: [
            { name: "Nargile Lüle", price: 200 },
            { name: "Nargile + Meyve Suyu", price: 400 },
            { name: "Nargile + Pasta + Çay", price: 500 },
            { name: "Nargile + Pasta + T. Kahvesi", price: 550 },
            { name: "Nargile + Nargile", price: 550 },
            { name: "Nargile + M. Tabağı + Kuruyemiş", price: 600 },
        ],
    },
];