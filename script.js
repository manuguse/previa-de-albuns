function tocaSom(idAudio) {
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const album = tecla.classList[1];
    const idAudio = `#som_${album}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function(){
        tecla.classList.add('active')
    }
}