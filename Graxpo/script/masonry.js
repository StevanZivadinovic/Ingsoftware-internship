import Masonry from 'masonry-layout';


let allCategories = ()=>{
    console.log('haj')

    document.querySelector('.gallery').style.display='grid';
}


var elem = document.querySelector('.gallery');
var msnry = new Masonry( elem, {
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});
console.log(msnry)

// element argument can be a selector string
//   for an individual element
var msnry = new Masonry( '.grid', {
  // options
});