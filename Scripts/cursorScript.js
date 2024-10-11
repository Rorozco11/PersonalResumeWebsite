const nameText = "Ryan Orozco";
const titleText = "Software Engineer";
let nameIndex = 0;
let titleIndex = 0;
const typingSpeed = 200; // Speed in milliseconds

function typeWriter() {
    const nameElement = document.getElementById('name');
    const titleElement = document.getElementById('title');
    const arrowElement = document.getElementById('scroll-arrow');
    const whooshSound = document.getElementById('whooshSound');

    // Type the name first
    if (nameIndex < nameText.length) {
        nameElement.innerHTML = nameText.substring(0, nameIndex + 1) + '<span class="cursor">|</span>'; // Add cursor
        nameIndex++;
        setTimeout(typeWriter, typingSpeed);
    }
    // After the name is fully typed, type the title
    else if (titleIndex < titleText.length) {
        nameElement.innerHTML = nameText; // Remove cursor from the name
        titleElement.innerHTML = titleText.substring(0, titleIndex + 1) + '<span class="cursor">|</span>'; // Add cursor to title while typingf
        titleIndex++;
        setTimeout(typeWriter, typingSpeed);
    }
    // After title is fully typed, keep the cursor blinking
    else {
        titleElement.innerHTML = titleText + '<span class="cursor">|</span>'; // Keep blinking cursor at the end
        // Display the arrow after 500ms
        setTimeout(() => {
            arrowElement.classList.remove('hidden');
            arrowElement.classList.add('visible'); // Make the arrow visible
        }, 50);
        // Add event listener to play whoosh sound when the arrow is clicked
        arrowElement.addEventListener('click', () => {
            whooshSound.play(); // Play the whoosh sound
        });
    }
}

// Call the function to start typing when the page loads
window.onload = typeWriter;
