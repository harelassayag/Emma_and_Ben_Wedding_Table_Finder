// script.js
async function findTable() {
    // Show the loading indicator
    document.getElementById("loading").style.display = "block";
  
    // Get the first and last names from the input fields
    const firstName = document.getElementById('firstNameInput').value.trim();
    const lastName = document.getElementById('lastNameInput').value.trim();
    const resultElement = document.getElementById('result');
  
    // Validate input
    if (!firstName || !lastName) {
      resultElement.textContent = "Veuillez remplir tous les champs.";
      document.getElementById("loading").style.display = "none";
      return;
    }
  
    // Construct the URL for the Google Apps Script endpoint
    const url = `https://script.google.com/macros/s/AKfycbwB5VHjNeIR5J0eZ_Xyoheok1U6z0BBnTpsK11lxe5xCEOlzFc4y19Wvk9GmAwklIhP/exec?firstName=${firstName}&lastName=${lastName}`;
  
    try {
      // Fetch data from the Google Apps Script endpoint
      const response = await fetch(url);
  
      // Check for successful response
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Extract the table number from the response
      const tableNumber = await response.text();
  
      // Display the table number in the result element
      resultElement.textContent = `Votre table est : ${tableNumber}`;
      document.getElementById("loading").style.display = "none";
  
    } catch (error) {
      // Handle errors during data fetching
      console.error("Error fetching data:", error);
    //   resultElement.textContent = "Error fetching data. Please try again later.";
      resultElement.textContent = "Oups, une erreur est survenue. Essayez encore ou demandez à Salomé / Laurie.";
    
      document.getElementById("loading").style.display = "none";
    }
  }
  