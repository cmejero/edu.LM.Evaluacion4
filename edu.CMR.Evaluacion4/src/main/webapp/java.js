
let arrayEnvios = []; //Array principal donde estaran todos los envios
let nombreCompleto;
let coste;
let fechaEntrada;
let fechaSalida;
let nombre;
let apellido;

// Esta funcion es la que añade un envio
function agregarEnvio() {
	let fechaDia;
	let fechaMes;
	let fechaAnyo;


	do {
		nombre = prompt("introduzca el nombre",);
		apellido = prompt("introduzca el apellido",);
		nombreCompleto = nombre + apellido;
		coste = prompt("introduzca coste del producto",);
		fechaDia = prompt("introduzca dia de entrada:",);
		fechaMes = prompt("introduzca mes de entrada:",);
		fechaAnyo = prompt("introduzca año de entrada:",);
		fechaEntrada = new Date(fechaAnyo, fechaMes - 1, fechaDia);
		fechaSalida = new Date(fechaAnyo, fechaMes - 1, fechaDia + 5)
	} while (fechaEntrada > Date.now() & Number(coste))


	document.getElementById("texto").innerHTML = ("<b>nombre:</b> " + nombre + ' ' + apellido + ";   " + "<b>Coste: </b>" + coste + "<b>Fecha entrada: </b> " + fechaDia + '/' + fechaMes + '/' + fechaAnyo + ";   " + "<b>Fecha Salida: </b> " + fechaDia + 5 + '/' + fechaMes + '/' + fechaAnyo)

	let envio = [nombreCompleto, coste, fechaEntrada, fechaSalida];

	arrayEnvios.push(envio);

}

// este metodo elimina el envio con la fecha mas cercana mediante la fecha de salida
function quitarEnvio() {

	let ordenado = arrayEnvios.sort(function(a, b) {
		if (a[3] > b[3]) {
			return 1;

		}
		else
			return -1;
	})

	ordenado.pop();


}

// este metodo muestra todos los envios existentes
function mostrarEnvios() {
	let aux = "";

	for (let i = 0; i > arrayEnvios.length; i++) {
		aux = aux + arrayEnvios[i] + "</br>";

		document.getElementById("mostrar").innerHTML = (aux);
	}


}

// muestra el envio más proximo
function proximoEnvio() {

	arrayEnvios.sort(function(a, b) {
		if (a[3] > b[3]) {
			return 1;

		}
		else
			return -1;
	})
	document.getElementById("proximo").innerHTML = (arrayEnvios);


}