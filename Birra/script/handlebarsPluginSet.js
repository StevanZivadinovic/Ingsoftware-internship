let beers = [];
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var context = {
  list: [],
};



//default fetch function for sorting data

let fetchingForSorting = (dataPerPage)=>{
  context.list = [];
  fetch(`https://api.punkapi.com/v2/beers?per_page=${dataPerPage}`)
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    beers = [...data];

    beers.forEach((a) => {
  //  console.log(a);
      context.list.push({
        buttonText: "Add to Cart",
        galleryItemPrice: `$${a.attenuation_level}`,
        imgLink: a.image_url,
        name:a.name,
        textAboutBeer:a.description
      });
      var html = template(context);
      document.querySelector(".galleryGallery").innerHTML = html;
    });
  })
  .catch((err) => {
    console.log(err);
  });
}

//default fetch function for pagination fetching

let paginationFetching = (pageNumber, dataPerPage) =>{
  context.list = [];
  fetch(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${dataPerPage}`)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        beers = [...data];

        beers.forEach((a) => {
          context.list.push({
            buttonText: "Add to Cart",
            galleryItemPrice: `$${a.attenuation_level}`,
            imgLink: a.image_url,
            name:a.name,
            textAboutBeer:a.description
          });
          var html = template(context);
          document.querySelector(".galleryGallery").innerHTML = html;
        });
      })
      .catch((err) => {
        console.log(err);
      });
}




//default api call

fetchingForSorting(10);

//sorting api
document.querySelector(".sorting").addEventListener("change", (e) => {
  let selectValue = document.querySelector(".sorting").value;
  context.list = [];
  setTimeout(()=>{
    if(document.querySelector('.galleryGallery').classList.contains('listGallery')){
      console.log('haj');
      document.querySelectorAll('.galleryItemPriceSecond, .cardText, .cardName' ).forEach(a=>{
        a.style.display = 'block'
    })

    document.querySelectorAll('.galleryItemPriceFirst').forEach(a => {
      a.style.display = 'none';
  }, 100);

    }
    else{
      document.querySelectorAll('.galleryItemPriceSecond, .cardText, .cardName' ).forEach(a=>{
        a.style.display = 'none'
    });
    document.querySelectorAll('.galleryItemPriceFirst').forEach(a => {
      a.style.display = 'block';
  });
    }
  },100)
  
  if (selectValue == "Show 10") {
   fetchingForSorting(10);
  }

  if (selectValue == "Show 20") {
    fetchingForSorting(20);
  }

  if (selectValue == "Show all") {
   fetchingForSorting(35);
  }
});


//pagination fetch 
document.querySelectorAll('.paginationLink').forEach((a,i)=>{
  a.addEventListener('click',e=>{
    let selectValue = document.querySelector(".sorting").value;
   console.log(selectValue);
   
  if(selectValue=='Show 10'){
    console.log('okinuto 20');
    
    paginationFetching(i+1, 10)
  }
  if(selectValue=='Show 20'){
    console.log('okinuto 20');
   
    paginationFetching(i+1, 20)
  }
 if(selectValue=='Show all'){
  console.log('okinuto all');
  paginationFetching(i+1, 35)
  }
 })
});



Array.from(document.querySelector('.bottomNavGallery').children).forEach((a,i)=>{
  // console.log(a,i);
  a.addEventListener('click',e=>{
    let selectValue = document.querySelector(".sorting").value;
    if(e.target.classList.contains('secondChevronRight')){
      if(selectValue=='Show 10'){
        paginationFetching(3, 10)
      }

      if(selectValue=='Show 20'){
        paginationFetching(3, 20)
      }

      if(selectValue=='Show all'){
        paginationFetching(3, 35);
      }
    }


    if(e.target.classList.contains('secondChevronLeft')){
      if(selectValue=='Show 10'){
        paginationFetching(1, 10)
      }

      if(selectValue=='Show 20'){
        paginationFetching(1, 20)
      }

      if(selectValue=='Show all'){
        paginationFetching(1, 35);
      }
    }
  })

})

