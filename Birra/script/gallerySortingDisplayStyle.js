
document.querySelector('.list').addEventListener('click',e=>{
    console.log('haj')
    document.querySelector('.galleryGallery').classList.add('listGallery');
    document.querySelectorAll('.galleryItemPriceFirst').forEach(a=>{
        a.style.display = 'none';
    })
    document.querySelectorAll('.galleryItemPriceSecond').forEach(a=>{
        a.style.display = 'block'
    })
    document.querySelectorAll('.cardText').forEach(a => {
        a.style.display = 'block';
    });
    document.querySelectorAll('.cardName').forEach(a => {
        a.style.display = 'block';
    });
});


document.querySelector('.grid').addEventListener('click',e=>{
    console.log('haj')
    document.querySelector('.galleryGallery').classList.remove('listGallery');
    document.querySelectorAll('.galleryItemPriceFirst').forEach(a=>{
        a.style.display = 'block';
    })
    document.querySelectorAll('.galleryItemPriceSecond').forEach(a=>{
        a.style.display = 'none'
    });
    document.querySelectorAll('.cardText').forEach(a => {
        a.style.display = 'none';
    });
    document.querySelectorAll('.cardName').forEach(a => {
        a.style.display = 'none';
    });
})