import React from "react";

// Dummy data for categories
const dummyCategories = [
  {
    _id: "1",
    name: "Men's Clothing",
    imageUrl: "https://via.placeholder.com/300x200?text=Men's+Clothing",
    description: "Explore the latest trends in men's fashion.",
  },
  {
    _id: "2",
    name: "Women's Clothing",
    imageUrl: "https://via.placeholder.com/300x200?text=Women's+Clothing",
    description: "Find stylish and comfortable women's apparel.",
  },
  {
    _id: "3",
    name: "Electronics",
    imageUrl: "https://via.placeholder.com/300x200?text=Electronics",
    description: "Discover the newest gadgets and tech products.",
  },
  {
    _id: "4",
    name: "Home & Kitchen",
    imageUrl: "https://via.placeholder.com/300x200?text=Home+%26+Kitchen",
    description: "Upgrade your home with quality kitchen essentials.",
  },
  {
    _id: "5",
    name: "Footwear",
    imageUrl: "https://via.placeholder.com/300x200?text=Footwear",
    description: "Step up your shoe game with our latest collection.",
  },
  {
    _id: "6",
    name: "Accessories",
    imageUrl: "https://via.placeholder.com/300x200?text=Accessories",
    description: "Complete your look with stylish accessories.",
  },
  {
    _id: "7",
    name: "Sports",
    imageUrl: "https://via.placeholder.com/300x200?text=Sports",
    description: "Get the best gear for your favorite sports.",
  },
  {
    _id: "8",
    name: "Beauty",
    imageUrl: "https://via.placeholder.com/300x200?text=Beauty",
    description: "Pamper yourself with our beauty and personal care products.",
  },
];

const CategorySection = () => {
  return (
    <section className="container mx-auto my-4">
      <h2 className="text-2xl font-semibold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {dummyCategories.map((category) => (
          <div
            key={category._id}
            className="relative group overflow-hidden rounded-lg"
          >
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-full h-40 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <h3 className="text-xl font-bold">{category.name}</h3>
              <p className="mt-2 text-sm">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
