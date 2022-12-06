import { Result } from "postcss"

const cadena='cusihuaman ayma'
// descomponer cada palabra
let separar=cadena.split(' ')
console.log(separar)
// sacar la primera palabra
let index=separar[0].charAt(0).toUpperCase()
console.log(index)
let index2=separar[1].charAt(0).toUpperCase()
console.log(index2)
// unir las primeras palabras 
let unir=[...index,...index2]
console.log(unir)
// y separar con un punto
let punto=unir.join('.')
console.log(punto)


const names='cusihuaman ayma'
function string(names){
return names.split(' ').map(index=>index[0].toUpperCase()).join('.')
}
console.log(string(names))

const x='45385593107843568'
function replace(x){
 const arr= x.split('').map(e=>{
  if(e>=5){
    return 1
  }
  else{
    return 0
  }
 })
 return arr.join('');
//  return result;
  
}
// console.log(replace(x))
// 01011110001100111
const input= [1,0,0,0,0,0,1,2,-4,-5]
// devolver [10, -65].
function countPositivesSumNegatives(input) {
  let sumaNegativos=0
  let contar=0
  for (let i = 0; i < input.length; i++) {
    const numero = input[i];
      if(numero<0){
        sumaNegativos+=numero;
      }
      else if(numero!==0){
        contar++;
      }
    }
    // console.log(contar)
  return [contar,sumaNegativos];
}
console.log(countPositivesSumNegatives(input))
Math.max(input)

function findLetter(str){
  let maxlength=0;
  let arr=str.split(' ')
  for (let i = 0; i < arr.length; i++) {
    if(arr[i].length>maxlength){
      maxlength=arr[i].length;
    }
  }
  return maxlength;
}

console.log(findLetter("The quick brown fox jumped over the lazy dog"))

function largestOfFour(arr) {
  let result=[];
  for (let i = 0; i < arr.length; i++) {
    let mayor=Math.max(...arr[i])
    result.push(mayor)
  }
  return result;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]))
