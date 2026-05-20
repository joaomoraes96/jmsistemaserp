// // Animação ao scroll
// const observer = new IntersectionObserver(entries => {
//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.classList.add('show');
//     }
//   });
// },{threshold:0.2});

// document.querySelectorAll('.card, .price-card').forEach(el=>{
//   observer.observe(el);
// });

// // Scroll suave
// document.querySelectorAll('a[href^="#"]').forEach(link=>{
//   link.addEventListener('click', function(e){
//     e.preventDefault();
//     document.querySelector(this.getAttribute('href')).scrollIntoView({
//       behavior:'smooth'
//     });
//   });
// });