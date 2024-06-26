{
// 1-masala

 let son = [-5, 3, 5, -2]
 let array = []
 son.forEach(n => {
     array.push(n > 0)
 });

 console.log(array);
}

{
// 2-masala

 const str = (text) => {
     return text.split("").reverse().join("")
 }
 console.log( str("salom"));
}

{
// 3-masala

 const num = (son) => {
     return son.split("").reverse().join("")
 }
 console.log( num('123'));
}

{
// 4-masala

  let son = [false, true, false]
  let array = []
 
  son.forEach(n => { 
       array.push(n === false)
  });
 
  console.log(array);
}


{
//  5-masala

  let son = [1, 2, 3, 4, 5]
  let total = 0
  son.forEach(n => {
      if(n % 2 === 0){
         total += n
     }
  });
 
 console.log( total)
}

{
// 6-masala

 let num = [5,2,3]
 let array = []
 
 num.forEach(n => {
     array.push(n * n)
 });
 
 console.log(array);
}

{
// 7-masala

 let n = parseInt(prompt('son kiriting'))
 let array = []

 for(let i = 1; i <= n; i++){
     array.push(i)
 }
 console.log(array);
}

{
//  8-masala

 let a = 2
 let b = 9
 let array = []
 
 for(let i = a; i < b; i++){
     array.push(i / 2 === 0)
 }
 
 console.log(array)
}

{
// 9-masala

 let str = 'laylo'
 function str(laylo){
     return str [0] === 'l' ? str : `"L" + ${str}`
 }
 console.log(str (laylo))
}

{
// 10-masala

 function text(word,n){
     let total = ''
     for(let i = 0; i < n; i++){
         total += word
 }
 return total
 }
 console.log(total);
}

{
// 11-masala

 let num = [1,2,3]
 num.reverse()
 console.log(num)
}

{
// 12-masala

let son = [2,1,13,4]
son.sort((a,b) => a-b)
console.log(son);
}