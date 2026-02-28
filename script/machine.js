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
    const cashOut = document.getElementById("cashout");
    const sendMoney = document.getElementById("send-money");
    const transaction = document.getElementById("history");
    const getBonus = document.getElementById("get-bonus");
    console.log(`add Money- ${addMoney} . Cashout - ${cashOut} . Send Money - ${sendMoney} Get Bonus - ${getBonus}`);

    // hide everybody
    addMoney.classList.add("hidden");
    cashOut.classList.add("hidden");
    sendMoney.classList.add("hidden");
    transaction.classList.add("hidden");
    getBonus.classList.add("hidden");


    // id element will show
    const selected = document.getElementById(id);
    selected.classList.remove("hidden");
}