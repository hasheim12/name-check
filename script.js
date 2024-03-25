//select relevent DOM elements
const button = document.querySelector("btn");
const inputText = document.querySelector("#input-text");
const result = document.querySelector("#result");

//Add Event Listener to the button 
button.addEventListener("click", () => {
  //Get the input text value and trim any whitespaces
  const text = inputText.value.trim();

  //Check if the input is empty
  if (text.length == 0) {
    //Show an alert if the input is empty
    alert("input cannot be empty");
    return; //Exit the function if the input is empty
  }

  //Remove any non-alahanumeric characters and convert to lowercase
  const cleanText = text.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

 //Check if the cleaned text is a palindrome by comparing the original and the reversed strings
  const isPalindrome = cleanText === cleanText.split
   ("").reverse("").join("");

   //Create a message based on whether the input is a palindrome or not
   const message= isPalindrome
    ? `<span>yes.</span>it's a palindrome!`
    : `<span>Nope.</span>Not a palindrome!`;
   
   //Unpdate the result element with the message
   result.innerHtml = message;
   result.classList.remove("error", "success");
   setTimeout(() => {
    result.classList.add(isPalindrome ? "success" :
    "error");
   }, 10);
});

function alert(){
  var result = confirm (' name must be less than 20 characters');
  if (result == false) {
    event.preventDefault();
  }
}