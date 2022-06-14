document.addEventListener('click', event => {

    if (!event.target.matches('#notifications-toggler')) {
        return;
    }

    const notificationsPopover = document.getElementById("notifications");
    notificationsPopover.classList.toggle('OPEN');

    console.log('something clicked');
});
