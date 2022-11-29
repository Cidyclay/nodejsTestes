/*Implementar um subprograma que 
dados um vetor e um número, 
multiplica cada elemento do 
vetor pelo número recebido como parâmetro*/

function teste(a,b){
    let mult = b
    for(let i=0;i<a.length;i++){
        mult = mult*a[i]
        console.log(mult)
    }

}
teste([1,2,3],4)

