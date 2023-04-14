const loginUser = JSON.parse(localStorage.getItem("user_logged_in"));
console.log(loginUser);
const loginbtn = document.querySelector(".login")


if (loginUser == null) {

}
else {
  if (loginUser !== false) {
    loginbtn.style.display = "none"
    const myprofile = document.createElement("button");
    myprofile.setAttribute("class", "login");
    myprofile.innerText = "My Account"
    myprofile.style.width = "150px";
    myprofile.style.right = "50px";
    myprofile.style.top = "30px";
    myprofile.addEventListener("click", () => {
      window.location.href = "../../pages/player/newprofile.html"
    });
    document.querySelector(".head").append(myprofile)
  }
  else {
    loginbtn.style.display = "block"


  }

}


let findplayersbtn = document.querySelector(".findplayers")
findplayersbtn.addEventListener("click", (e) => {
  if (!loginUser || loginUser[0]["player_status"] == false) {
    alert("Please join as a player  or login to find players ")
    e.preventDefault();
  }


  else {
    window.location.href = "./pages/player/findplayers.html";
  }



})
