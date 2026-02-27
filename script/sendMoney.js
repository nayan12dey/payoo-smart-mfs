// console.log("send money");

document.getElementById("send-money-btn").addEventListener("click", function(){
    // 1. get the user account number and validate
    const userBankAccount = getValueFromInput("send-money-number");
    if(userBankAccount.length != 11){
        alert("Invalid Number");
        return;
    }

    // 2. put the amount and validate and convert to number
    const sendMoneyAmount = getValueFromInput("send-money-amount");

    // 3. get the current balance, validate, convert to number
    const currentBalance = getBalance();

    // 4. check user current amount and sendMoneyAmount
    if(sendMoneyAmount > currentBalance){
        alert("Insufficient Balance");
        return;
    }

    // 5.Calculate new Balance
    const newBalance = currentBalance - Number(sendMoneyAmount);
    console.log(newBalance);


    // 6. get the pin and verify
    const pin = getValueFromInput("send-money-pin");
    if(pin === "1234"){
        alert("Transaction Successfull");
        setBalance(newBalance);

        // 1. get the transaction history
        const history = document.getElementById("history-container");

        // 2. create a new div
        const newHistory = document.createElement("div");

        // 3. add innerHTML in div
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100 transition-transform transform duration-300 hover:scale-102 hover:shadow-md rounded-md">
                Transaction Successful! <span class="font-bold">₹${sendMoneyAmount} </span> has been transferred to account <span class="font-bold">${userBankAccount} </span> on ${new Date().toLocaleString('en-IN')}
            </div>
        `

        // 4. append newDiv in history container
        history.append(newHistory);

    }
    else{
        alert("Invalid pin");
        return;
    }


})