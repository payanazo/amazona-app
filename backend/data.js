import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Jesus",
      email: "payanazo@hotmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "Mario",
      email: "mario@hotmail.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],

  products: [
    {
      name: "Nike shirt",
      category: "shirts",
      image: "/images/p1.jpg",
      price: 120,
      brand: "nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
      countInStock: 2,
    },
    {
      name: "Puma shirt",
      category: "shirts",
      image: "/images/p2.jpg",
      price: 10,
      brand: "puma",
      rating: 4,
      numReviews: 16,
      description: "high quality product",
      countInStock: 12,
    },
    {
      name: "Lacoste shirt",
      category: "shirts",
      image: "/images/p3.jpg",
      price: 1200,
      brand: "lacoste",
      rating: 5,
      numReviews: 1111,
      description: "high quality product",
      countInStock: 20,
    },
    {
      name: "Nike pants",
      category: "pants",
      image: "/images/p4.jpg",
      price: 120,
      brand: "nike",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
      countInStock: 0,
    },
    {
      name: "Puma pants",
      category: "pants",
      image: "/images/p5.jpg",
      price: 20,
      brand: "puma",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
      countInStock: 14,
    },
    {
      name: "Adidas pants",
      category: "pants",
      image: "/images/p6.jpg",
      price: 120,
      brand: "adidas",
      rating: 3,
      numReviews: 10,
      description: "high quality product",
      countInStock: 11,
    },
  ],
};
export default data;
