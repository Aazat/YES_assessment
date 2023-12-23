document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('userForm');
    const resultsDiv = document.getElementById('results');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Get input values
        const inputField1Value = document.getElementById('inputField1').value;
        const inputField2Value = document.getElementById('inputField2').value;
        const inputField3Value = document.getElementById('inputField3').value;

        // Create a new paragraph element
        const paragraph = document.createElement('p');

        // Append entered text to the paragraph
        paragraph.textContent = `Field 1: ${inputField1Value}, Field 2: ${inputField2Value}, Field 3: ${inputField3Value}`;

        // Dynamically style the paragraph
        applyRandomStyles(paragraph);

        // Append the paragraph to the results div
        resultsDiv.appendChild(paragraph);

        // Show the results div after the first form submission
        resultsDiv.style.display = 'block';

        // Clear form fields
        form.reset();
    });

    // Function to generate a random color
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to generate a random font size
    function getRandomFontSize() {
        const minSize = 14;
        const maxSize = 24;
        return `${Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize}px`;
    }

    // Function to generate a random font weight
    function getRandomFontWeight() {
        const options = ['normal', 'bold'];
        return options[Math.floor(Math.random() * options.length)];
    }

    // Function to generate a random font style
    function getRandomFontStyle() {
        const options = ['normal', 'italic'];
        return options[Math.floor(Math.random() * options.length)];
    }

    // Function to apply random styles to a paragraph
    function applyRandomStyles(paragraph) {
        const randomColor = getRandomColor();
        const randomFontSize = getRandomFontSize();
        const randomFontWeight = getRandomFontWeight();
        const randomFontStyle = getRandomFontStyle();

        paragraph.style.backgroundColor = randomColor;
        paragraph.style.fontSize = randomFontSize;
        paragraph.style.fontWeight = randomFontWeight;
        paragraph.style.fontStyle = randomFontStyle;
    }
});
