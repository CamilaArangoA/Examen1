/*Crear un algoritmo que pida dos números enteros por teclado e imprima: 
-si los números son iguales, imprimir el mensaje” los valores son  iguales” y la suma de ambos 
-Si el número 1 es mayor al número 2, imprimir que el “número1 es  mayor” y resultado de la división entre ambos. 
-Si el numero1 es menor al número2, imprimir que el “número 1 es  menor” y el resultado de la multiplicación entre ambos*/

let numero1 =  parseInt(prompt("Ingresa el primer numero"))
let numero2 =  parseInt(prompt("Ingresa el segundo numero"))

if (numero1 === numero2){
    console.log("los valores son iguales:" + (numero1 + numero2));
} 
else if (numero1 > numero2){
    console.log ("Si el numero 1 es mayor que el numero 2. La división es:" + (numero1 / numero2));
}
else {
    console.log("Si el numero 1 es menor que el numero 2. La multiplicación es:" + (numero1 * numero2));
}



