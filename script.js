function getPasswordStrength(password){
    let s = 0;
    if(password.length > 6){
      s++;
    }
    if(password.length > 10){
      s++;
    }
    if(/[A-Z]/.test(password)){
      s++;
    }
    if(/[0-9]/.test(password)){
      s++;
    }
    if(/[^A-Za-z0-9]/.test(password)){
      s++;
    }
    return s;
  }
  document.querySelector(".pw-meter #password").addEventListener("focus",function(){
    document.querySelector(".pw-meter .pw-strength").style.display = "block";
  });
  document.querySelector(".pw-meter .pw-display-toggle-btn").addEventListener("click",function(){
    let el = document.querySelector(".pw-meter .pw-display-toggle-btn");
    if(el.classList.contains("active")){
      document.querySelector(".pw-meter #password").setAttribute("type","password");
      el.classList.remove("active");
    } else {
      document.querySelector(".pw-meter #password").setAttribute("type","text");
      el.classList.add("active");
    }
  });
  
  document.querySelector(".pw-meter #password").addEventListener("keyup",function(e){
        let password = e.target.value;
        let strength = getPasswordStrength(password);
        let passwordStrengthSpans = document.querySelectorAll(".pw-meter .pw-strength span");
        let body= document.getElementById("last");
        strength = Math.max(strength,1);
        passwordStrengthSpans[1].style.width = strength*20 + "%";
        if(strength < 2){
            passwordStrengthSpans[0].innerText = "Weak";
            passwordStrengthSpans[0].style.color = "#111";
            passwordStrengthSpans[1].style.background = "#d13636";
            body.style.background = "#d13636";

        } else if(strength >= 2 && strength <= 4){
            passwordStrengthSpans[0].innerText = "Medium";
            passwordStrengthSpans[0].style.color = "#111";
            passwordStrengthSpans[1].style.background = "#e6da44";
            body.style.background = "#e6da44";
        } else {
            passwordStrengthSpans[0].innerText = "Strong";
            passwordStrengthSpans[0].style.color = "#fff";
            passwordStrengthSpans[1].style.background = "#20a820";
            body.style.background = "#20a820";
    }
  });