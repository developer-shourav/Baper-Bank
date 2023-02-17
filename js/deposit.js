
document.getElementById("btn-deposit").addEventListener('click', function(){
  const depositField = document.getElementById('deposit-field');
  const depositAmount = depositField.value;
  // step:3
  const primaryDeposit = document.getElementById('deposit-total');
  const primaryDepositValue = primaryDeposit.innerText;
  primaryDeposit.innerText = depositAmount;
});


