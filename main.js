// const btn = document.getElementById("btn")

// const result = document.querySelector(".result")

// let num = 0

// btn.addEventListener("click", function(){
//     result.innerHTML = num++
// })



//______________________________




// function doMath(action) {
//     const firstNum = document.getElementById("num1").value;
//     const secondNum = document.getElementById("num2").value;
//     let answer = 0;
//     if (action == 'plus') {
//         answer = Number(firstNum) + Number(secondNum);
//     } else if (action == 'minus') {
//         answer = firstNum - secondNum;
//     } else if (action == 'multiply') {
//         answer = firstNum * secondNum;
//     } else if (action == 'divide') {
//         if (secondNum == 0) {
//             answer = "Ошибка: деление на 0";
//         } else {
//             answer = firstNum / secondNum;
//         }
//     }

//     document.getElementById("result").innerHTML = answer;
// }






//____________________________________




// const btn = document.getElementById("btn")
// const input = document.getElementById("id")

// btn.addEventListener("click", () => {
//     if(input.value!== ""){
//         console.log('good');
//     }
//     else{
//         console.log('bad')
//     }
// })


//______________________________


// const btn = document.getElementById("btn")
// const inputField = document.getElementById("inputField")

// btn.onclick = function () {
//     inputField.value = "Привет, мир!";
// }





//_____________________________________


const par = document.getElementById("par")
const btn = document.getElementById("btn")

btn.onclick = function() {
    par.style.fontWeight = "bold";
    par.style.fontSize = "100px"
}