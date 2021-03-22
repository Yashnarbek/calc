let heading = document.querySelector('h1')
let p = document.querySelector('#operator')
let n1 = document.querySelector('#number1')
let n2 = document.querySelector('#number2')
let eq = document.querySelector('#equal')

eq.addEventListener('click', function calc (num1, num2, opr){
    if(opr == '+'){
        return Number(num1.value) + Number(num2.value)
    } else if(opr == '-'){
        return Number(num1.value) - Number(num2.value)
    } else if(opr == '*'){
        return Number(num1.value) * Number(num2.value)
    } else if(opr == '/'){
        return Number(num1.value) / Number(num2.value)
    }
    let result = calc(n1, n2, operator.value)
console.log(calc(n1, n2, operator.value))
heading.textContent = result
})





