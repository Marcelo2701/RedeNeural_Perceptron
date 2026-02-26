function sign(num){
    return num >= 0 ? 1 : -1;
}

class Perceptron{
    pesos = [0,0];
    constructor(){
        for(let i = 0;i < this.pesos.length; i++){
            this.pesos[1] = random(-1,1);
        }
    }

    guess(entradas){
        let soma = 0;
        for(let i = 0;i < this.pesos.length; i++){
            soma += entradas[i] * this.pesos[i];
        }

        const saidas = sign(soma)
        return saidas
    }
}