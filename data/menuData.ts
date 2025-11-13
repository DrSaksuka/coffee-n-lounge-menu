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
            { name: "Karışık Tost", price: 150 },
            { name: "Kaşarlı Tost", price: 150 },
            { name: "Sucuklu Tost", price: 130 },
            { name: "Sebzeli Tost", price: 160 },
            { name: "Sebzeli Kaşarlı Tost", price: 150 },
            { name: "Kavurmalı Tost", price: 170 },
            { name: "Cips Tabağı (Patates-Soğan)", price: 100 },
            { name: "Sıcak Sepeti", price: 170 },
            { name: "Pizza Karışık (M)", price: 300 },
            { name: "Pizza Kavurmalı (M)", price: 325 },
            { name: "Pizza Karışık (L)", price: 325 },
            { name: "Pizza Kavurmalı (L)", price: 350 },
        ],
    },
    {
        categoryName: "Sıcak İçecekler",
        imagePath: "/categories/sicak-icecekler.jpg",
        items: [
            { name: "ESPRESSO", price: 45 },
            { name: "AMERICANO", price: 45 },
            { name: "LATTE", price: 110 },
            { name: "MOCHA", price: 110 },
            { name: "CARAMEL MOCHA", price: 125 },
            { name: "WHITE CHOC. MOCHA", price: 125 },
            { name: "CAPPUCCINO", price: 110 },
            { name: "SICAK ÇİKOLATA", price: 150 },
            { name: "SAHLEP", price: 100 },
            { name: "AROMALI SAHLEP", price: 110 },
        ],
    },
    {
        categoryName: "Çaylar",
        imagePath: "/categories/caylar.jpeg",
        items: [
            { name: "Demleme Çay", price: 20 },
            { name: "Fincan Çay", price: 35 },
            { name: "Kivi Çayı", price: 25 },
            { name: "Elma Çayı", price: 25 },
            { name: "Portakal Çayı", price: 25 },
            { name: "Karadut Çayı", price: 25 },
            { name: "Nane Limon", price: 25 },
            { name: "Kuşburnu", price: 25 },
            { name: "Ihlamur", price: 25 },
            { name: "Limon", price: 25 },
        ],
    },
    {
        categoryName: "Bitki Çayları",
        imagePath: "/categories/bitki-caylari.jpg",
        items: [
            { name: "Ihlamur Çayı", price: 100 },
            { name: "Ada Çayı", price: 100 },
            { name: "Papatya Çayı", price: 100 },
            { name: "Yeşil Çay", price: 100 },
            { name: "Nane Limon", price: 100 },
            { name: "Kış Çayı", price: 100 },
            { name: "Elma Tarçın", price: 100 },
        ],
    },
    {
        categoryName: "Türk Kahveleri",
        imagePath: "/categories/turk-kahveleri.jpeg",
        items: [
            { name: "Türk Kahvesi", price: 75 },
            { name: "Damla Sakızlı Türk Kah.", price: 80 },
            { name: "Vanilyalı Türk Kah.", price: 80 },
            { name: "Çikolatalı Türk Kah.", price: 80 },
            { name: "Dibek Kahvesi", price: 80 },
            { name: "Menengiç Kahvesi", price: 80 },
            { name: "Sütlü Türk Kahvesi", price: 80 },
            { name: "Osmanlı Türk Kahvesi (İkram Su ve Şekerleme)", price: 80 },
        ],
    },
    {
        categoryName: "Dünya Kahveleri",
        imagePath: "/categories/dunya-kahveleri.jpeg",
        items: [
            { name: "Guatemala", price: 110 },
            { name: "Kenya", price: 110 },
            { name: "Colombia", price: 110 },
            { name: "Filtre Kahve", price: 90 },
            { name: "Süt Potu", price: 50 },
        ],
    },
    {
        categoryName: "Espresso Bazlı Soğuk İçecekler",
        imagePath: "/categories/espresso-soguk-kahve.jpg",
        items: [
            { name: "Ice Latte" },
            { name: "Ice Americano" },
            { name: "Ice Coffe Mocha" },
            { name: "Ice White Choc. Mocha" },
            { name: "Ice Caramel Mocha" },
            { name: "Cf Special Coffe" },
        ],
    },
    {
        categoryName: "Milkshakeler",
        imagePath: "/categories/milkshakeler.jpg",
        items: [
            { name: "Çilekli" },
            { name: "Karamelli" },
            { name: "Muzlu" },
            { name: "Çikolatalı" },
            { name: "Vanilyalı" },
            { name: "Hindistan Cevizli" },
            { name: "Oreolu" },
            { name: "Çilekli Oreolu" },
            { name: "Gofretli" },
        ],
    },
    {
        categoryName: "Frozenlar",
        imagePath: "/categories/frozenlar.jpg",
        items: [
            { name: "Elma" },
            { name: "Çilek" },
            { name: "Karadut" },
            { name: "Kavun" },
            { name: "Çikolata Frappe" },
        ],
    },
    {
        categoryName: "Tatlılar",
        imagePath: "/categories/tatlilar.jpg",
        items: [
            { name: "Fıstık Rüyası" },
            { name: "Sihirli Top" },
            { name: "Tiramisu" },
            { name: "Suffle (Dondurma İle)" },
            { name: "Devils" },
            { name: "Çikolatalı Cup" },
        ],
    },
    {
        categoryName: "Soğuk İçecekler",
        imagePath: "/categories/soguk-icecekler.jpg",
        items: [
            { name: "Su" },
            { name: "Coca Cola" },
            { name: "Sprite" },
            { name: "Fanta" },
            { name: "Coca Cola Zero" },
            { name: "Ice Tea" },
            { name: "Cappy" },
            { name: "Sade Soda" },
            { name: "Meyveli Sodalar" },
            { name: "Limon,Karpuz,Çilek,Nar,Elma" },
            { name: "Red Bull" },
            { name: "Sıkma Portakal Suyu" },
            { name: "Limonata" },
            { name: "Çilekli Limonata" },
            { name: "Naneli Limonata" },
            { name: "Churchill" },
            { name: "Enerji" },
            { name: "Atom Enerji" },
        ],
    },
    {
        categoryName: "Kokteyller",
        imagePath: "/categories/kokteyller.png",
        items: [
            { name: "Mojito" },
            { name: "Çilekli Mojito" },
            { name: "Elmalı Mojito" },
            { name: "Swimming Pool" },
            { name: "Pina Colada" },
            { name: "Enerji Mix" },
            { name: "Meyveli Kokteyl" },
        ],
    },
    {
        categoryName: "Ekstralar",
        imagePath: "/categories/ekstralar.jpg",
        items: [
            { name: "Karışık Kuruyemiş", price: 100 },
            { name: "Meyve Tabağı (Mevsim Meyveleri)", price: 150 },
            { name: "Dondurma (3Top)", price: 75 },
        ],
    },
    {
        categoryName: "Nargile Çeşitleri",
        imagePath: "/categories/nargile-cesitleri.webp",
        items: [
            { name: "İnferno", price: 250 },
            { name: "Love 66", price: 250 },
            { name: "Lady Killer", price: 250 },
            { name: "Del Pierro", price: 250 },
            { name: "İzmir Romantik", price: 250 },
            { name: "Absalito Zero", price: 250 },
            { name: "İsabız Nane", price: 250 },
            { name: "Tatlı Cadı", price: 250 },
            { name: "Dejavu", price: 250 },         // DÜZELTME
            { name: "Enjoy", price: 250 },
            { name: "Turkiş Mastik", price: 250 },  // DÜZELTME
            { name: "Pişmiş Şeftali", price: 250 },
            { name: "Limon", price: 250 },
            { name: "Nane", price: 250 },
            { name: "Anason (Alfakhir)", price: 250 },
            { name: "Nakla", price: 250 },
            { name: "Cappicino", price: 250 },
            { name: "Matmazel", price: 250 },
            { name: "Dark Limon", price: 250 },
            { name: "Coffeein Enerjisi", price: 250 },
            { name: "Zamazinngo", price: 250 },
            { name: "Coffeein Mix", price: 250 },
            { name: "Twist", price: 250 },
            { name: "İce Cola", price: 250 },
            { name: "Red Dream", price: 250 },
            { name: "Pastalya", price: 250 },
            { name: "Klopatra", price: 250 },
            { name: "Egzotica", price: 250 },
            { name: "Laydi Finger", price: 250 },
            { name: "Fantastik", price: 250 },
            { name: "Tropical", price: 250 },
            { name: "Tarçın Sakız", price: 250 },
            { name: "Dominik", price: 250 },
            { name: "Momento", price: 250 },
            { name: "İnfinity", price: 250 },
            { name: "Sweps", price: 250 },          // DÜZELTME
            { name: "Karpuz Nane", price: 250 },
            { name: "Portakal Nane", price: 250 },
            { name: "Üzüm", price: 250 },
            { name: "Elma", price: 250 },
        ],
    },
    {
        categoryName: "Nargile Sunumları",
        imagePath: "", // Resimsiz kart için boş bırakıldı
        items: [
            { name: "Nargile Lüle", price: 250 },
            { name: "Nargile + Meyve Suyu", price: 150 },
            { name: "Nargile + Pasta + Çay", price: 160 },
            { name: "Nargile + Pasta + T. Kahvesi", price: 180 },
            { name: "Nargile + Nargile", price: 140 },
            { name: "Nargile + M. Tabağı + Kuruyemiş", price: 160 },
        ],
    },
];