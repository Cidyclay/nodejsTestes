//Caso uma seja impar
//ipp
//pip
//ppi

//Caso dois sejam impars
// iip ja foi
// ipi ja foi
// pii

a= 2
b= 1
c= 1
if ( a%2==1 && b%2==0 && c%2==0){
    console.log(a+" : Somente este número e impar")
} else if(a%2==1 && b%2==1 && c%2==0){
    console.log(a,b+ " : Este dois números são impares")
}
if ( a%2==0 && b%2==1 && c%2==0){
    console.log(b+" : Somente este número e impar")
} else if(a%2==1 && b%2==0 && c%2==1){
    console.log(a,c+ " : Este dois números são impares")
}
if ( a%2==0 && b%2==0 && c%2==1){
    console.log(c+" : Somente este número e impar")
}else if(a%2==0 && b%2==1 && c%2==1){
    console.log(b,c + " : Este dois números são impares")
}
if ( a%2==1 && b%2==1 && c%2==1){
    console.log("Todos são impars")
}
if ( a%2==0 && b%2==0 && c%2==0){
    console.log("Todos são pares")
}