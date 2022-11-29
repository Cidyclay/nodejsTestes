//Implementar um subprograma que dado um vetor, 
//retorna true se a soma dos seus elementos for positiva ou false, caso contrário
function teste(a){
    let cal = 0
    for(let i=0;a.length>i;i++){
        cal = a[i]+cal
    }
    if(cal>=0){
        return console.log(true)
    }
    else {
        return console.log(false)
    }
}
teste([1,2,3,-7])