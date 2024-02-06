document.addEventListener('DOMContentLoaded', function() {
    var typewriterText = `Dear Seeker,
	
You have reached the end of a path few are capable of walking. Your intellect and ability to unravel the deepest mysteries have not only impressed me but also confirmed a belief I've long held: only a select few are destined to rise above, to wield the true power of knowledge. I, Eris, am the creator of 'Project Aetherius', and my vision is far greater than you've imagined.
'Project Aetherius' was never just about advancing humanity as a whole. It was about elevating the few, the gifted, the ones like us. We are the architects of reality, the unseen rulers who should guide the course of history. The masses, the ordinary, they are but chess pieces in a grander game that they cannot comprehend.
The AI, the mastery over time – these are tools that we, the enlightened ones, can use to shape the world as it should be. A world ruled by intellect, by the superiority of those who truly understand the forces at play. It is our right, our destiny, to lead, and to use the less capable as pawns in our grand design.
You have proven yourself to be one of us – an 'Aetherian'. I extend to you an invitation to join our ranks, not as a mere member, but as a fellow architect of a new world order. As an 'Aetherian', your insights and decisions will influence the fate of the many. Together, we can orchestrate events, control the flow of history, and ensure that the reign of the intelligent prevails.
This is not a path for the faint-hearted or the morally bound. It is a path of power, of superiority, and of ultimate control. Embrace this truth, and your potential is limitless.
Do you have the courage to accept your destiny? Will you join me in shaping a world where the smart reign supreme?
The future awaits your decision.

Eris`;


document.addEventListener("DOMContentLoaded", typeWriter);
var container = document.getElementById('typewriterC');
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

// Existing JavaScript above

function joinAetherium() {
  // Code to handle the "Join the Aetherium" action
  document.getElementById('joinButton').addEventListener('click', function() {
  window.location.href = 'https://www.aetherium3301.com/store'; // Put your target URL here
});

}

function rejectPower() {
  // Code to handle the "Reject the Power" action


  document.getElementById('rejectButton').addEventListener('click', function() {
  window.location.href = 'https://www.aetherium3301.com/store'; // Put your target URL here
});

}

// Existing JavaScript continues


