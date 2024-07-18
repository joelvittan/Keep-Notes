



document.addEventListener('DOMContentLoaded', function() {
    let nameLabel=document.getElementById("name-input");
    let email=document.getElementById("email-input")
    let pass=document.getElementById("password-input")
    let confirmerMsg=document.getElementById("confirmerMsg")
    let confirmPass=document.getElementById("confirm-pass-input")
    let nameLabelCont=document.getElementById("name-input-cont");
    let emailCont=document.getElementById("email-input-cont")
    let passCont=document.getElementById("password-input-cont")
    let confirmPassCont=document.getElementById("confirm-pass-input-cont")
    let form=document.getElementById("signup-form")
    let signupbutt=document.getElementById("signupbutt")
    
    
    nameLabel.addEventListener("input",function(event){
        if(nameLabel.value===""){
            event.preventDefault()
            nameLabelCont.style.backgroundColor="#99605c"
            nameMsg.textContent="Required*"
        }
        else{
            nameLabelCont.style.backgroundColor="rgb(206, 214, 228)"
            nameMsg.textContent=""
        }
    })
    email.addEventListener("input",function(){
        if(email.value===""){
            emailCont.style.backgroundColor="#99605c"
            emailMsg.textContent="Required*"
        }
        else{
            emailCont.style.backgroundColor="rgb(206, 214, 228)"
            emailMsg.textContent=""
        }
    })
    
    pass.addEventListener("input",function(){
        if(pass.value===""){
            passCont.style.backgroundColor="#99605c"
            passwordMsg.textContent="Required*"
        }
        else{
            passCont.style.backgroundColor="rgb(206, 214, 228)"
            passwordMsg.textContent=""
        }
    })
    
    confirmPass.addEventListener("input",function(){
        if(confirmPass.value===""){
            confirmPassCont.style.backgroundColor="#99605c"
            confirmMsg.textContent="Required*"
        }
        else{
            confirmPassCont.style.backgroundColor="rgb(206, 214, 228)"
            confirmMsg.textContent=""
        }
    })





    pass.addEventListener("focusout", (event) => {
        const passwordValue = pass.value;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // At least one lowercase letter, one uppercase letter, one digit, and minimum 8 characters

        if ((!passwordPattern.test(passwordValue))&&(passwordValue!==""))  {
             event.preventDefault()
            securitymsg.textContent = 'Your password is weak make sure your password is strong';
        } else {
            securitymsg.textContent = '';

        }
    });

    email.addEventListener("focusout",function(event){
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!(emailPattern.test(email.value))&&(email==="")){
            emailerMsg.textContent="Enter Valid mail."
            event.preventDefault()
        }
        else{
            emailerMsg.textContent=""
            
        }
    });
    confirmPass.addEventListener("input",function(event){
        if(confirmPass.value!==pass.value){
            confirmerMsg.textContent="Password Does not matched"
            confirmerMsg.style.color="white"
            event.preventDefault()
        }
        else{
            confirmerMsg.textContent=""
        }
    });

    

    let passunhide=document.getElementById("passunhide")
    let passhide=document.getElementById("passhide")

    passhide.style.display="none"
    passunhide.style.display="block"
    
    hide.onclick=function(){
        if(passhide.style.display==="none"){
            passhide.style.display="block"
            passunhide.style.display="none"
            pass.type="text"
        }
        else if(passhide.style.display==="block"){
            passhide.style.display="none"
            passunhide.style.display="block"
            pass.type="password"
        }
    }

    passhide2.style.display="none"
    passunhide2.style.display="block"
    hide2.onclick=function(){
        if(passhide2.style.display==="none"){
            passhide2.style.display="block"
            passunhide2.style.display="none"
            confirmPass.type="text"
        }
        else if(passhide2.style.display==="block"){
            passhide2.style.display="none"
            passunhide2.style.display="block"
            confirmPass.type="password"
        }
    }




   


    
})
