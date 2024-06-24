

const rel = setInterval(function time(){
    let today   = new Date()
    let relogio = document.querySelector('.relogio') 
    let data    = document.querySelector('.data')
    let day     = new Date().getDate()
    let month   = new Date().getMonth()+1
    const year  = new Date().getFullYear()
    
    let hours   = new Date().getHours()
    let minuto  = new Date().getMinutes()
    let segundo = new Date().getSeconds()

    if(day < 10){
        day = '0' + day
    }
    if(month < 10){
        month = '0' + month
    }
    if(hours < 10){
        hours = '0' + hours
    }
    if(minuto < 10){
        minuto = '0' + minuto
    }
    if(segundo < 10){
        segundo = '0' + segundo
    }

    let data_completa = `Data Atual do Sistema: ${day}/${month}/${year}`
    let hora_completa = `${hours}:${minuto}:${segundo}`
    data.innerHTML = data_completa
    relogio.innerHTML = hora_completa    
})










