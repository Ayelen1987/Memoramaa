//inicializacion de variables
const card = document.querySelector('.star');
let tarjetasdestapadas= 0;
let tarjetabloqueada = 0; 
let tarjeta1 = null;
let tarjeta2 = null; 
let primerresultado = null;
let segundoresultado = null;
let movimientos = 0;
let aciertos = 0;
let temporizador = false;
let timer = 60;
let timerinicial = 60;
let tiemporegresivoId = null;
let volveracomenzar = false;
//Apuntando a doc html
let mostrardomovimientos = document.getElementById('movimientos');
let mostraraciertos = document.getElementById('aciertos');
let mostrattiempo = document.getElementById('t-restantes');


//generacion de numeros aleatorios
let numeros =[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});




//fucniones
function contartiempo(){
    tiemporegresivoId = setInterval(()=>{
    timer--;
    mostrattiempo.innerHTML = `Tiempo: ${timer} segundos`;
     if(timer == 0){
        clearInterval(tiemporegresivoId);
        bloqueartarjetas();

    }
    },1000);
}
function bloqueartarjetas (){
    for (let i = 0; i<=15; i++ ){
        let tarjetabloqueada = document.getElementById(i);
        tarjetabloqueada.innerHTML = numeros[i];
        tarjetabloqueada.disabled = true;

    }
}

//funcion
function destapar(id){
    if(temporizador == false){
        contartiempo();
        temporizador = true;
    }
   tarjetasdestapadas++;
  if (tarjetasdestapadas == 1){
    //mostrar priomeros numeros 
    tarjeta1 = document.getElementById(id);
    primerresultado= numeros[id];
    tarjeta1.innerHTML = primerresultado;

    //desabilitar primer boton
    tarjeta1.disabled = true;

 }else if(tarjetasdestapadas == 2){
    //mostrar segundo numero
     tarjeta2 = document.getElementById(id);
     segundoresultado = numeros[id]; 
     tarjeta2.innerHTML = segundoresultado;

    //desabilitar
     tarjeta2.disabled = true;
    //incrementar movimientos
     movimientos++;
     mostrardomovimientos.innerHTML = `Movimientos: ${movimientos}`;
     if(primerresultado == segundoresultado){
    // encerrar contador tarjetas destapadas
     tarjetasdestapadas = 0;

    //Aumentas aciertos
    aciertos++;
    mostraraciertos.innerHTML = `Aciertos: ${aciertos}`;
    if(aciertos == 8){
        clearInterval(tiemporegresivoId)
        mostraraciertos.innerHTML =`Aciertos: ${aciertos} 😍 `;
        mostrattiempo.innerHTML =`Fantastico! 💖te demoraste ${timerinicial - timer} segundos`;
        mostrardomovimientos.innerHTML =`Movimientos: ${movimientos} 🤟`; 
    }else if (volveracomenzar == true){


    }

   }else{
    //Mostrar elementos valores
    setTimeout(()=>{
        tarjeta1.innerHTML = '';
        tarjeta2.innerHTML = '';
        tarjeta1.disabled = false;
        tarjeta2.disabled = false;
        tarjetasdestapadas = 0;
    },800);
   }
 }
}