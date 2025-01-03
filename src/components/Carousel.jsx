import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Carousel = () => {
  const imageData = [ // Use a descriptive variable name
    { src: "https://cdn.pixabay.com/photo/2023/03/29/10/27/hotel-7885138_1280.jpg", alt: "Luxury Hotel" },
    { src: "https://cdn.pixabay.com/photo/2021/08/27/01/33/bedroom-6577523_1280.jpg", alt: "Cozy Bedroom" },
    { src: "https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_1280.jpg", alt: "Fine Dining Restaurant" },
    { src: "https://cdn.pixabay.com/photo/2022/04/06/12/41/landscape-7115513_1280.jpg", alt: "Breathtaking Landscape" },
    { src: "https://cdn.pixabay.com/photo/2023/07/29/22/10/birds-8157789_1280.jpg", alt: "Tranquil Nature" },
    { src: "https://cdn.pixabay.com/photo/2021/08/02/16/22/beach-6517214_1280.jpg", alt: "Beautiful Beach" },
  ];

  const settings = {
    dots: true, // Enable pagination dots
    infinite: true, // Seamless looping
    speed: 1000, // Transition duration in milliseconds
    slidesToShow: 3, // Number of slides visible at once
    slidesToScroll: 3, // Number of slides to scroll per swipe
    responsive: [
      { // Responsive settings for different screen sizes
        breakpoint: 768, // Applies to screens below 768px
        settings: {
          slidesToShow: 1, // Show only one slide on smaller screens
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="text-center px-4 mx-auto bg-orange-50 py-16">
      <h1 className="text-3xl md:text-4xl font-bold">Destinations</h1>
      <p>Best places you can go now</p>

      <div className="w-full h-full px-8 py-16">
        <Slider {...settings}>
          {imageData.map((image, index) => (
            <div key={index} className="duration-500 shadow-md shadow-slate-900 rounded overflow-hidden"> {/* Added key prop and overflow hidden */}
              <img src={image.src} alt={image.alt} className="w-full h-auto object-cover duration-500" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Carousel;