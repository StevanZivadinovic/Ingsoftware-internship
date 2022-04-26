function addClassNameToPaginationButton() {
    let element = document.querySelector('.bottomNavGallery').addEventListener('click',e=>{
      document.querySelectorAll('.paginationLink').forEach(a=>{
        if(e.target == a){
          e.target.classList.add('currentlyClicked')
        }
  
        else if(e.target != a){
          a.classList.remove('currentlyClicked');
        }
      })
    })
  }

let linksStyle = (link1, link2, link3, leftChevron, rightChevron, link4)=>{
  setTimeout(()=>{
    document.querySelector('.link1').style.display = link1;
    document.querySelector('.link2').style.display = link2;
    document.querySelector('.link3').style.display = link3;
    document.querySelector('.link4').style.display = link4;
  document.querySelectorAll('.firstChevronLeft, .secondChevronLeft').forEach(a=>{
    a.style.display = leftChevron
  })
  document.querySelectorAll('.firstChevronRight, .secondChevronRight').forEach(a=>{
    a.style.display = rightChevron
  })
},100)
}

Array.from(document.querySelector('.bottomNavGallery').children).forEach((a,i)=>{
  a.addEventListener('click',e=>{
    if(e.target.tagName=='A'){
      e.target.classList.add('currentlyClicked');
    }
    if(e.target.classList.contains('firstChevronRight')){
      linksStyle('none', 'none', 'inline', 'inline', 'none', 'inline');

    }
    if(e.target.classList.contains('firstChevronLeft')){
      linksStyle('inline', 'inline', 'none', 'none', 'inline','none');
    
    }

    if(e.target.classList.contains('secondChevronRight')){
      linksStyle('none', 'none', 'inline', 'inline', 'none', 'inline');

    }

    if(e.target.classList.contains('secondChevronLeft')){
      linksStyle('inline', 'inline', 'none', 'none', 'inline', 'none');
     
    }
  })
})



 


