


//URL



let user_record = JSON.parse(localStorage.getItem("user_details"));



const url2=window.location.search;  //?userid=97;
console.log(url2);
const urlParameter2= new URLSearchParams(url2);
// console.log(urlParameter)   // "userid":"97"
const playerSearch=urlParameter2.get("player_id");
// console.log(groundSearch2); // get value of name

 let show2;
user_record.find(function(e){
    if(e["user_as_player"]["player_id"] == playerSearch){
        return show2= e;

    }
    else{
        return show2 = 0;
    }
})

//JSON

div_parent1=document.createElement("div");
div_parent1.setAttribute("class","bar");
console.log(div_parent1);

// side bar one kula box 1
div_sidebar_1=document.createElement("div");
div_sidebar_1.setAttribute("class","sidebar1");
div_parent1.append(div_sidebar_1);
// box1 start


div_profile_box=document.createElement("div");
div_profile_box.setAttribute("class","profilebox");
div_sidebar_1.append(div_profile_box);


player_image=document.createElement("img");
player_image.setAttribute("src",show2["userimage"]["url"])
player_image.setAttribute("class","profilephoto")
div_profile_box.append(player_image);

button_connect=document.createElement("button")
button_connect.setAttribute("class","connectbtn")
button_connect.innerText="Connect";
div_profile_box.append(button_connect);

p_playerName=document.createElement("p");
p_playerName.setAttribute("class","namerow");
p_playerName.innerText=show2["user_as_player"]["user_name"]
div_profile_box.append(p_playerName);


p_playerAbout=document.createElement("p");
p_playerAbout.setAttribute("class","aboutrow");
p_playerAbout.innerText="hjisodkihdohudhbdhidnkbu"
div_profile_box.append(p_playerAbout);


div_rating_box=document.createElement("div");
div_rating_box.setAttribute("class","ratingsrow");
div_profile_box.append(div_rating_box);


i_star=document.createElement("i")
i_star.setAttribute("class","fa-solid fa-star");
div_rating_box.append(i_star);

span_no=document.createElement("span");
span_no.setAttribute("class","norating");
span_no.innerText="5.0"
div_rating_box.append(span_no);



div_box2=document.createElement("div");
div_box2.setAttribute("class","box2");
div_sidebar_1.append(div_box2);


div_sports_known=document.createElement("div");
div_sports_known.setAttribute("class","sportsknown");
div_box2.append(div_sports_known);


p_sportsplay_tag=document.createElement("p")
p_sportsplay_tag.setAttribute("class","sportsplay");
p_sportsplay_tag.innerText="Sports i will play";
div_sports_known.append(p_sportsplay_tag);


symbolimage1=document.createElement("img");
symbolimage1.setAttribute("class","sportsicon");
// symbolimage1.setAttribute("src",showimage[0]["cricketicon"])
// symbolimage.setAttribute("alt",)
div_sports_known.append(symbolimage1);

symbolimage2=document.createElement("img");
symbolimage2.setAttribute("class","sportsicon");
// symbolimage2.setAttribute("src",showimage[0]["cricketicon"])
// symbolimage.setAttribute("alt",)
div_sports_known.append(symbolimage2);

symbolimage3=document.createElement("img");
symbolimage3.setAttribute("class","sportsicon");
// symbolimage3.setAttribute("src",showimage[0]["cricketicon"])
// // symbolimage.setAttribute("alt",)
div_sports_known.append(symbolimage3);



div_gameplayed=document.createElement("div");
div_gameplayed.setAttribute("class","gamesplaybox");
div_box2.append(div_gameplayed);


p_score_tagName=document.createElement("p");
p_score_tagName.setAttribute("class","scorehead");
// p_playerName
div_gameplayed.append(p_score_tagName);


p_score_no=document.createElement("p");
p_score_no.setAttribute("class","scoreno");
// p_playerName
div_gameplayed.append(p_score_no);


div_box3=document.createElement("div");
div_box3.setAttribute("class","box3");
div_sidebar_1.append(div_box3);

div_statistics=document.createElement("div")
div_statistics.setAttribute("class","statistics1");
div_box3.append(div_statistics);

canvas_chart=document.createElement("canvas");
canvas_chart.setAttribute("id","myChart");
div_statistics.append(canvas_chart);


// sidebar2


div_sidebar_2=document.createElement("div");
div_sidebar_2.setAttribute("class","sidebar2");
div_parent1.append(div_sidebar_2);

div_container_sidebar2=document.createElement("div");
div_container_sidebar2.setAttribute("class","container");
div_sidebar_2.append(div_container_sidebar2);

div_top=document.createElement("div");
div_top.setAttribute("class","top");
div_container_sidebar2.append(div_top);

h2_web=document.createElement("h2");
h2_web.setAttribute("class","h2head");
h2_web.innerText="Web Connect"
div_top.append(h2_web);


div_chat_main=document.createElement("div");
div_chat_main.setAttribute("class","main");
div_container_sidebar2.append(div_chat_main);

p_mess_to=document.createElement("p");
p_mess_to.setAttribute("class","messageto");
div_chat_main.append(p_mess_to);

p_mess_from=document.createElement("p");
p_mess_from.setAttribute("class","messagefrom");
div_chat_main.append(p_mess_from);

p_mess_noti=document.createElement("p");
p_mess_noti.setAttribute("class","noti");
p_mess_noti.innerText="* Your conversation is not started Say hello to get started"
div_chat_main.append(p_mess_noti);





div_chat_bottom=document.createElement("div");
div_chat_bottom.setAttribute("class","bottom");
div_container_sidebar2.append(div_chat_bottom);

form_box=document.createElement("form");
form_box.setAttribute("id","sendbtn");
div_chat_bottom.append(form_box);

input_mess_box=document.createElement("input");
input_mess_box.setAttribute("type","text");
input_mess_box.setAttribute("placeholder","Send message");
input_mess_box.setAttribute("id","message");
form_box.append(input_mess_box);

send_btn=document.createElement("button");
send_btn.setAttribute("id","send_button");
form_box.append(send_btn);

i_send_symbol=document.createElement("i");
i_send_symbol.setAttribute("class","bx bx-send");
send_btn.append(i_send_symbol);


document.querySelector("div.main2").append(div_parent1)






const ctx =canvas_chart
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