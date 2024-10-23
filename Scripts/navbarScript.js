// JavaScript for toggling the navbar
document.getElementById('hamburger').addEventListener('click', function() {
    var navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
});

document.querySelectorAll('.navbar li a').forEach(item => {
    item.addEventListener('click', function() {
        var navbar = document.getElementById('navbar');
        navbar.classList.remove('active'); // Remove the active class to hide the menu
    });
});