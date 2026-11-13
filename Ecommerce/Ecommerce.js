//Create a list of at least 20 items to sell
spinners = [
  {
    id: 1,
    name: "standard",
    cost: 3.99,
    category: "Plastic",
    stock: 10,
    img: "IMAGES/Standard.jpg",
  },
  {
    id: 2,
    name: "dual-bar spinner",
    cost: 9.99,
    category: "Metal",
    stock: 10,
    img: "IMAGES/Dual-Bar Spinner.jpg",
  },
  {
    id: 3,
    name: "light-up spinner",
    cost: 5.99,
    category: "Glow",
    stock: 10,
    img: "IMAGES/Light-Up Spinner.jpg",
  },
  {
    id: 4,
    name: "glow-in-the-dark spinner",
    cost: 6.99,
    category: "Glow",
    stock: 10,
    img: "IMAGES/Glow-in-the-Dark Spinner.jpg",
  },
  {
    id: 5,
    name: "aluminum tri-spinner",
    cost: 11.99,
    category: "Metal",
    stock: 10,
    img: "IMAGES/Aluminum Tri-Spinner.jpg",
  },
  {
    id: 6,
    name: "brass metal spinner",
    cost: 19.99,
    category: "Metal",
    stock: 10,
    img: "IMAGES/Brass Metal Spinner.webp",
  },
  {
    id: 7,
    name: "titanium spinner",
    cost: 29.99,
    category: "Metal",
    stock: 10,
    img: "IMAGES/Titanium EDC Spinner.jpg",
  },
  {
    id: 8,
    name: "zirconium spinner",
    cost: 39.99,
    category: "Metal",
    stock: 10,
    img: "IMAGES/Zirconium Spinner.jpg",
  },
  {
    id: 9,
    name: "transformable robot spinner",
    cost: 8.99,
    category: "Novelty",
    stock: 10,
    img: "IMAGES/Transformable Robot Spinner.webp",
  },
  {
    id: 10,
    name: "gear spinner",
    cost: 7.99,
    category: "Novelty",
    stock: 10,
    img: "IMAGES/Gear Spinner.jpg",
  },
  {
    id: 11,
    name: "custom-button spinner",
    cost: 4.99,
    category: "Plastic",
    stock: 10,
    img: "IMAGES/Custom-Button  Spinner.avif",
  },
  {
    id: 12,
    name: "chain spinner",
    cost: 9.99,
    category: "Novelty",
    stock: 10,
    img: "IMAGES/Chain fidget Spinner.jpg",
  },
  {
    id: 13,
    name: "captain america shield spinner",
    cost: 6.99,
    category: "Novelty",
    stock: 10,
    img: "IMAGES/Captain America Shield Spinner.jpg",
  },
  {
    id: 14,
    name: "holographic spinner",
    cost: 12.99,
    category: "Glow",
    stock: 10,
    img: "IMAGES/Holographic  Spinner.jpg",
  },
  {
    id: 15,
    name: "pop-it spinner",
    cost: 3.99,
    category: "Plastic",
    stock: 10,
    img: "IMAGES/Pop-it Spinner.jpg",
  },
  {
    id: 16,
    name: "micro spinner",
    cost: 4.99,
    category: "Plastic",
    stock: 10,
    img: "IMAGES/Micro Spinner.jpg",
  },
  {
    id: 17,
    name: "ferris-wheel spinner",
    cost: 11.99,
    category: "Novelty",
    stock: 10,
    img: "IMAGES/Ferris-Wheel Spinner.jpg",
  },
  {
    id: 18,
    name: "carnival style spinner",
    cost: 7.99,
    category: "Plastic",
    stock: 10,
    img: "IMAGES/Carnival Style Spinner.jpg",
  },
  {
    id: 19,
    name: "magnetic haptic spinner",
    cost: 15.99,
    category: "Metal",
    stock: 10,
    img: "IMAGES/Magnetic Haptic Spinner.webp",
  },
  {
    id: 20,
    name: "suction cup baby spinner",
    cost: 2.99,
    category: "Plastic",
    stock: 10,
    img: "IMAGES/Suction Cup Baby Spinner.avif",
  },
];
const container = document.querySelector(".container");
const cart = {};

function inject(item) {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="hello" />
        <p>$${item.cost}</p>
          <button class="card-btn" data-item="${item.id}" >add to cart</button>
      </div> `,
  );
}
spinners.forEach((spinner) => inject(spinner));

const buttons = document.querySelectorAll(".card-btn");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    const id = event.target.getAttribute("data-item");
    const cartParagraph = document.querySelector(".cart p");

    if (cartParagraph) {
      cartParagraph.innerText = id;
    }
  }),
);

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  const timeString = `${hours}:${minutes}:${seconds} utc-5`;
  document.getElementById("clock").innerText = timeString;
}

updateClock();
setInterval(updateClock, 1000);
/*
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
*/
