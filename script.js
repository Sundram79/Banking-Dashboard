// script.js

let balance = 1000;

function deposit() {
  const depositAmount = document.getElementById('deposite-amount').value;
  if (depositAmount > 0) {
    balance += parseFloat(depositAmount);
    updateBalance();
    document.getElementById('deposite-amount').value = ''; // clear input
  } else {
    alert("Please enter a valid deposit amount");
  }
}

function withdraw() {
  const withdrawAmount = document.getElementById('withdraw-amount').value;
  if (withdrawAmount > 0 && withdrawAmount <= balance) {
    balance -= parseFloat(withdrawAmount);
    updateBalance();
    document.getElementById('withdraw-amount').value = ''; // clear input
  } else {
    alert("Invalid withdrawal amount");
  }
}

function updateBalance() {
  document.getElementById('balance').innerText = `$${balance}`;
}
