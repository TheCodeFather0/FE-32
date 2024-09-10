// assignment

// let a = 5
// let b = 6
// let x = -b
// // unary,binary
// console.log(a * b);


/*
    riyazi
    + , - , * , / , %, **

    comparison
    > < >= <= == ===

*/
// const a = (2 + 5) * 6
// const a = 'a'
// const b = 'A';
// console.log(a > b);


// alert(5 > 4); // 
// alert("apple" > "pineapple"); 
// alert("2" > "12"); // ?
// alert(undefined == null);
// alert(undefined === null); // ?
// alert(null == " 0 "); // ?
// alert("null" > "undefined"); 



// frontend
// 18+
// ali tehsil
// vakansiya var

// const yas = prompt('yasinizi daxil edin');
// 

// if(yas > 18) {
//     const ixtisas = prompt('hansi ixtisas');
//     if(ixtisas === 'frontend') {
//         const aliTehsil = confirm('oxumusan?')
//         if(aliTehsil) {
//             console.log('ise alindiniz');
//         }else {
//             console.log('ali tehsilsiz olmaz');
//         }
//     }
//     else {
//         console.log('bizde bu vakansiya movcud deyil');
//     }
// }
// else {
//     console.log('yasiniz catmir!');
// }


const pin = 1234
const balans = 1200

const user_pinkod = +prompt('pinkodu yazin');
if(user_pinkod === pin){
    const mebleg = prompt('meblegi yaz');
    if(mebleg > balans) {
        console.log('ay kasib🚬');
    }else {
        console.log('gotur ged');
        console.log('balansiniz: ',balans - mebleg);
    }
}
else {
    console.log('pinkod duzgun deyil');
}