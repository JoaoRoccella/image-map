document.querySelector('#area-parabrisa').addEventListener('click', () => {
    document.querySelector('#parabrisa').classList.remove('oculto');
    document.querySelector('#parabrisa').classList.add('data');
});

document.addEventListener('click', e => {
    if (e.target.classList.contains('close')) {
        e.target.closest('div').classList.add('oculto');
    }
});