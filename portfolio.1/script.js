const typingText = [
    "IT Infrastructure Project Manager",
    "Technology Leader",
    "Digital Transformation Specialist",
    "Telecommunications Professional"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.getElementById("typing");

function typeEffect() {

    const currentText = typingText[textIndex];

    if (!deleting) {
        typingElement.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {
            deleting = true;

            setTimeout(typeEffect, 1800);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;

            textIndex++;

            if (textIndex === typingText.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 80);
}

typeEffect();