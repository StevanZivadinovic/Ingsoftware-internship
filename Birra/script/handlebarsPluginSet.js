var source = document.getElementById("entry-template").innerHTML;
var template = Handlebars.compile(source);
var context={
  list:[
    {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
    {buttonText:'Add to Cart', galleryItemPrice:'$195.00'},
  ]
};

  var html = template(context);
  document.querySelector('.galleryGallery').innerHTML = html;
  // console.log(template(context));