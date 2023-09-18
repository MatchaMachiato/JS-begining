let a;
let b;
let c;

// a = Number(window.prompt());
// b = Number(window.prompt());

// c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

// console.log(c);

// document.getElementById("myButton").onclick = function() {
//     a = Number(document.getElementById("aTextBox").value);
//     b = Number(document.getElementById("bTextBox").value);

//     c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

//     // console.log(c);
//     document.getElementById("cLabel").innerHTML = "Side C: " + c;
// }

let count;
count = 0;

document.getElementById("up").onclick = function() {
    count += 1;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("reset").onclick = function() {
    count = 0;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("dec").onclick = function() {
    count -= 1;
    document.getElementById("counter").innerHTML = count;
}