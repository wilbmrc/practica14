function limpiarRegistro(){
	document.getElementById("miForm").reset();
}

var NuMa = function(n1, n2, n3){
var nu1 = parseFloat(document.getElementById("nu1").value);
var nu2 = parseFloat(document.getElementById("nu2").value);
var nu3 = parseFloat(document.getElementById("nu3").value);
if (nu1<nu2) {
	return "El numero" + nu1 + "es el menor";
}	
else{
	if (nu2<nu3) {
		return "El numero" + nu2 + "es el menor";
	}
	else{
		return " El numero" + nu3 + "es el menor";
	}
}
}

var Pulga = function(n1){
	var cm = parseFloat(document.getElementById("cm").value);
	pg = cm * 0.393701;
	return cm + "centimetros son" + pg + "en pulgadas";
}

var yar = function(n1){
	var mm = parseFloat(document.getElementById("mm").value);
	yd = mm * 1.09361;
	return mm + "metros son" + yd + " es yardas";
}