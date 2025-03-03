const uppercaseLetters = document.getElementById('uppercaseLetters');
const lowercaseLetters = document.getElementById('lowercaseLetters');
const numbers = document.getElementById('numbers');
const characters = document.getElementById('characters');

function myPassword() {
    let passwordLength = document.getElementById('passwordLength').value;
    passwordLength = Number(passwordLength);

    const includeUpperLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const includeLowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const includeNumbers = '0123456789';
    const includeCharacters = '@#$%&*?/<>';

    const pass = document.getElementById('pass');
    let password = ""; // Initialize password

    // If no checkboxes are selected, show a message and stop execution
    if (!uppercaseLetters.checked && !lowercaseLetters.checked && !numbers.checked && !characters.checked) {
        pass.textContent = 'Please select at least one option!';
        return;
    }

    let availableChars = "";

    if (uppercaseLetters.checked) availableChars += includeUpperLetters;
    if (lowercaseLetters.checked) availableChars += includeLowercaseLetters;
    if (numbers.checked) availableChars += includeNumbers;
    if (characters.checked) availableChars += includeCharacters;

    for (let i = 0; i < passwordLength; i++) {
        let randomNum = Math.floor(Math.random() * availableChars.length);
        password += availableChars.charAt(randomNum);
    }

    pass.textContent = password;
}
