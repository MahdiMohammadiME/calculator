document.getElementById('calculationForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const API_URL = 'https://script.google.com/macros/s/AKfycby6iNsF_Zu10cijbjgman4Yhydde_AY0wxmULI9B4R1KtMGzbQJM8FgDi7IaZslNyDShg/exec'; // *** REPLACE THIS ***
    
    // 1. Get Input Values
    const shellThk = document.getElementById('shellThk').value;
    const headThk = document.getElementById('headThk').value;
    const shellId = document.getElementById('shellId').value;
    
    const statusMessage = document.getElementById('statusMessage');
    const outputHeadId = document.getElementById('outputHeadId');
    const outputHeadOd = document.getElementById('outputHeadOd');
    const outputNsfLength = document.getElementById('outputNsfLength');

    // Reset outputs and show loading state
    outputHeadId.textContent = '...';
    outputHeadOd.textContent = '...';
    outputNsfLength.textContent = '...';
    statusMessage.textContent = 'Calculating... Please wait.';

    const payload = {
        shellThk: shellThk,
        headThk: headThk,
        shellId: shellId
    };

    try {
        // 2. Send data to the Apps Script API
        const response = await fetch(API_URL, {
            method: 'POST',
            mode: 'cors', // Crucial for cross-origin requests
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // 3. Receive and display output data
        const data = await response.json();

        outputHeadId.textContent = data.headId.toFixed(2); // Formatting for clean output
        outputHeadOd.textContent = data.headOd.toFixed(2);
        outputNsfLength.textContent = data.nsfLength.toFixed(2);
        
        statusMessage.textContent = 'Calculation successful!';

    } catch (error) {
        console.error('Calculation Error:', error);
        statusMessage.textContent = 'An error occurred during calculation. Check the console and API URL.';
        outputHeadId.textContent = 'ERROR';
        outputHeadOd.textContent = 'ERROR';
        outputNsfLength.textContent = 'ERROR';
    }
});
