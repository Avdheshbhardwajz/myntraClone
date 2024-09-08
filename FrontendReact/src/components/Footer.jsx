import React from "react";
import { FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
import Apple from "../assets/image_107.jpg";
import Google from "../assets/image_106.jpg";
import original from "../assets/image_112.jpg";
import returnh from "../assets/image_113.jpg";

const SocialButton = ({ children, label, href }) => {
  return (
    <a
      className="bg-white bg-opacity-10 rounded-full w-10 h-10 flex items-center justify-center transition-all duration-300 hover:bg-opacity-20"
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default function Footer() {
  return (
    <div className="bg-black text-white font-poppins">
      <div className="container mx-auto py-12 px-4 flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-2/3 mb-8 md:mb-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="font-bold text-lg mb-4">ONLINE SHOPPING</p>
              <ul className="space-y-2">
                <li>
                  <p className="text-sm">Men</p>
                </li>
                <li>
                  <p className="text-sm">Women</p>
                </li>
                <li>
                  <p className="text-sm">Kids</p>
                </li>
                <li>
                  <p className="text-sm">Home & Living</p>
                </li>
                <li>
                  <p className="text-sm">Gift Cards</p>
                </li>
                <li>
                  <p className="text-sm">Myntra Insider</p>
                </li>
              </ul>
              <p className="font-bold text-lg mt-6 mb-4">USEFUL LINKS</p>
              <ul className="space-y-2">
                <li>
                  <p className="text-sm">Blog</p>
                </li>
                <li>
                  <p className="text-sm">Careers</p>
                </li>
                <li>
                  <p className="text-sm">Site Map</p>
                </li>
                <li>
                  <p className="text-sm">Corporate Information</p>
                </li>
                <li>
                  <p className="text-sm">Whitehat</p>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg mb-4">CUSTOMER POLICIES</p>
              <ul className="space-y-2">
                <li>
                  <p className="text-sm">Contact Us</p>
                </li>
                <li>
                  <p className="text-sm">FAQ</p>
                </li>
                <li>
                  <p className="text-sm">T&C</p>
                </li>
                <li>
                  <p className="text-sm">Terms Of Use</p>
                </li>
                <li>
                  <p className="text-sm">Track Orders</p>
                </li>
                <li>
                  <p className="text-sm">Shipping</p>
                </li>
                <li>
                  <p className="text-sm">Cancellation</p>
                </li>
                <li>
                  <p className="text-sm">Returns</p>
                </li>
                <li>
                  <p className="text-sm">Privacy Policy</p>
                </li>
                <li>
                  <p className="text-sm">Grievance Officer</p>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-lg mb-4">EXPERIENCE APP ON MOBILE</p>
              <div className="flex space-x-4 mb-6">
                <img src={Apple} alt="Apple Store" className="w-24" />
                <img src={Google} alt="Google Play" className="w-24" />
              </div>
              <p className="font-bold text-lg mb-4">KEEP IN TOUCH</p>
              <div className="flex space-x-4">
                <SocialButton label={"Twitter"} href={"#"}>
                  <FaTwitter className="text-xl" />
                </SocialButton>
                <SocialButton label={"YouTube"} href={"#"}>
                  <FaYoutube className="text-xl" />
                </SocialButton>
                <SocialButton label={"Instagram"} href={"#"}>
                  <FaInstagram className="text-xl" />
                </SocialButton>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex flex-col justify-between">
          <div className="flex items-center space-x-4 mb-8">
            <img src={original} alt="100% Original" className="w-16" />
            <div>
              <b className="text-lg">100% ORIGINAL</b>
              <p className="text-sm text-gray-400">
                guarantee for all products at myntra.com
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <img src={returnh} alt="Return within 30 days" className="w-12" />
            <div>
              <b className="text-lg">Return within 30 days</b>
              <p className="text-sm text-gray-400">of receiving your order</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto py-6 border-t border-gray-700">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            In case of any concern,{" "}
            <a href="#" className="text-blue-400">
              Contact Us
            </a>
          </p>
          <p className="text-gray-400">
            © 2022 www.myntra.com All rights reserved
          </p>
        </div>
      </div>
      <div className="container mx-auto py-6 text-gray-400 text-sm">
        Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls
        | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes |
        Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings |
        Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches |
        Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye
        Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show |
        Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles |
        Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery
        | Designers Sarees
      </div>
    </div>
  );
}
