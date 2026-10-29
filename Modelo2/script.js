const listaImagens = document.querySelectorAll(".miniatura");
 
const modal = document.getElementById("modal");
const btnFechar = document.getElementById("fechar");
const btnAnterior = document.getElementById("anterior");
const imagemModal = document.getElementById("ImagemModal");
const contadorImagem = document.getElementById("contador");
const nomeImagem = document.getElementById("nomeImagem");
const btnProximo = document.getElementById("proximo");
 
let indiceAtual = 0;
 
function mostrarImagem(indice){
 
    if(indice < 0){
        indice = listaImagens.length - 1;
    }
 
    if(indice >= listaImagens.length){
        indice = 0;
    }
 
    indiceAtual = indice;
    const imagem = listaImagens[indice]
    imagemModal.src = imagem.src;
    imagemModal.alt = imagem.alt;
    nomeImagem.textContent = imagem.alt;
    contadorImagem.textContent = `${indiceAtual+1} de ${listaImagens.length}`
}
 
function abrirModal(indice){
    modal.classList.add("ativo");
    mostrarImagem(indice);
}
 
listaImagens.forEach(function(imagem, indice){
    imagem.addEventListener("click", ()=>{
        abrirModal(indice);
    })
})
 
 
// fechando o modal no botao fechar
btnFechar.addEventListener('click', ()=> {
    modal.classList.remove("ativo");
})
 
// fechando o modal quando clicar no fundo
modal.addEventListener('click', (evento)=> {
    if(evento.target === modal){
        modal.classList.remove("ativo")
    }
})
 
// fechando o modal ao clicar a tecla ESC
document.addEventListener('keydown', (evento)=>{
    if (evento.key === "Escape"){
        modal.classList.remove("ativo");
    }
})
 
btnProximo.addEventListener("click", ()=>{
    mostrarImagem(indiceAtual+1);
})
 
btnAnterior.addEventListener("click", ()=>{
    mostrarImagem(indiceAtual-1);
})