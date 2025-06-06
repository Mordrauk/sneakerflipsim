function runSimulation() {
  const name = document.getElementById("sneakerName").value;
  const size = document.getElementById("size").value;
  const conditionCode = document.getElementById("condition").value;
  const price = document.getElementById("buyPrice").value;
  const platform = document.getElementById("platform").value;

  const conditionLabels = {
    DS: "Deadstock (DS)",
    VNDS: "Very Near Deadstock (VNDS)",
    NDS: "Near Deadstock (NDS)",
    EX: "Excellent",
    VG: "Very Good",
    G: "Good",
    F: "Fair",
    B: "Beaters"
  };

  const condition = conditionLabels[conditionCode] || "Unknown";

  alert(
    `Simulation Placeholder:\n\nSneaker: ${name}\nSize: ${size}\nCondition: ${condition}\nPrice: $${price}\nPlatform: ${platform}`
  );
}

function joinBeta() {
  const email = document.getElementById("email").value;
  alert(`Thanks for signing up, ${email}!`);
}
