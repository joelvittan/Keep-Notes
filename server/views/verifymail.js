
document.addEventListener("DOMContentLoaded",function(event){
    let passwordMsg=document.getElementById("passwordMsg")
    let signupbutt=document.getElementById("signupbutt")
    let verify=document.getElementById("verify")
    event.preventDefault()
    signupbutt.addEventListener("click",function(){
        passwordMsg.textContent=`an otp has been sent to ${passwordinput.value}`
        verify.style.display="block"
        signupbutt.textContent="Resend OTP"
    })
})



