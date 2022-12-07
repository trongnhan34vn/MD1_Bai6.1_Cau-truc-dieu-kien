function answerQuestion() {
    let answer = document.getElementById('answer').value;
    if (answer == 'ans1') {
        document.getElementById('result').innerText += ' True'
    } else {
        document.getElementById('result').innerText += ' False'
    }
}