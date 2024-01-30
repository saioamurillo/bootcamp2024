function checkLength(){
    let passInput = document.querySelector("#password")

if(passInput.value.length < 8){
    passInput.style.border = "2px solid red"
}
}