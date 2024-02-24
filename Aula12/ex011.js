var agora = new Date()
var hora = agora.getHours()

console.log(`Agora são exatamente ${hora} horas`)
if(hora < 12)
{
    console.log('Bom dia!')
}
else if(hora <= 18)
{
    console.log('Boa tarde!')
}
else
{
    console.log('Boa noite!')
}
//getDay são os dias da semana
/*
para o javascript os dias da semana são assim:
    0 = domingo
    1 = segunda
    2 = terça
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sabado
*/