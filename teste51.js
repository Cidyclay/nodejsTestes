//Implementar um subprograma que dado um vetor e um número,
//divide todos os elementos do vetor pelo número
function teste(a,b){
    let div = 0
    for(let i=0;a.length>i;i++){
        div = a[i]/b
        console.log(div)
        console.log(a)
    }
}
teste([12,4,2],2)