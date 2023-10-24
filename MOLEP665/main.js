const password_e1= document.querySelector('#password');
const length_e1= document.querySelector('#length');
const uppercase_e1= document.querySelector('#uppercase');
const lowercase_e1= document.querySelector('#lowercase');
const symbols_e1= document.querySelector('#symbols');
const numbers_e1= document.querySelector('#numbers');
const generate_btn= document.querySelector("#generate");
generate_btn.addEventListener('click',GeneratePassword);
const copy_btn= document.querySelector("#copy",GeneratePassword);
copy_btn.addEventListener('click',CopyPassword);
const uppercase_chars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase_chars="abcdefghijklmopqrstuvwxyz";
const numbers_chars="0123456789";
const symbols_chars="!@#$%^&*()";
function GeneratePassword(){
    let password="";
    let length = length_e1.value;
    let chars="";
    chars+=uppercase_e1.checked ? uppercase_chars:"";
    chars+=lowercase_e1.checked ? lowercase_chars:"";
    chars+=symbols_e1.checked ? symbols_chars:"";
    chars+=numbers_e1.checked ? numbers_chars:"";

    for(let i=0;i<=length;i++){
        let rand=Math.floor(Math.random()*chars.length);
        password+=chars.substring(rand,rand+1);
    }
    password_e1.value=password;
}
async function CopyPassword(){
    if(navigator.clipboard){
        await navigator.clipboard.writeText(password_e1.value);
        alert("Password copied to clipboard")
    }
}