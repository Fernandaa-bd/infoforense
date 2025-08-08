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
        modalimg.src = 'imagens/dna.jpeg'
    }
}

function fecharModal(){
    document.getElementById('modal').classList.add('hidden');
}

/* script do menu-mobile */
var btn_open = document.getElementById('btn-open-menu')
var menu_mobile = document.getElementById('menu-mobile')
var overlay_menu = document.getElementById('overlay-menu')
var btn_close = document.getElementById('btn-close')

btn_open.addEventListener('click', ()=>{
    menu_mobile.classList.add('open')
})

menu_mobile.addEventListener('click', ()=>{
    menu_mobile.classList.remove('open')
})

overlay_menu.addEventListener('click', ()=>{
    menu_mobile.classList.remove('open')
})

btn_close.addEventListener('click', ()=>{
    menu_mobile.classList.remove('open')
})
