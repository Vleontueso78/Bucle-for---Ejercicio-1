/* ¡ESTE CODIGO POR EL MOMENTO SOLO SE PUEDE VISUALIZAR
SUS FUNCIONES EN LA CHROME CONSOLE!
*/

// PASO N°1
// Imprime los numeros del 1 al 10, de manera acendente en la pagina.

for(var i=1; i<=10; i++){
    document.write(i);
    document.write("<br>");
}

// PASO N°2
// Imprime los numeros del 10 al 1, de manera desendente en la pagina.

for(var i=10; i>=1; i--){
    document.write(i);
    document.write("<br>");
}

// PASO N°3
// Imprime los numeros del 1 al 9 en 2 en 2, de manera acendente en la pagina.

for(var i=1; i<=10; i=i+2){
    document.write(i);
    document.write("<br>");
}

// PASO N°4
// Imprime los numeros del 1 al 12 multipicandolos por 8 de manera ascendente en la pagina.

for(var i=1; i<=12; i++){
    
    var resultado= 8 * i;
    document.write("8 * "+i+" = "+resultado);
    document.write("<br>")
}

// PASO N°5
/* Se tiene que escribir una numero mayor o igual a 1,
4 veces seguidas para que en la pagina se imprima
que numero fue el menor y cual fue el mayor que escribimos
en esos 4 intentos.
*/

var mayor, menor;

for(var i=1; i<=4; i++){

    var nota = prompt("Ingrese una nota");

    if(i==1){
        mayor=nota;
        menor=nota;
    }else{
        if(mayor<nota){
            mayor=nota;
        }

        if(menor>nota){
            menor=nota;
        }

    }
    
}

document.write("Nota mayor  +"+mayor );
document.write("<br>");
document.write("Nota menor "+menor );