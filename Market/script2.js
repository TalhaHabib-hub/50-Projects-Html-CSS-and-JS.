bag = localStorage.getItem("bagItems");
let main2 = document.querySelector(".main2");
let count1 =document.querySelector('.count');
let count2 =document.querySelector('.count2')
bag = JSON.parse(bag);
let totalItemPrice = 0;
let tdp = 0;
let Average = 0;
showtocart();
showtotal();
countapna();
function showtocart() {
  
  totalItemPrice = 0;
  tdp = 0;
  Average = 0;
  main2.innerHTML = "";
  items.forEach((item) => {
    
    for (let i = 0; i < bag.length; i++) {
      if (item.id == bag[i]) {
        totalItemPrice += item.original_price;
        tdp += item.current_price;
        Average += item.discount_percentage;
        showToHomeScree2(item);
        countapna();
       
      }
    }
  });
}
function showToHomeScree2(item) {
  countapna();
  main2.innerHTML += `      
      <div class="image-container">
          <img src=${item.image} alt='image'>

          <h6 class="rating">${item.rating.stars} ✩ | ${item.rating.count}</h6>

          <h3 class="company-name">${item.company}</h3>

          <p class='item-name'>${item.item_name}</p>

          <p><span class="current-price">Rs ${item.current_price}</span> <strike class="original-price">Rs${item.original_price}</strike>

          <span class="discount">(${item.discount_percentage}% off)</span></p>

          <button style="cursor:pointer" onclick="replace(${item.id})">replace</button>

      </div>`;
}

function showtotal() {
  let productcount = document.querySelector("#product-count");
  productcount.value = bag.length + " items";

  let totalactual = document.querySelector("#actuall-cost");
  totalactual.value = "Rs " + totalItemPrice;

  let totalWithDiscount = document.querySelector("#discount-price");
  totalWithDiscount.value = "Rs " + tdp;

  let discountAverage = document.querySelector("#discount-rate");
  Average = Average / bag.length || 0;
  discountAverage.value = Average + "%";
}

function replace(id) {
  items.forEach((item) => {
    for (let i = 0; i < bag.length; i++) {
      if (item.id == bag[i]) {
        bag = bag.filter((item) => item !== id);
        showtocart();
        showtotal();
        localStorage.setItem("bagItems", (JSON.stringify(bag)));
        bag = JSON.parse(localStorage.getItem("bagItems"));
        countapna();
      }
    }
  });
}
countapna();
function countapna(){
count1.innerText=bag.length;
count2.innerText=bag.length;
}