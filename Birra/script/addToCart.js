let hendler = (e) => {
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

export let addToCart = () => {
  setTimeout(() => {
    document.querySelectorAll(".smallModalBtn").forEach((a) => {
      a.addEventListener("click", hendler);
    });
  }, 100);
};
