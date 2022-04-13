let beers = [];
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var context = {
  list: [],
};



//default fetch function for sorting data

let fetchingForSorting = ()=>{
  fetch("https://api.punkapi.com/v2/beers?per_page=10")
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

//default api call

fetch("https://api.punkapi.com/v2/beers?per_page=10")
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
    fetch("https://api.punkapi.com/v2/beers?per_page=10")
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

  if (selectValue == "Show 20") {
    context.list = [];
    console.log("opet fetch");
    fetch("https://api.punkapi.com/v2/beers?per_page=20")
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

  if (selectValue == "Show all") {
    context.list = [];
    fetch("https://api.punkapi.com/v2/beers?per_page=35")
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
});


//pagination fetch 
document.querySelectorAll('.paginationLink').forEach((a,i)=>{
  a.addEventListener('click',e=>{
    let selectValue = document.querySelector(".sorting").value;
   console.log(selectValue);
   
  if(selectValue=='Show 10'){
    console.log('okinuto 10');
    context.list = [];
    console.log(i);
    fetch(`https://api.punkapi.com/v2/beers?page=${i+1}&per_page=10`)
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
  if(selectValue=='Show 20'){
    console.log('okinuto 20');
    context.list = [];
    fetch(`https://api.punkapi.com/v2/beers?page=${i+1}&per_page=20`)
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
 if(selectValue=='Show all'){
  console.log('okinuto all');
    context.list = [];
    fetch(`https://api.punkapi.com/v2/beers?page=${i+1}&per_page=35`)
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
 })
});



Array.from(document.querySelector('.bottomNavGallery').children).forEach((a,i)=>{
  // console.log(a,i);
  a.addEventListener('click',e=>{
    let selectValue = document.querySelector(".sorting").value;
    if(e.target.classList.contains('secondChevronRight')){
      if(selectValue=='Show 10'){
        context.list = [];
        fetch(`https://api.punkapi.com/v2/beers?page=3&per_page=10`)
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

      if(selectValue=='Show 20'){
        context.list = [];
        fetch(`https://api.punkapi.com/v2/beers?page=3&per_page=20`)
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

      if(selectValue=='Show all'){
        context.list = [];
        fetch(`https://api.punkapi.com/v2/beers?page=3&per_page=35`)
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
    }
  })

})

