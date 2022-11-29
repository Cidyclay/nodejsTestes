//Implementar um subprograma que dado um array bidimensional 
//retorna true se a soma dos seus elementos for positiva ou false, caso contrário;
function teste(a){
    let soma = 0
    for(let i=0;i<a.length;i++){
        for(let j=0;j<a[i].length;j++){
            soma = soma+a[i][j]
        }
    }
    return soma
} 
 console.log(teste([[1,1,1],[1,1,1]]))
