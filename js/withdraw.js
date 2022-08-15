document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawTotal = parseFloat(newWithdrawString)


    const totalWithdraw = document.getElementById('withdraw-total')
    const previousWithdrawString = totalWithdraw.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawString);

    const currentTotalWithDraw = previousWithdrawTotal + newWithdrawTotal;
    totalWithdraw.innerText = currentTotalWithDraw;

    const currentTotalBalance = document.getElementById('balance-total')
    const currentBalanceString = currentTotalBalance.innerText;
    const currentBalance = parseFloat(currentBalanceString);

    const totalBalance = currentBalance - newWithdrawTotal;
    currentTotalBalance.innerText = totalBalance;
    withdrawField.value = '';

})