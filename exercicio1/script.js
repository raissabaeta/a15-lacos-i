let desejaComer = prompt("Deseja comer mais coxinhas? \n S: Sim \n N: Não").toUpperCase();
let conta = 0


while (desejaComer === "S") {
    conta = conta + 2.50
    desejaComer = prompt("Deseja comer mais coxinhas? \n S: Sim \n N: Não").toUpperCase();
}

console.log(conta);

