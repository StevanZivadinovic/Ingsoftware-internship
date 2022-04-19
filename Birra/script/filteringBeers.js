
import {toggleStyle, fetchingForSorting } from './handlebarsPluginSet.js';
import { addToCart } from "./addToCart.js";

document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
    let nameSearchInput = document.getElementById('searchInputName').value;
    let sliderLeft = document.querySelector('#slider-1').value;
    let sliderRight = document.querySelector('#slider-2').value;
    let dateBefore = document.querySelector('#dateInputBefore').value;
    let dateAfter = document.querySelector('#dateInputAfter').value;
    let food;
    let beers = [];
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    var context = {
      list: [],
    };

    document.querySelectorAll('input[type="radio"]').forEach(a=>{
        if(a.checked){
           food = a.value;
        }
    });


    let mainCodeFetchFiltering = (main)=>{
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
                  toggleStyle();
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

    let noDataError = ()=>{
        setTimeout(()=>{
            console.log(context.list.length)
            if(context.list.length==0){
                confirm('There is no results for your search!');
                fetchingForSorting(10, -1, 10);
            }
        },1000);
    }

    if(nameSearchInput.length<=0 && !dateBefore && !dateAfter && !food){
        mainCodeFetchFiltering(`https://api.punkapi.com/v2/beers?abv_gt=${sliderLeft}&abv_lt=${sliderRight}`);  
        noDataError()
    }

    if(nameSearchInput.length>0 && !dateBefore && !dateAfter && !food){
         
            mainCodeFetchFiltering(`https://api.punkapi.com/v2/beers?beer_name=${nameSearchInput}&abv_gt=${sliderLeft}&abv_lt=${sliderRight}`);       
            noDataError()
    }

    
    if(nameSearchInput.length<=0 && dateBefore && dateAfter && !food){
        dateAfter = dateAfter.substr(0,7).split("-").reverse().join("-");
        dateBefore = dateBefore.substr(0,7).split("-").reverse().join("-");
        console.log(dateAfter)
       mainCodeFetchFiltering(`https://api.punkapi.com/v2/beers?abv_gt=${sliderLeft}&abv_lt=${sliderRight}&brewed_after=${dateAfter}&brewed_before=${dateBefore}`);       
       noDataError()
    }
    else  if(nameSearchInput.length<=0 && !dateBefore && dateAfter && !food){
        dateAfter = dateAfter.substr(0,7).split("-").reverse().join("-");
        
       mainCodeFetchFiltering(`https://api.punkapi.com/v2/beers?abv_gt=${sliderLeft}&abv_lt=${sliderRight}&brewed_after=${dateAfter}`);       
       noDataError()
    }
    else if(nameSearchInput.length<=0 && dateBefore && !dateAfter && !food){
        dateBefore = dateBefore.substr(0,7).split("-").reverse().join("-");
       
        mainCodeFetchFiltering(`https://api.punkapi.com/v2/beers?abv_gt=${sliderLeft}&abv_lt=${sliderRight}&brewed_before=${dateBefore}`);       
        noDataError()
    }


   
   
    console.log(nameSearchInput, `Left slider:${sliderLeft}`, `Right slider:${sliderRight}`);
    console.log(`${dateBefore}`, `${dateAfter}`, `${food}`);

    // mainCodeFetch('https://api.punkapi.com/v2/beers?page=2&per_page=80')
    
})
