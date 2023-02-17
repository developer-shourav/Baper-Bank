
// Step-1: add click event handler on submit button
document.getElementById("btn-submit").addEventListener('click', function(){
  
 // Step-2: Get the email input field value
  const emailFelid = document.getElementById("user-email");
  const email = emailFelid.value;
  const passwordFelid = document.getElementById("user-password");
  const password = passwordFelid.value;
  console.log(email, password);


})

