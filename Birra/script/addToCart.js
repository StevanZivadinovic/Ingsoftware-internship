let getNumberOfBeers = (e) => {
  inputValue = 0;
  console.log('pozdrav');
  let cartValue = parseInt(document.querySelector(".spanCart").innerHTML);
  var inputValue = parseInt(
    e.target.parentElement.parentElement.children[1].children[2].value
  );
  console.log(cartValue, inputValue);
  cartValue += inputValue;
  document.querySelector(".spanCart").innerHTML = cartValue;

};



let getBeersDetails = (e)=>{
 let beer =  e.parentElement.parentElement.parentElement.parentElement.previousElementSibling;
  let imgURL = beer.children[0].children[0].style.backgroundImage.replace(/(url\(|\)|")/g, '');
 let name = beer.children[1].children[0].innerHTML;
 let quantity = e.parentElement.parentElement.children[1].children[2].value;
 console.log(quantity);


  document.querySelector('.cartListMain').innerHTML+=`<li>
  <div class="listCart">
    <div class="nameList">
      <h4>${name}</h4>
      <p>Quantity: <span class="spanList">${quantity}</span> </p>
    </div>
    <div class="contentList">
      <img src="${imgURL}" alt="" srcset="" style="width: 2rem;">
      <button class='listBtnRemove'>X</button>
    </div>
  </div>
  </li>`;

  
}
let removeBeer = (e)=>{

  
    if(e.target.classList.contains('listBtnRemove')){
      console.log(e.target.parentElement);
      e.target.parentElement.parentElement.remove();
    }
   
}
document.querySelector('.cartListMain').addEventListener('click', removeBeer)

export let addToCart = () => {
  setTimeout(() => {
    document.querySelectorAll(".smallModalBtn").forEach((a) => {
      a.addEventListener("click", ()=>{getBeersDetails(a)});
      a.addEventListener("click", getNumberOfBeers);
    });
  }, 100);
};
