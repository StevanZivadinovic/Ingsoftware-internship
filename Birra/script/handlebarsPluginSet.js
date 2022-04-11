let beers = [];
var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var context={
  list:[
    
    // {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    // {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    // {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    // {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    // {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    // {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    // {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    // {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    
  ]
};

fetch('https://api.punkapi.com/v2/beers')
.then(data=>{
  return data.json()
})
.then(data=>{
  beers = [...data];

  beers.forEach(a=>{
    console.log(a);
    if(a.image_url!=='https://images.punkapi.com/v2/keg.png'){

      context.list.push({buttonText:'Add to Cart', galleryItemPrice:`${a.attenuation_level}$`, imgLink:a.image_url});
    }

   


  var html = template(context);
  document.querySelector('.galleryGallery').innerHTML = html;




  })
})
.catch(err=>{
  console.log(err);
});







 