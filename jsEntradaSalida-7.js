/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var uno= parseInt (document.getElementById('numeroUno').value);
	var dos= parseInt (document.getElementById('numeroDos').value);
	var resultad = uno+dos;
	alert("la suma es: "+resultad);
}

function restar()
{	var uno= parseInt (document.getElementById('numeroUno').value);
	var dos= parseInt (document.getElementById('numeroDos').value);
	var resultad = uno-dos;
	alert("la restar es: "+resultad);
	
}

function multiplicar()
{ 	var uno= parseInt (document.getElementById('numeroUno').value);
	var dos= parseInt (document.getElementById('numeroDos').value);
	var resultad = uno*dos;
	alert("la multiplicar es: "+resultad);
	
}

function dividir()
{	var uno= parseInt (document.getElementById('numeroUno').value);
	var dos= parseInt (document.getElementById('numeroDos').value);
	var resultad = uno/dos;
	alert("la dividir es: "+resultad);
	
}

