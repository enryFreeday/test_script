document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const closeButton = document.querySelector('#close-popup');
        const popup = document.querySelector('#custom-popup');

        // Debugging
        console.log("Close button trovato:", closeButton);
        console.log("Popup trovato:", popup);

        if (closeButton && popup) {
            closeButton.addEventListener('click', () => {
                console.log("La X è stata cliccata");
                popup.remove();
                console.log('Popup chiuso con successo.');
            });
        } else {
            console.error('Non è stato possibile trovare il popup o il bottone di chiusura.');
        }
    }, 2000); // Timeout di 2 secondi
});


