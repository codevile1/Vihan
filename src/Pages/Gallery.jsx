import React, { useState } from "react";

const generateImages = () => {
  const images = [];
  for (let i = 1010; i < 1060; i++) {
    images.push({
      src: `https://picsum.photos/id/${i}/800/600`,
      w: i % 5 === 0 ? "col-span-2" : "col-span-1",
      h: i % 3 === 0 ? "row-span-2" : "row-span-1",
    });
  }
  return images;
};

const images = generateImages();

const Gallery = () => {
  const [modalImage, setModalImage] = useState(null);

  const handleImageError = (e) => {
    e.target.style.display = "none";
    e.target.parentElement.style.background = "#79519E";
  };

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div className="min-h-screen bg-black py-10 px-6">
      <h1 className="text-4xl  text-center text-white my-10">
       Stories in Pixels
      </h1>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
        {images.map((img, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-2xl shadow-lg ${img.w} ${img.h} cursor-pointer`}
            onClick={() => openModal(img.src)}
          >
            <img
              src={img.src}
              alt={`gallery-${index}`}
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              loading="lazy"
              onError={handleImageError}
            />
          </div>
        ))}
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
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;
