//Implementar um subprograma que dado um array bidimensional 
//e um número, multiplica cada elemento do array pelo número;
function teste(a,j){
    let resultado = 0
    for(let i=0;i<a.length;i++){
        for(let z=0;z<a[i].length;z++){
              resultado = resultado + (a[i][z]*j)
        } 
    }
    return resultado 
}
let b =[[1,1,1,1],[1,1,1,1]]
console.log(teste(b,2))
