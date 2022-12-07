let value = + prompt('type number',0)
var isPositive = value > 0;
var isNegative = value < 0;
var isNum0 = value == 0;

// if(isPositive) {
//     alert('+');
// } else if(isNegative) {
//     alert('-');
// } else {
//     alert('0');
// }

switch (true) {
    case isPositive:
        alert('+');
        break;
    case isNegative:
        alert('-');
        break;
    case isNum0:
        alert('0')
        break;
}


