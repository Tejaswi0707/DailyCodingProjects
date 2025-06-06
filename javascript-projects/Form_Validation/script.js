function ValidateForm(){
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("confirmPassword").value;
    let valid=true;

    //Clear previous error messages
    document.getElementById("nameError").innerHTML="";
    document.getElementById("emailError").innerHTML="";

    if (name === ""){
        document.getElementById("nameError").innerHTML="Name is required!";
        valid=false;
    }
    if (email===""){
        document.getElementById("emailError").innerHTML="Email is required!";
        valid=false;
    }
    if (password===""){
        document.getElementById("passwordError").innerHTML="Password is required!";
        valid=false;
    }
    if (confirmPassword===""){
        document.getElementById("confirmPasswordError").innerHTML="Confirm Password is required!";
        valid=false;
    }
    if (confirmPassword!=password){
        document.getElementById("confirmPasswordError").innerHTML="Confirm Password doesn't match with the password!";
        valid=false;
    }
    return valid;
}