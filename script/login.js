document.getElementById("login-btn").addEventListener("click", function (){

    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;

    
    const passwordInput = document.getElementById("input-password");
    const loginPassword = passwordInput.value;

    if(contactNumber==="12345678911" && loginPassword === "1234"){
        // alert("Login Successfull");
        window.location.assign("home.html")
    
    }
    else{
        alert("Login Failed");
        return;
    }


    console.log(contactNumber, loginPassword)
    
});


