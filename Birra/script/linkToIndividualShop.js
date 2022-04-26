export let linkTagToIndividualShop = ()=>{

    setTimeout(()=>{
        console.log(document.querySelector('.linkTagToIndividualShop'));
        document.querySelectorAll('.linkTagToIndividualShop').forEach(a=>{
    
            a.addEventListener('click',e=>{
             let idBeer = parseInt(e.target.getAttribute('data-id').slice(3));
             localStorage.setItem('idBeer', idBeer);
    
             window.location.href = 'indexIndividualShop.html'
            })
        })
        
    },1000)
}