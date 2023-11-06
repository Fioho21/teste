let nome = "Diogo"
let op = 3

console.log("Qual o seu nome? ", nome)

for(contador = 0; contador < 2; contador++){

console.log("1 Se XP for menor do que 1.000 = Ferro")
console.log("2 Se XP for entre 1.001 e 2.000 = Bronze")
console.log("3 Se XP for entre 2.001 e 5.000 = Prata")
console.log("4 Se XP for entre 6.001 e 7.000 = Ouro")
console.log("5 Se XP for entre 7.001 e 8.000 = Platina")
console.log("6 Se XP for entre 8.001 e 9.000 = Ascendente")
console.log("7 Se XP for entre 9.001 e 10.000= Imortal")
console.log("8 Se XP for maior ou igual a 10.001 = Radiante")
console.log("Qual a sua situação?", op)


switch (op){
    case 1:
        console.log("O Herói de nome " + nome + " está no nível de ferro")
        break;
    case 2:
        console.log("O Herói de nome " + nome + " está no nível de bronze")
        break;
    case 3:
        console.log("O Herói de nome " + nome + " está no nível de prata")
        break;
    case 4:
        console.log("O Herói de nome " + nome + " está no nível de ouro")
        break;
    case 5:
        console.log("O Herói de nome " + nome + " está no nível de platina")
        break;
    case 6:
        console.log("O Herói de nome " + nome + " está no nível de ascendente")
        break;
    case 7:
        console.log("O Herói de nome " + nome + " está no nível de imortal")
        break;
    case 8:
        console.log("O Herói de nome " + nome + " está no nível de radiante")
        break;
contador++
}

}