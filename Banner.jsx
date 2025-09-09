import React, { useState, useEffect } from "react";
import { CiPlay1 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

const slides = [
     {
    title: "Interstellar",
    description:
      "Journey beyond the stars on a heart-pounding quest across time and space. As worlds crumble and hope fades, one family’s love becomes humanity’s last hope in this breathtaking sci-fi masterpiece.",
    imageUrl: "https://image.tmdb.org/t/p/original/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    title: "K-pop Demon Hunters",
    description:
      "Step behind the glittering lights and fierce choreography to uncover a dark underworld of secrets and espionage in the thrilling K-pop Hunters saga. Where passion meets danger, every beat hides a story waiting to explode.",
    imageUrl: "https://cdn.flickeringmyth.com/wp-content/uploads/2025/05/Kpop-Demon-Hunters-1.jpg",
  },
 
  {
    title: "Money Heist",
    description:
      "Prepare for the ultimate game of wits and survival as a brilliant mastermind and his crew pull off the most audacious heist the world has ever seen. Every second counts, every move could be their last.",
    imageUrl: "https://i.pinimg.com/736x/07/57/bc/0757bca94d04d1ed570f8d062a121b69.jpg",
  },
  {
    title: "Wednesday Addams",
    description:
      "Dive into the eerie and twisted halls of Nevermore Academy where mystery, mischief, and dark secrets lurk around every corner. Join Wednesday as she sharpens her wit and unleashes her unique brand of chaos.",
    imageUrl: "https://i.pinimg.com/736x/dc/b5/da/dcb5daba123ae6ef69e7feb3b6f7bf9b.jpg",
  },
  {
    title: "Stranger Things",
    description:
      "Venture into the haunting world of Hawkins, where a group of friends battle otherworldly forces, unravel dark government secrets, and face the terrifying Upside Down. Friendship, courage, and mystery collide in this supernatural thriller.",
    imageUrl: "https://images.wallpapersden.com/image/download/vecna-s-attack-stranger-things_bWluaGyUmZqaraWkpJRnamtlrWZpaWVnZWc.jpg",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const slide = slides[currentIndex];

  return (
    <header className="relative bg-black w-full h-[95vh] md:h-[110vh] overflow-hidden">
      <div
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        key={slide.title}
      >
        <img
          src={slide.imageUrl}
          alt={slide.title}
          className="w-full h-full object-cover absolute inset-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent pointer-events-none" />
        <div className="absolute left-4 md:left-8 top-1/4 max-w-4xl p-4 md:p-8 z-30">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white drop-shadow-lg max-w-xl">
            {slide.title}
          </h1>
          <p className="mt-6 text-base md:text-xl text-white drop-shadow-md max-w-xl leading-relaxed">
            {slide.description}
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-red-500 text-white px-6 py-2 font-semibold rounded hover:bg-red-600 transition flex items-center gap-2">
              <CiPlay1 size={20} />
              Play
            </button>
            <button className="bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 transition flex items-center gap-2">
              <FaPlus size={14} />
              My List
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-24 bg-gradient-to-t from-black to-transparent" />
      </div>
    </header>
  );
};

export default Banner;
