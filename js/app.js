function runSimulation() {
  const name = document.getElementById("sneakerName").value;
  const size = document.getElementById("size").value;
  const sizeUnit = document.getElementById("sizeUnit").value;
  const condition = document.getElementById("condition").value;
  const price = parseFloat(document.getElementById("buyPrice").value);
  const platform = document.getElementById("platform").value;

  if (!name || !size || !condition || !price || !platform) {
    alert("Please complete all fields before running the simulation.");
    return;
  }

  const resaleMap = {
    DS: 220,
    VNDS: 200,
    NDS: 185,
    EX: 170,
    VG: 156,
    G: 140,
    F: 120,
    B: 90
  };

  const resale = resaleMap[condition] || 150;
  const profit = resale - price;
  const roi = ((profit / price) * 100).toFixed(1);

  let risk = "Medium";
  if (roi >= 40) risk = "Low";
  else if (roi <= 10) risk = "High";

  const resultBox = document.getElementById("result");
  resultBox.innerHTML = `
    <h3>Simulation Results</h3>
    <p><strong>Sneaker:</strong> ${name}</p>
    <p><strong>Size:</strong> ${size} (${sizeUnit})</p>
    <p><strong>Condition:</strong> ${condition}</p>
    <p><strong>Platform:</strong> ${platform}</p>
    <p><strong>Estimated Resale Value:</strong> $${resale}</p>
    <p><strong>Estimated Profit:</strong> $${profit.toFixed(2)}</p>
    <p><strong>Estimated ROI:</strong> ${roi}%</p>
    <p><strong>Flip Risk:</strong> ${risk}</p>
  `;
  resultBox.style.display = "block";

  renderPriceChart(resale);
}

function joinBeta() {
  const email = document.getElementById("email").value;
  if (!email) return alert("Please enter a valid email address.");
  alert(`Thanks for signing up, ${email}!`);
}

function toggleHelp() {
  const help = document.getElementById("conditionHelp");
  help.style.display = help.style.display === "block" ? "none" : "block";
}

let priceChartInstance = null;

function renderPriceChart(latestValue) {
  const ctx = document.getElementById("priceChart").getContext("2d");
  const labels = ["6 mo ago", "5 mo", "4 mo", "3 mo", "2 mo", "Last mo", "Now"];
  const base = latestValue * 0.85;
  const data = Array.from({ length: 6 }, (_, i) =>
    Math.round(base + Math.random() * (latestValue - base))
  ).concat([latestValue]);

  if (priceChartInstance) {
    priceChartInstance.destroy();
  }

  priceChartInstance = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: [{
        label: "Resale Price Trend ($)",
        data: data,
        borderColor: "#00ccff",
        backgroundColor: "rgba(0,204,255,0.1)",
        fill: true,
        tension: 0.3,
        pointRadius: 4,
        pointBackgroundColor: "#00ccff"
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#eee"
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#ccc"
          },
          grid: {
            color: "#333"
          }
        },
        y: {
          ticks: {
            color: "#ccc"
          },
          grid: {
            color: "#333"
          }
        }
      }
    }
  });
}
