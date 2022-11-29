//Implementar um subprograma que dado um vetor, 
//computa a média dos seus elementos e retorna quantos elementos acima da média ele possui

function teste(a){
    let cal =0
    for(let i =0;a.length>i;i++){
        cal = a[i]+cal
    }
    let media = cal/ a.length
    console.log("A média e igual a = "+media)
        for(let i=0;a.length>i;i++){
            if(a[i]>=media){
                console.log(a[i])
            }
        }
}
teste([78,26,34,50])