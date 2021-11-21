interface Medicamento {
    nombre: string;
    precio: number
}

class Descuento {
    valor: number

    constructor(valor: number) {
        this.valor = valor;
    }
}


let descuentos: Descuento[] = [new Descuento(50), new Descuento(60), new Descuento(70), 
                                new Descuento(80), new Descuento(90), new Descuento(20)];
let medicamento: Medicamento = {
    nombre : "lotrial",
    precio : 1500
};

for (let i = 0; i < descuentos.length; i++) {
    let descuento: Descuento = descuentos[i]
    let montoDescontado = (medicamento.precio * descuento.valor) / 100;
    let medicamentoDescontado = medicamento.precio - montoDescontado;
    console.log(`Su medicamento con el ${descuento.valor}% sería de ${medicamentoDescontado} pesos`);
}
