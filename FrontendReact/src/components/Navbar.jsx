import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Heading,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import ReactSwitch from "react-switch";
import React, { useState } from "react"; // Add useState for theme management

const Links = ["Home", "Products", "Cart", "Wishlist"];

const NavLink = ({ children }) => (
  <Box className="font-sans px-2 py-1 rounded-md hover:underline cursor-pointer text-md font-medium uppercase">
    {children}
  </Box>
);

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();
  const [theme, setTheme] = useState("light"); // State to track the theme

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Box className="shadow-md mt-5 fixed top-0 w-full z-50 bg-white">
      <Flex className="h-16 items-center justify-between px-4">
        <IconButton
          className="lg:hidden"
          size={"lg"}
          icon={
            isOpen ? (
              <CloseIcon className="text-black" />
            ) : (
              <HamburgerIcon className="text-black" />
            )
          }
          aria-label={"Open Menu"}
          onClick={isOpen ? onClose : onOpen}
        />
        <Flex className="items-center gap-5">
          <Link to="/">
            <Image
              className="w-16"
              src="https://github.com/harshau9/Myntra-Clone/blob/main/myntra/public/myn.png"
              alt="MyntraLogo"
            />
          </Link>
          <Box className="hidden md:flex">
            {Links.map((link, i) => (
              <Link
                key={i}
                to={
                  link === "Home"
                    ? "/"
                    : link === "Products"
                    ? "/products"
                    : link === "Cart"
                    ? "/cart"
                    : link === "Wishlist"
                    ? "/wishlist"
                    : undefined
                }
              >
                <NavLink>{link}</NavLink>
              </Link>
            ))}
          </Box>
        </Flex>

        <Flex className="items-center gap-5">
          <Link to="/cart">
            <Flex className="flex-col items-center gap-1">
              <HiOutlineShoppingBag size={25} />
              <Heading as={"p"} className="text-xs">
                CART
              </Heading>
            </Flex>
          </Link>

          <Link to="/login">
            <Flex className="flex-col items-center gap-1">
              <FaRegUser size={25} className="text-black" />
              <Heading as={"p"} className="text-xs">
                PROFILE
              </Heading>
            </Flex>
          </Link>
          <ReactSwitch
            onChange={toggleTheme} // Use the toggleTheme function
            checked={theme === "dark"}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box className="pb-4 md:hidden">
          <Stack as={"nav"} spacing={4} className="items-center">
            {Links.map((link, i) => (
              <Link
                key={i}
                to={
                  link === "Home"
                    ? "/"
                    : link === "Products"
                    ? "/products"
                    : link === "Cart"
                    ? "/cart"
                    : link === "Wishlist"
                    ? "/wishlist"
                    : undefined
                }
              >
                <NavLink>{link}</NavLink>
              </Link>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
