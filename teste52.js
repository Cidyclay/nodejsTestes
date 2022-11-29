//Implementar um subprograma que dados dois vetores, 
//retorna qual deles possui a maior soma de seus elementos
function teste(a,b){
    let valor1 = 0
    let valor2 =0
    for(let i=0;a.length>i;i++){
        valor1 = a[i]+valor1   
    }
    for(let i=0;b.length>i;i++){
        valor2 = b[i]+valor2
    } 
    if(valor1>valor2){
        console.log(valor1)
    } else if (valor1<valor2){
        console.log(valor2)
    }else{
        console.log("Os dois são iguais")
    }
}
teste([1,2,4],[1,2,4])