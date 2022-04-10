
document.querySelector('.pageUpButton').addEventListener('click',e=>{
    setTimeout(function(){ window.scrollTo(0, 0); }, 100);
});


if(document.body.scrollTop === 100){
    console.log('vrh!')
}
else{

}

window.addEventListener('scroll',e=>{
    if(window.scrollY==0){
        console.log('vrh!');
        document.querySelector('.pageUpButton').style.bottom = '-3.5rem';
        document.querySelector('.pageUpButton').style.opacity = '0'
    }
    else{
        console.log('nije na vrhu!');
        document.querySelector('.pageUpButton').style.bottom = '2.5rem';
        document.querySelector('.pageUpButton').style.opacity = '1';
    }
})