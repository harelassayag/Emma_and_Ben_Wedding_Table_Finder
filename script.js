// script.js
async function findTable() {
    const firstName = document.getElementById('firstNameInput').value;
    const lastName = document.getElementById('lastNameInput').value;
    const resultElement = document.getElementById('result');

    if (!firstName || !lastName) {
        resultElement.textContent = "Please enter both first and last names.";
        return;
    }

    const url = `https://script.google.com/macros/s/AKfycbwB5VHjNeIR5J0eZ_Xyoheok1U6z0BBnTpsK11lxe5xCEOlzFc4y19Wvk9GmAwklIhP/exec?firstName=${firstName}&lastName=${lastName}`;

    try {
        const response = await fetch(url);
        const tableNumber = await response.text();
        resultElement.textContent = tableNumber;
    } catch (error) {
        resultElement.textContent = "Error fetching data. Please try again later.";
    }
}
