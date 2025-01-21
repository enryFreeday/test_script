document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('#close-popup');
    const popup = document.querySelector('#custom-popup');

    if (closeButton && popup) {
        closeButton.addEventListener('click', () => {
            popup.remove();
            console.log('Popup chiuso con successo.');
        });
    } else {
        console.error('Non è stato possibile trovare il popup o il bottone di chiusura.');
    }
});
