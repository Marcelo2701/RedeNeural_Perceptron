let qtd = parseInt(prompt("Quantidade de bolinhas: "))
let pontos = new Array(qtd)
function setup(){
    createCanvas(700, 700)
    for(let i = 0; i < pontos.length; i++){
        pontos[i] = new Ponto(random(-1,1),random(-1,1))
    }
}

function draw(){
    background(100,150,250)
    for(let i = 0;i<pontos.length;i++){
        pontos[i].show()
    }
}
