import React, { useState, useEffect, useMemo } from "react";

// Main categories
const categories = ["All", "Brand", "Portraits", "Pre-Wedding", "Wedding", "Reels", "Events"];

// Import images using Vite glob
const brandImages = Object.values(
  import.meta.glob('../images/brand/*.{jpg,jpeg,png,webp}', { eager: true })
).map(mod => mod.default);

const portraitImages = Object.values(
  import.meta.glob('../images/portraits/*.{jpg,jpeg,png,webp}', { eager: true })
).map(mod => mod.default);

const preWeddingImages = Object.values(
  import.meta.glob('../images/prewedding/*.{jpg,jpeg,png,webp}', { eager: true })
).map(mod => mod.default);

const weddingImages = Object.values(
  import.meta.glob('../images/wedding/*.{jpg,jpeg,png,webp}', { eager: true })
).map(mod => mod.default);

// Map images by category
const galleryImages = {
  Brand: brandImages,
  Portraits: portraitImages,
  "Pre-Wedding": preWeddingImages,
  Wedding: weddingImages,
  Reels: [],   // empty for now
  Events: [],  // empty for now
};

// Number of images to show per batch
const IMAGES_PER_PAGE = 20;

// Shuffle helper function
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(IMAGES_PER_PAGE);
  const [modalImage, setModalImage] = useState(null);
  const [shuffledAll, setShuffledAll] = useState([]);

  // Flatten all images with category info, memoized so it doesn't recreate every render
  const allImages = useMemo(
    () =>
      Object.entries(galleryImages).flatMap(([category, images]) =>
        images.map((src, index) => ({
          id: `${category}-${index}`,
          src,
          category,
        }))
      ),
    []
  );

  // Shuffle images for "All" only once when component mounts or when selectedCategory changes to All
  useEffect(() => {
    if (selectedCategory === "All") {
      setShuffledAll(shuffleArray(allImages));
    }
    setVisibleCount(IMAGES_PER_PAGE); // reset visible count on category change
  }, [selectedCategory, allImages]);

  // Filter images based on selected category
  const filteredImages =
    selectedCategory === "All"
      ? shuffledAll
      : allImages.filter(img => img.category === selectedCategory);

  // Images to display based on "Load More"
  const visibleImages = filteredImages.slice(0, visibleCount);

  return (
    <div className="min-h-screen w-full px-5 lg:px-30 py-10 overflow-hidden">
      <h1 className="text-center text-4xl font-extralight mt-12 mb-4">Stories in Pixels</h1>

      {/* Category Filters */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-1 text-sm font-medium rounded-full transition-all duration-150 cursor-pointer ${
              selectedCategory === cat
                ? "bg-[#007BFF] text-white shadow-lg"
                : "bg-gray-100 text-black hover:bg-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      {visibleImages.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-4 gap-6 justify-items-center">
          {visibleImages.map(img => (
            <div
              key={img.id}
              className="h-full lg:w-[420px] bg-gray-300 overflow-hidden cursor-pointer"
              onClick={() => setModalImage(img.src)}
            >
              <img
                src={img.src}
                alt={img.category}
                className="w-full h-full mx-auto object-cover object-center"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-10 text-lg">No content yet.</p>
      )}

      {/* Load More Button */}
      {visibleCount < filteredImages.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount(prev => prev + IMAGES_PER_PAGE)}
            className="px-6 py-2 rounded-full bg-[#007BFF] text-white cursor-pointer hover:bg-blue-600 transition-all duration-300"
          >
            Load More
          </button>
        </div>
      )}

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="modal"
            className="max-h-[90vh] max-w-[90vw] object-contain object-center"
          />
        </div>
      )}
    </div>
  );
}
