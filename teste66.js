//Implementar um subprograma que dados um array bidimensional e 
//um número, subtrai o número de todos os elementos do array;

function teste(a,b){
    let resultado =0
    for(let i=0;i<a.length;i++){
        for(let z=0;z<a[i].length;z++){
            resultado=a[i][z]-b
        }
    }
    return resultado
}
(teste([[1,2,3],[1,2,3]],1))