/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	var MiVariable;
	MiVariable = document.getElementById('elNombre').value;
	alert (MiVariable);
	// utilizar document.getElementById('elNombre').value ya que sin el .value dar error al intentar dar un resultado sin valor.
	
	
}


