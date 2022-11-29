//Implementar um subprograma que dado um vetor de booleans,
//retorna true se ao menos um dos elementos 
//do vetor for verdadeiro ou false, caso contrário
function teste(a){
    for(let i=0;a.length>i;i++){
        if(a[i]==true || a[i]==false)
        return console.log(true)
    }
}

teste([false,true,false])
