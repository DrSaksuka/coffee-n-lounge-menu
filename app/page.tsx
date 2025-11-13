// app/page.tsx (RENK PALETİ GÜNCELLENMİŞ VE TÜM HATALAR DÜZELTİLMİŞ)

"use client";

import { useState } from "react";
import { menuData } from "@/data/menuData";
import type { MenuCategory } from "@/data/menuData";
import Image from "next/image";

export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const getCategoryDetails = (): MenuCategory | undefined => {
    if (!selectedCategory) return undefined;
    // DÜZELTME BURADA: 'selectedVategory' -> 'selectedCategory' yapıldı
    return menuData.find(cat => cat.categoryName === selectedCategory);
  };

  const categoryDetails = getCategoryDetails();

  return (
    // Ana arka plan (bg-gray-900) davetiye ile uyumlu, kalabilir
    <main className="min-h-screen bg-site-gray text-site-beige p-4 py-12 md:p-12 flex flex-col items-center">

      <header className="text-center mb-8">
        {/* RENK GÜNCELLEMESİ: text-yellow-400 -> text-amber-300 (Daha yumuşak, bej-altın) */}
        <h1 className="text-5xl font-bold text-amber-300 mb-2">
          Coffee!N Launge
        </h1>
        <p className="text-xl text-site-beige">Menü</p>
      </header>

      {/* Ana kutu (bg-gray-800) uyumlu, kalabilir */}
      <div className="w-full max-w-4xl bg-site-gray-dark rounded-lg shadow-2xl p-6 md:p-8">

        {/* --- BÖLİM 1: KATEGORİ LİSTESİ --- */}
        {selectedCategory === null && (
          <div>
            {/* RENK GÜNCELLEMESİ: text-yellow-500 -> text-amber-400 (Daha sıcak bir altın) */}
            <h2 className="text-2xl font-semibold text-center text-amber-400 mb-6">
              Kategoriler
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">

              {menuData.map((category) => (

                category.imagePath ? (
                  // Resimli Kart
                  <button
                    key={category.categoryName}
                    onClick={() => setSelectedCategory(category.categoryName)}
                    // RENK GÜNCELLEMESİ: hover:shadow-yellow... -> hover:shadow-amber... | focus:ring-yellow... -> focus:ring-amber...
                    className="bg-site-gray rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-amber-500/30 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <div className="relative w-full h-40">
                      <Image
                        src={category.imagePath}
                        alt={category.categoryName}
                        fill={true}
                        sizes="(max-width: 768px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <div className="p-4">
                      {/* RENK GÜNCELLEMESİ: group-hover:text-yellow-400 -> group-hover:text-amber-300 */}
                      <h3 className="text-lg font-semibold text-center text-site-beige group-hover:text-amber-300">
                        {category.categoryName}
                      </h3>
                    </div>
                  </button>
                ) : (
                  // Resimsiz Kart
                  <button
                    key={category.categoryName}
                    onClick={() => setSelectedCategory(category.categoryName)}
                    // RENK GÜNCELLEMESİ: hover:shadow-yellow... -> hover:shadow-amber... | focus:ring-yellow... -> focus:ring-amber...
                    className="bg-site-gray rounded-lg shadow-lg transition-all duration-300 hover:shadow-amber-500/30 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-amber-500 flex items-center justify-center p-4 h-full min-h-[14rem]"
                  >
                    {/* RENK GÜNCELLEMESİ: group-hover:text-yellow-400 -> group-hover:text-amber-300 */}
                    <h3 className="text-lg font-semibold text-center text-site-beige group-hover:text-amber-300">
                      {category.categoryName}
                    </h3>
                  </button>
                )
              ))}
            </div>
          </div>
        )}

        {/* --- BÖLÜM 2: ÜRÜN LİSTESİ --- */}
        {selectedCategory !== null && categoryDetails && (
          <div>
            {/* Geri Dönüş Butonu - Stilize Versiyon */}
            <div className="flex items-center mb-6">
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-yellow-600 text-white hover:bg-yellow-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-yellow-600/50"
              >
                <span className="text-lg">⬅️</span>
                <span>Tüm Kategoriler</span>
              </button>
            </div>

            {/* RENK GÜNCELLEMESİ: text-yellow-500 -> text-amber-400 */}
            <h2 className="text-3xl font-bold text-amber-400 mb-6 border-b border-site-gray-dark pb-3">
              {categoryDetails.categoryName}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {categoryDetails.items.map((item) => (
                <div key={item.name} className="bg-site-gray p-3 rounded-md flex justify-between items-center">
                  <h3 className="text-lg font-medium text-site-beige">
                    {item.name}
                  </h3>
                  {item.price && (
                    <span className="text-amber-300 font-semibold">
                      {item.price} ₺
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}