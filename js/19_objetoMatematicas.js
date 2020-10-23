var Matematicas = function (num) {
    //Propiedad para almacenar el valor que nos han dado en el constructor
    this.numero = num;
    //Propiedad para almacenar el doble del objeto
    this.doble = 0;
    //Tendremos un metodo para generar el DOBLE, lo hacemos con function anonima
    //por lo que almacenamos el Objeto this. en una variable intermedia
    var obj = this;
    this.generarDoble = function () {
        //Cambiamos la propiedad de objeto
        obj.doble = obj.numero * 2;
        //Devolvemos el valor de doble;
        //return obj.numero*2;
    }

}