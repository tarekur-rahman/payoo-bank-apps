document.getElementById("withdraw-btn").addEventListener("click", function(){

    const cashoutNumber = getValueFromId("cashout-number");
    if(cashoutNumber.length !== "11"){
        alert("Invalid Number")
        return;
    }

    const amount = getValueFromId("amount");
    

    const blanceText = document.getElementById("blance");
    const blance = blanceText.innerText;
    let newBlance = Number(blance) - Number(amount);
    if(newBlance<0){
        alert("Invalid Amaount")
        return;
    }

    const cashoutPassword = getValueFromId("cashout-password");
    if(cashoutPassword === "1234"){
    
        console.log(newBlance);
        blanceText.innerText = newBlance;
    }
    else{
        alert("Invalid Password")
    }

    
})

