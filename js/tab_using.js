// ! ===== Area Front End =====
const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');
const content4 = document.getElementById('content4');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');

function openHTML() {
	content1.style.transform = 'translateX(0)';
	content2.style.transform = 'translateX(100%)';
	content3.style.transform = 'translateX(100%)';
	content4.style.transform = 'translateX(100%)';
	btn1.style.color = '#ff7846';
	btn2.style.color = '#000';
	btn3.style.color = '#000';
	btn4.style.color = '#000';
	content1.style.transitionDelay = '0.3s';
	content2.style.transitionDelay = '0s';
	content3.style.transitionDelay = '0s';
	content4.style.transitionDelay = '0s';
}
function openCSS() {
	content1.style.transform = 'translateX(100%)';
	content2.style.transform = 'translateX(0)';
	content3.style.transform = 'translateX(100%)';
	content4.style.transform = 'translateX(100%)';
	btn1.style.color = '#000';
	btn2.style.color = '#2196f3';
	btn3.style.color = '#000';
	btn4.style.color = '#000';
	content1.style.transitionDelay = '0s';
	content2.style.transitionDelay = '0.3s';
	content3.style.transitionDelay = '0s';
	content4.style.transitionDelay = '0s';
}	
function openJS() {
	content1.style.transform = 'translateX(100%)';
	content2.style.transform = 'translateX(100%)';
	content3.style.transform = 'translateX(0)';
	content4.style.transform = 'translateX(100%)';
	btn1.style.color = '#000';
	btn2.style.color = '#000';
	btn3.style.color = '#ffd700';
	btn4.style.color = '#000';
	content1.style.transitionDelay = '0s';
	content2.style.transitionDelay = '0s';
	content3.style.transitionDelay = '0.3s';
	content4.style.transitionDelay = '0s';
}
function openReact() {
  content1.style.transform = 'translateX(100%)';
	content2.style.transform = 'translateX(100%)';
	content3.style.transform = 'translateX(100%)';
	content4.style.transform = 'translateX(0)';
	btn1.style.color = '#000';
	btn2.style.color = '#000';
	btn3.style.color = '#000';
	btn4.style.color = '#0000ff';
	content1.style.transitionDelay = '0s';
	content2.style.transitionDelay = '0s';
	content3.style.transitionDelay = '0s';
	content4.style.transitionDelay = '0.3s';
}

// ! ===== Area Back End =====
const content5 = document.getElementById('content5');
const content6 = document.getElementById('content6');
const content7 = document.getElementById('content7');
const content8 = document.getElementById('content8');
const content9 = document.getElementById('content9');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');

function openCPlus() {
  content5.style.transform = 'translateX(0)';
	content6.style.transform = 'translateX(100%)';
	content7.style.transform = 'translateX(100%)';
	content8.style.transform = 'translateX(100%)';
	content9.style.transform = 'translateX(100%)';
	btn5.style.color = '#0b0ba2';
	btn6.style.color = '#000';
	btn7.style.color = '#000';
	btn8.style.color = '#000';
	btn9.style.color = '#000';
	content5.style.transitionDelay = '0.3s';
	content6.style.transitionDelay = '0s';
	content7.style.transitionDelay = '0s';
	content8.style.transitionDelay = '0s';
	content9.style.transitionDelay = '0s';
}
function openPHP() {
  content5.style.transform = 'translateX(100%)';
  content6.style.transform = 'translateX(0)';
	content7.style.transform = 'translateX(100%)';
	content8.style.transform = 'translateX(100%)';
	content9.style.transform = 'translateX(100%)';
	btn5.style.color = '#000';
	btn6.style.color = '#9c88ff';
	btn7.style.color = '#000';
	btn8.style.color = '#000';
	btn9.style.color = '#000';
	content5.style.transitionDelay = '0s';
	content6.style.transitionDelay = '0.3s';
	content7.style.transitionDelay = '0s';
	content8.style.transitionDelay = '0s';
	content9.style.transitionDelay = '0s';
}
function openPy() {
	content5.style.transform = 'translateX(100%)';
  content6.style.transform = 'translateX(100%)';
  content7.style.transform = 'translateX(0)';
	content8.style.transform = 'translateX(100%)';
	content9.style.transform = 'translateX(100%)';
	btn5.style.color = '#000';
	btn6.style.color = '#000';
	btn7.style.color = '#273c75';
	btn8.style.color = '#000';
	btn9.style.color = '#000';
	content5.style.transitionDelay = '0s';
	content6.style.transitionDelay = '0s';
	content7.style.transitionDelay = '0.3s';
	content8.style.transitionDelay = '0s';
	content9.style.transitionDelay = '0s';
}
function openNode() {
	content5.style.transform = 'translateX(100%)';
  content6.style.transform = 'translateX(100%)';
	content7.style.transform = 'translateX(100%)';
  content8.style.transform = 'translateX(0)';
	content9.style.transform = 'translateX(100%)';
	btn5.style.color = '#000';
	btn6.style.color = '#000';
	btn7.style.color = '#000';
	btn8.style.color = '#049c04';
	btn9.style.color = '#000';
	content5.style.transitionDelay = '0s';
	content6.style.transitionDelay = '0s';
	content7.style.transitionDelay = '0s';
	content8.style.transitionDelay = '0.3s';
	content9.style.transitionDelay = '0s';
}
function openJava() {
	content5.style.transform = 'translateX(100%)';
  content6.style.transform = 'translateX(100%)';
	content7.style.transform = 'translateX(100%)';
	content8.style.transform = 'translateX(100%)';
  content9.style.transform = 'translateX(0)';
	btn5.style.color = '#000';
	btn6.style.color = '#000';
	btn7.style.color = '#000';
	btn8.style.color = '#000';
	btn9.style.color = '#d44';
	content5.style.transitionDelay = '0s';
	content6.style.transitionDelay = '0s';
	content7.style.transitionDelay = '0s';
	content8.style.transitionDelay = '0s';
	content9.style.transitionDelay = '0.3s';
}

// ! ===== Area Database =====
const content10 = document.getElementById('content10');
const content11 = document.getElementById('content11');
const btn10 = document.getElementById('btn10');
const btn11 = document.getElementById('btn11');

function openMysql() {
  content10.style.transform = 'translateX(0)';
  content11.style.transform = 'translateX(100%)';
  btn10.style.color = '#ff8c00';
  btn11.style.color = '#000';
  content10.style.transitionDelay = '0.3s';
  content11.style.transitionDelay = '0s';
}
function openApi() {
  content10.style.transform = 'translateX(100%)';
  content11.style.transform = 'translateX(0)';
  btn10.style.color = '#000';
  btn11.style.color = '#800000';
  content10.style.transitionDelay = '0s';
  content11.style.transitionDelay = '0.3s';
}

// ! ===== Area VCS =====
const content12 = document.getElementById('content12');
const content13 = document.getElementById('content13');
const btn12 = document.getElementById('btn12');
const btn13 = document.getElementById('btn13');

function openGithub() {
  content12.style.transform = 'translateX(0)';
  content13.style.transform = 'translateX(100%)';
  btn12.style.color = '#353b48';
  btn13.style.color = '#000';
  content12.style.transitionDelay = '0.3s';
  content13.style.transitionDelay = '0s';
}
function openGit() {
  content12.style.transform = 'translateX(100%)';
  content13.style.transform = 'translateX(0)';
  btn12.style.color = '#000';
  btn13.style.color = '#ff0000';
  content12.style.transitionDelay = '0s';
  content13.style.transitionDelay = '0.3s';
}