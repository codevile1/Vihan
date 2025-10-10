import React, { useState } from "react";

const categories = ["All", "Portrait", "Wedding", "Cintrography", "Reels", "Events"];

// Subcategory mapping
const subCategories = {
  Wedding: ["Wedding", "Pre-Wedding"],
  Events: ["Birthday", "Concert", "Festival"],
  Reels: ["Shorts", "Highlights", "Behind The Scenes"], // Added subcategories for Reels
};

const generateImages = () => {
  const images = [];
  for (let i = 1010; i < 1060; i++) {
    const cat = categories[i % categories.length];
    images.push({
      id: i,
      src: `https://picsum.photos/id/${i}/800/1200`,
      category: cat,
    });
  }
  return images;
};

const images = generateImages();

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  // Filter logic
  const filteredImages = (() => {
    if (selectedCategory === "All") return images;
    if (subCategories[selectedCategory] && selectedSubCategory) {
      return images.filter(
        (img) => img.category === selectedSubCategory
      );
    }
    return images.filter((img) => img.category === selectedCategory);
  })();

  const openModal = (src) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  return (
    <div className="min-h-screen bg-black">
      <h1 className="text-4xl text-center text-white my-6">
        Stories in Pixels
      </h1>

      {/* Main Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedSubCategory(null);
            }}
            className={`px-6 py-2 rounded-full text-sm transition-all duration-150 ${
              selectedCategory === cat
                ? "bg-[#B9FD50] text-black shadow-lg"
                : "bg-transparent text-gray-400 border border-gray-600 hover:bg-gray-800"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Subcategory Filters (if exist) */}
      {subCategories[selectedCategory] && (
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {subCategories[selectedCategory].map((subCat) => (
            <button
              key={subCat}
              onClick={() => setSelectedSubCategory(subCat)}
              className={`px-4 py-1 rounded-full text-sm transition-all duration-150 ${
                selectedSubCategory === subCat
                  ? "bg-[#B9FD50] text-black shadow-lg"
                  : "bg-transparent text-gray-400 border border-gray-600 hover:bg-gray-800"
              }`}
            >
              {subCat}
            </button>
          ))}
        </div>
      )}

      {/* Masonry Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 p-2">
        {filteredImages.map((img, index) => {
          const height = index % 3 === 1 ? 600 : 500;
          return (
            <div
              key={img.id}
              className="mb-2 overflow-hidden cursor-pointer group break-inside"
              style={{ height: `${height}px` }}
              onClick={() => openModal(img.src)}
            >
              <img
                src={img.src}
                alt={`gallery-${index}`}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="modal"
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </div>
  );
}
