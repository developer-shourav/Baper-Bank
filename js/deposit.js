
document.getElementById("btn-deposit").addEventListener('click', function(){
  const depositField = document.getElementById('deposit-field');
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString)
  // step:3
  const primaryDeposit = document.getElementById('deposit-total');
  const previousDepositTotalString = primaryDeposit.innerText;
  const previousTotal = parseFloat(previousDepositTotalString);

  const currentDepositTotal = previousTotal + newDepositAmount;
  primaryDeposit.innerText = currentDepositTotal;

  // Get balance Current Total
  // clear the deposit field 
  depositField.value = "";
});


