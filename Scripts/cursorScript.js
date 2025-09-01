// Modern Hero Section JavaScript with enhanced typing effects
const nameText = "Ryan Orozco";
const titleText = "Software Engineer";
let nameIndex = 0;
let titleIndex = 0;
const typingSpeed = 150; // Faster typing speed for better UX

// Enhanced typing effect with better cursor styling
function typeWriter() {
    const nameElement = document.getElementById('name');
    const titleElement = document.getElementById('title');
    const scrollIndicator = document.querySelector('.scroll-indicator');
    const whooshSound = document.getElementById('whooshSound');

    // Type the name first
    if (nameIndex < nameText.length) {
        nameElement.innerHTML = nameText.substring(0, nameIndex + 1) + '<span class="cursor">|</span>';
        nameIndex++;
        setTimeout(typeWriter, typingSpeed);
    }
    // After the name is fully typed, type the title
    else if (titleIndex < titleText.length) {
        nameElement.innerHTML = nameText; // Remove cursor from the name
        titleElement.innerHTML = titleText.substring(0, titleIndex + 1) + '<span class="cursor">|</span>';
        titleIndex++;
        setTimeout(typeWriter, typingSpeed);
    }
    // After title is fully typed, show scroll indicator
    else {
        titleElement.innerHTML = titleText; // Remove cursor from the title
        
        // Show scroll indicator with enhanced animation
        if (scrollIndicator) {
            scrollIndicator.style.opacity = '1';
            scrollIndicator.style.transform = 'translateX(-50%) translateY(0)';
        }
        
        // Add click event to scroll indicator for smooth scrolling
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const aboutSection = document.getElementById('about');
                if (aboutSection) {
                    aboutSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }
    }
}

// Enhanced particle animation
function animateParticles() {
    const particles = document.querySelectorAll('.particle');
    particles.forEach((particle, index) => {
        // Add random movement to particles
        const randomX = (Math.random() - 0.5) * 100;
        const randomY = (Math.random() - 0.5) * 100;
        
        particle.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        // Restart animation after delay
        setTimeout(() => {
            particle.style.transform = 'translate(0, 0)';
        }, 6000 + (index * 1000));
    });
}

// Parallax effect for background elements
function parallaxEffect() {
    const scrolled = window.pageYOffset;
    const techGrid = document.querySelector('.tech-grid');
    const particles = document.querySelectorAll('.particle');
    
    if (techGrid) {
        techGrid.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
    
    particles.forEach((particle, index) => {
        const speed = 0.05 + (index * 0.01);
        particle.style.transform = `translateY(${scrolled * speed}px)`;
    });
}

// Enhanced scroll animations
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.tech-item, .cta-button');
    const windowHeight = window.innerHeight;
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight * 0.8) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Interactive tech stack preview
function initializeTechStack() {
    const techItems = document.querySelectorAll('.tech-item');
    
    techItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Add glow effect
            item.style.boxShadow = '0 15px 40px rgba(64, 224, 208, 0.4)';
            item.style.transform = 'translateY(-8px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            // Remove glow effect
            item.style.boxShadow = '';
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Enhanced CTA button interactions
function initializeCTAButtons() {
    const ctaButtons = document.querySelectorAll('.cta-button');
    
    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = button.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            button.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
}

// Add ripple effect CSS
function addRippleStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .cta-button {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize everything when page loads
window.addEventListener('DOMContentLoaded', function() {
    // Start typing effect
    typeWriter();
    
    // Initialize animations
    setTimeout(animateParticles, 1000);
    
    // Add event listeners
    window.addEventListener('scroll', parallaxEffect);
    window.addEventListener('scroll', handleScrollAnimations);
    
    // Initialize interactive elements
    setTimeout(initializeTechStack, 3000);
    setTimeout(initializeCTAButtons, 3000);
    
    // Add ripple styles
    addRippleStyles();
    
    // Add smooth reveal animation for hero content
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease-out';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Enhanced cursor animation
function enhanceCursor() {
    const cursors = document.querySelectorAll('.cursor');
    cursors.forEach(cursor => {
        cursor.style.animation = 'blink 1s steps(1) infinite, glow 2s ease-in-out infinite alternate';
    });
}

// Call enhance cursor after typing is complete
setTimeout(enhanceCursor, 5000);
