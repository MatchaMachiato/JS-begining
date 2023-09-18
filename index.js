document.getElementById("myButton").onclick = function() {
    // console.log("onclick");

    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");
    const myCheckBox = document.getElementById("myCheckBox");

    if (visaBtn.checked) console.log("Visa");
    else 
    if (mastercardBtn.checked) console.log("Mastercard");
    else 
    if (paypalBtn.checked) console.log("Paypal")
    else console.log("You not submit");
    if (myCheckBox.checked) console.log("hi"); else console.log("fuck");

}