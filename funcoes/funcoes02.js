function logar (usuario, senha){
    alert('Logado com função nomeada!')
    alert('Olá', + usuario)
}

logar("ketlen123",12345)


// FUNCOES ANONIMAS 
const conectar = function (usuario, senha){
    alert('logdo com a funcao nomeada!')
    alert('Olá', + usuario )
}
conectar("paulo",1213)

//ARROW FUNCTION OU FUNCOES DE FLECHA 
const colorir = () => {
    alert("Função flecha em ação!")
} 
colorir() // execução da Arrow