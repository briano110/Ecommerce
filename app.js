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
        <p>${item.price}</p>
          <button class="add-to-cart" >Add to cart</button>
      </div> `,
  );
}
const Mason = {
  name: "Mason Spinner",
  img: "https://dunkinmenu.org/wp-content/uploads/2026/03/dunkin-munchkins-price-2026.jpg-2.jpg",
  price: 11.99,
};
inject(Mason);
