function calculate() {
    let shellThk = parseFloat(document.getElementById("shellThk").value) || 0;
    let headThk = parseFloat(document.getElementById("headThk").value) || 0;
    let shellId = parseFloat(document.getElementById("shellId").value) || 0;

    let headId = shellThk * 2;
    let headOd = headThk * 3;
    let nsfLength = shellId * 4;

    document.getElementById("headId").textContent = headId;
    document.getElementById("headOd").textContent = headOd;
    document.getElementById("nsfLength").textContent = nsfLength;
}
