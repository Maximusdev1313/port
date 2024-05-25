// var speed = 150;
const text = [
    { name: 'Front-end developer' },
    { name: 'Backend-end developer' },
    { name: 'Freelancer' },
];
const content = [{
    name: "I am a Full-stack web developer. I can create web applications only with your ideas. You don't need to think about technical requirements and documents!"
}]
function typeWriter(texts, id, speed) {
    var i = 0;
    var j = 0;
    const content = document.getElementById(id);
    console.log(speed);
    function typeNextCharacter() {
        if (i < texts[j].name.length) {
            content.innerHTML += texts[j].name.charAt(i);
            i++;
            setTimeout(typeNextCharacter, speed);
        } else {
            // Reset i and move to the next text
            i = 0;
            j = (j + 1) % texts.length; // Cycle back to the first text when we've gone through all of them
            content.classList.add('fade'); // Add the class to start the transition
            setTimeout(() => {
                content.innerHTML = ''; // Clear the content
                content.classList.remove('fade'); // Remove the class to end the transition
                setTimeout(typeNextCharacter, speed); // Start typing the next text
            }, 500); // Wait for the transition to finish before starting the next text
        }
    }
    typeNextCharacter();
}

typeWriter(text, 'main', 150);
typeWriter(content, 'content', 50);
