document.addEventListener('DOMContentLoaded', () => {
    // 1. Element References
    const themeToggle = document.getElementById('switch');
    const body = document.body;
    const themeClass = 'light_theme'; // Your light mode class name

    // 2. Load Saved Theme on initial page load
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
        body.classList.add(themeClass);
        themeToggle.checked = true;
    } else {
        // Default to dark and ensure checkbox is unchecked
        body.classList.remove(themeClass);
        themeToggle.checked = false;
    }

    // 3. Add Event Listener for Toggling
    themeToggle.addEventListener('change', () => {
        if (themeToggle.checked) {
            // Checkbox checked -> Switch to Light Theme
            body.classList.add(themeClass);
            localStorage.setItem('theme', 'light'); 
        } else {
            // Checkbox unchecked -> Switch back to Dark Theme
            body.classList.remove(themeClass);
            localStorage.setItem('theme', 'dark'); 
        }
    });
});