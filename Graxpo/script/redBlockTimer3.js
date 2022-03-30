let value3 = document.querySelector(".redBlockSpan3").innerHTML;

let valueParsed3 = parseInt(value3);

var interval3;

var observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      let value3 = 0;

      interval3 = setInterval(() => {
        if (value3 < valueParsed3) {
          // console.log(value1<valueParsed1)
          value3 += 1;
          document.querySelector(".redBlockSpan3").innerHTML = value3;
        }
      }, 1);
    } else {
      document.querySelector(".redBlockSpan3").innerHTML = valueParsed3;

      clearInterval(interval3);
    }
  },
  { threshold: [1] }
); //kad stavis vrednost 1 umesto nule okida se funkcija samo kada je ceo zeljeni objekat vidljiv

observer.observe(document.querySelector(".redBlock"));