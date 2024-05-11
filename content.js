// Find all forms on the page
const forms = document.querySelectorAll('form');

// Function to fill random data into form fields
const fillForm = (form) => {
  form.querySelectorAll('input').forEach(input => {
    if (input.type === 'text') {
      input.value = generateRandomString();
    } else if (input.type === 'email') {
      input.value = generateRandomEmail();
    } else if (input.type === 'number') {
      input.value = generateRandomNumber();
    } // Add more conditions as needed for other input types
  });
};

// Function to generate random string
const generateRandomString = () => {
  return Math.random().toString(36).substring(2, 15);
};

// Function to generate random email
const generateRandomEmail = () => {
  return generateRandomString() + '@example.com';
};

// Function to generate random number
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 1000);
};

// Fill each form with random data
forms.forEach(fillForm);
