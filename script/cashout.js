document.getElementById("cashout-btn").addEventListener("click", function(){
    // 1. get the agent number & validate
    const cashoutNumber = getValueFromInput("cashout-number")
    if(cashoutNumber.length != 11){
        alert("Invalid Number");
        return;
    }
    // 2. get the amount, validate, convert to Number
    const cashoutAmount = getValueFromInput("cashout-amount")

    // 3. get the Current Balance, validate, convert to Number
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance)

    // 4. Calculate new Balance
    const newBalance = Number(balance) - Number(cashoutAmount);
    console.log(newBalance)
    if(newBalance < 0){
        alert("Invalid Amount");
        return;
    }

    // 5. Get the pin and verify
    const pin = getValueFromInput("cashout-pin");
    if(pin === "1234"){
        alert("cashout Successfull");
        balanceElement.innerText = newBalance;
    }
    else{
        alert("Invalid pin");
        return;
    }


})



// document.getElementById("cashout-btn").addEventListener("click", function(){
//     // 1. get the agent number & validate
//     const cashoutNumberInput = document.getElementById("cashout-number")
//     const cashoutNumber = cashoutNumberInput.value;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length != 11){
//         alert("Invalid Agent Number");
//         cashoutNumberInput.value = "";
//         return;
//     }

//     // 2. get the amount, validate, convert to Number
//     const cashoutAmountInput = document.getElementById("cashout-amount")
//     const cashoutAmount = cashoutAmountInput.value;
//     console.log(cashoutAmount)

//     // 3. get the Current Balance, validate, convert to Number
//     const balanceElement = document.getElementById("balance");
//     const balance = balanceElement.innerText;
//     console.log(balance)

//     // 4. Calculate new Balance
//     const newBalance = Number(balance) - Number(cashoutAmount);
    
//     if(newBalance < 0){
//         alert("Invalid Amount");
//         cashoutAmountInput.value = "";
//         return;
//     }
    
//     // 5. Get the pin and verify
//     const cashoutPinInput = document.getElementById("cashout-pin")
//     const pin = cashoutPinInput.value;
//     // console.log(cashoutPin)
//     if(pin === "1234"){
//         // 5-1 true :::> show an alert > set Balance
//         alert("cashout sucessful");
//         console.log(newBalance);
//         balanceElement.innerText = newBalance;
//     }
//     else{
//         // 5-2 true :::> show an error alert > return
//         alert("Invalid Pin");
//         cashoutPinInput.value = "";
//         return;
//     }

// })