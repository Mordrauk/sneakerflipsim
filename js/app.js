function runSimulation() {
  const name = document.getElementById("sneakerName").value.trim();
  const size = document.getElementById("size").value.trim();
  const sizeUnit = document.getElementById("sizeUnit").value;
  const condition = document.getElementById("condition").value;
  const price = parseFloat(document.getElementById("buyPrice").value);
  const platform = document.getElementById("platform").value;
  const resultBox = document.getElementById("result");

  if (!name || !size || !condition || !platform || isNaN(price)) {
    alert("Please fill out all fields before running the simulation.");
    return;
  }

  // Simulated resale value logic by condition
  const baseMarkup = {
    DS: 1.8,
    VNDS: 1.6,
    NDS: 1.5,
    EX: 1.4,
    VG: 1.3,
    G: 1.2,
    F: 1.1,
    B: 1.0,
  };

  // Platform fees (rough averages)
  const platformFees = {
    StockX: 0.12,
    GOAT: 0.14,
    eBay: 0.13,
    Other: 0.15,
  };

  const markup = baseMarkup[condition] || 1.0;
  const resale = +(price * markup).toFixed(2);
  const fee = +(resale * (platformFees[platform] || 0.15)).toFixed(2);
  const profit = +(resale - price - fee).toFixed(2);
  const roi = +((profit / price) * 100).toFixed(1);

  let risk = "Low";
  if (markup <= 1.2) risk = "High";
  else if (markup <= 1.4) risk = "Medium";

  // Display simulated result
  resultBox.innerHTML = `
    <h3>Simulation Results</h3>
    <p><strong>Sneaker:</strong> ${name}</p>
    <p><strong>Size:</strong> ${size} (${sizeUnit})</p>
    <p><strong>Condition:</strong> ${condition}</p>
    <p><strong>Platform:</strong> ${platform}</p>
    <p><strong>Estimated Resale Value:</strong> $${resale}</p>
    <p><strong>Estimated Profit:</strong> $${profit}</p>
    <p><strong>Estimated ROI:</strong> ${roi}%</p>
    <p><strong>Flip Risk:</strong> ${risk}</p>
  `;
  resultBox.style.display = "block";
}

function joinBeta() {
  const email = document.getElementById("email").value.trim();
  if (!email) {
    alert("Please enter your email.");
    return;
  }
  alert(`Thanks for signing up, ${email}!`);
}

function toggleHelp() {
  const help = document.getElementById("conditionHelp");
  help.style.display = help.style.display === "block" ? "none" : "block";
}
