import React from "react";
import image71 from "../assets/image_71.jpg";
import image72 from "../assets/image_72.jpg";
import image73 from "../assets/image_73.jpg";
import image74 from "../assets/image_74.jpg";
import image75 from "../assets/image_75.jpg";
import image76 from "../assets/image_76.jpg";
import image77 from "../assets/image_77.jpg";
import image78 from "../assets/image_78.jpg";
import image79 from "../assets/image_79.jpg";
import image80 from "../assets/image_80.jpg";
import image81 from "../assets/image_81.jpg";
import image82 from "../assets/image_82.jpg";
import image83 from "../assets/image_83.jpg";
import image84 from "../assets/image_84.jpg";
import image85 from "../assets/image_85.jpg";
import image86 from "../assets/image_86.jpg";
import image87 from "../assets/image_87.jpg";
import image88 from "../assets/image_88.jpg";
import image89 from "../assets/image_89.jpg";
import image90 from "../assets/image_90.jpg";
import image91 from "../assets/image_91.jpg";
import image92 from "../assets/image_92.jpg";
import image93 from "../assets/image_93.jpg";
import image94 from "../assets/image_94.jpg";
import image95 from "../assets/image_95.jpg";
import image96 from "../assets/image_96.jpg";
import image97 from "../assets/image_97.jpg";
import image98 from "../assets/image_98.jpg";
import image99 from "../assets/image_99.jpg";
import image100 from "../assets/image_100.jpg";
import image101 from "../assets/image_101.jpg";
import image102 from "../assets/image_102.jpg";
import image103 from "../assets/image_103.jpg";
import image104 from "../assets/image_104.jpg";

const carouselData = [
  { id: 71, imgUrl: image71, link: "#" },
  { id: 72, imgUrl: image72, link: "#" },
  { id: 73, imgUrl: image73, link: "#" },
  { id: 74, imgUrl: image74, link: "#" },
  { id: 75, imgUrl: image75, link: "#" },
  { id: 76, imgUrl: image76, link: "#" },
  { id: 77, imgUrl: image77, link: "#" },
  { id: 78, imgUrl: image78, link: "#" },
  { id: 79, imgUrl: image79, link: "#" },
  { id: 80, imgUrl: image80, link: "#" },
  { id: 81, imgUrl: image81, link: "#" },
  { id: 82, imgUrl: image82, link: "#" },
  { id: 83, imgUrl: image83, link: "#" },
  { id: 84, imgUrl: image84, link: "#" },
  { id: 85, imgUrl: image85, link: "#" },
  { id: 86, imgUrl: image86, link: "#" },
  { id: 87, imgUrl: image87, link: "#" },
  { id: 88, imgUrl: image88, link: "#" },
  { id: 89, imgUrl: image89, link: "#" },
  { id: 90, imgUrl: image90, link: "#" },
  { id: 91, imgUrl: image91, link: "#" },
  { id: 92, imgUrl: image92, link: "#" },
  { id: 93, imgUrl: image93, link: "#" },
  { id: 94, imgUrl: image94, link: "#" },
  { id: 95, imgUrl: image95, link: "#" },
  { id: 96, imgUrl: image96, link: "#" },
  { id: 97, imgUrl: image97, link: "#" },
  { id: 98, imgUrl: image98, link: "#" },
  { id: 99, imgUrl: image99, link: "#" },
  { id: 100, imgUrl: image100, link: "#" },

  { id: 102, imgUrl: image102, link: "#" },
  { id: 103, imgUrl: image103, link: "#" },
  { id: 104, imgUrl: image104, link: "#" },
];

const ShopCategory = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center flex-row">
      {carouselData.map((item) => (
        <div key={item.id} className="w-1/6 p-2">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <img
              src={item.imgUrl}
              alt={`Slide ${item.id}`}
              className="w-full h-auto object-cover"
            />
          </a>
        </div>
      ))}
    </div>
  );
};

export default ShopCategory;
