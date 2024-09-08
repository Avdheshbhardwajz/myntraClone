import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image4 from "../assets/image_4.jpg";
import image5 from "../assets/image_5.jpg";
import image6 from "../assets/image_6.jpg";
import image7 from "../assets/image_7.jpg";
import image8 from "../assets/image_8.jpg";

// Sample data - replace this with your actual data
const carouselData = [
  {
    id: 4,
    imgUrl: image4,
    link: "#",
  },
  {
    id: 5,
    imgUrl: image5,
    link: "#",
  },
  {
    id: 6,
    imgUrl: image6,
    link: "#",
  },
  {
    id: 7,
    imgUrl: image7,
    link: "#",
  },
  {
    id: 8,
    imgUrl: image8,
    link: "#",
  },
];

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="relative max-w-[100vw] m-auto">
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div key={item.id}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img
                src={item.imgUrl}
                alt={`Slide ${item.id}`}
                className="w-full h-auto object-cover"
              />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Banner;
