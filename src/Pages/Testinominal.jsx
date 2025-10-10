import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Wedding Client",
    text: "Satyam’s photography captured every emotion perfectly. Outstanding work!",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Singh",
    role: "Event Organizer",
    text: "Amazing work! The pictures were stunning and truly brought our event to life.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rahul Verma",
    role: "Brand Owner",
    text: "Professional, creative, Highly recommend Satyam for any photography project.",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
  },
  {
    name: "Ananya Patel",
    role: "Portrait Client",
    text: "The session was comfortable and fun. Photos turned out beautiful!",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Karan Mehta",
    role: "Corporate Client",
    text: "Excellent work, very professional and timely. My company loved the shoot.",
    img: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="bg-black text-gray-300 py-16 h-screen p-10  flex items-center justify-center overflow-hidden ">
      <div className="max-w-6xl mx-auto px-6 relative  ">
        <h2 className="lg:text-3xl text-xl text-white text-center mb-12">
          What Clients Say
        </h2>
        <div className="custom-prev cursor-pointer lg:text-4xl mt-10   text-white absolute left-0 lg:-left-20 top-1/2 -translate-y-1/2 z-10">
  &#10094;
</div>
<div className="custom-next text-white  cursor-pointer   lg:text-4xl mt-10 absolute lg:-right-20 right-0 top-1/2 -translate-y-1/2 z-10">
  &#10095;
</div>


        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev",
  }}
          pagination={{ clickable: true }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center  bg-white/5 backdrop-blur-md border border-white/10
                              p-8 rounded-lg shadow-lg">
                <img
                  src={testimonial.img}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mb-4 "
                />
                <p className="text-sm italic text-center mb-4">
                  "{testimonial.text}"
                </p>
                <h3 className="text-lg font-semibold text-white">
                  {testimonial.name}
                </h3>
                <span className="text-gray-300 text-sm">{testimonial.role}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
