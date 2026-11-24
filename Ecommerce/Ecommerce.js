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
const cartContainer = document.querySelector(".card-Container");
const cartTotal = document.querySelector(".cart-total");
const cart = [];

function RenderProducts(item) {
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="${item.name}o" />
        <p>$${item.cost}</p>
          <button class="card-btn" data-item="${item.id}" >add to cart</button>
      </div> `,
  );
}
spinners.forEach((spinner) => RenderProducts(spinner));

let discount = 0;

const coupons = {
  SPIN10: 0.1,
  BRIAN25: 0.25,
  NICO99: 0.99,
};

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;
  cart.forEach((item) => {
    total = total + item.cost;
    cartContainer.insertAdjacentHTML(
      "beforeend",
      `<div class="cart-item">
          <img src="${item.img}" alt="${item.name}" />
            <h2>${item.name}</h2>
            <p> $${item.cost}</p>
<button class="remove-btn" data-item="${item.id}">x</button>
        </div>`,
    );
  });
  const finalTotal = total * (1 - discount);

  if (discount > 0) {
    cartTotal.textContent = `$${finalTotal.toFixed(2)} (${Math.round(discount * 100)}% off)`;
  } else {
    cartTotal.textContent = `$${finalTotal.toFixed(2)}`;
  }

  document.querySelector(".cart-title").textContent = `cart (${cart.length})`;

  const removeButtons = document.querySelectorAll(".remove-btn");
  removeButtons.forEach((button) =>
    button.addEventListener("click", function (event) {
      const ID = Number(event.target.getAttribute("data-item"));
      const IndextoRemove = cart.findIndex((spinner) => spinner.id === ID);
      if (IndextoRemove !== -1) {
        cart.splice(IndextoRemove, 1);
        renderCart();
      }
    }),
  );
}
const buttons = document.querySelectorAll(".card-btn");
buttons.forEach((button) =>
  button.addEventListener("click", function (event) {
    const ID = Number(event.target.getAttribute("data-item"));
    const selectedSpinner = spinners.find((spinner) => spinner.id === ID);
    if (selectedSpinner) {
      cart.push(selectedSpinner);
      renderCart();
    }
  }),
);

const filterButtons = document.querySelectorAll(".filter-btn");
filterButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    event.target.classList.add("active");
    const category = event.target.getAttribute("data-filter");
    container.innerHTML = "";
    if (category === "all") {
      spinners.forEach((spinner) => RenderProducts(spinner));
    } else {
      const filteredSpinners = spinners.filter(
        (spinner) => spinner.category === category,
      );
      filteredSpinners.forEach((spinner) => RenderProducts(spinner));
    }
    AddCart();
  });
});

function AddCart() {
  const buttons = document.querySelectorAll(".card-btn");
  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      const ID = Number(event.target.getAttribute("data-item"));
      const selectedSpinner = spinners.find((spinner) => spinner.id === ID);
      if (selectedSpinner) {
        cart.push(selectedSpinner);
        renderCart();
      }
    });
  });
}

document
  .querySelector("#coupon-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const input = document.querySelector("#coupon");
    const code = input.value.trim();

    if (code === "") {
      discount = 0;
      renderCart();
    } else if (Object.prototype.hasOwnProperty.call(coupons, code)) {
      discount = coupons[code];
      renderCart();
    } else {
    }

    input.value = "";
  });

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

function addtocart(item) {
  if (cart[item.name]) {
    cart[item.name].qty++;
  } else {
    cart[item.name] = item;
  }
}
// addtocart({ name: "Standard", cost: 3.99, qty: 1 });
//addtocart({ name: "Standard", cost: 3.99, qty: 1 });
//addtocart({ name: "Magnetic Haptic Spinner", cost: 15.99, qty: 1 });
//console.log(cart);
//Allow users to remove items from cart
function removecart(item) {
  if (cart[item.name]) {
    cart[item.name].qty--;
  }
  if (cart[item.name].qty <= 0) {
    delete cart[item.name];
  }
}
//removecart({ name: "Standard", cost: 3.99, qty: 1 });
// console.log(cart);

// Total
const Total = Object.values(cart).reduce(
  (sum, item) => sum + item.pirce * item.qty,
  0,
);
// console.log(Total);
*/
