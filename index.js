const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let li = e.target.parentElement;
    let imgSource = li.querySelector("img").src;
    let heading = li.querySelector("h3").innerText;
    let p = li.querySelectorAll("p");
    let price = p[0].innerText.slice(6);

    addToCart(heading, imgSource, price);
    removeItems();
  });
});

function addToCart(heading, imgSource, price) {
  const cartSection = document.querySelector("section.cart");

  let ul = cartSection.querySelector("ul");
  cartSection.append(ul);

  let li = document.createElement("li");
  ul.append(li);

  let img = document.createElement("img");
  img.src = imgSource;
  li.append(img);

  let h3 = document.createElement("h3");
  h3.innerText = heading;
  li.append(h3);

  let p = document.createElement("p");
  p.innerText = `Price ${price}`;
  li.append(p);

  let button = document.createElement("button");
  button.innerText = "Remove Item";
  button.classList = "remove-item";
  li.append(button);

  editPrices();
}

function removeItems() {
  const removeItemButtons = document.querySelectorAll(".remove-item");

  removeItemButtons.forEach((removeItemButton) => {
    removeItemButton.addEventListener("click", (e) => {
      e.target.parentElement.remove();
      editPrices()
    });
  });
}

function editPrices() {
  const cartSection = document.querySelector("section.cart");

  const ul = cartSection.querySelector("ul");

  const lists = ul.querySelectorAll("li");

  let p = cartSection.querySelector("p");

  let totalPrice = 0;

  lists.forEach((li) => {
    const p = li.querySelector("p");
    const price = p.innerText.slice(8);
    totalPrice += +price;
  });
  console.log(totalPrice);

  p.innerText = `Total Price = ${totalPrice}`;
}
