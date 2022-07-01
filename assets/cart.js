const product = document.getElementsByClassName("producto-item");
console.log(product);

const selection = [];

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
