// if(brwoser == 'Edge') {
//     alert("You've got the Edge!");
// } else if(brwoser == 'Chrome' || brwoser == 'FireFox' || brwoser == 'Safari' || brwoser == 'Opera') {
//     alert("OK we support these browser too")
// } else {
//     alert("We hope that this page looks ok")
// }

var brwoser = 'Safari'
switch (brwoser) {
    case 'Edge':
        alert("You've got the Edge");
        break;
    case 'Chrome':
    case 'FireFox':
    case 'Safari':
    case 'Opera':
        alert("OK we support these browser too")
        break;
    default:
        alert("We hope that this page looks ok")
}
