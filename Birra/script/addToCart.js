let getNumberOfBeers = (e) => {
  inputValue = 0;
  console.log("evo me");
  let cartValue = parseInt(document.querySelector(".spanCart").innerHTML);
  var inputValue = parseInt(
    e.target.parentElement.parentElement.children[1].children[2].value
  );
  console.log(cartValue, inputValue);
  cartValue += inputValue;
  document.querySelector(".spanCart").innerHTML = cartValue;

};



let getBeersDetails = ()=>{

  console.log('moj moj')
  document.querySelector('.cartListMain').innerHTML+=`<li>
  <div class="listCart">
    <div class="nameList">
      <h4>Name</h4>
      <p>Quantity: <span class="spanList">2</span> </p>
    </div>
    <div class="contentList">
      <img src="" alt="" srcset="" style="width: 3rem;">
      <button>X</button>
    </div>
  </div>
  </li>`
}

export let addToCart = () => {
  setTimeout(() => {
    document.querySelectorAll(".smallModalBtn").forEach((a) => {
      a.addEventListener("click", (getNumberOfBeers, getBeersDetails()), false);
    });
  }, 100);
};
