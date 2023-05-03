//URL
const player = [
  {
    "sportsicon0": "../../assets/images/cricketicon.png",
    "sportsicon1": "../../assets/images/footballicon.png",
    "sportsicon2": "../../assets/images/tennisicon.png",
  }
]







let user_record = JSON.parse(localStorage.getItem("user_details"));

// let filterPlayer=[];

let filterPlayer;
filterPlayer = user_record.filter((item) => {
  return item.player == true;
})

// console.log(filterPlayer);



const url2 = window.location.search;  //?userid=97;
console.log(url2);
const urlParameter2 = new URLSearchParams(url2);
// console.log(urlParameter)   // "userid":"97"
const playerSearch = urlParameter2.get("player_id");
// console.log(groundSearch2); // get value of name

let show2;
filterPlayer.find(function (e) {
  if (e["user_id"] == playerSearch) {
    return show2 = e;

  }
  else {
    return show2 = 0;
  }
})


// 
let MessageofUser = JSON.parse(localStorage.getItem("user_Messages"))
let playerIdmessage = show2["user_id"];
const loginUser = JSON.parse(localStorage.getItem("user_logged_in"));
let loginUserID = loginUser[0]["user_id"]










if (MessageofUser == null) {

}
else {
  const messageUser = MessageofUser.find(message => playerIdmessage === message.receiver_id && loginUserID == message.sender_id

  )
  show2["user_messages"] = messageUser
  console.log(show2);



}



if (MessageofUser == null) {

}

else {
  const messageUser2 = MessageofUser.find(message => loginUserID === message.receiver_id && playerIdmessage === message.sender_id)
  show2["received_messages"] = messageUser2


}

//JSON

div_parent1 = document.createElement("div");
div_parent1.setAttribute("class", "bar");
// console.log(div_parent1);

// side bar one kula box 1
div_sidebar_1 = document.createElement("div");
div_sidebar_1.setAttribute("class", "sidebar1");
div_parent1.append(div_sidebar_1);
// box1 start


div_profile_box = document.createElement("div");
div_profile_box.setAttribute("class", "profilebox");
div_sidebar_1.append(div_profile_box);


player_image = document.createElement("img");
player_image.setAttribute("src", show2["url"])
player_image.setAttribute("class", "profilephoto")
div_profile_box.append(player_image);

button_connect = document.createElement("button")
button_connect.setAttribute("class", "connectbtn")
button_connect.setAttribute("value", show2["user_id"])
button_connect.innerText = "Connect";
div_profile_box.append(button_connect);

p_playerName = document.createElement("p");
p_playerName.setAttribute("class", "namerow");
p_playerName.innerText = show2["user_name"]
div_profile_box.append(p_playerName);


p_playerAbout = document.createElement("p");
p_playerAbout.setAttribute("class", "aboutrow");
p_playerAbout.innerText =show2["aboutplayers"]
div_profile_box.append(p_playerAbout);


div_rating_box = document.createElement("div");
div_rating_box.setAttribute("class", "ratingsrow");
div_profile_box.append(div_rating_box);


i_star = document.createElement("i")
i_star.setAttribute("class", "fa-solid fa-star");
div_rating_box.append(i_star);

span_no = document.createElement("span");
span_no.setAttribute("class", "norating");
span_no.innerText = "5.0"
div_rating_box.append(span_no);



div_box2 = document.createElement("div");
div_box2.setAttribute("class", "box2");
div_sidebar_1.append(div_box2);


div_sports_known = document.createElement("div");
div_sports_known.setAttribute("class", "sportsknown");
div_box2.append(div_sports_known);


p_sportsplay_tag = document.createElement("p")
p_sportsplay_tag.setAttribute("class", "sportsplay");
p_sportsplay_tag.innerText = "Sports i will play";
div_sports_known.append(p_sportsplay_tag);


if (show2["sports_choosed_cricket"] == true) {
  symbolimage1 = document.createElement("img");
  symbolimage1.setAttribute("class", "sportsicon");
  symbolimage1.setAttribute("src", player[0]["sportsicon0"])
  // symbolimage1.setAttribute("src",showimage[0]["cricketicon"])
  // symbolimage.setAttribute("alt",)
  div_sports_known.append(symbolimage1);
}

if (show2["sports_choosed_football"] == true) {
  symbolimage2 = document.createElement("img");
  symbolimage2.setAttribute("class", "sportsicon");
  symbolimage2.setAttribute("src", player[0]["sportsicon1"])
  // symbolimage.setAttribute("alt",)
  // symbolimage2.setAttribute("src",showimage[0]["cricketicon"])
  // symbolimage.setAttribute("alt",)
  div_sports_known.append(symbolimage2);
}

if (show2["sports_choosed_tennis"] == true) {
  symbolimage3 = document.createElement("img");
  symbolimage3.setAttribute("class", "sportsicon");
  symbolimage3.setAttribute("src", player[0]["sportsicon2"])
  // // symbolimage.setAttribute("alt",)
  div_sports_known.append(symbolimage3);
}


div_gameplayed = document.createElement("div");
div_gameplayed.setAttribute("class", "gamesplaybox");
div_box2.append(div_gameplayed);


p_score_tagName = document.createElement("p");
p_score_tagName.setAttribute("class", "scorehead");
// p_playerName
div_gameplayed.append(p_score_tagName);


p_score_no = document.createElement("p");
p_score_no.setAttribute("class", "scoreno");
// p_playerName
div_gameplayed.append(p_score_no);


div_box3 = document.createElement("div");
div_box3.setAttribute("class", "box3");
div_sidebar_1.append(div_box3);

div_statistics = document.createElement("div")
div_statistics.setAttribute("class", "statistics1");
div_box3.append(div_statistics);

canvas_chart = document.createElement("canvas");
canvas_chart.setAttribute("id", "myChart");
div_statistics.append(canvas_chart);


// sidebar2



div_sidebar_2 = document.createElement("div");
div_sidebar_2.setAttribute("class", "sidebar2");
div_parent1.append(div_sidebar_2);

div_container_sidebar2 = document.createElement("div");
div_container_sidebar2.setAttribute("class", "container");
div_sidebar_2.append(div_container_sidebar2);

div_top = document.createElement("div");
div_top.setAttribute("class", "top");
div_container_sidebar2.append(div_top);

h2_web = document.createElement("h2");
h2_web.setAttribute("class", "h2head");
h2_web.innerText = "Web Connect"
div_top.append(h2_web);


div_chat_main = document.createElement("div");
div_chat_main.setAttribute("class", "main");
div_container_sidebar2.append(div_chat_main);

if (show2.received_messages == undefined && show2.user_messages==undefined) {
  // Display a notification that the conversation hasn't started yet
  p_mess_noti = document.createElement("p");
  p_mess_noti.setAttribute("class", "noti");
  p_mess_noti.innerText = "* Your conversation has not started. Say hello to get started.";
  div_chat_main.append(p_mess_noti);
} 
else {

  let allmess = [];

  // all received mesages
  if(show2.received_messages!=undefined){
    for (let i = 0; i < show2.received_messages.messages.length; i++) {
      let receivedMess = show2.received_messages.messages[i];
      receivedMess.type = "received";
      allmess.push(receivedMess)
    }

  }
  
  if (show2.user_messages !== undefined && show2.user_messages.messages!= null) {
    //all usrr message
    for (let i = 0; i < show2.user_messages.messages.length; i++) {
      let userMess = show2.user_messages.messages[i];
      userMess.type = "sent";
      allmess.push(userMess)
    }

  }
  // sorting message based on time
  allmess.sort((a, b) => 
    a.timestamp - b.timestamp
  )

  for (let i = 0; i < allmess.length; i++) {
    let particularmessage = allmess[i];
    let messageofchat = document.createElement("p");
    if (particularmessage.type == "received") {
      messageofchat.setAttribute("class", "messagefrom");
    }
    else {
      messageofchat.setAttribute("class", "messageto");
    }
    messageofchat.innerText = particularmessage.text+ timestampconvert(particularmessage.timestamp);;
    div_chat_main.append(messageofchat);
  }




  
}

// for (let i = 0; i < show2.received_messages.messages.length; i++) {
  //   let receivedMessage = show2.received_messages.messages[i];
  //   let p_mess_from = document.createElement("p");
  //   p_mess_from.setAttribute("class", "messagefrom");
  //   p_mess_from.innerText = receivedMessage.text;
  //   div_chat_main.append(p_mess_from);
  // }

// if (show2.user_messages == null) {
//   // Display a notification that the conversation hasn't started yet
//   p_mess_noti = document.createElement("p");
//   p_mess_noti.setAttribute("class", "noti");
//   p_mess_noti.innerText = "* Your conversation has not started. Say hello to get started.";
//   div_chat_main.append(p_mess_noti);
// } else {
//   for (let i = 0; i < show2.user_messages.messages.length; i++) {
//     let userMessage = show2.user_messages.messages[i];
//     let p_mess_to = document.createElement("p");
//     p_mess_to.setAttribute("class", "messageto");
//     p_mess_to.innerText = userMessage.text;
//     div_chat_main.append(p_mess_to);
//   }
// }


// console.log(show2.user_messages["messages"][2]);


// p_mess_noti=document.createElement("p");
// p_mess_noti.setAttribute("class","noti");
// p_mess_noti.innerText="* Your conversation is not started Say hello to get started"
// div_chat_main.append(p_mess_noti);





div_chat_bottom = document.createElement("div");
div_chat_bottom.setAttribute("class", "bottom");
div_container_sidebar2.append(div_chat_bottom);

form_box = document.createElement("form");
form_box.setAttribute("id", "sendbtn");
div_chat_bottom.append(form_box);

input_mess_box = document.createElement("input");
input_mess_box.setAttribute("type", "text");
input_mess_box.setAttribute("placeholder", "Send message");
input_mess_box.setAttribute("id", "message");
input_mess_box.setAttribute("required", "");
form_box.append(input_mess_box);

send_btn = document.createElement("button");
send_btn.setAttribute("id", "send_button");
send_btn.setAttribute("type", "submit");
form_box.append(send_btn);

i_send_symbol = document.createElement("i");
i_send_symbol.setAttribute("class", "bx bx-send");
send_btn.append(i_send_symbol);


document.querySelector("div.main2").append(div_parent1)


const ctx = canvas_chart
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Win', 'Loss', 'Draw'],
    datasets: [{
      label: ' of Matches',
      data: [12, 19, 3,],
      hoverOffset: 4,
      borderWidth: 1
    }]
  },

});

let sidebar2;
if (loginUserID == show2["user_id"]) {
  sidebar2 = document.querySelector(".sidebar2");
  sidebar2.style.display = "none"
}
else {
  // sidebar2.style.display="block"
}

//  request




// request to other user
const connectBtn = document.querySelectorAll(".connectbtn");
let playerId;


// console.log(loginUser);


console.log(loginUserID);
//  findplayersbtn.addEventListener("click",(e)=>{
//   if( !loginUser || loginUser[0]["player_status"]==true){
//     alert("Please join as a player or login to find players  ")
//     e.preventDefault();
//   }
//   else{
//     window.location.href="./pages/player/findplayers.html";
//   }

// })



connectBtn.forEach((conBtn) => {
  playerId = conBtn.value
  conBtn.addEventListener("click", () => {
    // alert(playerId)
    // local storage
    let request_records = new Array();
    request_records = JSON.parse(localStorage.getItem("request_details")) ?
      JSON.parse(localStorage.getItem("request_details")) : []



    if (playerId == loginUserID) {
      alert("this your profile")
    }
    else if (request_records.some((v) => {
      v.requested_user == loginUserID && v.receiving_user == playerId

    })) {
      connectBtn.style.display = "none"
    }



    else {
      request_records.push({
        "requested_user": loginUserID,
        "receiving_user": playerId,
        "request_status": "pending"

      });

      localStorage.setItem("request_details", JSON.stringify(request_records))
      alert("you requested")



    }


  })

})














// chat feature
let sendBtn = document.getElementById("send_button");
let formbtn = document.getElementById("sendbtn")
formbtn.addEventListener("submit", (e) => {
  e.preventDefault();
  sendMessage();
  // location.reload();


})

let messagebox;


function sendMessage() {

  messagebox = document.getElementById("message").value

  let receiver = show2["user_id"];
  let usersMessage = new Array();
  usersMessage = JSON.parse(localStorage.getItem("user_Messages")) ?
    JSON.parse(localStorage.getItem("user_Messages")) : [];


  let existingmessagedUser = usersMessage.findIndex((mess) =>
    mess.sender_id === loginUserID && mess.receiver_id === receiver
  );


  let existingmessage={
    "text": messagebox,
    "sender": "user",
    "timestamp": new Date().getTime(),
  }

  if (existingmessagedUser !== -1) {
    usersMessage[existingmessagedUser].messages.push(existingmessage);
  }
  else {
    usersMessage.push(
      {
        "sender_id": loginUserID,
        "receiver_id": receiver,
        "messages": [{
          "text": messagebox,
          "sender": "user",
          "timestamp": new Date().getTime(),
        }]
      }
    )
  }

  localStorage.setItem("user_Messages", JSON.stringify(usersMessage))

  // let div_chat_main = document.querySelector(".main");
  //   let p_mess_from = document.createElement("p");
  //   p_mess_from.setAttribute("class", "messageto");
  //   p_mess_from.innerText = messagebox;
  //   div_chat_main.append(p_mess_from);

  //   document.getElementById("message").value = "";

  let mainChat = document.querySelector(".main");
  let messageto = document.createElement("p");
  messageto.setAttribute("class", "messageto");

  messageto.innerHTML =`${messagebox} -<span class="timeside"> ${timestampconvert(existingmessage.timestamp)}</span>`;
  mainChat.append(messageto);


  document.getElementById("message").value = "";
  // mess_from=document.createElement("p");
  // mess_from.setAttribute("class","messagefrom");
  // mess_from.innerText=messagebox;
  // div_chat_main.append(mess_from);
  mainChat.scrollTop = mainChat.scrollHeight
}

// function formatTime(timestamp) {
//   let date = new Date(timestamp);
//   let hours = date.getHours();
//   let minutes = date.getMinutes();
//   let ampm = hours >= 12 ? 'PM' : 'AM';
//   hours = hours % 12;
//   hours = hours ? hours : 12;
//   return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampm}`;
// }

function timestampconvert(timestamp){
  let date=new Date(timestamp);
  let hours=date.getHours();
  let minutes=date.getMinutes();
  let ampmformat=hours>=12?`PM`:`AM`;
  hours=hours%12;
  hours=hours?hours:12;
  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')} ${ampmformat}`;
}