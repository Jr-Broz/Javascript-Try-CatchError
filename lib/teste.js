function calculaIdade(){ 

let idade = prompt("Quantos anos você tem");

if(idade < 18){

  throw Error("Menor de idade.");
}
else{
      document.write("Você é maior de idade, pode seguir.");
}
  }
