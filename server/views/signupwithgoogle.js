



document.addEventListener('DOMContentLoaded', function() {
    let pass=document.getElementById("password-input")
    let confirmerMsg=document.getElementById("confirmerMsg")
    let confirmPass=document.getElementById("confirm-pass-input")

   
    let passCont=document.getElementById("password-input-cont")
    let confirmPassCont=document.getElementById("confirm-pass-input-cont")
    let form=document.getElementById("signup-form")

    
    
    
    pass.addEventListener("blur",function(){
        if(pass.value===""){
            passCont.style.backgroundColor="#99605c"
            passwordMsg.textContent="Required*"
        }
        else{
            passCont.style.backgroundColor="rgb(206, 214, 228)"
            passwordMsg.textContent=""
        }
    })
    
    confirmPass.addEventListener("blur",function(){
        if(confirmPass.value===""){
            confirmPassCont.style.backgroundColor="#99605c"
            confirmMsg.textContent="Required*"
        }
        else{
            confirmPassCont.style.backgroundColor="rgb(206, 214, 228)"
            confirmMsg.textContent=""
        }
    })





    pass.addEventListener("input", (event) => {
        const passwordValue = pass.value;
        const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/; // At least one lowercase letter, one uppercase letter, one digit, and minimum 8 characters

        if ((!passwordPattern.test(passwordValue))&&(passwordValue!==""))  {
             
            securitymsg.textContent = 'Your password is weak make sure your password is strong';
        } else {
            securitymsg.textContent = '';

        }
    });

   
    confirmPass.addEventListener("input",function(event){
        if(confirmPass.value!==pass.value){
            confirmerMsg.textContent="Password Does not matched"
            confirmerMsg.style.color="white"
            
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
