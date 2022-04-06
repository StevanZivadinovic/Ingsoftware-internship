function addClass() {
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