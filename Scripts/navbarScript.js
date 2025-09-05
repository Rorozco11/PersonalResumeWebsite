// Modern Navbar JavaScript with enhanced functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('hamburger');
    const navMenu = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navbar = document.querySelector('.modern-navbar');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger lines
        const lines = this.querySelectorAll('.hamburger-line');
        lines.forEach((line, index) => {
            if (navMenu.classList.contains('active')) {
                if (index === 0) line.style.transform = 'rotate(45deg) translate(5px, 5px)';
                if (index === 1) line.style.opacity = '0';
                if (index === 2) line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                line.style.transform = 'none';
                line.style.opacity = '1';
            }
        });
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            
            // Reset hamburger animation
            const lines = navToggle.querySelectorAll('.hamburger-line');
            lines.forEach(line => {
                line.style.transform = 'none';
                line.style.opacity = '1';
            });
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target)) {
            navMenu.classList.remove('active');
            
            // Reset hamburger animation
            const lines = navToggle.querySelectorAll('.hamburger-line');
            lines.forEach(line => {
                line.style.transform = 'none';
                line.style.opacity = '1';
            });
        }
    });

    // Active state management based on scroll position
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id], header[id]');
        const scrollPos = window.scrollY + 100;

        let activeFound = false;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                // Remove active class from all links
                navLinks.forEach(link => link.classList.remove('active'));
                
                // Add active class to current section link
                if (navLink) {
                    navLink.classList.add('active');
                    activeFound = true;
                }
            }
        });

        // If no section is active and we're at the top, make Home active
        if (!activeFound && window.scrollY < 100) {
            navLinks.forEach(link => link.classList.remove('active'));
            const homeLink = document.querySelector('.nav-link[href="#home"]');
            if (homeLink) {
                homeLink.classList.add('active');
            }
        }
    }

    // Navbar background change on scroll
    function updateNavbarBackground() {
        if (window.scrollY > 50) {
            navbar.style.background = 'linear-gradient(135deg, rgba(15, 15, 35, 0.95) 0%, rgba(26, 26, 46, 0.95) 50%, rgba(22, 33, 62, 0.95) 100%)';
            navbar.style.backdropFilter = 'blur(20px)';
        } else {
            navbar.style.background = 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)';
            navbar.style.backdropFilter = 'blur(10px)';
        }
    }

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Account for navbar height
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Event listeners
    window.addEventListener('scroll', function() {
        updateActiveNavLink();
        updateNavbarBackground();
    });

    // Initialize active state
    updateActiveNavLink();
    
    // Add loading animation
    setTimeout(() => {
        navbar.style.opacity = '1';
        navbar.style.transform = 'translateY(0)';
    }, 100);
});

// Add CSS for initial loading state
const style = document.createElement('style');
style.textContent = `
    .modern-navbar {
        opacity: 0;
        transform: translateY(-20px);
        transition: all 0.6s ease;
    }
`;
document.head.appendChild(style);