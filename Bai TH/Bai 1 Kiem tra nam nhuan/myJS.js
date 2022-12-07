// Cách 1:
/* function checkYear() {
    let input = + document.getElementById('yearInput').value;
    if(input % 4 == 0) {
        if(input % 100 == 0) {
            if(input % 400 == 0) {
                document.getElementById('result').innerHTML = input + ' là năm nhuận'
            } else {
                document.getElementById('result').innerHTML = input + ' là năm không nhuận'
            }
        } else {
            document.getElementById('result').innerHTML = input + ' là năm nhuận'
        }
    } else {
        document.getElementById('result').innerHTML = input + ' là năm không nhuận'
    }
} */

// Clean Code:

function checkYear() {
    let input = + document.getElementById('yearInput').value;
    let isLeapYear = false;
    if(input % 4 == 0) {
        if(input % 100 == 0) {
            if(input % 400 == 0)
            {
                isLeapYear = true;
            }
        } else {
            isLeapYear = true;
        }
    }
    if (isLeapYear) {
        document.getElementById('result').innerHTML = input + ' là năm nhuận'
    } else {
        document.getElementById('result').innerHTML = input + ' là năm không nhuận'
    }
}


