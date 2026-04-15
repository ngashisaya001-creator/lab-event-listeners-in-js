// Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {

  // Implement the function to change background color
  //multiple colors to cycle through
  document.body.style.backgroundColor = 'lightblue'
  document.body.style.backgroundColor = 'lightgreen'
  document.body.style.backgroundColor = 'lightcoral'
  //merge colors into random color generator
  const colors = ['lightblue', 'lightgreen', 'lightcoral', 'lightyellow', 'lightpink']
  const randomColor = colors[Math.floor(Math.random() * colors.length)]// Generate a random color from the array using Math.random() and Math.floor() 

  document.body.style.backgroundColor = randomColor
  console.log(`Background color changed to ${randomColor}`)
  
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {

  // Implement the function to reset background color
  document.body.style.backgroundColor = 'white'
  console.log('Background color reset to default')

}

// Capture Keyboard Input

// Function to display the key pressed by the user that updates a paragraph to display the key pressed by the user.
function displayKeyPress(event) {

  // Implement the function to display key pressed
  //Attach the function to a keydown event listener on the document.

  const keyPressed = event.key
  const displayElement = document.getElementById('keyPressDisplay')
  displayElement.textContent = `Key Pressed: ${keyPressed}`
  console.log(`Key pressed: ${keyPressed}`)
}

// Process Text Input

// Function to display user input in real-time
function displayUserInput() { 

  // Implement the function to display user input
  const textInput = document.getElementById('textInput')
  const displayElement = document.getElementById('userInputDisplay')
  displayElement.textContent = `User Input: ${textInput.value}`

}
console.log('Input event listener attached')

// Attach Event Listeners
function setupEventListeners() {
// Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)
  console.log('Change color button event listener attached')
  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type in the text input field
  document.getElementById('textInput').addEventListener('input', displayUserInput)

}

//combining mutiple event listeners into one function to keep code organized and maintainable. This function will be called when the DOM is fully loaded to ensure that all elements are available for attaching event listeners.
//Develop a function that integrates button clicks, key presses, and text input to create more dynamic interactions on the page.
//Apply event listeners to perform different tasks based on user interactions.
function setupEventListeners() {
  // Attach event listener to change background color when the button is clicked
  document
    .getElementById('changeColorButton')
    .addEventListener('click', changeBackgroundColor)
  console.log('Change color button event listener attached')
  // Attach event listener to reset background color when the body is double-clicked
  document
    .getElementById('resetColorButton')
    .addEventListener('dblclick', resetBackgroundColor)

  // Attach event listener to display key pressed when a key is pressed down
  document.addEventListener('keydown', displayKeyPress)

  // Attach event listener to display user input in real-time as they type in the text input field
  document.getElementById('textInput').addEventListener('input', displayUserInput)

    }
    

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}