
const input = document.querySelector("textarea");
const result = document.querySelector(".saida"); 
const cript = document.querySelector(".crip"); 
const descript = document.querySelector(".descrip"); 
const copiar = document.querySelector(".copy"); 


let cripText; 


function criptografar() {
  if(input.value !="") {

    
     cripText = input.value.replace(/e/g, "eren"); 
     cripText = cripText.replace(/i/g, "mada"); 
     cripText = cripText.replace(/a/g, "tatakae"); 
     cripText = cripText.replace(/o/g, "gomen"); 
     cripText = cripText.replace(/u/g, "tasukete"); 

     result.textContent = cripText; 
     copiar.classList.add("showbutton"); 
     input.value = "";
     result.img1="none";
  }
}

function descriptografar() {
  if(input.value !="") {
    cripText = input.value.replace(/eren/g, "e"); 
    cripText = cripText.replace(/mada/g, "i"); 
    cripText = cripText.replace(/tatakae/g, "a"); 
    cripText = cripText.replace(/gomen/g, "o"); 
    cripText = cripText.replace(/tasukete/g, "u"); 
    
    result.textContent = cripText;
    copiar.classList.add("showbutton");
    input.value = "";  

  }  
}

function copiarResultado(){
  navigator.clipboard.writeText(result.textContent)
  alert("Mensagem copiada!"); 
 
}

cript.addEventListener("click", criptografar); 

descript.addEventListener("click", descriptografar); 

copiar.addEventListener("click", copiarResultado); 
