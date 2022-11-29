//Implementar um subprograma que computa e retorna 
//o valor da multiplicação de dois vetores (pesquise a fórmula da multiplicação de vetores)
function teste(a,b){
    let media = 1
    let media2 = 1
        for(let i=0;a.length>i;i++){
            media = a[i]*media
        }
        for(let i=0;b.length>i;i++){
            media2 = b[i]*media2
        }
        let mediafinal = media*media2
        console.log(mediafinal)
}
teste([1,2,4],[1,2,4])
