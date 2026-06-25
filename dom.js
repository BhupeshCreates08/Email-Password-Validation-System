let email = document.querySelector("#email");
let password = document.querySelector("#password");          
let submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener("click", function() {   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    let mailAns = emailRegex.test(email.value);
    let passAns = passwordRegex.test(password.value);

    if (!mailAns) {
        document.querySelector("#emailError").textContent = "Email is Incorrect";   
    } else {
        document.querySelector("#emailError").textContent = "";
    }

    if (!passAns) {
        document.querySelector("#passwordError").textContent = "Password is Incorrect"; 
    } else {
        document.querySelector("#passwordError").textContent = "";
    }

    if (mailAns && passAns) {
        document.querySelector("#successMessage").textContent = "Login Successful! ✅";
    } else {
        document.querySelector("#successMessage").textContent = "";
    }
});
