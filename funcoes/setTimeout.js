// setTimeou(função,tempo ms)
setTimeout(function(){ 
    console.log("Tempo esgotado!")
},1000)

// setInerval (função, tempo ms)
let fps = Math.round( Math.random()* 30)
 const intervalo1 = setInterval (function (){ 
    console.clear() 
console.log("Fps:" + fps)
fps = fps + 1
},1000 )
setTimeout( function (){ 
    clearInterval ( intervalo1)
    console.log("Conexão encerrada!")
}, 5000)