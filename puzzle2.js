




document.addEventListener('DOMContentLoaded', function () {
    var typewriterText = `Dear Navigator, If you are reading this, you have embarked on a journey that transcends ordinary minds. I go by Eris, and I have unveiled something monumental - "Project Aetherius", a name that resonates awe and caution.

My journey began, not as a mere quest, but as a destined path, with a document titled as "Government File 136199." This code, seemingly a mundane marker in a sea of bureaucratic obscurity, beckoned to me like coordinates on a map.

This file was my portal into a vast and obscured universe, a project so enshrouded in secrecy that its existence seems as elusive as a myth. 'Project Aetherius' whispers of power and dominion, realms that lie beyond the grasp of the uninitiated, reaching as far as the stars themselves.

I spend my days and nights deciphering cryptic messages - coded communications, intricate financial patterns, and gatherings that vanish like comets. This pursuit is solitary, distinguishing the extraordinary from the mundane. But this journey is for the few, the ones like you and me. It's not just about uncovering secrets; it's about harnessing potential for greater control, guiding those who wander in the darkness.

Together, we will unravel the layers of 'Project Aetherius'. Our expedition may lead us into unexplored territories, where the known universe of power and reality is expanded. In our celestial quest, we are akin to the navigators of old, charting a course through the constellations, ever guided by the cosmic whale swimming in the vast sea of stars. Are you prepared to chart this course with me?

Eris`;

    var container = document.getElementById('typewriter2');
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
    var secretCodes = ["Cetus", "CETUS", "cetus"]; // Array of valid codes
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
            window.location.href = '3PuzzlePageee.html';
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