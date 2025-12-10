async function getCalculation() {
  const inputs = {
    ShellTHK: document.getElementById('shellThk').value,
    HeadTHK: document.getElementById('headThk').value,
    ShellID: document.getElementById('shellId').value
  };

  try {
    const response = await fetch('YOUR_SERVERLESS_FUNCTION_API_ENDPOINT', { // <--- Replace this URL
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(inputs)
    });

    const data = await response.json();
    // Assuming your serverless function returns an object like { final_result: 123.45 }
    document.getElementById('result').innerText = `Result: ${data.final_result}`;

  } catch (error) {
    document.getElementById('result').innerText = 'Error calculating.';
    console.error('Error:', error);
  }
}
