document.addEventListener('DOMContentLoaded', async function(event) {
    
    let email=document.getElementById("email-input")
    let pass=document.getElementById("password-input")
    let emailerMsg=document.getElementById("emailerMsg")
    let emailCont=document.getElementById("email-input-cont")
    let passCont=document.getElementById("password-input-cont")
    let form=document.getElementById("login-form")
    let signinButt=document.getElementById("signin-butt")
    let invalidPass=document.getElementById("invalidPass")
    let invalidUser=document.getElementById("invalidUser")
    
    


    email.addEventListener("input",function(event){
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!(emailPattern.test(email.value))){
            event.preventDefault()
            emailerMsg.textContent="Enter Valid mail."
        }
        else{
            emailerMsg.textContent=""
        }
    })


    email.addEventListener("blur",function(){
        if(email.value===""){
            emailCont.style.backgroundColor="#99605c"
            emailMsg.textContent="Required*"
        }
        else{
            emailCont.style.backgroundColor="rgb(206, 214, 228)"
            emailMsg.textContent=""
        }
    })
    
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

    

    

    
    

})

