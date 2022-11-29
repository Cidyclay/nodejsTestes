/*
(1.0) Implemente um programa capaz de computar a força gravitacional entre dois corpos de acordo com a seguinte fórmula:
F = G*(M1*M2)/(D*D)
Sendo G = (6.67/)(10**11);
*/
let g = 6.67/(10**11)
function ComputarForça(m1,m2,d){
        f = g*(m1*m2)/(d*d)
        return console.log(f)
}
ComputarForça(14,12,15)

//(1.5) Transforme sua resposta da primeira questão em um subprograma capaz de computar e retornar
// o valor da força gravitacional entre dois corpos, dados: M1, M2 e d como parâmetros.



