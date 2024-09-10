/*

*/

// function SayHello(soyad, yas,ad) {
//   const msg = `Salam.Men ${ad} ${soyad}. Menim ${yas} yasim var.`;
//   console.log(msg);
// }

// SayHello("Ramin", "Mammadzada", 56);
// SayHello("Eldar", "Mammadzada", 12);
// SayHello("Vaqif", "Mammadzada", 54);
// SayHello("Ruslan", "Mammadzada", 102);

// function calculate(n1, o, n2) {
//   let cavab = "";
//   if (o === "+") {
//     cavab = `${n1} + ${n2} = ${n1 + n2}`;
//   } else if (o === "-") {
//     cavab = `${n1} - ${n2} = ${n1 - n2}`;
//   } else if (o === "*") {
//     cavab = `${n1} * ${n2} = ${n1 * n2}`;
//   } else if (o === "/") {
//     cavab = `${n1} / ${n2} = ${n1 / n2}`;
//   }

//   return cavab
// }

// console.log(calculate(152,'-',2451));
// void
// calculate(2,'+',2)

// function getFactorial(n = 0) {
//   let hasil = 1;
//   let msj = "";
//   if (n === 0) {
//     msj = `${n} ucunf faktorial: ${hasil}`;
//   } else {
//     for (let i = 1; i <= n; i++) {
//       hasil *= i;
//     }
//     msj = `${n} ucunf faktorial: ${hasil}`;
//   }

//   return msj
// }

// const result = getFactorial()
// console.log(result);

// function calcAge(year){
//     const current = 2024;
//     return current - year
// }
// console.log(calcAge(1880));

// turnan sefer var.Ve min yas 18

// function checkAge(age) {
//   let msj = "";
//   if (age < 18) {
//     msj = "yasin catmir";
//   } else {
//     msj = "xos geldin";
//   }
//   return msj;
// }
// const result = checkAge(19)
// console.log(result);
// document.write(result);
// alert(result)

/*
    function declaration
    function expression
    arrow function


*/
// const SayHello = (soyad, yas,ad) => {
//   const msg = `Salam.Men ${ad} ${soyad}. Menim ${yas} yasim var.`;
//   console.log(msg);
// }

// SayHello("Ramin", "Mammadzada", 56);

// hoisting

// const checkAge = (age, success, error) => {
//   if (age < 19) {
//     error();
//   } else {
//     success();
//   }
// };

// const successFunc = function () {
//   console.log("qocalarin arasina xos geldiniz!");
// };

// const errorFunc = function () {
//   console.log("siz hele gencsiniz!");
// };

// checkAge(20, successFunc, errorFunc);


const checkExam = (point,kecdi,kesildi) => point < 70 ? kecdi() : kesildi()

const success = () => console.log('imtahandan kecdin!');
const error = () => console.log('imtahandan kesildin!');

checkExam(65,success,error)

// const a = function(){}
// const a = () => {}