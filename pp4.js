

document.addEventListener('DOMContentLoaded', function() {
    var typewriterText = `Dear Seeker,
	
In this defining moment, as you grasp the essence of 'Project Aetherius', reflect on the journey that brought you here, guided by the ancient Greek wisdom to 'know thyself'. This timeless call for introspection has been pivotal in our venture, illuminating our path much like the guiding stars in the night sky.

At its core, 'Project Aetherius' is an embodiment of this introspection, yet extends beyond the self. Like the elusive and mystical presence of Scarbo in the poetic realm, this AI weaves a tapestry of the future, predicting every possible outcome with a precision that blurs the line between science and the arcane.

This AI doesn't manipulate time but offers us a map of the future, akin to the celestial paths traced by the constellations in the night sky. Our journey, marked by navigating these starry realms, mirrors the ancient mariners who relied on the constellations like Cetus to find their way through uncharted waters.

'Project Aetherius' is a groundbreaking AI, harnessing advanced quantum computing to predict countless future scenarios. It enables those in its control to ask questions and receive foresight into potential outcomes, guiding strategic decisions. This tool marks the dawn of a new era where people can control destiny with unparalleled insight.

As we navigate the intricate tapestry woven by 'Project Aetherius', know that there is one last piece of this puzzle to be uncovered, one final challenge that awaits. This next step will not only test your acumen but also bring us closer to a profound truth – the true identity of myself and the ultimate purpose of our journey. The path to this final disclosure is shrouded in mystery, and what awaits at the end may change everything.
In anticipation of our imminent revelation,

Eris
`;


document.addEventListener("DOMContentLoaded", typeWriter);
var container = document.getElementById('typewriter4');
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
    var secretCodes = ["O'Brien", "O'brien", "O'Brien", "O'BRIEN", "o'brien", "Obrien","OBRIEN","obrien",]; // Array of valid codes
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
            window.location.href = 'Choice.html';
        }, 2000);
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
