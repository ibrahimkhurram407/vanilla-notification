let notificationQueue = [];
let isShowingNotification = false;

function showNotification(type, message) {
    // Add the notification request to the queue
    notificationQueue.push({ type, message });
    if (!isShowingNotification) {
        displayNextNotification();
    }
}

function displayNextNotification() {
    if (notificationQueue.length === 0) {
        isShowingNotification = false;
        return;
    }

    isShowingNotification = true;

    // Get the next notification from the queue
    const { type, message } = notificationQueue.shift();

    // Create a new notification element
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;

    // Add the notification to the container
    const container = document.getElementById('notification-container');
    container.appendChild(notification);

    // Show the notification with sliding effect
    notification.style.display = 'block';

    // Wait for 2 seconds then remove the notification and process the next one
    setTimeout(() => {
        notification.remove();
        setTimeout(displayNextNotification, 500); // Delay before showing the next notification
    }, 2000); // Duration the notification stays on screen
}
