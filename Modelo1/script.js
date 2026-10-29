const miniaturas = document.querySelectorAll('.miniatura');
const modal = document.getElementById('modal');
const imagemModal = document.querySelector('.imagemModal');
const nomeImagem = document.getElementById('nomeImagem');
const btnFechar = document.getElementById('fechar');
 
miniaturas.forEach(function(imagem) {
    imagem.addEventListener('click', function(){
        modal.classList.add("ativo")
        imagemModal.src = imagem.src;
        imagemModal.alt = imagem.alt;
        nomeImagem.textContent = imagem.alt
    })
    btnFechar.addEventListener('click', function(){
        modal.classList.remove("ativo")
    })
});

btnFechar.addEventListener("click", ()=> {
    modal.classList.remove('ativo')
})

modal.addEventListener("click", (evento)=>{
    if(evento.target === modal){
        modal.classList.remove('ativo');
    }
})

document.addEventListener("keydown", (evento)=> {
    if(evento.key === "Escape"){
        modal.classList.remove('ativo');
    }
})
 