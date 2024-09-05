import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import CategorySection from "./CategorySection";
import ProductCard from "./ProductCard"; // Use your ProductCard component
import axiosInstance from "../utils/axiosInstance"; // Import the axios instance

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({ category: "", brand: "" });
  const [sort, setSort] = useState("price"); // Default sorting by price

  useEffect(() => {
    // Fetch products from the API with pagination, sorting, and filters
    const fetchProducts = async () => {
      try {
        const response = await axiosInstance.get("/product", {
          params: {
            page: currentPage,
            limit: 10, // Adjust as needed
            sort,
            ...filters,
          },
        });
        setProducts(response.data.products);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [currentPage, filters, sort]);

  const handleAddToCart = (product) => {
    // Implement your add to cart logic here
    console.log("Added to cart:", product);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <>
      <Banner />
      <CategorySection />
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-4">
            <select
              name="category"
              onChange={handleFilterChange}
              className="p-2 border rounded"
            >
              <option value="">All Categories</option>
              {/* Add your category options here */}
            </select>
            <select
              name="brand"
              onChange={handleFilterChange}
              className="p-2 border rounded"
            >
              <option value="">All Brands</option>
              {/* Add your brand options here */}
            </select>
            <select onChange={handleSortChange} className="p-2 border rounded">
              <option value="price">Price: Low to High</option>
              <option value="-price">Price: High to Low</option>
              <option value="ratings">Highest Ratings</option>
            </select>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 border rounded mr-2"
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 border rounded ml-2"
            >
              Next
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
