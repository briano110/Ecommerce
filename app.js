/* const box = document.querySelector(".box");
box.style.backgroundColor = "red";
const header = document.getElementById("color");
const btn = document.querySelector("#btn");
let x = 0; */

function inject(item) {
  const container = document.querySelector(".container");
  container.insertAdjacentHTML(
    "beforeend",
    `<div class="card">
        <h2 class="card-header">${item.name}</h2>
        <img src="${item.img}" alt="hello" />
        <p>$${item.price}</p>
          <button class="add-to-cart" >Add to cart</button>
      </div> `,
  );
}

const products = [
  {
    name: "Mason",
    img: "https://dunkinmenu.org/wp-content/uploads/2026/03/dunkin-munchkins-price-2026.jpg-2.jpg",
    price: "Free",
  },
  {
    name: "NICK",
    img: "https://hips.hearstapps.com/hmg-prod/images/how-old-is-santa-1632098893.jpg",
    price: 12.25,
  },
  {
    name: "MR. WHATS ZITT TOOYA",
    img: "https://i.ytimg.com/vi/nR6qILcpRv4/sddefault.jpg",
    price: 99.49,
  },
  {
    name: "Yo Bro",
    img: "https://media.tenor.com/IDAzCBBEG7QAAAAe/ted-ted-2.png",
    price: 876.99,
  },
];

// 2. Use a standard for loop to iterate through the array
for (let i = 0; i < products.length; i++) {
  inject(products[i]);
}
