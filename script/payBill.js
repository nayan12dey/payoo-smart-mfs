document.getElementById("pay-bill-btn").addEventListener("click", function() {

    // 1. get a bill type
    const billType = getValueFromInput("pay-bill-type");
    if(billType === "Select bill type"){
        alert("please select a bill type");
        return;
    }
    
    // 2. get biller account number
    const billerAccountNo = getValueFromInput("pay-bill-number");
    if(billerAccountNo.length != 11){
        alert("Invalid Account Number");
        return;
    }

    // 3. pay amount
    const payBillAmount = getValueFromInput("pay-bill-amount");
    const balance = getBalance();
    const newBalance = balance - payBillAmount;
    console.log(newBalance)

    // 4. pin verify
    const pin = getValueFromInput("pay-bill-pin");
    if(pin === "1234"){
        alert(`Bill payment of ₹${payBillAmount} for ${billType} (${billerAccountNo}) was successful on ${new Date().toLocaleString()}`);
        setBalance(newBalance);

        // 1. get history-container
        const history = document.getElementById("history-container");

        // 2. create a new Div
        const div = document.createElement("div");

        // 3. add innerHTML in new div
        div.innerHTML = `
         <div class="transaction-card p-5 bg-base-100 transition-transform transform duration-300 hover:scale-102 hover:shadow-md rounded-md">
            Bill payment of ₹${payBillAmount} for ${billType} (Account No: ${billerAccountNo}) was successful on ${new Date().toLocaleString('en-IN')}
        </div>
        `

        history.append(div);

    }
    else{
        alert("Invalid pin");
        return;
    }
    
})