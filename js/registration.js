document.getElementById('registrationForm').addEventListener('submit', function(e){
    const pass = document.getElementById('password').value.trim();
    const confirm = document.getElementById('confirmPassword').value.trim();

    if(pass !== confirm){
        e.preventDefault();
        alert("Password and Confirm Password do not match!");
        return false;
    }
});