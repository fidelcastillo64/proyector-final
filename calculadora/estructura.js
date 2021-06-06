let p1=document.getElementById('pantalla1');
let p2=document.getElementById('pantalla2');
const btnSwitch = document.querySelector('#switch');
const botones2 = document.querySelector('#botonSD');
const botones3 = document.querySelector('#botonSI');
const fondoI = document.querySelector('#parteIn');


btnSwitch.addEventListener('click', () =>{
	document.calculadora.classList.toggle('claro');
	btnSwitch.classList.toggle('active');
	const botones = document.querySelectorAll('#botones');
	botones.forEach(element => {
		element.classList.toggle('claro');
	});
	botones2.classList.toggle('claro');
	botones3.classList.toggle('claro');
	fondoI.classList.toggle('claro');
	const botones4 = document.querySelectorAll('#especial');
	botones4.forEach(element => {
		element.classList.toggle('claro');
	});
});


function numero(num){
p1.innerHTML+=num;
}
function calcular(){
	p2.innerHTML=p1.innerHTML;
	p1.innerHTML=eval(p1.innerHTML);
	
}
function borrar(){
	p1.innerHTML="";
	p2.innerHTML="";
}
function resultado(){
	calcular();
}
function claro()
{
	calculadora.classList.remove('fondoD');
}
