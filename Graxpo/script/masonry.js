import Masonry from 'masonry-layout';

window.onload=()=>{

    const grid = document.querySelector('.gridA');
      var msnry = new Masonry( grid, {
        // options
        itemSelector: '.grid-item',
        // columnWidth: 100
      });
}


// document.querySelector('.allCategories').addEventListener('click',e=>{
//     document.querySelector('.gridA').style.display='grid';
// })