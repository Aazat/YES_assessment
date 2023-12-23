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
        // Note: creating new paragraph to append content FOR ALL FIELDS, as per my understaning i am creating new paragraph for each new inputs and not fields.
        const paragraph = document.createElement('p');

        // Append entered text to the paragraph
        // Labelling the inputs with Fields, to show which input from which field is displayed.
        paragraph.textContent = `Field 1: ${inputField1Value}, Field 2: ${inputField2Value}, Field 3: ${inputField3Value}`;

        // Dynamically style the paragraph
        const randomColor = getRandomColor();
        paragraph.style.color = randomColor;

        // Append the paragraph to the results div
        resultsDiv.appendChild(paragraph);

        // Show the results div after the first form submission
        resultsDiv.style.display = 'block';

        // Clear form fields
        form.reset();
    });

    // Function to generate a random color
    function getRandomColor() {
        // Random generating an color code for dynamically updating style of a paragraph.
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
