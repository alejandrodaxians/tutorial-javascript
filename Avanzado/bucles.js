let i = 0;
while (i < 3) {
  // alert( i );
  i++;
}


for (let j = 0; j < 10; j++){
    if (j % 2 == 0) continue;
    // alert(i);
}


let k=0
while (k < 3) {
    // alert( `numero ${k++}!` );
  }


let number 

do {
    // number = prompt("Ingresa un numero superior a 100:", 0);
}while (number <= 100 && number);


// let nav = prompt("¿Qué navegador usas?");

switch (navegador) {
    case 'Edge':
      alert( "¡Tienes Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Esta bien, soportamos estos navegadores también' );
      break;
  
    default:
      alert( '¡Esperamos que esta página se vea bien!' );
  }

if (nav == "Edge") {
    alert("Usas Edge");
}else if (nav == "Chrome" || nav == "Firefox" || nav == "Safari" || nav == "Opera"){
    alert("También soportamos ese navegador.");
}else{
    alert("Esperemos que tu página funcione.");
}


//  let a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}

switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
    case 2:
    case 3:
        alert("2,3");
        break;
}
