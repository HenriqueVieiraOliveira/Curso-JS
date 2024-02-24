function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.lenght == 0 || Number(fano.value) > ano)
    {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else
    {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked)
        {
            genero = 'Homem'
            if(idade >= 0 && idade < 10)
            {
                img.setAttribute('src', 'foto-bebe-m.jpg')
            }
            else if(idade < 23)
            {
                img.setAttribute('src', 'foto-jovem-m.jpg')
            }
            else if(idade < 50)
            {
                img.setAttribute('src', 'foto-adulto.jpg')
            }
            else
            {
                img.setAttribute('src', 'foto-velho.jpg')
            }
        }
        else
        {
            genero = 'Mulher'
            if(idade >= 0 && idade < 10)
            {
                img.setAttribute('src', 'foto-bebe-f.jpg')

            }
            else if(idade < 23)
            {
                img.setAttribute('src', 'foto-jovem-f.jpg')

            }
            else if(idade < 50)
            {
                img.setAttribute('src', 'foto-adulta.jpg')
            }
            else
            {
                img.setAttribute('src', 'foto-velha.jpg')
            }
        }
        //res.style.textAlign = 'center' centralizar em JVSC
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}