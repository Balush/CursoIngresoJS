/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var uno= parseInt (document.getElementById('numeroUno').value);
	var dos= parseInt (document.getElementById('numeroDos').value);

var resultad = uno+dos;
alert("la suma es: "+resultad);


}

