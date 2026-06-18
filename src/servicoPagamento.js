export default class ServicoPagamento {
    #pag

    constructor() {
        this.#pag = [];
    }

    pagar(codigoBarras, empresa, valor){
        this.#pag.push({
            codigoBarras,
            empresa,
            valor,
            categoria: valor > 100 ? 'cara' : 'padrao'
        });
    };

    consultar(){
        return this.#pag[this.#pag.length - 1];
    };    
};