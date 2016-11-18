/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{ 
var Uno = parseInt (document.getElementById('PrecioUno').value);
var Dos = parseInt (document.getElementById('PrecioDos').value);
var Tres = parseInt (document.getElementById('PrecioTres').value);
var resultad = Uno+Dos+Tres;
alert ("La suma es "+resultad);
	
}
function Promedio () 
{var Uno = parseInt (document.getElementById('PrecioUno').value);
var Dos = parseInt (document.getElementById('PrecioDos').value);
var Tres = parseInt (document.getElementById('PrecioTres').value);
var resultad = (Uno+Dos+Tres)/3;
alert ("El promedio es "+resultad);
}
function PrecioFinal () 
{var Uno = parseInt (document.getElementById('PrecioUno').value);
var Dos = parseInt (document.getElementById('PrecioDos').value);
var Tres = parseInt (document.getElementById('PrecioTres').value);
var resultad = Uno+Dos+Tres;
var preciofinal = (resultad*21/100)+resultad;
alert("El precio final es "+preciofinal)
	
}