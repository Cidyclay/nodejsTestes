//Implementar um subprograma que dado um vetor de booleans, 
//retorna true se todos os elementos do vetor forem verdadeiros ou false, caso contrário

function teste(a){
    let k = a.length
    for(let i=0;a.length>i;i++){
       if(a[i]==true&&k==a.length){
            console.log(true)
       }
       if(a[i]==false&&k==a.length){
        console.log(true)
      }   
    }
}
teste([false,false,false])
