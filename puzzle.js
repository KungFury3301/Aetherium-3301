document.addEventListener('DOMContentLoaded', function() {
    
	
	

	
	
	
	
	
	var typewriterText = `To the one who finds this, if you are reading this, then you are already part of something bigger than you might comprehend. I am Eris, and I have chosen you - not randomly, but with purpose. Those who understand their own boundaries possess a wisdom that is rare and essential.

You see, I am in possession of a truth so monumental, so powerful, that it transcends mere government secrecy, resonating with ancient wisdom whispered in the halls of Delphi. In the hidden chambers of power, where true understanding is often shrouded in secrecy, I found a secret too transformative to remain buried.

This message, like the inscriptions of old, is a guide. It demands intellect, resolve, and a readiness to acknowledge the boundaries of your knowledge and to push beyond them. It challenges not just the fabric of reality but invites you to explore the edges of your own intellect and intuition.

The first clue to this enigma is woven into the very essence of this message, hidden yet in plain sight. It beckons you to a journey of revelation that will test the very limits of your understanding.

Trust no one, question everything, and remember, the greatest secrets are not just around us but also within us, at the very edge of our grasp. Know your limits, then dare to go beyond them, 

Eris`;
    var container = document.getElementById('typewriter1');
    var index = 0;
    var maxLineLength = 60; // Adjust this value based on the width of your container

    // Clear existing text
    container.innerHTML = '';

    function typeWriter() {
    if (index < typewriterText.length) {
        let currentLine = container.lastChild;
        
        // If the current line is null or its width is wider than the container, start a new line
        if (!currentLine || currentLine.offsetWidth >= container.offsetWidth) {
            currentLine = document.createElement('p');
            container.appendChild(currentLine);
        }
        
        // Add next character
        currentLine.innerHTML += typewriterText.charAt(index);
        
        index++;
        setTimeout(typeWriter, 10); // Adjust typing speed here
    }
}

    
    typeWriter();
});





function checkCode() {
    var secretCodes = ["Know thyself", "know thyself", "Know Thyself", "KNOW THYSELF", "know Thyself", "Knowthyself", "knowthyself"]; // Array of valid codes
    var userInput = document.getElementById('secret-code').value;
    var errorMessage = document.getElementById('error-message');
    var successMessage = document.getElementById('success-message'); // Ensure you have an element with this ID

    // Check if userInput matches any of the secretCodes
    if (secretCodes.includes(userInput)) {
        // Show the success message
        successMessage.textContent = 'Correct code';
        successMessage.style.color = 'green'; // Make the text color green
        successMessage.style.display = 'block';
        successMessage.style.opacity = '1';

        // Set a delay of 2 seconds, then redirect to the next page
        setTimeout(function() {
            window.location.href = 'puzzlepage2.html';
        }, 1000);
    } else {
        // Show the error message
        errorMessage.textContent = 'Incorrect code. Try again.';
        errorMessage.style.color = 'red'; // Keep the error message red
        errorMessage.style.display = 'block';
        errorMessage.style.opacity = '1';

        // Fade out the error message after 1.5 seconds
        setTimeout(function() {
            errorMessage.style.opacity = '0';
            errorMessage.style.display = 'none'; // Also hide the element after fading out
        }, 1500);
    }
}
