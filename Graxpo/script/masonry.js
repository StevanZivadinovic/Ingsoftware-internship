// import Masonry from 'masonry-layout';
window.onload = () => {
  const grid = document.querySelector(".gridA");
  var msnry = new Masonry(grid, {
    // options
    itemSelector: ".grid-item",
    // columnWidth: 100
  });
};
document.querySelector(".allCategories").addEventListener("click", (e) => {
  document.querySelector(".gridA").style.display = "grid";
  Array.from(document.querySelectorAll(".grid-item")).forEach((a) => {
    a.style.display = "grid";
    const grid = document.querySelector(".gridA");
    var msnry = new Masonry(grid, {
      // options
      itemSelector: ".grid-item",
      gutter:2
    });
  });
});

let showFuntion = (elements, elementsMasonry)=>{
    // document.querySelector(button).addEventListener("click", (e) => {
        Array.from(document.querySelectorAll(".grid-item")).forEach((a) => {
          if (a.className.includes(elements)) {
            a.style.display = "grid";
      
            const grid = document.querySelector(".gridA");
            var msnry = new Masonry(grid, {
              // options
              itemSelector: elementsMasonry,
              gutter:2
              // columnWidth: 100 
            });
          } else {
            a.style.display = "none";
          }
        });
    //   });
}

