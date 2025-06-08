function runSimulation() {
  const name = document.getElementById("sneakerName").value;
  const size = document.getElementById("size").value;
  const sizeUnit = document.getElementById("sizeUnit").value;
  const condition = document.getElementById("condition").value;
  const price = parseFloat(document.getElementById("buyPrice").value);
  const platform = document.getElementById("platform").value;

  // Basic pricing estimate logic
  let resaleValue = 150;
  const conditionMultipliers = {
    DS: 1.1,
    VNDS: 1.05,
    NDS: 1.0,
    EX: 0.95,
    VG: 0.9,
    G: 0.85,
    F: 0.75,
    B: 0.6
  };

  if (conditionMultipliers[condition]) {
    resaleValue *= conditionMultipliers[condition];
  }

  resaleValue = Math.round(resaleValue);
  const profit = resaleValue - price;
  const roi = ((profit / price) * 100).toFixed(1);

  let risk = "Medium";
  if (roi > 40) risk = "Low";
  else if (roi < 10) risk = "High";

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `
    <h3>Simulation Results</h3>
    <p><strong>Sneaker:</strong> ${name}</p>
    <p><strong>Size:</strong> ${size} (${sizeUnit})</p>
    <p><strong>Condition:</strong> ${condition}</p>
    <p><strong>Platform:</strong> ${platform}</p>
    <p><strong>Estimated Resale Value:</strong> $${resaleValue}</p>
    <p><strong>Estimated Profit:</strong> $${profit.toFixed(2)}</p>
    <p><strong>Estimated ROI:</strong> ${roi}%</p>
    <p><strong>Flip Risk:</strong> ${risk}</p>
  `;
  resultBox.style.display = "block";

  showChart(); // Call chart render after result
}

function joinBeta() {
  const email = document.getElementById("email").value;
  alert(`Thanks for signing up, ${email}!`);
}

function toggleHelp() {
  const help = document.getElementById("conditionHelp");
  help.classList.toggle("expanded");
}

function showChart() {
  const container = document.getElementById("chartContainer");
  const canvas = document.getElementById("priceChart");

  // Reset canvas height to ensure it's sized correctly
  canvas.width = 600;
  canvas.height = 300;

  container.style.display = "block";
  container.classList.remove("fade-in");
  void container.offsetWidth; // trigger reflow
  container.classList.add("fade-in");

  // Delay rendering to allow the container to resize properly
  setTimeout(() => {
    if (window.priceChart && typeof window.priceChart.destroy === "function") {
      window.priceChart.destroy();
    }

    const ctx = canvas.getContext("2d");

    window.priceChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['6 mo ago', '5 mo', '4 mo', '3 mo', '2 mo', 'Last mo', 'Now'],
        datasets: [{
          label: 'Resale Price Trend ($)',
          data: [148, 146, 145, 136, 138, 137, 156],
          fill: false,
          borderColor: '#00ccff',
          backgroundColor: '#00ccff',
          tension: 0.3,
          pointRadius: 4,
          pointHoverRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              color: 'white'
            }
          }
        },
        scales: {
          x: {
            ticks: { color: 'white' }
          },
          y: {
            ticks: { color: 'white' }
          }
        }
      }
    });
  }, 50); // Allow 50ms for browser layout flush
}


