let main = document.querySelector(".main");
showToHomeScree();

function showToHomeScree() {
  main.innerHTML = `<h1>Talha Habib</h1>`;
  items.forEach((item) => {
    main.innerHTML += `      
      <div class="image-container">
          <img src=${item.image} alt='image'>

          <h6 class="rating">${item.rating.stars} ✩ | ${item.rating.count}</h6>

          <h3 class="company-name">${item.company}</h3>

          <p class='item-name'>${item.item_name}</p>

          <p><span class="current-price">Rs ${item.current_price}</span> <strike class="original-price">Rs${item.original_price}</strike>

          <span class="discount">(${item.discount_percentage}% off)</span></p>

          <button style="cursor:pointer" onclick="addToBag(${item.id})">Add to cart</button>

      </div>`;
  });
}

let bag = [];
bag = JSON.parse(localStorage.getItem("bagItems"));
counter(bag);
counter2(bag);

function addToBag(id) {
  bag.push(id);
  counter(bag);
  counter2(bag);
  localStorage.setItem("bagItems", JSON.stringify(bag));
}
function counter(bag) {
  let count = document.querySelector(".count");

  if (bag.length > 0) {
    count.innerText = bag.length;
    count.style.opacity = 1;
    localStorage.setItem("bagItems", JSON.stringify(bag));
  } else {
    count.style.opacity = 0;
  }
}
function counter2(bag) {
  let count2 = document.querySelector(".count2");
  if (bag.length > 0) {
    count2.innerText = bag.length;
    localStorage.setItem("bagItems", JSON.stringify(bag));
    count2.style.opacity = 1;
  } else {
    count2.style.opacity = 0;
  }
}
