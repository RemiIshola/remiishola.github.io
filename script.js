
// Preloader handling (2.5s animation)
document.addEventListener('DOMContentLoaded', function(){
  const pre = document.getElementById('preloader');
  const site = document.getElementById('site');
  // wait exactly 2500ms then remove preloader and show site
  setTimeout(()=> {
    pre.style.display = 'none';
    site.classList.remove('site-hidden');
    site.style.opacity = 1;
    // reveal sections
    document.querySelectorAll('.section').forEach((s, idx) => {
      setTimeout(()=> s.classList.add('in-view'), 120*idx);
    });
  }, 2500);

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Back to top button
  const back = document.getElementById('backTop');
  window.addEventListener('scroll', ()=> {
    if(window.scrollY > 400) back.classList.add('show'); else back.classList.remove('show');
  });
  back.addEventListener('click', ()=> window.scrollTo({top:0, behavior:'smooth'}));

  // Intersection observer for section reveal (for users who scroll before preloader done)
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add('in-view');
    });
  }, {threshold: 0.12});
  document.querySelectorAll('.section').forEach(s => obs.observe(s));
});
