
let getLocalStorageItems = () => {
  for (var i = 0; i < localStorage.length; i++) {
    document.querySelector('.cartListMain').innerHTML += localStorage.getItem(localStorage.key(i));
  }
  let sum = 0;
  Array.from(document.querySelector('.cartListMain').children).forEach(a => {
    let quantityLiLocalStorage = parseInt(a.children[0].children[0].children[1].children[0].innerHTML);
    sum += quantityLiLocalStorage;

  })
  document.querySelector(".spanCart").innerHTML = sum;
}

getLocalStorageItems();


let getNumberOfBeers = (e, c) => {
  console.log(c, e.currentTarget)
  inputValue = 0;
  let cartValue = parseInt(document.querySelector(".spanCart").innerHTML);
  var inputValue = parseInt(
    e.target.parentElement.parentElement.children[1].children[2].value
  );
  console.log(cartValue, inputValue);
  cartValue += inputValue;
  document.querySelector(".spanCart").innerHTML = cartValue;

};



let getBeersDetails = (e, c) => {
  console.log(c, document.querySelector('.smallModalInput').value);
  let id = e.currentTarget.getAttribute('data-id');
  fetch(`https://api.punkapi.com/v2/beers/${id}`)
    .then(data => {
      return data.json()
    })
    .then((data) => {
      let imgURL = data[0].image_url;
      let name = data[0].name;
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
      document.querySelector('.cartListMain').innerHTML += liTag;
      let arrayOfLocalStorageItems = [];
      localStorage.setItem(`${name}`, liTag);

      console.log('dodatno')
    })


}


let removeBeer = (e, c) => {
  console.log(c, e.currentTarget);
  if (e.target.classList.contains('listBtnRemove')) {
    let numOfBeersToDelete = parseInt(e.target.parentElement.parentElement.children[0].children[1].children[0].innerHTML);
    let cartValue = parseInt(document.querySelector(".spanCart").innerHTML);
    cartValue = cartValue - numOfBeersToDelete;
    document.querySelector(".spanCart").innerHTML = cartValue;
    e.target.parentElement.parentElement.parentElement.remove();
    let nameOfLi = e.target.parentElement.parentElement.parentElement.children[0].children[0].children[0].innerHTML;
    localStorage.removeItem(`${nameOfLi}`);

  }
}

document.querySelector('.cartListMain').addEventListener('click', removeBeer)

export let addToCart = () => {
  setTimeout(() => {
    document.querySelectorAll(".smallModalBtn").forEach((a) => {
      let c = 'hello';
      a.addEventListener("click", function (e) { getBeersDetails(e, c) });
      a.addEventListener("click", function (e) { getNumberOfBeers(e, c) });
    });
  }, 100);
};
