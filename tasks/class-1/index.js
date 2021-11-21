var Descuento = /** @class */ (function () {
    function Descuento(valor) {
        this.valor = valor;
    }
    return Descuento;
}());
var descuentos = [new Descuento(50), new Descuento(60), new Descuento(70),
    new Descuento(80), new Descuento(90), new Descuento(20)];
var medicamento = {
    nombre: "lotrial",
    precio: 1500
};
for (var i = 0; i < descuentos.length; i++) {
    var descuento = descuentos[i];
    var montoDescontado = (medicamento.precio * descuento.valor) / 100;
    var medicamentoDescontado = medicamento.precio - montoDescontado;
    console.log("Su medicamento con el " + descuento.valor + "% ser\u00EDa de " + medicamentoDescontado + " pesos");
}
