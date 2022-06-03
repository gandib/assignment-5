function getInput(inputName) {
    const input = document.getElementById(inputName);
    const inputText = input.value;

    if (inputText >= 0) {
        const inputValue = parseFloat(inputText);
        return inputValue;
    }
    else {
        input.value = '';
    }
}

function totalExpens() {
    const foodInput = getInput('food-input');
    const rentInput = getInput('rent-input');
    const clothesInput = getInput('clothes-input');
    const numberHandling = document.getElementById('negative-number-handling');
    if (foodInput >= 0 && rentInput >= 0 && clothesInput >= 0) {
        const expenses = foodInput + rentInput + clothesInput;
        numberHandling.style.display = 'none';
        return expenses;
    }
    else {
        numberHandling.style.display = 'block';
    }
}

function getBalance() {
    const incomeInput = getInput('income-input');
    const expensesTotalAmount = totalExpens();
    const errorLowIncome = document.getElementById('more-expense');
    if (incomeInput > expensesTotalAmount) {
        const newBalance = incomeInput - expensesTotalAmount;
        errorLowIncome.style.display = 'none';
        return newBalance;
    }
    else {
        errorLowIncome.style.display = 'block';
    }
}

document.getElementById('calculate-btn').addEventListener('click', function () {
    //set Expeneses
    const expensesTotalAmount = totalExpens();
    if (expensesTotalAmount >= 0) {
        const expenesesTotal = document.getElementById('expenses-total');
        expenesesTotal.innerText = expensesTotalAmount;
    }

    //set balance
    const totalBalance = getBalance();
    if (totalBalance >= 0) {
        const balance = document.getElementById('balance');
        balance.innerText = getBalance();
    }
});

document.getElementById('save-btn').addEventListener('click', function () {
    //set Saving Amount
    const saveInput = getInput('save-input');
    const incomeInput = getInput('income-input');
    const balanceAmount = getBalance();
    const errorSaving = document.getElementById('more-saving');
    let savingAmount = document.getElementById('saving-amount');
    const totalSaveAmount = incomeInput / 100 * saveInput;
    if (balanceAmount >= totalSaveAmount) {
        savingAmount.innerText = totalSaveAmount;
        errorSaving.style.display = 'none';
    }
    else {
        errorSaving.style.display = 'block';
    }

    //set remaining balance
    let remainingBalance = document.getElementById('remaining-balance');
    if (balanceAmount >= totalSaveAmount) {
        const totalRemainingAmount = balanceAmount - totalSaveAmount;
        remainingBalance.innerText = totalRemainingAmount;
    }
});





