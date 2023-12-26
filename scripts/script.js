// Ao carregar a página ou redimensionar, define o tamanho do overlay igual ao da imagem carregada
['load', 'resize'].forEach(event => {

    addEventListener(event, () => {
        document.querySelector('#overlay').style.height =  document.querySelector('img').clientHeight + 'px';
    });

});

// Exibe uma determinada div de informação, baseada na área da imagem em que foi clicada
document.addEventListener('click', e => {

    if (e.target.localName === 'area') {

        document.querySelectorAll('div.data').forEach(dataDiv => {
            dataDiv.classList.add('oculto');
            document.querySelector('#overlay').classList.add('oculto');
        });

        document.getElementById(e.target.getAttribute('data-target')).classList.remove('oculto');

        document.querySelector('#overlay').classList.remove('oculto');

    // caso contrário, ao clicar no X da div fecha o conteúdo
    } else if (e.target.classList.contains('close')) {
        
        e.target.closest('div').classList.add('oculto');
        document.querySelector('#overlay').classList.add('oculto');

    }

});

// Fecha qualquer div de informação pressionando ESC
document.addEventListener('keydown', e => {

    if (e.key === 'Escape') {

        document.querySelectorAll('.data').forEach(dataDiv => {
            dataDiv.classList.add('oculto');
            document.querySelector('#overlay').classList.add('oculto');
        })

    }

});
