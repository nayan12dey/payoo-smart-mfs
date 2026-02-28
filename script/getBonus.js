document.getElementById("get-bonus-btn").addEventListener("click", function () {

    // 1. get coupon code
    const couponCode = getValueFromInput("coupon-code");
    console.log(couponCode);

    // 2. Valid coupons and their bonus amount
    const coupons = {
        "PAYOO50": 50,
        "PAYOO100": 100,
        "PAYOO500": 500,
        "PAYOO1000": 1000,
        "PAYOO2000": 2000,
    }

    if (coupons[couponCode]) {
        alert(`Congratulations! You have received a bonus of ₹${coupons[couponCode]} `);
        // 1. update current balance with bonus 
        const currentBalance = getBalance();
        let newBalance = 0;
        newBalance = currentBalance + Number(coupons[couponCode]);

        // 2. set the new balance
        setBalance(newBalance);

        // 3. get history container
        const history = document.getElementById("history-container");

        // 4. create a new div
        const div = document.createElement("div");

        // 5. add innerHTML in div
        div.innerHTML = `
       <div class="transaction-card p-5 bg-base-100 rounded-md transition-transform transform duration-300 hover:shadow-md hover:scale-102">
                Bonus Added! 
                <span class="font-bold">₹${coupons[couponCode]}</span> 
                using <span class="font-bold">${couponCode}</span>
                <div class="text-sm text-gray-500 mt-1">
                    ${new Date().toLocaleString('en-IN')}
                </div>
        </div>
    `
        history.append(div);

    }
    else {
        alert("Invalid coupon code. Please try again.");
    }



})



