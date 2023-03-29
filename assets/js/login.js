const loginForm=document.getElementById("loginform")


loginForm.addEventListener("submit",e=>{
    e.preventDefault();
    getData();
})
function getData() {
    const email = (document.getElementById("email").value)
    const user_password = (document.getElementById("password").value)
    const arrayConvert = JSON.parse(localStorage.getItem("user_details"));

    let userCollect;
    arrayConvert.find(element => {
      if (element["user_email"] == email && element["user_password"] == user_password) {
        return userCollect = 1;
      }
      else {
        return userCollect = 0;
      }
    });

    if (userCollect == 1) {
      // localStorage.setItem("user_name",name1)
  
      window.location.href = "./accountcreated.html";
      alert("login success");

      localStorage.setItem("logged_in", email);
    }
    else {
      alert("login failure");
    }

  }
