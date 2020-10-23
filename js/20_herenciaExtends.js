//Quiero crear un objeto que herede de Array
var miArray = function () {
    this.longitud = "Longitud: " + this.length;
    this.descripcion = "Hoy es viernes";
    this.contarElementos = function () {
        return this.length;
    }
    this.sumarNumeros = function () {
        var suma = 0;
        for (var i = 0; i < this.length; i++) {
            suma += this[i];
        }
        return suma;
    }
}
miArray.prototype = new Array();

//Le añadimos Metodos a la clase Array
//Utilizamos el concepto de EXTENDS

Array.prototype.contarElementos = function () {
    return this.length;
}
Array.prototype.sumarElementos = function () {
    var suma = 0;
    for (var i = 0; i < this.length; i++) {
        suma+=this[i];
    }
    return suma;
}
