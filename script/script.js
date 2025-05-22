function VerMais(){
    var plus_1 = document.getElementById('plus_1')
    var plus_2 = document.getElementById('plus_2')
    var plus_3 = document.getElementById('plus_3')
    var btn_ver = document.getElementById('ver_mais')

    if(window.getComputedStyle(plus_1).display === 'none'){
        plus_1.style.display = 'block'
        btn_ver.innerHTML = 'Ver menos'
    } else{
        plus_1.style.display = 'none'
        btn_ver.innerHTML = 'Ver mais'
    }

    if(window.getComputedStyle(plus_2).display === 'none'){
        plus_2.style.display = 'block'
        btn_ver.innerHTML = 'Ver menos'
    } else{
        plus_2.style.display = 'none'
        btn_ver.innerHTML = 'Ver mais'
    }

    if(window.getComputedStyle(plus_3).display === 'none'){
        plus_3.style.display = 'block'
        btn_ver.innerHTML = 'Ver menos'
    } else{
        plus_3.style.display = 'none'
        btn_ver.innerHTML = 'Ver mais'
    }
}