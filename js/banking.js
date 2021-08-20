function getInputValue(inputField) {
    // debugger; 
    const input = document.getElementById(inputField);
    const inputText = input.value;
    const inputAmount = parseFloat(inputText);
    input.value = '';

    return inputAmount;
}

function getTotalAmount(totalId, myInputAmount) {
    const myTotal = document.getElementById(totalId);
    const totalText = myTotal.innerText;
    const previousTotalAmount = parseFloat(totalText);

    myTotal.innerText = myInputAmount + previousTotalAmount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    return balanceTotalAmount;
}


function getMyBalance(inputAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');

    /* const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText); */
    const balanceTotalAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = balanceTotalAmount + inputAmount;
    }
    else {
        balanceTotal.innerText = balanceTotalAmount - inputAmount;
    }
}




document.getElementById('deposite-button').addEventListener('click', function () {
    /* 
    const depositeInput = document.getElementById('deposite-input');
    const depositeInputText = depositeInput.value;
    const depositeInputAmount = parseFloat(depositeInputText); */
    // const depositeInputAmount = getInputValue('deposite-input');

    // Get current deposite
    /* 
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousdepositeTotalAmount = parseFloat(depositeTotalText);

    depositeTotal.innerText = depositeInputAmount + previousdepositeTotalAmount; */
    // getTotalAmount('deposite-total', depositeInputAmount);

    // Update balance 
    /*const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    balanceTotal.innerText = balanceTotalAmount + depositeInputAmount; */

    const depositeInputAmount = getInputValue('deposite-input');
    if (depositeInputAmount > 0) {
        getTotalAmount('deposite-total', depositeInputAmount);
        getMyBalance(depositeInputAmount, true);
    }





});

document.getElementById('withdraw-button').addEventListener('click', function () {
    /* 
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText); */
    // const withdrawInputAmount = getInputValue('withdraw-input');

    // Get withdraw
    /* 
    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalText);

    withdrawTotal.innerText = withdrawInputAmount + withdrawTotalAmount; */
    // getTotalAmount('withdraw-total', withdrawInputAmount);

    // update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);

    balanceTotal.innerText = balanceTotalAmount - withdrawInputAmount; */

    const withdrawInputAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawInputAmount > 0 && currentBalance > withdrawInputAmount) {
        getTotalAmount('withdraw-total', withdrawInputAmount);
        getMyBalance(withdrawInputAmount, false);
    }
    if (withdrawInputAmount > currentBalance) {
        console.log('we cant withdraw because your input is grater than total amount');
    }


    // withdrawInput.value = '';

})