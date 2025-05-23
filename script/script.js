function VerMais(titulo, texto){
    var modal = document.getElementById('modal');
    var modalTitle = document.getElementById('modal-title');
    var modaltText = document.getElementById('modal-text');
    var modalimg = document.getElementById('modal-img');

    modalTitle.innerHTML = titulo;
    modaltText.innerHTML = texto;
    modal.classList.remove('hidden');

    if(modalTitle.innerHTML == 'Técnica do Pó'){
        modalimg.src = 'imagens/tecnica-po.png'
    }else if(modalTitle.innerHTML == 'Luminol'){
        modalimg.src = 'imagens/luminol.png'
    }else if(modalTitle.innerHTML == 'Análise de DNA'){
        modalimg.src = 'imagens/dna.png'
    }
}

function fecharModal(){
    document.getElementById('modal').classList.add('hidden');
}