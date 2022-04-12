let beers = [];
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var context = {
  list: [],
};

//default api call

fetch("https://api.punkapi.com/v2/beers?per_page=10")
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    beers = [...data];

    beers.forEach((a) => {
   
      context.list.push({
        buttonText: "Add to Cart",
        galleryItemPrice: `${a.attenuation_level}$`,
        imgLink: a.image_url,
        name:a.name
      });
      var html = template(context);
      document.querySelector(".galleryGallery").innerHTML = html;
    });
  })
  .catch((err) => {
    console.log(err);
  });

//filter api
document.querySelector(".sorting").addEventListener("change", (e) => {
  let selectValue = document.querySelector(".sorting").value;
  context.list = [];
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
            galleryItemPrice: `${a.attenuation_level}$`,
            imgLink: a.image_url,
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
            galleryItemPrice: `${a.attenuation_level}$`,
            imgLink: a.image_url,
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
            galleryItemPrice: `${a.attenuation_level}$`,
            imgLink: a.image_url,
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

let sorting = () => {};
