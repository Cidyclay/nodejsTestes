//Receber dois parâmetros e retornar true se o primeiro ou o segundo forem negativos, e false, caso contrário;
function teste(a,b){
    if(a<0||b<0){
        return true
    }
    else 
        return false
}
resultado = teste(15,-1)
console.log(resultado)