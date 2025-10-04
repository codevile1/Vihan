import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { Link } from "react-router-dom";

const workData = [
  {
    id: 1,
    category: "Portrait",
    title: "Elegant Portrait",
    image: "./bg1.jpg",
    description: "A timeless portrait capturing pure emotion.",
  },
  {
    id: 2,
    category: "Wedding",
    title: "Wedding Bliss",
    image: "./bg2.jpg",
    description: "Beautiful moments from a magical wedding day.",
  },
  {
    id: 3,
    category: "Pre-Wedding",
    title: "Love Story",
    image: "./bg.jpg",
    description: "A romantic pre-wedding shoot in nature.",
  },
  {
    id: 4,
    category: "Events",
    title: "Grand Celebration",
    image:
      "https://plus.unsplash.com/premium_photo-1700353612707-398998922c19?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Capturing joy from a lively event.",
  },
  {
    id: 5,
    category: "Birthday",
    title: "Birthday Magic",
    image:
      "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fHdlZGRpbmd8ZW58MHx8MHx8fDA%3D",
    description: "Fun moments from a birthday celebration.",
  },
  {
    id: 6,
    category: "Travel",
    title: "Wanderlust",
    image:
      "https://plus.unsplash.com/premium_photo-1668896122605-debd3fed81a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG90cmFpdHN8ZW58MHx8MHx8fDA%3D",
    description: "Beautiful landscapes from travels around the world.",
  },
];

const categories = [
  "All",
  "Portrait",
  "Wedding",
  "Pre-Wedding",
  "Events",
  "Birthday",
  "Travel",
];

export default function WorkSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalImage, setModalImage] = useState(null);

  const filteredData =
    selectedCategory === "All"
      ? workData
      : workData.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full bg-black ">
      
      <section
        className="max-w-7xl mx-auto px-6 py-20 text-white bg-black"
        id="work"
      >
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl uppercase mb-4">Captured Moments</h2>
          <p className="text-gray-400 text-lg mx-auto">
            A curated collection of my favorite photography projects each
            frame a story worth telling.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-1 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-1 rounded-full  transition-all duration-150 z-50 
              ${
                selectedCategory === cat
                  ? "bg-[#B9FD50] text-black shadow-xl"
                  : "bg-transparent text-gray-400 border-gray-600  hover:bg-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg"
              onClick={() => setModalImage(item)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover transform transition duration-500 group-hover:scale-105"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                <div>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-orange-400">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-300">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {modalImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            onClick={() => setModalImage(null)}
          >
            <div className="relative max-w-3xl w-full p-4">
              <img loading="lazy"
                src={modalImage.image}
                alt={modalImage.title}
                className="rounded-lg w-full"
              />
              <h3 className="text-2xl font-bold text-white mt-4">
                {modalImage.title}
              </h3>
              <p className="text-gray-400">{modalImage.description}</p>
              <button
                className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-red-500"
                onClick={() => setModalImage(null)}
              >
                ×
              </button>
            </div>
          </div>
        )}
      </section>
  <Link
  to="/gallery"
  className="relative inline-block lg:px-8 px-4 py-3 lg:font-extralight 
             bg-white text-black overflow-hidden group rounded-full 
             shadow-[0_4px_20px_rgba(0,255,255,0.4)] lg:mt-4  text-base 
             text-center  lg:ml-[44%] ml-[31%] z-50"
>
  <span className="relative z-10 transition duration-300  flex items-center justify-center gap-2">
    Explore Gallery
        <MdArrowOutward className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />

  </span>


  {/* Hover overlay with smooth gradient */}
  <span
    className="absolute inset-0 bg-[#B9FD50] 
               translate-y-[-100%] group-hover:translate-y-0 
               transition duration-300 ease-in-out rounded-lg"
  />
</Link>


    </div>
  );
}
