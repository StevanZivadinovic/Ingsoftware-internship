
import { mainCodeFetch } from './handlebarsPluginSet.js'

document.querySelector('form').addEventListener('submit',e=>{
    e.preventDefault();
    let nameSearchInput = document.getElementById('searchInputName').value;
    let sliderLeft = document.querySelector('#slider-1').value;
    let sliderRight = document.querySelector('#slider-2').value;
    let dateBefore = document.querySelector('#dateInputBefore').value;
    let dateAfter = document.querySelector('#dateInputAfter').value;
    let food;

    var context = {
        list: [],
      };

    document.querySelectorAll('input[type="radio"]').forEach(a=>{
        if(a.checked){
           food = a.value;
        }
    });

    if(nameSearchInput.length>0){
        context.list = [];
        document.querySelector(".galleryGallery").innerHTML = '';
        mainCodeFetch(`https://api.punkapi.com/v2/beers?beer_name=${nameSearchInput}`);
    }


   
   
    console.log(nameSearchInput, `Left slider:${sliderLeft}`, `Right slider:${sliderRight}`);
    console.log(`${dateBefore}`, `${dateAfter}`, `${food}`);

    // mainCodeFetch('https://api.punkapi.com/v2/beers?page=2&per_page=80')
    
})
