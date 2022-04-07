let timer = (redBlockSpan)=>{

    let value = document.querySelector(redBlockSpan).innerHTML;
   
    
    var observer = new IntersectionObserver(
      function (entries) {
        
      },
      { threshold: [1] }
    ); //when you set the value to 1 instead of zero, the function is triggered only when the entire desired object is visible
    
    observer.observe(document.querySelector(".redBlock"));
  }
  
  
  timer(".redBlockSpan1");
 