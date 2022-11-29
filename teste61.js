//Implementar um subprograma que dados dois vetores, 
//retorna true caso todos os elementos de ambos sejam iguais, ou false, caso contrário
function teste (a,b){
    let k = a.length-1
    for(let i=0;a.length>i;i++){
       if(a[i]==b[i] && k==i){
        console.log(true)
       } 
    }
}
teste([12,13,15],[12,13,14])