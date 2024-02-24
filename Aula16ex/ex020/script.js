var num = document.getElementById('txtn')
var seletor = document.getElementById('seln')
var res = document.getElementById('res')
var vetor = []

function isNumero(n)
{
    if(Number(n) >= 1 && Number(n) <= 100)
    {
        return true
    }
    else
    {
        return false
    }
}

function inLista(n, l)
{
    if(l.indexOf(Number(n)) != -1)
    {
        return true
    }
    else
    {
        return false
    }
}

function adicionar()
{
    if(isNumero(num.value) && !inLista(num.value, vetor))
    {
        vetor.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Número inserido: ${num.value}`
        seletor.appendChild(item)
        res.innerHTML = ''
    }
    else
    {
        alert('Válor inválido ou já presente na lista!')
    }   

    num.value = ''
    num.focus()
    }

function finalizar()
{
    var soma = 0
    var media = 0
    var maior = vetor[0]
    var menor = vetor[0]
    var seletor = document.getElementById('seln')
    var total = seletor.length

    if(vetor.length == 0)
    {
        alert('Digite algum número!')
    }
    else
    {
        for(var i in vetor)
        {
            soma += vetor[i]

            if(vetor[i] > maior)
            {
                maior = vetor[i]
            }
            if(vetor[i] < menor)
            {
                menor = vetor[i]
            }
        }

        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos ${seletor.length} números registrados\u{1F642}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}\u{1F643}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}\u{1F609}</p>`  
        res.innerHTML += `<p>O maior valor encontrado foi: ${maior}\u{1F60F}</p>`  
        res.innerHTML += `<p>O menor valor encontrado foi: ${menor}\u{1F612}</p>`  
    }
    
}

