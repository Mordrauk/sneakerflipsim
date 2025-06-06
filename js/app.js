function runSimulation() {
  const name = document.getElementById("sneakerName").value;
  const sizeUnit = document.getElementById("sizeUnit").value;
  const size = document.getElementById("size").value;
  const condition = document.getElementById("condition").value;
  const price = document.getElementById("buyPrice").value;
  const platform = document.getElementById("platform").value;

  const resultBox = document.getElementById("result");
  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <strong>Simulation Result:</strong><br>
    Sneaker: ${name}<br>
    Size: ${sizeUnit} ${size}<br>
    Condition: ${condition}<br>
    Buy Price: $${price}<br>
    Platform: ${platform}<br>
    <em>Note: Simulation engine coming soon!</em>
  `;
}

function joinBeta() {
  const email = document.getElementById("email").value;
  alert(`Thanks for signing up, ${email}!`);
}

function toggleHelp() {
  const helpBox = document.getElementById("conditionHelp");
  helpBox.style.display = helpBox.style.display === "block" ? "none" : "block";
}
