import { addToCart } from "../script/addToCart.js";



// window.addEventListener("load", function () {
   // console.log(typeof parseInt(this.localStorage.getItem('idBeer')));

let idOfBeer = parseInt(localStorage.getItem('idBeer'));
let beers = [];
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var context = {
  list: [],
};

let mainCodeFetch=(main)=>{
   fetch(main).then((data) => {
     document.querySelector('.waitDivMain').style.display='flex';
     return data.json();
   })
   .then((data) => {
     beers = [...data];
     beers.forEach((a) => {
       console.log(a);
       context.list.push({
         buttonText: "Add to Cart",
         galleryItemPrice: `$${a.attenuation_level}`,
         imgLink: a.image_url,
         name:a.name,
         textAboutBeer:a.description,
         id1:`id${a.id}`,
         id2:`id2${a.id}`,
         food:a.food_pairing,
         withUs:a.first_brewed,
         tips:a.brewers_tips,
         abv:a.abv
       });
      //  toggleStyle();
       var html = template(context);
       document.querySelector(".galleryGallery").innerHTML = html;
       document.querySelector('.waitDivMain').style.display='none';
       
     });
     addToCart();
   })
   .catch((err) => {
     console.log(err);
   });
 }

mainCodeFetch(`https://api.punkapi.com/v2/beers/${idOfBeer}`)
// }, false);