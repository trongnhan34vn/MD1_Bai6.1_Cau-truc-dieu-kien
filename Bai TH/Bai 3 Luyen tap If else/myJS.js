let userName = prompt("Who's there?", '');
if(userName == 'Admin') {
    let pass = prompt('Password', '')

    if(pass == 'TheMaster') {
        alert('Welcome!');
    } else if(pass == null) {
        alert('Cancel')
    } else {
        alert('Wrong Password')
    }
} else if(userName == null) {
    alert('Cancel')
} else {
    alert('I dont know you')
}