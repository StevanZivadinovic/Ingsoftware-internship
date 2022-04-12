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



Array.from(document.querySelector('.bottomNavGallery').children).forEach((a,i)=>{
  // console.log(a,i);
  a.addEventListener('click',e=>{
    if(e.target.classList.contains('firstChevronRight')){
      document.querySelector('.link1').style.display = 'none';
      document.querySelector('.link2').style.display = 'inline';
      document.querySelector('.link3').style.display = 'inline';
      setTimeout(()=>{
      document.querySelectorAll('.firstChevronLeft, .secondChevronLeft').forEach(a=>{
        a.style.display = 'inline'
      })
      document.querySelectorAll('.firstChevronRight, .secondChevronRight').forEach(a=>{
        a.style.display = 'none'
      })
    },100)

    }
    if(e.target.classList.contains('firstChevronLeft')){
    
      setTimeout(()=>{
        document.querySelector('.link1').style.display = 'inline';
      document.querySelector('.link2').style.display = 'inline';
      document.querySelector('.link3').style.display = 'none';
      document.querySelectorAll('.firstChevronLeft, .secondChevronLeft').forEach(a=>{
        a.style.display = 'none'
      })
      document.querySelectorAll('.firstChevronRight, .secondChevronRight').forEach(a=>{
        a.style.display = 'inline'
      })
    },100)
    
    }

    if(e.target.classList.contains('secondChevronRight')){
      document.querySelector('.link1').style.display = 'none';
      document.querySelector('.link2').style.display = 'inline';
      document.querySelector('.link3').style.display = 'inline';
      setTimeout(()=>{

        document.querySelectorAll('.firstChevronLeft, .secondChevronLeft').forEach(a=>{
          a.style.display = 'inline'
        })
        document.querySelectorAll('.firstChevronRight, .secondChevronRight').forEach(a=>{
          a.style.display = 'none'
        });
        document.querySelector('.link1').classList.remove('currentlyClicked');
        document.querySelector('.link3').classList.add('currentlyClicked');
      },100)

    }

    if(e.target.classList.contains('secondChevronLeft')){
      document.querySelector('.link1').style.display = 'inline';
      document.querySelector('.link2').style.display = 'inline';
      document.querySelector('.link3').style.display = 'none';
      setTimeout(()=>{
      document.querySelectorAll('.firstChevronLeft, .secondChevronLeft').forEach(a=>{
        a.style.display = 'none'
      })
      document.querySelectorAll('.firstChevronRight, .secondChevronRight').forEach(a=>{
        a.style.display = 'inline'
      });
      document.querySelector('.link1').classList.add('currentlyClicked');
      document.querySelector('.link3').classList.remove('currentlyClicked');
    },100)


    }
  })
})



 


