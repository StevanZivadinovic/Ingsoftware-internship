let sliderOne = document.querySelector('#slider-1');
let sliderTwo = document.querySelector('#slider-2');

let displayValOne = document.querySelector('#range1');
let displayValTwo = document.querySelector('#range2');

let minGap = 1;



let slideOne = ()=>{
    if(parseInt(sliderTwo.value)-parseInt(sliderOne.value) <=minGap){
        sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.textContent = sliderOne.value;
}

let slideTwo = ()=>{
    if(parseInt(sliderTwo.value)-parseInt(sliderOne.value) <=minGap){
        sliderTwo.value = parseInt(sliderOne.value) + minGap;
    } 
    displayValTwo.textContent = sliderTwo.value;
}

