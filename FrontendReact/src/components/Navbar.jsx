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

import "./Navbar.css";

const Links = ["Home", "Products", "Cart", "Wishlist"];

const NavLink = ({ children }) => (
  <Box
    fontFamily={"sans-serif"}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "underline",
      cursor: "pointer",
    }}
    fontSize="md"
    fontWeight={500}
    textTransform="uppercase"
  >
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
    <>
      <Box
        boxShadow="rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px"
        mt={"5%"}
      >
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          position={"fixed"}
          top="0.1px"
          zIndex={"100"}
          bg="white"
          w="100%"
          padding={"10px"}
        >
          <IconButton
            className="icon"
            size={"lg"}
            width="20"
            icon={
              isOpen ? (
                <CloseIcon color={"black"} />
              ) : (
                <HamburgerIcon color={"black"} />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Flex color={"black"} gap="5" alignItems={"center"}>
            <Link to="/">
              <Image
                className="icon"
                src="https://github.com/harshau9/Myntra-Clone/blob/main/myntra/public/myn.png"
                alt="MyntraLogo"
                width="16"
              />
            </Link>
            <Box color={"black"} display={{ base: "none", md: "flex" }}>
              {Links.map((link, i) => (
                <Link
                  className="icon"
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

          <Flex
            color={"black"}
            border="0px solid red"
            gap={"5"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={{
              base: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            }}
            marginTop={{
              base: "10",
              sm: "unset",
              md: "unset",
              lg: "unset",
              xl: "unset",
            }}
          >
            <Flex gap="5" color={"black"}>
              <Link to="/cart">
                <Flex
                  className="icon"
                  flexDirection={"column"}
                  gap={1}
                  alignItems={"center"}
                >
                  <HiOutlineShoppingBag size={25} />
                  <Heading as={"p"} fontSize="x-small">
                    CART
                  </Heading>
                </Flex>
              </Link>

              <Link to="/login">
                <Flex
                  className="icon"
                  flexDirection={"column"}
                  gap={1}
                  alignItems={"center"}
                >
                  <FaRegUser size={25} color="black" />
                  <Heading as={"p"} fontSize="x-small">
                    PROFILE
                  </Heading>
                </Flex>
              </Link>
              <ReactSwitch
                className="icon"
                onChange={toggleTheme} // Use the toggleTheme function
                checked={theme === "dark"}
              />
            </Flex>

            <Flex color={"black"} className="icon">
              {/* You can add more buttons or conditional rendering here */}
            </Flex>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }} color="black">
            <Stack
              as={"nav"}
              spacing={4}
              justifyContent="center"
              alignItems="center"
            >
              {Links.map((link, i) => (
                <Link
                  className="icon"
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
    </>
  );
}
