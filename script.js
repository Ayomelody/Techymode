
document.getElementById('nav-toggle')?.addEventListener('click', function(){
  const nav = document.getElementById('main-nav');
  if(!nav) return;
  if(nav.style.display === 'flex'){ nav.style.display = ''; }
  else{ nav.style.display = 'flex'; nav.style.flexDirection = 'column'; nav.style.gap='8px'; }
});
