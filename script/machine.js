// console.log("Machine Added ")

// machine id --> input value
function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    // console.log(id, value);
    return value;
}

// machine --> balance
function getBalance(){
    const balanceElement = document.getElementById("balance")
    const balance = balanceElement.innerText;
    console.log("current balance", Number(balance))
    return Number(balance);
}

// machine --> set Balance
function setBalance(value){
    const balanceElement = document.getElementById("balance")
    balanceElement.innerText = value;
}

// machine id ---> hide all and show id
function showOnly(id){
    const addMoney = document.getElementById("add-money");
    const cashOut = document.getElementById("cashout")
    const transaction = document.getElementById("history")
    // console.log(`add Money- ${addMoney} . Cashout - ${cashOut}`)

    // hide everybody
    addMoney.classList.add("hidden")
    cashOut.classList.add("hidden")
    transaction.classList.add("hidden");


    // id element will show
    const selected = document.getElementById(id);
    selected.classList.remove("hidden")
}