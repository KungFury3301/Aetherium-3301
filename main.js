main.js


document.addEventListener('DOMContentLoaded', function() {
    var typewriterText = `To the one who finds this, If you are reading this, then you are already part of something bigger than you might comprehend. I am Eris, and I have chosen you - not randomly, but with purpose. You see, I am in possession of a truth so monumental, so powerful, that it can no longer be contained within the confines of mere government secrecy. I once lurked in the shadows of their corridors, a silent guardian of secrets and lies. But what I discovered was too potent, too transformative to remain buried. I need your help to bring this to light, but it cannot be done openly. They are always watching, and the truth... the truth is a weapon we must wield carefully. This is why I've crafted a trail of puzzles and coded messages, hidden across the digital expanse. Each puzzle you solve, each code you break, brings you closer to the truth. But be warned, this journey is not for the weak. It demands intellect, resolve, and a readiness to challenge the fabric of reality. The first clue is a riddle, embedded in this message. Solve it, and you will find the next step on a website that seems ordinary, but is much more. Trust no one, question everything, and remember, the truth is often hidden where least expected. Good luck, Eris`;
    var container = document.getElementById('typewriter');
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
  var secretCode = "1234"; // Replace with the actual correct code
  var userInput = document.getElementById('secret-code').value;

  if (userInput === secretCode) {
    // This is the line that redirects to the next page
    window.location.href = 'puzzlepage3.html';
  } else {
    alert("Incorrect code. Try again.");
  }
}


function checkCode() {
  // Debugging alert to ensure this function is called
  alert('checkCode function called');

  var secretCode = "1234"; // The code you want the user to enter
  var userInput = document.getElementById('secret-code').value;

  // Debugging alert to show what the user input is
  alert('User input is: ' + userInput);

  if (userInput === secretCode) {
    // Redirect to the next page if the code is correct
    window.location.href = 'puzzlepage3.html';
  } else {
    // Alert the user if the code is incorrect
    alert("Incorrect code. Try again.");
  }
}


function checkCode() {
  var secretCode = "1234"; // The code you want the user to enter
  var userInput = document.getElementById('secret-code').value;
  var errorMessage = document.getElementById('error-message');

  if (userInput === secretCode) {
    window.location.href = 'puzzlepage3.html'; // Redirect to the next page if the code is correct
  } else {
    // Display the error message if the code is incorrect
    errorMessage.style.display = 'block';
  }
}

function checkCode() {
  var secretCode = "1234"; // The code you want the user to enter
  var userInput = document.getElementById('secret-code').value;
  var errorMessage = document.getElementById('error-message');

  if (userInput === secretCode) {
    window.location.href = 'puzzlepage3.html'; // Redirect to the next page if the code is correct
  } else {
    // Show the error message
    errorMessage.style.display = 'block';
    errorMessage.style.opacity = '1';

    // Fade out the error message after 2 seconds
    setTimeout(function() {
      errorMessage.style.opacity = '0';
    }, 1500);
  }
}


