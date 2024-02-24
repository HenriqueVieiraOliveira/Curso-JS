function contar()
{
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.querySelector('div#res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0)
    {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else
    {
        res.innerHTML = 'Contando: </br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0)
        {
            alert('Passo inválido! Considerando passo 1.')
            p = 1
        }

        if(i < f)
        {
          for(var c = i; c <= f; c += p)
          {
            if(c != f)
            {
                res.innerHTML += ` ${c} \u{1F914}`
            }
            else
            {
                res.innerHTML += ` ${c} \u{1F60E}`
            }
          }
        } 
        else
        {
            for(var c = i; c >= f; c -= p)
          {
            if(c != f)
            {
                res.innerHTML += ` ${c} \u{1F914}`
            }
            else
            {
                res.innerHTML += ` ${c} \u{1F60E}`
            }
          }
        }    
    }  
}

