let value1 = document.querySelector(".redBlockSpan1").innerHTML;

let valueParsed1 = parseInt(value1);

var interval1;

var observer = new IntersectionObserver(
  function (entries) {
    if (entries[0].isIntersecting === true) {
      let value1 = 0;

      interval1 = setInterval(() => {
        if (value1 < valueParsed1) {
          // console.log(value1<valueParsed1)
          value1 += 1;
          document.querySelector(".redBlockSpan1").innerHTML = value1;
        }
      }, 1);
    } else {
      document.querySelector(".redBlockSpan1").innerHTML = valueParsed1;

      clearInterval(interval1);
    }
  },
  { threshold: [1] }
); //kad stavis vrednost 1 umesto nule okida se funkcija samo kada je ceo zeljeni objekat vidljiv

observer.observe(document.querySelector(".redBlock"));
