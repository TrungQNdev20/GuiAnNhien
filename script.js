document.addEventListener('DOMContentLoaded', function() {
    const menuButtons = document.querySelectorAll('.menu-btn');
    const menuDetails = document.querySelectorAll('.mon-detail');

    // Hàm xử lý khi nút menu được bấm
    function handleMenuClick(event) {
    // selectedMon not needed when details are nested under each .menu-item
        // Find the menu-item container for this button
        const menuItem = event.currentTarget.closest('.menu-item');
        if (!menuItem) return;

    const detail = menuItem.querySelector('.mon-detail');
    const wasVisible = detail?.classList.contains('active');

        // Hide all details and remove active state from all buttons
        menuButtons.forEach(btn => btn.classList.remove('active'));
        menuDetails.forEach(d => d.classList.remove('active'));

        // If it was visible, we've just hidden it (toggle off)
        if (wasVisible) {
            return;
        }

        // Otherwise, show this detail and mark button active
        if (detail) {
            detail.classList.add('active');
            event.currentTarget.classList.add('active');
        }
    }

    // Gắn sự kiện click cho tất cả các nút menu
    menuButtons.forEach(btn => {
        btn.addEventListener('click', handleMenuClick);
    });
});