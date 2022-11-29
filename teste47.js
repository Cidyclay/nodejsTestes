//Implementar um subprograma que dados dois vetores, 
//copia o conteúdo do primeiro para o segundo vetor (elemento por elemento)
function teste(a){
    let b=[]
    for(let i=0;a.length>i;i++){
      (b[i]=a[i])
    }
    return console.log(b)

}
teste([1,2,3])
