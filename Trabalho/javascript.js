function calculateSimpleInterest() {
    var principal = parseFloat(document.getElementById("principal").value);
    var interestRate = parseFloat(document.getElementById("interest").value);
    var time = parseFloat(document.getElementById("time").value);

    if (isNaN(principal) || isNaN(interestRate) || isNaN(time)) {
      alert("Por favor, preencha todos os campos com valores numéricos.");
      return;
    }

    var simpleInterest = principal + (principal * interestRate * time);

    document.getElementById("futureValue").textContent = "R$ " + simpleInterest.toFixed(2);
  }

  function calculateCompoundInterest() {
    var principal = parseFloat(document.getElementById("principal").value);
    var interestRate = parseFloat(document.getElementById("interest").value);
    var time = parseFloat(document.getElementById("time").value);

    if (isNaN(principal) || isNaN(interestRate) || isNaN(time)) {
      alert("Por favor, preencha todos os campos com valores numéricos.");
      return;
    }

    var compoundInterest = principal * Math.pow(1 + (interestRate / 100), time);

    document.getElementById("futureValue").textContent = "R$ " + compoundInterest.toFixed(2);
},