function entangle() {
  const outcome = Math.random() < 0.5 ? "Heads" : "Tails";
  document.getElementById("coin1").style.background = outcome === "Heads"
    ? "radial-gradient(circle, #ffd700, #ffa500)"
    : "radial-gradient(circle, #fff, #bbb)";
  document.getElementById("coin2").style.background = outcome === "Heads"
    ? "radial-gradient(circle, #ffd700, #ffa500)"
    : "radial-gradient(circle, #fff, #bbb)";
    
  document.getElementById("result").innerText = `Both qubits collapsed to: ${outcome}`;
}
