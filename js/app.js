function runSimulation() {
  const name = document.getElementById("sneakerName").value;
  const size = document.getElementById("size").value;
  const condition = document.getElementById("condition").value;
  const price = document.getElementById("buyPrice").value;
  const platform = document.getElementById("platform").value;

  alert(`Simulation Placeholder:\n\nSneaker: ${name}\nSize: ${size}\nCondition: ${condition}\nPrice: $${price}\nPlatform: ${platform}`);
}

function joinBeta() {
  const email = document.getElementById("email").value;
  alert(`Thanks for signing up, ${email}!`);
}
