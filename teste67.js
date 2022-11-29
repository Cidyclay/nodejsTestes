//Implementar um subprograma que dado um array bidimensional e 
//um número, divide todos os elementos do array pelo número;

function teste(a,b){
    let cal = 0
    for(let i =0;i<a.length;i++){
        for(let z=0;z<a[i].length;z++){
            cal = a[i][z]/b
        }
    }
 return cal
}
teste([[1,2,3,4],[1,2,3,4]],2)
