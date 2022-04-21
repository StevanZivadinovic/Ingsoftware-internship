
import { toggleStyle, fetchingForSorting } from './handlebarsPluginSet.js';
import { addToCart } from "./addToCart.js";

document.querySelector('form').addEventListener('submit', e => {
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

    setTimeout(()=>{
        console.log(document.querySelector('.linkTagToIndividualShop'));
        document.querySelectorAll('.linkTagToIndividualShop').forEach(a=>{
    
            a.addEventListener('click',e=>{
             let idBeer = parseInt(e.target.getAttribute('data-id').slice(2));
             localStorage.setItem('idBeer', idBeer);
    
             window.location.href = 'http://127.0.0.1:5500/indexIndividualShop.html'
            })
        })
        
    },1000)

    document.querySelectorAll('input[type="radio"]').forEach(a => {
        if (a.checked) {
            food = a.value;
        }
    });


    let mainCodeFetchFiltering = (main) => {
        fetch(main).then((data) => {
            document.querySelector('.waitDivMain').style.display = 'flex';
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
                        name: a.name,
                        textAboutBeer: a.description,
                        id1: `id${a.id}`,
                        id2: `id2${a.id}`,
                        food: a.food_pairing,
                        withUs: a.first_brewed,
                        tips: a.brewers_tips,
                        abv: a.abv
                    });
                    toggleStyle();
                    var html = template(context);
                    document.querySelector(".galleryGallery").innerHTML = html;
                    document.querySelector('.waitDivMain').style.display = 'none';

                });
                addToCart();
            })
            .catch((err) => {
                console.log(err);
            });
    }

    let noDataError = () => {
        setTimeout(() => {
            console.log(context.list.length)
            if (context.list.length == 0) {
                confirm('There is no results for your search!');
                fetchingForSorting(10, -1, 10);
            }
        }, 1000);
    }


    dateAfter && (dateAfter = dateAfter.substr(0, 7).split("-").reverse().join("-"));
    dateBefore && (dateBefore = dateBefore.substr(0, 7).split("-").reverse().join("-"));

    let sortingFilteredBeers=()=>{

        mainCodeFetchFiltering(`https://api.punkapi.com/v2/beers?${nameSearchInput && 'beer_name=' + nameSearchInput}${sliderLeft && '&abv_gt=' + sliderLeft}${sliderRight && '&abv_lt=' + sliderRight}${(dateAfter.length>0 ? '&brewed_after=' + dateAfter:'')}${dateBefore.length>0 ? '&brewed_before=' + dateBefore :''}${food ? '&food=' + food :''}`);
        noDataError()
    }

    sortingFilteredBeers()
    //sorting api

    // let selectValue = document.querySelector(".sorting").value;
    // if (selectValue == "Show 10") {
    // sortingFilteredBeers('',10)
    //  document.querySelectorAll('.link1, .link2, .firstChevronRight, .secondChevronRight').forEach(a=>{
    //   a.style.display = 'inline';
    // });
    // }
    // if (selectValue == "Show 20") {
    //     sortingFilteredBeers('',20);
    //   document.querySelectorAll('.link3, .link4, .firstChevronLeft, .secondChevronLeft, .firstChevronRight, .secondChevronRight').forEach(a=>{
    //     a.style.display = 'none';
    //   });
    //   document.querySelectorAll('.link1, .link2')
    //   .forEach(a=>{
    //     a.style.display = 'inline';
    //   });
    // }
  
    // if (selectValue == "Show all") {
    //     sortingFilteredBeers('',35);
    //  document.querySelectorAll('.link2, .link3, .firstChevronLeft, .secondChevronLeft, .firstChevronRight, .secondChevronRight').forEach(a=>{
    //    a.style.display = 'none';
    //  })
    // }



    //pagination fetch 
// document.querySelectorAll('.paginationLink').forEach((a,i)=>{
//     a.addEventListener('click',e=>{
//       toggleStyle();
//       addToCart();
//       let selectValue = document.querySelector(".sorting").value;
//     //  console.log(selectValue);
     
//     if(selectValue=='Show 10'){
//       console.log('okinuto 10');
//       toggleStyle();
        
//         if(i+1 == 4){
//           sortingFilteredBeers(i+1,5)
//         }else{
//           sortingFilteredBeers(i+1,10)
//         }
    
//     }
//     if(selectValue=='Show 20'){
//       console.log('okinuto 20');
//       document.querySelector('.link1, .link2').style.display = 'inline';
//       toggleStyle();
//       if(i+1 == 2){ 
//         sortingFilteredBeers(i+1,15)
//       }else{
//         sortingFilteredBeers(i+1,20);
//       }
//     }
//    if(selectValue=='Show all'){
//     console.log('okinuto all');
//     toggleStyle();
//     sortingFilteredBeers(i+1,35);
//     }
//    })
//   });





    console.log(nameSearchInput, `Left slider:${sliderLeft}`, `Right slider:${sliderRight}`);
    console.log(`${dateBefore}`, `${dateAfter}`, `${food}`);

})
