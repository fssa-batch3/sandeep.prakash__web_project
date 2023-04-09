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
    let user_Id;
    let playerStatus;
    arrayConvert.find(element => {
      if (element["user_email"] == email && element["user_password"] == user_password) {
    user_Id=element["user_id"]
    playerStatus=element["player"]
         userCollect = 1;
         
         return true
      }
      else {
       userCollect = 0;
       return false
      }
    });

    if (userCollect == 1) {
      let userlogData=[
        {
          "user_email":email,
          "user_id":user_Id,
          "player_status":playerStatus

        }
      ]
      // localStorage.setItem("user_name",name1)
  
      window.location.href = "./accountcreated.html";
      alert("login success");

      localStorage.setItem("user_logged_in",JSON.stringify(userlogData));
    }
    else {
      alert("login failure");
    }

  }
