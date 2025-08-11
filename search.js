document.addEventListener('DOMContentLoaded', function(){
  const input = document.getElementById('searchInput');
  if(!input) return;
  input.addEventListener('input', function(e){
    const q = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card=>{
      const title = card.querySelector('h3').innerText.toLowerCase();
      const desc = card.querySelector('p').innerText.toLowerCase();
      if(title.includes(q) || desc.includes(q)){
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  });
});
