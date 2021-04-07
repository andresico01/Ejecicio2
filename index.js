console.log("Ejercicio 6");
let num = parseInt(prompt("Inglese un numero"));

if ( num > 10){
  console.log("numero mayor que 10");
}else if(num < 10){
  console.log("numero menor que 10");
}else{
  console.log("es igual");
}
console.log("Ejercicio 7");
let cont = 1;
const aux = Math.floor(random()*10)+1;
let valor;
while(cont){
  valor = parseInt(prompt("ingrese un numero entre 1 y 10"))
  if( valor <= 10 && valor >=1){
    if (valor === aux){
      cont = 0;
      console.log("Felicitaciones encontro el numero");
    }
  }else{
    console.log("fuera del rango de 1 a 10 vuelva a introducir un numero",aux);
  }

}
console.log("Ejercicio 8");