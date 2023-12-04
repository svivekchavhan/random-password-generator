const passwordInput = document.querySelector(".password-box input"),
copyIcon = document.querySelector(".password-box .copy-icon"),
rangeInput = document.querySelector(".range-box input"),
sliderNumber = document.querySelector(".range-box .slider-number"),
generateButton = document.querySelector(".generate-button");


// console.log(passwordInput,copyIcon,rangeInput,sliderNumber,generateButton)
console.log(passwordInput)
console.log(rangeInput)
// Password Generate Function 
let allCharecters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()[]+-:;,.ABCDEFGHIJKLMNOPQRSTUVWXYZ";


const generatePassword=()=>{
    let newPassword = "";
    for(let i = 0; i<rangeInput.value;i++){
        let randomNumbers = Math.floor(Math.random() * allCharecters.length);
        newPassword += allCharecters[randomNumbers]
    }
    passwordInput.value = newPassword;
    copyIcon.classList.replace("fa-solid","fa-regular")   //replace icon
}


// Rnage Input Event arrow function
rangeInput.addEventListener("input",()=>{
    sliderNumber.textContent = rangeInput.value;
    generatePassword()
})


//copy passinput's value on copyInput click
copyIcon.addEventListener("click",()=>{
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.classList.replace("fa-regular","fa-solid")   //replace icon
})


generatePassword();
// button event arrow function
generateButton.addEventListener("click",generatePassword)
