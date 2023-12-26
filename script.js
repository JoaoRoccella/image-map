document.addEventListener('click', e => {

    if (e.target.localName === 'area') {

        console.log(e.target.getAttribute('data-target'));

        document.querySelectorAll('div.data').forEach(dataDiv => {
            dataDiv.classList.add('oculto');
        });

        document.getElementById(e.target.getAttribute('data-target')).classList.remove('oculto');

    }

});

document.addEventListener('click', e => {
    if (e.target.classList.contains('close')) {
        e.target.closest('div').classList.add('oculto');
    }
});
