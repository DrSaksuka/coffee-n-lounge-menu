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
    <main className="min-h-screen bg-gray-900 text-white p-4 py-12 md:p-12 flex flex-col items-center">

      <header className="text-center mb-8">
        {/* RENK GÜNCELLEMESİ: text-yellow-400 -> text-amber-300 (Daha yumuşak, bej-altın) */}
        <h1 className="text-5xl font-bold text-amber-300 mb-2">
          Coffee!N Launge
        </h1>
        <p className="text-xl text-gray-300">Menü</p>
      </header>

      {/* Ana kutu (bg-gray-800) uyumlu, kalabilir */}
      <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-2xl p-6 md:p-8">

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
                    className="bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-amber-500/30 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-amber-500"
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
                      <h3 className="text-lg font-semibold text-center text-gray-100 group-hover:text-amber-300">
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
                    className="bg-gray-700 rounded-lg shadow-lg transition-all duration-300 hover:shadow-amber-500/30 hover:scale-105 group focus:outline-none focus:ring-2 focus:ring-amber-500 flex items-center justify-center p-4 h-full min-h-[14rem]"
                  >
                    {/* RENK GÜNCELLEMESİ: group-hover:text-yellow-400 -> group-hover:text-amber-300 */}
                    <h3 className="text-lg font-semibold text-center text-gray-100 group-hover:text-amber-300">
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
            {/* RENK GÜNCELLEMESİ: text-yellow-400 -> text-amber-300 | hover:text-yellow-300 -> hover:text-amber-200 */}
            <button
              onClick={() => setSelectedCategory(null)}
              className="text-amber-300 hover:text-amber-200 mb-4 font-medium"
            >
              &larr; Tüm Kategoriler
            </button>

            {/* RENK GÜNCELLEMESİ: text-yellow-500 -> text-amber-400 */}
            <h2 className="text-3xl font-bold text-amber-400 mb-6 border-b border-gray-700 pb-3">
              {categoryDetails.categoryName}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              {categoryDetails.items.map((item) => (
                <div key={item.name} className="bg-gray-700 p-3 rounded-md">
                  <h3 className="text-lg font-medium text-gray-100">
                    {item.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}