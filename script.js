let sliderelement = document.querySelector("#slider")
let buttonelement = document.querySelector("#button")
let sizepassword = document.querySelector("#valor")
let password = document.querySelector("#password")
let containerpassword = document.querySelector("#container-password")
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
let novasenha = "";

sizepassword.innerHTML = sliderelement.value;

slider.oninput = function(){
    sizepassword.innerHTML = this.value;
}

function gereratepassword(){
    let pass = "";
    for(let i = 0, n = charset.length; i < sliderelement.value; ++i){
    pass += charset.charAt(Math.floor(Math.random() * n)) 
    }

    containerpassword.classList.remove("hide");
    password.innerHTML = pass;
    novasenha = pass;
}

function copypassword(){
    alert("copiado!")
    navigator.clipboard.writeText(novasenha);
}

