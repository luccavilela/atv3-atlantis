import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ImpressorHospede implements Impressor {
    private cliente: Cliente

    constructor(cliente: Cliente) {
        this.cliente = cliente

    }
    imprimir(): string { 
        let tipoCliente = this.cliente.Titular ? "Dependente" : "Titular";

        let impressao = `****************************\n`
            + `| Nome: ${this.cliente.Nome}\n`
            + `| Nome social: ${this.cliente.NomeSocial}\n`
            + `| Data de nascimento: ${this.cliente.DataNascimento.toLocaleDateString()}\n`
            + `| Tipo de cliente: ${tipoCliente}\n`
            + `| Acomodação: ${this.cliente.Acomodacao.NomeAcomadacao}`


        return impressao
    }

}