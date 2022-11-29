//Implementar um subprograma que dado um vetor 
//e um número, subtraí o número de todos os elementos do vetor
function teste(a,b){
    let cal = 0
    for(let i =0;a.length>i;i++){
        cal = a[i]-b
        console.log(cal)
    }
}
teste([1,2,3,4],1)