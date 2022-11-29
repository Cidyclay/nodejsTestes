//Dados os catetos de um triângulo retângulo, calcular e imprimir o valor da sua hipotenusa;
function triângulo(a,b){
    let c = (a*a)+(b*b)
    return Math.sqrt(c)
}let resultado  = triângulo(10,10)
console.log(resultado)