const canvas = document.getElementById("Pong");
const context = canvas.getContext("2d");
canvas.width = 390;
canvas.height = 310;

let placarJogador = 0;
let placarOponente = 0;
/*--------------------------------------------------------------------------------------------------*/
//movimento das teclas

window.addEventListener("keydown", movimentaRaqueteJogador, false);

function movimentaRaqueteJogador(e) {
    const key = e.key;
    if (key == "ArrowUp" && raqueteJogador.y > 0) {
        raqueteJogador.y -= 10;
    } else if (key == "ArrowDown" && raqueteJogador.y <= 310 - raqueteJogador.height) {
        raqueteJogador.y +=10;
    }
};

function movimentaRaqueteOponente() {
    raqueteOponente.velocidadeY = bola.y - (raqueteOponente.y + 30) - raqueteOponente.height / 2 + 30;
    raqueteOponente.y += raqueteOponente.velocidadeY;
};


class Element {
    constructor(options) {
        this.x = options.x;
        this.y = options.y;
        this.width = options.width;
        this.height = options.height;
        this.color = options.color;
        this.velocidadeX = options.velocidadeX || 2;
        this.velocidadeY = options.velocidadeY || 2;
        this.gravidade = options.gravidade;
    }
}

//primeira raquete
const raqueteJogador = new Element({
    x:10,
    y:130,
    width: 15,
    height: 70,
    color: "#000",
    gravidade: 2,
});

//segunda raquete
const raqueteOponente = new Element({
    x:365,
    y:130,
    width: 15,
    height: 70,
    color: "#000",
    velocidadeX: 3,
    velocidadeY: 3,
    gravidade: 2,
});

//bola
const bola = new Element({
    x: 390 / 2,
    y: 310 / 2,
    width: 15,
    height: 15,
    color: "#20c20e",
    velocidadeX: 3,
    velocidadeY: 3,
    gravidade: 1,
});

/*--------------------------------------------------------------------------------------------------*/
//desenho do placar do jogador
function displayPlacarUm() {
    context.font = "18px Arial"
    context.fillStyle = "#000"
    context.fillText(placarJogador, canvas.width / 2 - 90, 30); //do centro para a esqueda com a subtração
}
//desenho do placar do oponente
function displayPlacarDois() {
    context.font = "18px Arial"
    context.fillStyle = "#000"
    context.fillText(placarOponente, canvas.width / 2 + 90, 30); //do centro para a direita com a soma
}
/*--------------------------------------------------------------------------------------------------*/


//desenhar um elemento no canva
function desenharElemento(element) {
    context.fillStyle = element.color;
    context.fillRect(element.x, element.y, element.width, element.height);
}

//desenhar todos os elementos
function desenharElementos() {
    context.clearRect(0 , 0, canvas.width, canvas.height);
    desenharElemento(raqueteJogador);
    desenharElemento(raqueteOponente);
    desenharElemento(bola);
    displayPlacarUm();
    displayPlacarDois();
    movimentoBola();
    movimentaRaqueteOponente();
}
/*--------------------------------------------------------------------------------------------------*/
//movimento da bola
function movimentoBola() {

    bola.x += bola.velocidadeX;
    bola.y += bola.velocidadeY;

    // se bola for menor que width - tamanho bola OU bola x menor que zero
    if (bola.x > canvas.width - 15 || bola.x < 0) {
        bola.velocidadeX *= -1;
    }

    if (bola.y > canvas.height - 15 || bola.y < 0) {
        bola.velocidadeY *= -1;
    }
}
/*---------------------------------------------------------------------------------------------------*/


function loop() {
    desenharElementos();
    window.requestAnimationFrame(loop)
}

//desenharElemento(raqueteJogador);
//desenharElemento(raqueteOponente);
//desenharElemento(bola);


loop();