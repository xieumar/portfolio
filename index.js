function openNav() {
    document.getElementById("myNav").style.width = "100%";
    const navbar = document.getElementById("myNav");
    console.log(navbar.clientWidth);
    if(navbar.clientWidth == 0){
        navbar.classList.add("mobile");
    }
  }
  
  
  function closeNav() {
    const navbar = document.getElementById("myNav");
    if(navbar.classList.contains('mobile')){
        navbar.style.width = "0%"
    }
  }

  function submitBtn(){
    alert("Submitted successfully! You will hear from us soon.")
  }