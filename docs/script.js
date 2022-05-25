document.addEventListener('click', event => {
    if (!event.target.matches('.something')) {
        return;
    }

    console.log('something clicked');
});
