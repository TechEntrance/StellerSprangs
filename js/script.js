document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const fullscreenMenu = document.querySelector('.fullscreen-menu');
    
    menuBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        fullscreenMenu.classList.toggle('active');
        
        // Prevent body scrolling when menu is open
        document.body.style.overflow = fullscreenMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when clicking menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuBtn.classList.remove('active');
            fullscreenMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});
