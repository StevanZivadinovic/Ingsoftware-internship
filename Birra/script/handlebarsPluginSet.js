import { addToCart } from "./addToCart.js";

let beers = [];
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var context = {
  list: [],
};



//toggle style

let toggleStyle = ()=>{
  setTimeout(()=>{
    if(document.querySelector('.galleryGallery').classList.contains('listGallery')){
     
      document.querySelectorAll('.galleryItemPriceSecond, .cardText, .cardName' ).forEach(a=>{
        a.style.display = 'block'
    })

    document.querySelectorAll('.galleryItemPriceFirst').forEach(a => {
      a.style.display = 'none';
  }, 300);

    }
    else{
      document.querySelectorAll('.galleryItemPriceSecond, .cardText, .cardName' ).forEach(a=>{
        a.style.display = 'none'
    });
    document.querySelectorAll('.galleryItemPriceFirst').forEach(a => {
      a.style.display = 'block';
  });
    }
  },300)
}



//mainCodeInFetch
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



//default fetch function for sorting data

let fetchingForSorting = (dataPerPage)=>{
  context.list = [];
mainCodeFetch(`https://api.punkapi.com/v2/beers?per_page=${dataPerPage}`);

}

//default fetch function for pagination fetching

let paginationFetching = (pageNumber, dataPerPage) =>{
  context.list = [];
mainCodeFetch(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${dataPerPage}`);

}





//default api call

fetchingForSorting(10, -1, 10);
// addToCart();

//sorting api
document.querySelector(".sorting").addEventListener("change", (e) => {
  let selectValue = document.querySelector(".sorting").value;
 
  
  if (selectValue == "Show 10") {
    fetchingForSorting(10);
    // addToCart();
  
   document.querySelectorAll('.link1, .link2, .firstChevronRight, .secondChevronRight').forEach(a=>{
    a.style.display = 'inline';
  });
  }

  if (selectValue == "Show 20") {
    fetchingForSorting(20);
    // addToCart();
    document.querySelectorAll('.link3, .link4, .firstChevronLeft, .secondChevronLeft, .firstChevronRight, .secondChevronRight').forEach(a=>{
      a.style.display = 'none';
    });
      document.querySelector('.link1, .link2').style.display = 'inline';
   

  }

  if (selectValue == "Show all") {
    fetchingForSorting(35);
    // addToCart();
   document.querySelectorAll('.link2, .link3, .firstChevronLeft, .secondChevronLeft, .firstChevronRight, .secondChevronRight').forEach(a=>{
     a.style.display = 'none';
   })
  }
});


//pagination fetch 
document.querySelectorAll('.paginationLink').forEach((a,i)=>{
  a.addEventListener('click',e=>{
    toggleStyle();
    addToCart();
    let selectValue = document.querySelector(".sorting").value;
  //  console.log(selectValue);
   
  if(selectValue=='Show 10'){
    console.log('okinuto 10');
    toggleStyle();
      
      if(i+1 == 4){
        paginationFetching(i+1,5);
      }else{
  
        paginationFetching(i+1, 10);
      }
  
  }
  if(selectValue=='Show 20'){
    console.log('okinuto 20');
    document.querySelector('.link1, .link2').style.display = 'inline';
    toggleStyle();
    if(i+1 == 2){
      paginationFetching(i+1, 15);
    }else{

      paginationFetching(i+1, 20)
    }
  }
 if(selectValue=='Show all'){
  console.log('okinuto all');
  toggleStyle();
  paginationFetching(i+1, 35)
  }
 })
});



Array.from(document.querySelector('.bottomNavGallery').children).forEach((a,i)=>{
  // console.log(a,i);
  a.addEventListener('click',e=>{
    addToCart();
    let selectValue = document.querySelector(".sorting").value;
    if(e.target.classList.contains('secondChevronRight')){

      setTimeout(()=>{
        document.querySelector('.link4').classList.add('currentlyClicked');
      },300);

      if(selectValue=='Show 10'){
        paginationFetching(4, 5);
        
       
      }

    }


    if(e.target.classList.contains('secondChevronLeft')){
      setTimeout(()=>{
        document.querySelector('.link1').classList.add('currentlyClicked');
      },300);
      if(selectValue=='Show 10'){
        paginationFetching(1, 10)
       
      }

      if(selectValue=='Show 20'){
        paginationFetching(1, 20)
        document.querySelector('.link1, .link2').style.display = 'inline';
      
      }

      if(selectValue=='Show all'){
        paginationFetching(1, 35);
      
      }
    }
  })

})

