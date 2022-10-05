let n = prompt('Please type numbers :');
for(let x = 1; x <= n; x++) {
    let multiplication = 0;
    let array = [];
    for(let y = 1; y <= n; y++) {
        multiplication = x * y;
        array += String(multiplication) + ' ';
    }
    document.write(array);
    document.write("<br>");
}