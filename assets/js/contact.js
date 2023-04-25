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

// api

// <!--Start of Tawk.to Script-->
// {/* <script type="text/javascript"> */}
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/6447109b31ebfa0fe7fa2abc/1guqpho13';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

// </script>
// <!--End of Tawk.to Script-->


Tawk_API.onChatMessageReceived = function(data) {
  console.log('New message received:', data.msg);
  // ...
};



// Tawk_API.onChatMessageReceived = function(data) {
//   console.log('New message received:', data.msg);
//   // ...
// };





// Tawk_API.onChatMessageReceived = function(data) {
//   // This function will be called when a new message is received
//   var message = data.msg.toLowerCase(); // convert the message to lowercase for case-insensitive matching
  
//   // Check if the user's message contains a certain keyword and send a response accordingly
//   if (message.includes('hello')) {
//     Tawk_API.sendMessage('Hello! How can I assist you today?');
//   } else if (message.includes('help')) {
//     Tawk_API.sendMessage('I can help you with the following topics: ...');
//   } else {
//     Tawk_API.sendMessage('Sorry, I did not understand your message. Please try again.');
//   }
// };