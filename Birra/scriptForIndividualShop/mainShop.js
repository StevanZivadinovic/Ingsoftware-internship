import { addToCart } from "../script/addToCart.js";


let idOfBeer = parseInt(localStorage.getItem('idBeer'));
let beers = [];
var source = document.getElementById("entry-template").innerHTML;
var headerSource = document.getElementById("header-template").innerHTML;


var template = Handlebars.compile(source);
var headerTemplate = Handlebars.compile(headerSource);

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
        let tagline =[]
        
        a.ingredients.hops.forEach(c=>{
              if(!tagline.includes(c.name)){
              tagline.push(c.name);
            }
           })
       console.log(tagline);

       context.list.push({
         buttonText: "Add to Cart",
         galleryItemPrice: `$${a.attenuation_level}`,
         imgLink: a.image_url,
         name:a.name,
         textAboutBeer:a.description,
         id:a.id,
         id1:`id${a.id}`,
         id2:`id2${a.id}`,
         food:a.food_pairing,
         withUs:a.first_brewed,
         tips:a.brewers_tips,
         abv:a.abv,
         tagline:tagline
       });
      //  toggleStyle();
       var html = template(context);
       var htmlHeader = headerTemplate(context);
       document.querySelector(".bottomHeaderContainerForHandlebars").innerHTML = htmlHeader;
       document.querySelector(".galleryGallery").innerHTML = html;
       document.querySelector('.waitDivMain').style.display='none';

      });

     
     addToCart();
   
     return context.list;
   })
   .then((data)=>{
      console.log(data[0].tagline)
      data[0].tagline.forEach((d,i)=>{
         if(i+1< data[0].tagline.length){

            document.querySelector('.categories').innerHTML+=` <a class='categoriesLink'>${d}</a>, `;
         }else{
            document.querySelector('.categories').innerHTML+=` <a class='categoriesLink'>${d}</a> `;
         }
      });


      setTimeout(()=>{
         document.querySelectorAll('.inputNumberBtn').forEach(a=>{
            a.addEventListener('click',e=>{
               console.log('haj')
               let quantityFromBigInput = document.querySelector('.quantityOfBeerInput').value;
                 console.log(quantityFromBigInput);
                 document.querySelector('.smallModalInput').value =quantityFromBigInput;
            })
         })
       },2000)
   })
   .catch((err) => {
     console.log(err);
   });

 }

mainCodeFetch(`https://api.punkapi.com/v2/beers/${idOfBeer}`)
// }, false);



    
   


