const acceptbtn = document.getElementById('accept');
const resetbtn = document.getElementById('reset');
const box = document.getElementById('box')


acceptbtn.addEventListener('click' , handlerButton);
resetbtn.addEventListener('click' , handlerReset);

function handlerButton(){
    const correctValue = parseInt(document.getElementById('correct').value);
    const falseValue = parseInt(document.getElementById('false').value);
    const totalValue = correctValue + falseValue;
    const percent = (correctValue / totalValue) * 100;
    const inputs = document.querySelectorAll('input[type=text]')
    document.getElementById('awnser').innerHTML = `درصد پاسخ های درست  ${percent.toFixed(2)}%`;
    box.style.opacity = 1;
    for(let i = 0 ; i < inputs.length ; i++){
        if(inputs[i].value === ''){
            document.getElementById('awnser').innerHTML = `مقادیر را به طور کامل پر کنید`
            box.style.opacity = 1;
            return false;
        }
    }
    if((correctValue + falseValue) < totalValue){
        document.getElementById('awnser').innerHTML = `مقادیر با هم  همخوانی ندارند!`
    }
}

function handlerReset(){
    document.getElementById('correct').value = '';
    document.getElementById('false').value = '';
    document.getElementById('total').value = '';
    box.style.opacity = 0;
}

