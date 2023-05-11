// side bar2

//filter



const loginUser = JSON.parse(localStorage.getItem("user_logged_in"));
let loginuserid = loginUser[0]["user_id"];

let messageofUser = JSON.parse(localStorage.getItem("user_Messages"));
let allmessagedUser=messageofUser.filter((data)=>{
    return data.sender_id==loginuserid || data.receiver_id==loginUser 

});

console.log(allmessagedUser);

//
let user_record = JSON.parse(localStorage.getItem("user_details"));

let filterPlayer=[];
filterPlayer = user_record.filter((item)=>{
    return item.player==true;
})

// console.log(filterPlayer);



for(const messages of allmessagedUser){
    const {receiver_id}=messages
    const message=filterPlayer.find(data=> data.user_id==receiver_id)
    messages["data"]=message
}





for(let i=0;i<allmessagedUser.length;i++){
anchor = document.createElement("a");
anchor.setAttribute("href",`?user_id=${allmessagedUser[i]["data"]["user_id"]}` )
anchor.setAttribute("class","anchor_div")
// console.log(anchor);
document.querySelector(".side2").append(anchor)



div_chatseparate = document.createElement("div");
div_chatseparate.setAttribute("class" ,"chatdiv");
anchor.append(div_chatseparate)
// anchor.append(div_img);


div_img = document.createElement("div");
div_img.setAttribute("class" ,"img");
div_chatseparate.append(div_img);


player_img= document.createElement("img");
if(allmessagedUser[i]["data"]["url"]==""){
    player_img.setAttribute("src","https://iili.io/HkW7U4S.jpg" );

}
else{
player_img.setAttribute("src", allmessagedUser[i]["data"]["url"]);}
// player_img.setAttribute("alt", "playerProfile");
player_img.setAttribute("class", "peopleimage");
div_img.append(player_img);



div_name = document.createElement("div");
div_name.setAttribute("class" ,"name");
div_chatseparate.append(div_name);


p_name=document.createElement("p");
p_name.innerText= allmessagedUser[i]["data"]["user_name"]
p_name.setAttribute("class" ,"playername");
div_name.append(p_name)
}







// url search 

const url = window.location.search;  //?userid=97;
// console.log(url);
const urlParameter = new URLSearchParams(url);

const searchuser_id=urlParameter.get("user_id");
// console.log(searchuser_id);

let chat_cont=document.querySelector(".container")

let messagesshown;
// allmessagedUser.find((e)=>{
//     if(e.receiver_id==searchuser_id && e.sender_id==loginuserid ){
//         return messagesshown=e;
//     }
//     else{
//         return messagesshown=0
//     }

// })



// console.log(messagesshown);

allmessagedUser.find((e)=>{
    if(e.data.user_id==searchuser_id ){
        return messagesshown=e;
    }
    else{
        return messagesshown=0
    }

})


const receivedmess=messageofUser.find(mess=>mess.receiver_id==loginuserid && mess.sender_id==searchuser_id)
messagesshown["user_receivedmess"]=receivedmess

console.log(messagesshown);


//  for(const mess of allmessagedUser){
//     const {receiver_id}=mess
//     let messagesshown2= messageofUser.find((e)=>{
//         receiver_id==loginuserid && e.sender_id==searchuser_id
   
//    })
//    allmessagedUser["received_mess"]=messagesshown2
   
   
   
//    console.log(allmessagedUser);

//  }


 
// let messagesshown2;
// messageofUser.find((e)=>{
//     if( e.receiver_id==loginuserid && e.sender_id==searchuser_id

//         ){
//         return messagesshown2=e
//     }
//     else{
//         return messagesshown2=0
//     }

// })



// console.log(messagesshown2);

// let ok={...messagesshown, ...messagesshown2};
// console.log(ok);

// const messseparate=messagesshown["messages"].find((data)=>{
//     data.receiver_id==searchuser_id && data.sender_id==loginuserid 
// })





// messagesshown["received_messages"]=messseparate;


// console.log(messseparate);


// let messagesshown2=messagesshown.find((e)=>
    // e["receiver_id"]==searchuser_id && e["sender_id"]==loginuserid 

// )


let anchordiv=document.querySelectorAll(".anchor_div");
anchordiv.forEach((data)=>{
    data.addEventListener("click",()=>{
    //    alert("ok")
        // chat_cont.style.display="block"

    })
})




// chatting



div_container_sidebar2 = document.createElement("div");
div_container_sidebar2.setAttribute("class", "container");
document.querySelector(".side3chatmain").append(div_container_sidebar2);
// console.log(div_container_sidebar2);
div_top = document.createElement("div");
div_top.setAttribute("class", "top");
div_container_sidebar2.append(div_top);

h2_web = document.createElement("h2");
h2_web.setAttribute("class", "h2head");
h2_web.innerText = messagesshown["data"]["user_name"]
div_top.append(h2_web);

profile_dp= document.createElement("img");

if( messagesshown["data"]["url"]==""){
    profile_dp.setAttribute("src", "https://iili.io/HkW7U4S.jpg");
}
else{
profile_dp.setAttribute("src", messagesshown["data"]["url"]);}
// player_img.setAttribute("alt", "playerProfile");
profile_dp.setAttribute("class", "player_dp");
div_top.append(profile_dp);

div_chat_main = document.createElement("div");
div_chat_main.setAttribute("class", "main");
div_container_sidebar2.append(div_chat_main);

//     let p_mess_from = document.createElement("p");
//     p_mess_from.setAttribute("class", "messageto");
//     p_mess_from.innerText = "osmolsmkmmkdm kdmkdmdms";
//     div_chat_main.append(p_mess_from);
  






//     let p_mess_to = document.createElement("p");
//     p_mess_to.setAttribute("class", "messagefrom");
//     p_mess_to.innerText = "helkoldmsndddd";
//     div_chat_main.append(p_mess_to);

//     // p_mess_noti = document.createElement("p");
//     // p_mess_noti.setAttribute("class", "noti");
//     // p_mess_noti.innerText = "* Your conversation has not started. Say hello to get started.";
//     // div_chat_main.append(p_mess_noti);


// div_chat_bottom = document.createElement("div");
// div_chat_bottom.setAttribute("class", "bottom");
// div_container_sidebar2.append(div_chat_bottom);

// form_box = document.createElement("form");
// form_box.setAttribute("id", "sendbtn");
// div_chat_bottom.append(form_box);

// input_mess_box = document.createElement("input");
// input_mess_box.setAttribute("type", "text");
// input_mess_box.setAttribute("placeholder", "Send message");
// input_mess_box.setAttribute("id", "message");
// input_mess_box.setAttribute("required", "");
// form_box.append(input_mess_box);

// send_btn = document.createElement("button");
// send_btn.setAttribute("id", "send_button");
// send_btn.setAttribute("type", "submit");
// form_box.append(send_btn);

// i_send_symbol = document.createElement("i");
// i_send_symbol.setAttribute("class", "bx bx-send");
// send_btn.append(i_send_symbol);



// if (messagesshown.received_messages == undefined && messagesshown.user_messages==undefined) {
//     // Display a notification that the conversation hasn't started yet
//     p_mess_noti = document.createElement("p");
//     p_mess_noti.setAttribute("class", "noti");
//     p_mess_noti.innerText = "* Your conversation has not started. Say hello to get started.";
//     div_chat_main.append(p_mess_noti);
//   } 
//   else {
  
    let allmess = [];
  
    // all received mesages
    if(messagesshown.user_receivedmess!=undefined){
      for (let i = 0; i < messagesshown.user_receivedmess.messages.length; i++) {
        let receivedMess = messagesshown.user_receivedmess.messages[i];
        receivedMess.type = "received";
        allmess.push(receivedMess)
      }
  
    }
    
    if (messagesshown.messages
        !== undefined && messagesshown.messages!= null) {
      //all usrr message
      for (let i = 0; i < messagesshown.messages.length; i++) {
        let userMess = messagesshown.messages[i];
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
  
  //delete btn
      let delbtn=document.createElement("button");
      delbtn.setAttribute("class","delbtn")
      delbtn.innerText="Delete";
      if(particularmessage.type == "received"){
        delbtn.style.display="none"
  
      }
  
      delbtn.addEventListener("click",()=>{
        deletemess(particularmessage);
        messageofchat.remove()
  
      })
      messageofchat.append(delbtn)
    }
  
  
  
  
    
//   }



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

  let receiver =Number(searchuser_id);
  let usersMessage = new Array();
  usersMessage = JSON.parse(localStorage.getItem("user_Messages")) ?
    JSON.parse(localStorage.getItem("user_Messages")) : [];


  let existingmessagedUser = usersMessage.findIndex((mess) =>
    mess.sender_id === loginuserid && mess.receiver_id === receiver
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
        "sender_id": loginuserid,
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


// delete messages


function deletemess(message){
  let messageofUser = JSON.parse(localStorage.getItem("user_Messages"));
  let existingmessageuser=messageofUser.findIndex((mess)=>mess.sender_id===loginuserid && mess.receiver_id===searchuser_id);

if(existingmessageuser!==-1){
  let exitingmesss=messageofUser[existingmessageuser].messages.findIndex((messs)=>messs.text===message.text && messs.timestamp ===messs.timestamp);
  if(exitingmesss!==-1){
    messageofUser[existingmessageuser].messages.splice(exitingmesss,1);
    localStorage.setItem("user_Messages",JSON.stringify(messageofUser))
  }
}

}

