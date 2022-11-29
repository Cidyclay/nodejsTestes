//Implementar um subprograma que 
//retorna a quantidade de elementos ímpares em um vetor
function teste(a){
    let cont =0
    for(let i=0;a.length>i;i++){
        if(a[i]%2!=0)
        cont++
    }
    console.log(cont) 
}
teste([1,3,5,2])
