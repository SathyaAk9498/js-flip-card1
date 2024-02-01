var card = document.querySelectorAll('.card')

for (let i = 0; i < card.length; i++) {
  console.log(card[i])
  card[i].addEventListener('click',toggleClass,false)
  function toggleClass(e) {
    var active = document.querySelector('.active')
    if(active!=null){active.className = 'card'}  
    if(e.target.nodeName == 'A'){return}    
    if(card[i].className == 'card'){
      card[i].className = 'card active'
    }
      
  }
}
