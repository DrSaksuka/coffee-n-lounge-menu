// data/menuData.ts (TÜM YAZIM HATALARI DÜZELTİLMİŞ NİHAİ SÜRÜM)

// Önce her bir ürün için bir tür (type) tanımlayalım
export interface MenuItem {
    name: string;
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
            { name: "Karışık Tost" },
            { name: "Kaşarlı Tost" },
            { name: "Sucuklu Tost" },
            { name: "Sebzeli Tost" },
            { name: "Sebzeli Kaşarlı Tost" },
            { name: "Kavurmalı Tost" },
            { name: "Cips Tabağı (Patates-Soğan)" },
            { name: "Sıcak Sepeti" },
            { name: "Pizza Karışık (M)" },
            { name: "Pizza Kavurmalı (M)" },
            { name: "Pizza Karışık (L)" },
            { name: "Pizza Kavurmalı (L)" },
        ],
    },
    {
        categoryName: "Sıcak İçecekler",
        imagePath: "/categories/sicak-icecekler.jpg",
        items: [
            { name: "ESPRESSO" },
            { name: "AMERICANO" },
            { name: "LATTE" },
            { name: "MOCHA" },
            { name: "CARAMEL MOCHA" },
            { name: "WHITE CHOC. MOCHA" },
            { name: "CAPPUCCINO" },
            { name: "SICAK ÇİKOLATA" },
            { name: "SAHLEP" },
            { name: "AROMALI SAHLEP" },
        ],
    },
    {
        categoryName: "Çaylar",
        imagePath: "/categories/caylar.jpeg",
        items: [
            { name: "Demleme Çay" },
            { name: "Fincan Çay" },
            { name: "Kivi Çayı" },
            { name: "Elma Çayı" },
            { name: "Portakal Çayı" },
            { name: "Karadut Çayı" },
            { name: "Nane Limon" },
            { name: "Kuşburnu" },
            { name: "Ihlamur" },
            { name: "Limon" },
        ],
    },
    {
        categoryName: "Bitki Çayları",
        imagePath: "/categories/bitki-caylari.jpg",
        items: [
            { name: "Ihlamur Çayı" },
            { name: "Ada Çayı" },
            { name: "Papatya Çayı" },
            { name: "Yeşil Çay" },
            { name: "Nane Limon" },
            { name: "Kış Çayı" },
            { name: "Elma Tarçın" },
        ],
    },
    {
        categoryName: "Türk Kahveleri",
        imagePath: "/categories/turk-kahveleri.jpeg",
        items: [
            { name: "Türk Kahvesi" },
            { name: "Damla Sakızlı Türk Kah." },
            { name: "Vanilyalı Türk Kah." },
            { name: "Çikolatalı Türk Kah." },
            { name: "Dibek Kahvesi" },
            { name: "Menengiç Kahvesi" },
            { name: "Sütlü Türk Kahvesi" },
            { name: "Osmanlı Türk Kahvesi (İkram Su ve Şekerleme)" },
        ],
    },
    {
        categoryName: "Dünya Kahveleri",
        imagePath: "/categories/dunya-kahveleri.jpeg",
        items: [
            { name: "Guatemala" },
            { name: "Kenya" },
            { name: "Colombia" },
            { name: "Filtre Kahve" },
            { name: "Süt Potu" },
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
            { name: "Karışık Kuruyemiş" },
            { name: "Meyve Tabağı (Mevsim Meyveleri)" },
            { name: "Dondurma (3Top)" },
        ],
    },
    {
        categoryName: "Nargile Çeşitleri",
        imagePath: "/categories/nargile-cesitleri.webp",
        items: [
            { name: "İnferno" },
            { name: "Love 66" },
            { name: "Lady Killer" },
            { name: "İzmir Romantik" },
            { name: "Absalito Zero" },
            { name: "İsabız Nane" },
            { name: "Tatlı Cadı" },
            { name: "Dejavu" },         // DÜZELTME
            { name: "Enjoy" },
            { name: "Turkiş Mastik" },  // DÜZELTME
            { name: "Pişmiş Şeftali" },
            { name: "Limon" },
            { name: "Nane" },
            { name: "Anason (Alfakhir)" },
            { name: "Nakla" },
            { name: "Cappicino" },
            { name: "Matmazel" },
            { name: "Dark Limon" },
            { name: "Coffeein Enerjisi" },
            { name: "Zamazinngo" },
            { name: "Coffeein Mix" },
            { name: "Twist" },
            { name: "İce Cola" },
            { name: "Red Dream" },
            { name: "Pastalya" },
            { name: "Klopatra" },
            { name: "Egzotica" },
            { name: "Laydi Finger" },
            { name: "Fantastik" },
            { name: "Tropical" },
            { name: "Tarçın Sakız" },
            { name: "Dominik" },
            { name: "Momento" },
            { name: "İnfinity" },
            { name: "Sweps" },          // DÜZELTME
            { name: "Karpuz Nane" },
            { name: "Portakal Nane" },
            { name: "Üzüm" },
            { name: "Elma" },
        ],
    },
    {
        categoryName: "Nargile Sunumları",
        imagePath: "", // Resimsiz kart için boş bırakıldı
        items: [
            { name: "Nargile" },
            { name: "Lüle" },
            { name: "Nargile + Meyve Suyu" },
            { name: "Nargile + Pasta + Çay" },
            { name: "Nargile + Pasta + T. Kahvesi" },
            { name: "Nargile + Nargile" },
            { name: "Nargile + M. Tabağı + Kuruyemiş" },
        ],
    },
];