document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeField = document.getElementById('deposite-field');
    const newDepositeAmountString = depositeField.value;
    const newDepositeAmount = parseFloat(newDepositeAmountString);

    const depositeWithdraw = document.getElementById('deposite-total');
    const previousDepositeString = depositeWithdraw.innerText;
    const previousDepositeTotal = parseFloat(previousDepositeString)
    depositeWithdraw.innerText = newDepositeAmount;

    const depositeCurrentAmount = previousDepositeTotal + newDepositeAmount
    depositeWithdraw.innerText = depositeCurrentAmount;

    const balanceTotal = document.getElementById('balance-total');
    const newBalanceString = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(newBalanceString)

    const totalBalanceAmount = newBalanceTotal + newDepositeAmount;
    balanceTotal.innerText = totalBalanceAmount;
    depositeField.value = '';
})