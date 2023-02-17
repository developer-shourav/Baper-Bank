
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

  // step: 4 Get balance Current Total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);


  // step: 5 Calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;



  // clear the deposit field 
  depositField.value = "";
});


