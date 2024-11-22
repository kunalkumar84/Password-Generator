let inputslider = document.getElementById("inputslider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let Upercase = document.getElementById("Upercase");
let Number = document.getElementById("Number");
let Symbols = document.getElementById("Symbols");
let genBtn = document.getElementById("genBtn");
let copy = document.getElementById("copy");

sliderValue.textContent = inputslider.value;

inputslider.addEventListener("input", () => {
    sliderValue.textContent = inputslider.value;

});



genBtn.addEventListener('click', () => {
    passBox.value = GeneratePassword();
});




let lowerchars = 'abcdefghijklnmopqurstuvwxyz';
let Uperchars = 'ABCDEFGHIJKLNMOPQURSTUVWXYZ';
let allNumber = '0123456789';
let allSymbols = '!@#$%^&*~';



// function to generate password

function GeneratePassword() {
    let GenPassword = "";
    let allchars = "";


    allchars += lowercase.checked ? lowerchars : "";
    allchars += Upercase.checked ? Uperchars : "";
    allchars += Number.checked ? allNumber : "";
    allchars += Symbols.checked ? allSymbols : "";

    if (allchars == "" || allchars.length == 0) {
        return GenPassword
    }



    let i = 1;
    while (i <= inputslider.value) {
        GenPassword += allchars.charAt(Math.floor(Math.random() * allchars.length));
        i++;

    }
    return GenPassword;



}

copy.addEventListener("click", () => {
    if (passBox.value != "" || passBox.value.length >= 1) {
        navigator.clipboard.writeText(passBox.value);

        copy.title = "Password Copied";


    };
});