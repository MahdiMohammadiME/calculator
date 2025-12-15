function calculate() {
    let shellThk = parseFloat(document.getElementById("shellThk").value) || 0;
    let headThk = parseFloat(document.getElementById("headThk").value) || 0;
    let shellId = parseFloat(document.getElementById("shellId").value) || 0;

    let count = 0;
    let Y = 0;
    
    do{
        let Y_old = Y;
        
        let shellNAD = shellThk + shellId || 0;
        let shellOD = 2*shellThk + shellId || 0;
    
        let headNAR = shellNAD/2 - count;
        let headIR = headNAR - headThk/2;
    
        let Y = math.sqrt(headIR**2 - (shellThk/2 - shellNAD/2)**2);
        let headOR = headNAR + headThk/2;
        let deltaX = shellThk/2 - (headOR - shellNAD/2);
    
        count++;

    }while(Y >= 3*deltaX);

    let headId = headIR*2;
    let headOd = headOR*2;
    let nsfLength = Y_old;

    document.getElementById("headId").textContent = headId;
    document.getElementById("headOd").textContent = headOd;
    document.getElementById("nsfLength").textContent = nsfLength;
}
