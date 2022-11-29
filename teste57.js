/*Implementar um subprograma que dados três vetores, 
guarda no terceiro a soma dos índices equivalentes no dois primeiros
Exemplo: c[0] = a[0] + b[0] // e assim por diante*/
function teste(a,b){
    let c =[]
    for(i=0;a.length>i;i++){
        c[i]= a[i]+b[i]
        console.log(c[i])
    }
}teste([1,2,3],[1,2,3])
    

