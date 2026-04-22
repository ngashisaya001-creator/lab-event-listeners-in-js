// Step 1: Handle Button Clicks

// changeBackgroundColor — generates a random rgb color and sets it on body
function changeBackgroundColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

// resetBackgroundColor — clears the background color (sets to empty string)
function resetBackgroundColor() {
    document.body.style.backgroundColor = '';
}

// Step 2: Capture Keyboard Input
// displayKeyPress — updates keyPressDisplay with the key pressed
function displayKeyPress(event) {
    const keyPressDisplay = document.getElementById('keyPressDisplay');
    if (keyPressDisplay) {
        keyPressDisplay.textContent = `Key pressed: ${event.key}`;
    }
}

// Step 3: Process Text Input
// displayUserInput — reads from 'userInput' and updates 'textInputDisplay'
function displayUserInput() {
    // Test uses id 'userInput' for the text field
    const textInput = document.getElementById('userInput');
    const textInputDisplay = document.getElementById('textInputDisplay');
    if (textInput && textInputDisplay) {
        textInputDisplay.textContent = `You typed: ${textInput.value}`;
    }
}

// Step 4: setupEventListeners — attaches all events to DOM elements
function setupEventListeners() {

    // Test clicks element with id 'changeColorButton'
    const changeColorButton = document.getElementById('changeColorButton');
    if (changeColorButton) {
        changeColorButton.addEventListener('click', changeBackgroundColor);
    }

    // Test dispatches 'dblclick' on element with id 'resetColorButton'
    const resetColorButton = document.getElementById('resetColorButton');
    if (resetColorButton) {
        resetColorButton.addEventListener('dblclick', resetBackgroundColor);
    }

    // Keydown on document updates keyPressDisplay
    document.addEventListener('keydown', displayKeyPress);

    // Input event on 'userInput' updates textInputDisplay
    const textInput = document.getElementById('userInput');
    if (textInput) {
        textInput.addEventListener('input', displayUserInput);
    }
}

// Initialize when DOM is ready
if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', setupEventListeners);
}

// Export all functions for Jest tests
module.exports = {
    changeBackgroundColor,
    resetBackgroundColor,
    displayKeyPress,
    displayUserInput,
    setupEventListeners,
};
module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}