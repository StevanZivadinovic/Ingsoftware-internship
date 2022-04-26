export let linkTagToIndividualShop = ()=>{

    setTimeout(()=>{
        console.log(document.querySelector('.linkTagToIndividualShop'));
        document.querySelectorAll('.linkTagToIndividualShop').forEach(a=>{
    
            a.addEventListener('click',e=>{
             let idBeer = parseInt(e.target.getAttribute('data-id').slice(3));
             localStorage.setItem('idBeer', idBeer);
    
             window.location.href = 'http://127.0.0.1:5500/indexIndividualShop.html'
            })
        })
        
    },1000)
}