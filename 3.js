





function checkCode() {
    var secretCodes = ["Scarbo", "scarbo", "SCARBO", ]; // Array of valid codes
    var userInput = document.getElementById('secret-code').value;
    var errorMessage = document.getElementById('error-message');

    // Check if userInput matches any of the secretCodes
    if (secretCodes.includes(userInput)) {
        window.location.href = 'PagePuzzzzle4.html'; // Redirect to the next page if the code is correct
    } else {
        // Show the error message
        errorMessage.style.display = 'block';
        errorMessage.style.opacity = '1';
        // Fade out the error message after 2 seconds
        setTimeout(function() {
            errorMessage.style.opacity = '0';
            errorMessage.style.display = 'none'; // Also hide the element after fading out
        }, 1500);
    }
}




document.addEventListener('DOMContentLoaded', function() {
  
  var typewriterText = `Dear Seeker,

Your progress has not gone unnoticed, and your patience will be rewarded. Now, let's delve deeper into 'Project Aetherius', a journey I have charted to guide you to its core.

Unearthing 'Project Aetherius' was like revealing a hidden empire, shrouded in secrecy and holding immense power. This project intertwines advanced technology with quantum computing and unparalleled artificial intelligence, pushing the limits of possibility.

The knowledge within 'Project Aetherius' offers a chance to shape the world. It's more than scientific advancement; it's about wielding unseen power and influencing history's course.

The truths I share are from deep investigations, encoded to test your intellect and understanding of power. We must outsmart the vigilant eyes that guard 'Project Aetherius', as we piece together each part of this larger, commanding design.

Stay vigilant in this shadowed path. We are not merely uncovering secrets; we are stepping into roles of power reserved for a select few. The future we forge leads to a domain where the enlightened reign. As we move forward, remember how far you have come.

Eris`;



 var container = document.getElementById('typewriter3');
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



document.getElementById('playMusicButton').addEventListener('click', playSongs);

function playSongs() {
  let songs = [
  'song1.mp3',
  'song2.mp3',
  'song3.mp3'
];
 // Replace with actual song file paths
  let currentSongIndex = 0;
  let audioPlayer = document.getElementById('audioPlayer');

  function playNextSong() {
    if (currentSongIndex < songs.length) {
      audioPlayer.src = songs[currentSongIndex];
      audioPlayer.play();
      currentSongIndex++;
    } else {
      audioPlayer.pause();
    }
  }

  audioPlayer.onended = playNextSong;
  playNextSong();
}

