const mongoose = require("mongoose");
const Chance = require("chance");
const chance = new Chance();

// Define your product schema (as before)
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    brand: { type: String, required: true },
    stock: {
      type: Number,
      required: true,
      validate: {
        validator: function (value) {
          return Number.isInteger(value) && value >= 0;
        },
        message: "Stock must be a non-negative integer",
      },
    },
    ratings: { type: Number, default: 0 },
    numOfReviews: { type: Number, default: 0 },
    images: [
      {
        public_id: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    reviews: [
      {
        user: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
        name: { type: String, required: true },
        rating: { type: Number, required: true },
        comment: { type: String, required: true },
      },
    ],
    createdBy: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

async function generateProducts() {
  const products = [];

  for (let i = 0; i < 100; i++) {
    const product = new Product({
      name: chance.sentence({ words: 3 }),
      description: chance.paragraph(),
      price: chance.floating({ min: 10, max: 1000, fixed: 2 }),
      category: "Topwear", // Customize as per your category list
      brand: chance.company(),
      stock: chance.integer({ min: 0, max: 100 }),
      ratings: chance.floating({ min: 0, max: 5, fixed: 1 }),
      numOfReviews: chance.integer({ min: 0, max: 100 }),
      images: [
        {
          public_id: chance.guid(),
          url: chance.url({ extensions: ["jpg", "png"] }),
        },
      ],
      reviews: [
        {
          user: new mongoose.Types.ObjectId(), // Use `new` keyword
          name: chance.name(),
          rating: chance.floating({ min: 1, max: 5, fixed: 1 }),
          comment: chance.sentence(),
        },
      ],
      createdBy: new mongoose.Types.ObjectId(), // Use `new` keyword
    });

    products.push(product);
  }

  return products;
}

async function main() {
  // Connect to your MongoDB database
  await mongoose.connect(
    "mongodb+srv://avdheshbhardwaj2004:FFNmunoPjej3HPyU@cluster0.ry8ju.mongodb.net/myntraClone"
  );

  // Generate products
  const products = await generateProducts();

  // Insert products into the database
  await Product.insertMany(products);

  console.log("Products inserted into the database successfully!");

  // Close the database connection
  mongoose.connection.close();
}

main().catch((err) => console.log(err));
