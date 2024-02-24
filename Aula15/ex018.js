var num = [5, 3, 4]
num[3] = 6 //adiciona o valor 6 a posição 3(0, 1, 2, 3)
num.push(7)//adiciona o valor 7 na primeira posição disponível, ou cria uma posição
num.length//tamanho do vetor
//num.sort()//coloca os elementos em ordem crescente

console.log(`O vetor tem ${num.length} posições.`)
console.log(`${num}`)

var pos = 0

for(var pos in num)//for in só funciona para vetores e objetos
{
    console.log(num[pos])
}

console.log(`${num.indexOf(3)}`)//procura um número no array