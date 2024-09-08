import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Correctly import all images
import image47 from "../assets/image_47.jpg";
import image48 from "../assets/image_48.jpg";
import image49 from "../assets/image_49.jpg";
import image50 from "../assets/image_50.jpg";
import image51 from "../assets/image_51.jpg";
import image52 from "../assets/image_52.jpg";
import image53 from "../assets/image_53.jpg";
import image54 from "../assets/image_54.jpg";
import image55 from "../assets/image_55.jpg";
import image56 from "../assets/image_56.jpg";
import image57 from "../assets/image_57.jpg";
import image58 from "../assets/image_58.jpg";
import image59 from "../assets/image_59.jpg";
import image60 from "../assets/image_60.jpg";
import image61 from "../assets/image_61.jpg";
import image62 from "../assets/image_62.jpg";
import image63 from "../assets/image_63.jpg";
import image64 from "../assets/image_64.jpg";
import image65 from "../assets/image_65.jpg";
import image66 from "../assets/image_66.jpg";
import image67 from "../assets/image_67.jpg";
import image68 from "../assets/image_68.jpg";
import image69 from "../assets/image_69.jpg";
import image70 from "../assets/image_70.jpg";

// Sample data - update the array with new images
const carouselData = [
  { id: 47, imgUrl: image47, link: "#" },
  { id: 48, imgUrl: image48, link: "#" },
  { id: 49, imgUrl: image49, link: "#" },
  { id: 50, imgUrl: image50, link: "#" },
  { id: 51, imgUrl: image51, link: "#" },
  { id: 52, imgUrl: image52, link: "#" },
  { id: 53, imgUrl: image53, link: "#" },
  { id: 54, imgUrl: image54, link: "#" },
  { id: 55, imgUrl: image55, link: "#" },
  { id: 56, imgUrl: image56, link: "#" },
  { id: 57, imgUrl: image57, link: "#" },
  { id: 58, imgUrl: image58, link: "#" },
  { id: 59, imgUrl: image59, link: "#" },
  { id: 60, imgUrl: image60, link: "#" },
  { id: 61, imgUrl: image61, link: "#" },
  { id: 62, imgUrl: image62, link: "#" },
  { id: 63, imgUrl: image63, link: "#" },
  { id: 64, imgUrl: image64, link: "#" },
  { id: 65, imgUrl: image65, link: "#" },
  { id: 66, imgUrl: image66, link: "#" },
  { id: 67, imgUrl: image67, link: "#" },
  { id: 68, imgUrl: image68, link: "#" },
  { id: 69, imgUrl: image69, link: "#" },
  { id: 70, imgUrl: image70, link: "#" },
];

const GlobalBrand = () => {
  const settings = {
    dots: false, // Remove dots
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Show 6 images at once
    slidesToScroll: 6, // Scroll by 6 images
    autoplay: true,
    autoplaySpeed: 3000, // Speed in ms
    arrows: false, // No arrows
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {carouselData.map((item) => (
          <div key={item.id} className="px-2">
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

export default GlobalBrand;
