document.addEventListener('click', event => {

    const notificationsPopover = document.getElementById("notifications");

    if (!event.target.matches('#notifications-toggler')) {
        notificationsPopover.classList.remove('OPEN');
        return;
    }

    notificationsPopover.classList.toggle('OPEN');
    
});
