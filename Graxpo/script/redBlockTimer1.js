let timer = (redBlockSpan)=>{

  let value = document.querySelector(redBlockSpan).innerHTML;
  let valueParsed1 = parseInt(value);
  var interval1;
  
  var observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        let value = 0;
  
        interval1 = setInterval(() => {
          if (value < valueParsed1) {
            value += 1;
            document.querySelector(redBlockSpan).innerHTML = value;
          }
        }, 1);
      } else {
        document.querySelector(redBlockSpan).innerHTML = valueParsed1;
  
        clearInterval(interval1);
      }
    },
    { threshold: [1] }
  ); //kad stavis vrednost 1 umesto nule okida se funkcija samo kada je ceo zeljeni objekat vidljiv
  
  observer.observe(document.querySelector(".redBlock"));
}


timer(".redBlockSpan1");
timer(".redBlockSpan2");
timer(".redBlockSpan3");
timer(".redBlockSpan4");