let result = document.getElementById('result');
let nums_box = document.querySelector('.nums_box');
let num = '';
let num2 = '';
let lengs
let operation = '';
// let oper_prev = '';

nums_box.addEventListener('click', calc);
function calc (event) {
    if (event.target.classList == 'btn num') {
        if (result.value > 0 || event.target.innerText != 0) {
            num = num + event.target.innerText;
            result.value = num;
        }
    } else if (event.target.classList == 'btn delete') {
        num = '';
        num2 = '';
        result.value = 0;
    } else if (event.target.classList == 'btn del') {
        if (result.value.length <=1) {
            num = '';
            num2 = '';
            result.value = 0;
        } else {
            result.value = result.value.substr(0,(result.value.length -1));
            num = result.value;
        }
    } else if (event.target.id == 'point') {
        result.value += '.';
        num += '.';
    } else if (event.target.id == 'plus') {
        ravno();
        operation = 'plus';
        ravno();
    } else if (event.target.id == 'minus') {
        ravno();
        operation = 'minus';
        ravno();
    } else if (event.target.id == 'umoj') {
        ravno();
        operation = 'umoj';
        ravno();
    } else if (event.target.id == 'delit') {
        ravno();
        operation = 'delit';
        ravno();
    } else if (event.target.id == 'ravno') {
        ravno();
    } else if (event.target.id == 'stepen') {
        ravno();
        operation = 'stepen';
        ravno();
    } else if (event.target.id == 'koren') {
        if (num2 < 0) {
            result.value = 'Error';
            console.log('err')
        } else if (num2 != '') {
            ravno();
            console.log(num2)
            num2 = Math.sqrt(num2);
            num = '';
            result.value = num2;
        } else if (num != '') {
            console.log(num)
            num2 = Math.sqrt(num);
            num = '';
            result.value = num2;
        }
    }
}

function ravno () {
    if (operation == 'plus') {
        num2 = Number(num) + Number(num2);
        num = '';
        result.value = num2;
    } else if (operation == 'minus') {
        if (num2 == '') {
            num2 = num;
            num = '';
            result.value = num2;
        } else {
            num2 = Number(num2) - Number(num);
            num = '';
            result.value = num2;
        }

    } else if (operation == 'umoj') {
        if (num2 == '') {
            num2 = num;
            num = '';
            result.value = num2;
        } else if (num != '') {
            num2 = Number(num2) * Number(num);
            num = '';
            result.value = num2;
            operation = '';
        }
    } else if (operation == 'delit') {
        if (num2 == '') {
            num2 = num;
            num = '';
            result.value = num2;
        } else if (num != '') {
            num2 = Number(num2) / Number(num);
            num = '';
            result.value = num2;
            operation = '';
        }
    } else if (operation == 'stepen') {
        if (num2 == '') {
            num2 = num;
            num = '';
            result.value = num2;
        } else if (num != '') {
            num2 = Math.pow(Number(num2), Number(num));
            num = '';
            result.value = num2;
            operation = '';
        }
    }
}
