document.getElementById('btnAgu').addEventListener('click',()=>{
    const cod = 1212
    if(document.getElementById('senha').value==cod){
        document.getElementById('cx_verso').classList.add('destaque')
        document.getElementById('login').classList.add('semdestaque')
    } else if(document.getElementById('senha').value == ''){
        alert('Prencha os dados solicitados')
    } else(alert('Senha incorreta'))
})