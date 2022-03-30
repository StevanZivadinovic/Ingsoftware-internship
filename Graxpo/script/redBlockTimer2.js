let value2 = document.querySelector(".redBlockSpan2").innerHTML;

let valueParsed2 = parseInt(value2);

var interval2;

var observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      let value2 = 0;

      interval2 = setInterval(() => {
        if (value2 < valueParsed2) {
          // console.log(value1<valueParsed1)
          value2 += 1;
          document.querySelector(".redBlockSpan2").innerHTML = value2;
        }
      }, 1);
    } else {
      document.querySelector(".redBlockSpan2").innerHTML = valueParsed2;

      clearInterval(interval2);
    }
  },
  { threshold: [1] }
); //kad stavis vrednost 1 umesto nule okida se funkcija samo kada je ceo zeljeni objekat vidljiv

observer.observe(document.querySelector(".redBlock"));