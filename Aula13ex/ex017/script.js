function tabuada()
{
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')
    
    if(num.value.length == 0)
    {
        alert('Por favor, digite um número!')
    }
    else
    {
        var n = Number(num.value)
        tab.innerHTML = ''
    }
    
    for(var i = 1; i <= 10; i++)
    {
        var item = document.createElement('option')
        item.text = `${n} X ${i} = ${n * i}`
        item.value = `tab${i}`
        tab.appendChild(item)
    }

}