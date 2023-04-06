var evento = "empty"
var PosicaoDeX, PosicaoDeY
var cor = "black"
var tamanho = 1
var canvas = document.getElementById("canvas")
ctx = canvas.getContext("2d")
var largura = screen.width
var novaLargura = largura - 70
var novaAltura = screen.height - 300
if (largura < 992){
document.getElementById("canvas").width = novaLargura
document.getElementById("canvas").height = novaAltura
document.body.style.overflow = "hidden"
}
canvas.addEventListener("touchstart", click)

function click(e){
    PosicaoDeX = e.touches[0].clientX - canvas.offsetLeft
    PosicaoDeY = e.touches[0].clientY - canvas.offsetTop
    console.log("oi")
}


canvas.addEventListener("touchmove", Mover)
function Mover(e) {
    var mouseX = e.touches[0].clientX - canvas.offsetLeft
    var mouseY = e.touches[0].clientY - canvas.offsetTop

    ctx.beginPath();
    ctx.strokeStyle = cor
    ctx.lineWhidth = tamanho
    ctx.moveTo(PosicaoDeX, PosicaoDeY)
    ctx.lineTo(mouseX, mouseY)
    ctx.stroke()

PosicaoDeX = mouseX 
PosicaoDeY = mouseY
console.log("ola")
}
function Limpar(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
