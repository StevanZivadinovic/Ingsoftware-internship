let value4 = document.querySelector(".redBlockSpan4").innerHTML;

let valueParsed4 = parseInt(value4);

var interval4;

var observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      let value4 = 0;

      interval4 = setInterval(() => {
        if (value4 < valueParsed4) {
          // console.log(value1<valueParsed1)
          value4 += 1;
          document.querySelector(".redBlockSpan4").innerHTML = value4;
        }
      }, 1);
    } else {
      document.querySelector(".redBlockSpan4").innerHTML = valueParsed4;

      clearInterval(interval4);
    }
  },
  { threshold: [1] }
); //kad stavis vrednost 1 umesto nule okida se funkcija samo kada je ceo zeljeni objekat vidljiv

observer.observe(document.querySelector(".redBlock"));