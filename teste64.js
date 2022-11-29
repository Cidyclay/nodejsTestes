//Implementar um subprograma que retorna
//a quantidade de elementos ímpares em um array de duas dimensões;
function teste(a){
    let cont = 0
    for(let i=0;i<a.length;i++){
        for(let z=0;z<a[i].length;z++){
            if(a[i][z]%2!=0)
            cont++
        }
    }
    return cont
}
console.log(teste([[1,2,3,4],[5,7,9]]))