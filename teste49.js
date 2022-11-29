//Implementar um subprograma que 
//retorna a quantidade de elementos pares em um vetor
function teste(a){
    let cont =0
    for(let i=0;a.length>i;i++){
        if(a[i]%2==0){
            cont++
        }
    }
    console.log(cont)
}
teste([1,2,3,4,5,6,7])
