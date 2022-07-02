document.addEventListener("DOMContentLoaded", function () {
  const cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
  selection = [...cart];
  selection.forEach((item) => {
    const prod = document.getElementById(item);
    prod.classList.remove("opacity-25");
  });
});

const modal = document.getElementById("exampleModal");
modal.addEventListener("shown.bs.modal", () => {
  const modalbody = document.getElementById("modalbody");
  const cart = JSON.parse(localStorage.getItem("cart"));
  modalbody.innerHTML = cart.map(
    (image) => `<img src="/assets/${image}.png" style="width:60px">`
  );
});

const product = document.getElementsByClassName("producto-item");
console.log(product);

let selection = [];

[...product].forEach((prod) => {
  prod.addEventListener("click", () => {
    console.log(prod.id);
    const index = selection.findIndex((el) => el === prod.id);
    if (index == -1) {
      selection.push(prod.id);
      prod.classList.remove("opacity-25");
    } else {
      selection.splice(index, 1);
      prod.classList.add("opacity-25");
    }
    localStorage.setItem("cart", JSON.stringify(selection));
    console.log(selection);
  });
});
