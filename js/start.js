// ! ===== Passcode =====
// var nama = prompt('Masukkan nama kamu: ');
// if(nama == 'nurgit'){
//   alert('Oke, ini pasti kamu');
// }
// while(nama != 'nurgit'){
//   alert('Kamu siapa?!');
//   var nama = prompt('Masukkan nama kamu: ');
// }
// alert('Oke, ini pasti kamu');

// ! ===== Area Lazy Down Text =====
$(window).on('load', function() {
  setTimeout(function() {
    $('.downIn').addClass('downOut');
  }, 1000);
});

// ! ===== Area Hover Background Fade =====
const headerBg = document.getElementById('bg');
window.addEventListener('scroll', function() {
  headerBg.style.opacity = 1 - + window.pageYOffset / 550 + '';
  headerBg.style.top = + window.pageYOffset + 'px';
  headerBg.style.backgroundPositionY = -100 - + window.pageYOffset / 2 + 'px';
});

// ! ===== Area Navbar Fixed Scrolling =====
window.addEventListener('scroll', function() {
	const nav = document.querySelector('nav');
	nav.classList.toggle('sticky', window.scrollY > 700);
});