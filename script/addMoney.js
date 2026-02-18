// console.log("added money")

document.getElementById("add-money-btn").addEventListener("click", function(){
    // 1. get bank name
    const bankAccount = getValueFromInput("add-money-bank");
    if(bankAccount == "Select bank"){
        alert("please select a bank");
        return;
    }
    console.log(bankAccount)

    // 2. get bank account number
    const accoutNo = getValueFromInput("add-money-number")
    if(accoutNo.length != 11){
        alert("Invalid Account Number");
        return;
    }
    
    // 3. get amount
    const amount = getValueFromInput("add-money-amount");
    const currentBalance = getBalance();
    const newBalance = currentBalance + Number(amount);
    
    // 4. pin verify 
    const pin = getValueFromInput("add-money-pin");
    if(pin == "1234"){
        alert(`Add Money Sucessfully from ${bankAccount} at ${new Date()} `);
        setBalance(newBalance)

        // 1. get history-container
        const history = document.getElementById("history-container")

        // 2. create new div
        const newHistory = document.createElement("div")

        // 3. add innerHTML in new div
        newHistory.innerHTML = `
        <div class="transaction-card p-5 bg-base-100">
            Add Money Sucessfully from ${bankAccount}, account number ${accoutNo} at ${new Date()}
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