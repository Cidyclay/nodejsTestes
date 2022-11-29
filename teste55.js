/*Implementar um subprograma que dados dois vetores, 
copia o conteúdo do primeiro no segundo vetor (elemento por elemento) na ordem inversa
Exemplo – Entrada: [1, 3, 5, -2], Saída: [-2, 5, 3, 1]*/
function  teste(a){
    let b = []
    for(let i=a.length-1;0<=i;i--){
       b[i] = a[i]
       console.log(b[i])  
    }
}
teste([1,2,3,4])
