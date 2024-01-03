function converter() {
    const temp = document.getElementById('temp').value;
    const disp = document.getElementById('disp');
    const opt = document.getElementById('opt').value;
    if (temp === "") {
        alert("not valid")
    } else if (opt === "select") {
        alert("Please Choose an Option")
    }
    else if (opt === "farenhite") {
        disp.innerHTML = `${temp}*F into Celcius is  ${temp - 32 * 5 / 9}`;
    } else if (opt === "Celcius") {
        disp.innerHTML = `${temp}*C into ferenhite is  ${temp * 9 / 5 + 32}`;
    }
    else null;
}