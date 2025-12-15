function calculate() {
    let shellThk = parseFloat(document.getElementById("shellThk").value) || 0;
    let headThk = parseFloat(document.getElementById("headThk").value) || 0;
    let shellId = parseFloat(document.getElementById("shellId").value) || 0;

    let count = 0;
    let Y = 0;
    let Y_old = -1;
    let shellNAD = -1;
    let shellOD = -1;
    let headNAR = -1;
    let headIR = -1;
    let headOR = -1;
    let deltaX = -1;
    
    do{
        Y_old = Y;
        
        shellNAD = shellThk + shellId || 0;
        shellOD = 2*shellThk + shellId || 0;
    
        headNAR = shellNAD/2 - count;
        headIR = headNAR - headThk/2;
    
        Y = math.sqrt(headIR**2 - (shellThk/2 - shellNAD/2)**2);
        headOR = headNAR + headThk/2;
        deltaX = shellThk/2 - (headOR - shellNAD/2);
    
        count++;

    }while(Y >= 3*deltaX);

    let headId = headIR*2;
    let headOd = headOR*2;
    let nsfLength = Y_old;

    document.getElementById("headId").textContent = headId;
    document.getElementById("headOd").textContent = headOd;
    document.getElementById("nsfLength").textContent = nsfLength;
}
