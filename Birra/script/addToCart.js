
let getLocalStorageItems = ()=>{
  for (var i = 0; i < localStorage.length; i++){
    document.querySelector('.cartListMain').innerHTML+=localStorage.getItem(localStorage.key(i));
  }
  let sum = 0;
  Array.from(document.querySelector('.cartListMain').children).forEach(a=>{
   let quantityLiLocalStorage = parseInt(a.children[0].children[0].children[1].children[0].innerHTML);
  sum+=quantityLiLocalStorage;

 })
 document.querySelector(".spanCart").innerHTML =sum;
}

getLocalStorageItems();


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
 let beer =  e.target.parentElement.parentElement.parentElement.parentElement.previousElementSibling;
  let imgURL = beer.children[0].children[0].style.backgroundImage.replace(/(url\(|\)|")/g, '');
 let name = beer.children[1].children[0].innerHTML;
 let quantity = e.target.parentElement.parentElement.children[1].children[2].value;
 let liTag = `<li>
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
  document.querySelector('.cartListMain').innerHTML+=liTag;
  let arrayOfLocalStorageItems = [];
  localStorage.setItem(`${name}`, liTag);

  console.log('dodatno')
}
let removeBeer = (e)=>{

    if(e.target.classList.contains('listBtnRemove')){
      let numOfBeersToDelete = parseInt(e.target.parentElement.parentElement.children[0].children[1].children[0].innerHTML);
      let cartValue = parseInt(document.querySelector(".spanCart").innerHTML);
      cartValue = cartValue - numOfBeersToDelete;
      document.querySelector(".spanCart").innerHTML = cartValue;
      e.target.parentElement.parentElement.parentElement.remove();
      let nameOfLi = e.target.parentElement.parentElement.parentElement.children[0].children[0].children[0].innerHTML;
      console.log(nameOfLi);
      localStorage.removeItem(`${nameOfLi}`);
     
    }
}

document.querySelector('.cartListMain').addEventListener('click', removeBeer)

export let addToCart = () => {
  setTimeout(() => {
    document.querySelectorAll(".smallModalBtn").forEach((a) => {
      a.addEventListener("click", getBeersDetails, false);
      a.addEventListener("click", getNumberOfBeers), false;
    });
  }, 100);
};
