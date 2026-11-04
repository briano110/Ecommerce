//Create a list of at least 20 items to sell
spinners = [
  { id: 1, name: "Standard", cost: 3.99, category: "Plastic", stock: 10 },
  { id: 2, name: "Dual-Bar Spinner", cost: 9.99, category: "Metal", stock: 10 },
  { id: 3, name: "Light-Up Spinner ", cost: 5.99, category: "Glow", stock: 10 },
  {
    id: 4,
    name: "Glow-in-the-Dark Spinner ",
    cost: 6.99,
    category: "Glow",
    stock: 10,
  },
  {
    id: 5,
    name: "Aluminum Tri-Spinner ",
    cost: 11.99,
    category: "Metal",
    stock: 10,
  },
  {
    id: 6,
    name: "Brass Metal Spinner ",
    cost: 19.99,
    category: "Metal",
    stock: 10,
  },
  {
    id: 7,
    name: "Titanium EDC Spinner ",
    cost: 29.99,
    category: "Metal",
    stock: 10,
  },
  {
    id: 8,
    name: "Zirconium Spinner ",
    cost: 39.99,
    category: "Metal",
    stock: 10,
  },
  {
    id: 9,
    name: "Transformable Robot Spinner ",
    cost: 8.99,
    category: "Novelty",
    stock: 10,
  },
  {
    id: 10,
    name: "Planetary Gear Spinner",
    cost: 7.99,
    category: "Novelty",
    stock: 10,
  },
  {
    id: 11,
    name: "Custom-Button  Spinner ",
    cost: 4.99,
    category: "Plastic",
    stock: 10,
  },
  { id: 12, name: "Chain Spinner", cost: 9.99, category: "Novelty", stock: 10 },
  { id: 13, name: "Captain America Shield Spinner ", cost: 6.99, stock: 10 },
  {
    id: 14,
    name: "Holographic  Spinner",
    cost: 12.99,
    category: "Glow",
    stock: 10,
  },
  {
    id: 15,
    name: "Pop-it Spinner",
    cost: 3.99,
    category: "Plastic",
    stock: 10,
  },
  { id: 16, name: "Micro Spinner", cost: 4.99, category: "Plastic", stock: 10 },
  {
    id: 17,
    name: "Table Spinner ",
    cost: 11.99,
    category: "Novelty",
    stock: 10,
  },
  {
    id: 18,
    name: "Carnival Style Spinner ",
    cost: 7.99,
    category: "Plastic",
    stock: 10,
  },
  {
    id: 19,
    name: "Magnetic Haptic Spinner",
    cost: 15.99,
    category: "Metal",
    stock: 10,
  },
  {
    id: 20,
    name: "Suction Cup Baby Spinner ",
    cost: 2.99,
    category: "Plastic",
    stock: 10,
  },
];
//Filter what products are shown with button clicks (clicks added later!)
function Sortbycategory(category) {
  const Plastic = spinners.filter((item) => item.category === "Plastic");
  const Metal = spinners.filter((item) => item.category === "Metal");
  const Glow = spinners.filter((item) => item.category === "Glow");
  const Novelty = spinners.filter((item) => item.category === "Novelty");
  if (category === `Plastic`) return Plastic;
  else if (category === `Metal`) return Metal;
  else if (category === `Glow`) return Glow;
  else if (category === `Novelty`) return Novelty;
  else return "Product not found";
}
//Allow users to add to a cart
const cart = { Standard: { name: "Standard", cost: 3.99, qty: 1 } };
function addtocart(item) {
  if (cart[item.name]) {
    cart[item.name].qty++;
  } else {
    cart[item.name] = item;
  }
}
addtocart({ name: "Standard", cost: 3.99, qty: 1 });
addtocart({ name: "Standard", cost: 3.99, qty: 1 });
addtocart({ name: "Magnetic Haptic Spinner", cost: 15.99, qty: 1 });
console.log(cart);
//Allow users to remove items from cart
function removecart(item) {
  if (cart[item.name]) {
    cart[item.name].qty--;
  }
  if (cart[item.name].qty <= 0) {
    delete cart[item.name];
  }
}
removecart({ name: "Standard", cost: 3.99, qty: 1 });
console.log(cart);

// Total
const Total = Object.values(cart).reduce(
  (sum, item) => sum + item.pirce * item.qty,
  0,
);
console.log(Total);
