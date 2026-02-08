function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

function submitForm(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    
    // Simple validation feedback
    if(name && phone) {
        alert('Thank you, ' + name + '! We have received your message and will contact you shortly at ' + phone + '.');
        // Reset form
        event.target.reset();
    } else {
        alert('Please fill in all required fields.');
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const navLinks = document.querySelector('.nav-links');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (!navLinks.contains(event.target) && !menuBtn.contains(event.target) && navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
});
