function inteiro(n)
{
    if(n > 0)
    {
        return 'positivo'
    }
    else if(n < 0)
    {
        return 'negativo'
    }
    else
    {
        return 'nulo'
    }
}

var res = inteiro(0)//Ou console.log(inteiro(0))

console.log(`${res}`)

function somar(n1=0, n2=0)
{
    return n1 + n2
}

console.log(somar(7, 3))

var v = function(x)
{
    return x*2
}

console.log(v(5))

function fatorial(p)
{
    var fat = 1
    for(var i = p; i > 1; i--)
    {
        fat *= i
    }
    return fat
}

console.log(fatorial(5))