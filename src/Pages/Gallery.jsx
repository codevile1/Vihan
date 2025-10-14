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

const galleryImages = {
  Brand: brandImages,
  Portraits: portraitImages,
  "Pre-Wedding": preWeddingImages,
  Wedding: weddingImages,
  Reels: [],
  Events: [],
};

const IMAGES_PER_PAGE = 20;

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
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [shuffledAll, setShuffledAll] = useState([]);

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

  // Shuffle All images when selectedCategory is All
  useEffect(() => {
    if (selectedCategory === "All") {
      setShuffledAll(shuffleArray(allImages));
    }
    setVisibleCount(IMAGES_PER_PAGE);
  }, [selectedCategory, allImages]);

  const filteredImages =
    selectedCategory === "All"
      ? shuffledAll
      : allImages.filter(img => img.category === selectedCategory);

  const visibleImages = filteredImages.slice(0, visibleCount);

  // Infinite scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 500 // 500px from bottom
      ) {
        setVisibleCount(prev => {
          if (prev < filteredImages.length) {
            return Math.min(prev + IMAGES_PER_PAGE, filteredImages.length);
          }
          return prev;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [filteredImages.length]);

  const openModal = (index) => {
    setModalImageIndex(index);
    setModalImage(filteredImages[index].src);
  };

  const nextImage = () => {
    const nextIndex = (modalImageIndex + 1) % filteredImages.length;
    setModalImageIndex(nextIndex);
    setModalImage(filteredImages[nextIndex].src);
  };

  const prevImage = () => {
    const prevIndex = (modalImageIndex - 1 + filteredImages.length) % filteredImages.length;
    setModalImageIndex(prevIndex);
    setModalImage(filteredImages[prevIndex].src);
  };

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
          {visibleImages.map((img, index) => {
            const absoluteIndex = index; // already visibleImages slice
            return (
              <div
                key={img.id}
                className="h-full lg:w-[420px] bg-gray-300 overflow-hidden cursor-pointer"
                onClick={() => openModal(absoluteIndex)}
              >
                <img
                  src={img.src}
                  alt={img.category}
                  className="w-full h-full mx-auto object-cover object-center"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-10 text-lg">No content yet.</p>
      )}

      {/* Modal Slider */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
          onClick={() => setModalImage(null)}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-5 text-white text-3xl"
          >
            &#10094;
          </button>

          <img
            src={modalImage}
            alt="modal"
            className="max-h-[90vh] max-w-[90vw] object-contain object-center"
          />

          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-5 text-white text-3xl"
          >
            &#10095;
          </button>
        </div>
      )}
    </div>
  );
}
