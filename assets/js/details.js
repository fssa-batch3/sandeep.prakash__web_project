
const loginUser=JSON.parse(localStorage.getItem("user_logged_in"));
const loginbtn= document.querySelector(".login")




if(loginUser==null){

}
else{
  if(loginUser!==false){
  loginbtn.style.display="none"
  const myprofile=document.createElement("button");
  myprofile.setAttribute("class","login");
  myprofile.innerText="My Account"
  myprofile.style.width="150px";
  myprofile.style.left="50px"
  myprofile.addEventListener("click",()=>{
    window.location.href="../../pages/player/newprofile.html"
  });
  document.querySelector(".contact").append(myprofile)
 }
 else{
  loginbtn.style.display="block"
  

 }

}
 

let findplayersbtn=document.querySelector(".findplayers")
findplayersbtn.addEventListener("click",(e)=>{
  if( !loginUser || loginUser[0]["player_status"]==false ){
    alert("Please join as a player  or login to find players ")
    e.preventDefault();
  }
 

  else{
    window.location.href="./pages/player/findplayers.html";
  }



})












const ground_details=[
    {
        "groundname":"DNS TURF",
        "groundPlace":"Vyarsarpadi",
        "groundimage":{
           "image1":"../../assets/images/ground1.jpg",
           "image2":"../../assets/images/ground1b.jpg",
           "image3":"../../assets/images/ground1c.jpg"
        },
        "locationInfo":{   
      "locationLink":"https://goo.gl/maps/YB4zbcWExPUTbGFT6",
        "locationAddress":"Sri rajpurohit complex, 1/340, West Ave, MKB Nagar, Vyasarpadi, Chennai, Tamil Nadu 600039"},
    "sportsAvailImg":{
      "sportsicon0":"../../assets/images/cricketicon.png",
      "sportsicon1":"../../assets/images/footballicon.png",
      "sportsicon2":"../../assets/images/tennisicon.png",
    },
  "timing":"5:00AM -10:00PM",
  "rules":{
    "rule0":"For Football players are advised to wear shoes only on ground",
    "rule1":"sharp metal football are not allowed",
    "rule2":"For tennis 6 players are only allowed"
  },
  "price":"500",
  "groundbooking":"DNF TURF BOOKING",
  "timingoptions":{
    "timing0":"6:00AM-7:00AM",
    "timing1":"7:00AM-8:00AM",
    "timing2":"9:00AM-10:00AM",
    "timing3":"10:00AM-11:00AM",
    "timing4":"11:00AM-12:00PM",
    "timing5":"12:00PM-01:00PM",
    "timing6":"01:00PM-02:00PM",
    "timing7":"02:00PM-03:00PM",
    "timing8":"03:00PM-04:00PM",
    "timing9":"04:00PM-05:00PM",
    "timing10":"05:00PM-06:00PM",
    "timing11":"6:00PM-7:00PM",
    "timing12":"7:00PM-8:00PM",
    "timing13":"9:00PM-10:00PM",
    "timing14":"10:00PM-11:00PM",
    "timing15":"11:00PM-12:00AM",

  },
  "sportsoptions":{
   "sports0":"Cricket",
    "sports1":"Football",
    "sports2":"Tennis"
  },

  "durationoptions":{
    "duration0":"Extra 1 hour",
    "duration1":"Extra 2 hour",
    "duration2":"Extra 3 hour",

  },
  "playersoptions":{
   "player0":"1",
   "player1":"2",
   "player2":"3",
   "player3":"4",
   "player4":"5",
   "player5":"6",
   "player6":"7",
   "player7":"8",
   "player8":"9",
   "player9":"10",
   "player10":"11",
   "player11":"12",
   "player12":"13"
  },
  "courtsoptions":{
    "courts1":"1",
    "courts2":"2",
    "courts3":"3",
    "courts4":"4",
    "courts5":"5",
    


  },
  "optionvalue":{
    "value0":"1",
    "value1":"2",
    "value2":"3",
  }


    },
    {
        "groundname":"Pitch and Play",
        "groundPlace":"Annasalai",
        "groundimage":{
           "image1":"../../assets/images/ground2.jpg",
           "image2":"../../assets/images/ground2b.jpg",
           "image3":"../../assets/images/ground2c.jpg"
        },
        "locationInfo":{   
      "locationLink":"https://goo.gl/maps/BELGDCGXEGRoSGrV7",
        "locationAddress":"4th Floor, Hamid Building, No 190, Mount Rd, opp. IBIS Hotel, Chennai, Tamil Nadu 600006"},
    "sportsAvailImg":{
      "sportsicon0":"../../assets/images/cricketicon.png",
      "sportsicon1":"../../assets/images/footballicon.png",
      "sportsicon2":"../../assets/images/tennisicon.png",
    },
  "timing":"5:00AM -10:00PM",
  "rules":{
    "rule0":"For Football players are advised to wear shoes only on ground",
    "rule1":"sharp metal football are not allowed",
    "rule2":"For tennis 6 players are only allowed"
  },
  "price":"500",
  "groundbooking":"DNF TURF BOOKING",
  "timingoptions":{
    "timing0":"6:00AM-7:00AM",
    "timing1":"7:00AM-8:00AM",
    "timing2":"9:00AM-10:00AM",
    "timing3":"10:00AM-11:00AM",
    "timing4":"11:00AM-12:00PM",
    "timing5":"12:00PM-01:00PM",
    "timing6":"01:00PM-02:00PM",
    "timing7":"02:00PM-03:00PM",
    "timing8":"03:00PM-04:00PM",
    "timing9":"04:00PM-05:00PM",
    "timing10":"05:00PM-06:00PM",
    "timing11":"6:00PM-7:00PM",
    "timing12":"7:00PM-8:00PM",
    "timing13":"9:00PM-10:00PM",
    "timing14":"10:00PM-11:00PM",
    "timing15":"11:00PM-12:00AM",

  },
  "sportsoptions":{
    "sports0":"Cricket",
    "sports1":"Football",
    "sports2":"Tennis"
  },

  "durationoptions":{
    "duration0":"Extra 1 hour",
    "duration1":"Extra 2 hour",
    "duration2":"Extra 3 hour",

  },
  "playersoptions":{
   "player0":"1",
   "player1":"2",
   "player2":"3",
   "player3":"4",
   "player4":"5",
   "player5":"6",
   "player6":"7",
   "player7":"8",
   "player8":"9",
   "player9":"10",
   "player10":"11",
   "player11":"12",
   "player12":"13"
  }

    },
    

]







// const url=window.location.search;
// console.log(url)
// const urlParameter= new URLSearchParams(url);
// console.log(urlParameter)
// const groundSearch=urlParameter.get("name");
// console.log(groundSearch);

// let show;
// ground_details.find(function(e){
//     if(e["groundname"] == groundSearch){
//         return show= e;

//     }
//     else{
//         return show = 0;
//     }
// })


// let div_parent1;
// let div_sidebar_1;
// let div_box1;
// let h2_groundName;
// let p_placeName;
// let div_containerSlider;
// let inputcheckbox1;
// let inputcheckbox2;
// let inputcheckbox3;
// let div_labeldot;
// let label_dots1;
// let label_dots2;
// let label_dots3;
// let div_box2;
// let div_imagecontainer;
// let ground_image1;
// let ground_image2;
// let ground_image3;

// // let br_tag;
// // let h3_card_title;
// // let img_card;
// // let p_location_name ;
// // let div_symbol;
// // let imgicon_card ;
// // let div_ratings ;
// // let i_star;
// // let ratings_no;
// // let button_book;
// // let anchor;


// div_parent1=document.createElement("div");
// div_parent1.setAttribute("class","bar");
// // console.log(div_parent1);

// // side bar one kula box 1
// div_sidebar_1=document.createElement("div");
// div_sidebar_1.setAttribute("class","sidebar1");
// div_parent1.append(div_sidebar_1);
// // box1 start

// div_box1=document.createElement("div");
// div_box1.setAttribute("class","box1");
// div_sidebar_1.append(div_box1);


// h2_groundName=document.createElement("h2");
// h2_groundName.innerText=show["groundname"]
// div_box1.append(h2_groundName);

// p_placeName=document.createElement("p");
// p_placeName.setAttribute("class","place");
// p_placeName.innerText=show["groundPlace"]
// div_box1.append(p_placeName);
// // box1 end

// // image slider

// div_containerSlider=document.createElement("div");
// div_containerSlider.setAttribute("class","containerslider");
// div_sidebar_1.append(div_containerSlider);

// // container slider kula images container

// div_imagecontainer=document.createElement("div");
// div_imagecontainer.setAttribute("class","images");
// div_containerSlider.append(div_imagecontainer);
// // input1
// inputcheckbox1=document.createElement("input")
// inputcheckbox1.setAttribute("type","radio");
// inputcheckbox1.setAttribute("name","slides");
// inputcheckbox1.setAttribute("id","images1");
// div_imagecontainer.append(inputcheckbox1)
// // input2
// inputcheckbox2=document.createElement("input")
// inputcheckbox2.setAttribute("type","radio");
// inputcheckbox2.setAttribute("name","slides");
// inputcheckbox2.setAttribute("id","images2");
// div_imagecontainer.append(inputcheckbox2)
// // input3
// inputcheckbox3=document.createElement("input")
// inputcheckbox3.setAttribute("type","radio");
// inputcheckbox3.setAttribute("name","slides");
// inputcheckbox3.setAttribute("id","images3");
// div_imagecontainer.append(inputcheckbox3);

// ground_image1=document.createElement("img");

// // console.log(ground_image1)
// // ground_image1.setAttribute("alt",)
// ground_image1.setAttribute("class","groundg1")
// ground_image1.setAttribute("src",show["groundimage"]["image1"])
// div_imagecontainer.append(ground_image1)

// ground_image2=document.createElement("img");
// ground_image2.setAttribute("src",show["groundimage"]["image2"])
// // ground_image2.setAttribute("alt",)
// ground_image2.setAttribute("class","groundg2")
// div_imagecontainer.append(ground_image2);

// ground_image3=document.createElement("img");
// ground_image3.setAttribute("src",show["groundimage"]["image3"])
// // ground_image3.setAttribute("alt",)
// ground_image3.setAttribute("class","groundg3")
// div_imagecontainer.append(ground_image3);

// div_labeldot=document.createElement("div");
// div_labeldot.setAttribute("class","labeldots");
// div_containerSlider.append(div_labeldot);


// label_dots1=document.createElement("label");
// label_dots1.setAttribute("for","images1");
// div_labeldot.append(label_dots1);

// label_dots2=document.createElement("label");
// label_dots2.setAttribute("for","images2");
// div_labeldot.append(label_dots2);

// label_dots3=document.createElement("label");
// label_dots3.setAttribute("for","images3");
// div_labeldot.append(label_dots3);

// br_tag1=document.createElement("br");
// div_sidebar_1.append(br_tag1);


// // box2 into sidebar1


// div_box2=document.createElement("div");
// div_box2.setAttribute("class","box2");
// div_sidebar_1.append(div_box2);

// div_locationinfo=document.createElement("div");
// div_locationinfo.setAttribute("class","locationinfo");
// div_box2.append(div_locationinfo);

// h3_location=document.createElement("h3");
// h3_location.innerText="Location";
// div_locationinfo.append(h3_location);

// anchor = document.createElement("a");
// anchor.setAttribute("href",show["locationInfo"]["locationLink"])
// div_locationinfo.append(anchor);

// i_location = document.createElement("i");
// i_location.setAttribute("class", "fa-solid fa-location-dot");
// anchor.append(i_location);

// p_address=document.createElement("p");
// p_address.innerText=show["locationInfo"]["locationAddress"]
// div_locationinfo.append(p_address);


// br_tag2=document.createElement("br");
// div_box2.append(br_tag2);

// div_sportsavail=document.createElement("div")
// div_sportsavail.setAttribute("class","sportsavail");
// div_box2.append(div_sportsavail);


// h2_sportsavail=document.createElement("h2");
// h2_sportsavail.innerText="Sports Available";
// div_sportsavail.append(h2_sportsavail);

// div_sportssymbol=document.createElement("div");
// div_sportssymbol.setAttribute("class","symbol")
// div_sportsavail.append(div_sportssymbol);


// // for loopla podu
// for(let i=0;i<=2;i++){
//     symbolimage=document.createElement("img");
//     symbolimage.setAttribute("class","sportsicon");
//     symbolimage.setAttribute("src",show["sportsAvailImg"]["sportsicon"+i])
//     // symbolimage.setAttribute("alt",)
//     div_sportssymbol.append(symbolimage);
//     //you alrady have an current index "show" show["sportsAvailImg"]["sportsicon"+i]
// }


// br_tag3=document.createElement("br");
// div_box2.append(br_tag3);

// div_timing=document.createElement("div")
// div_timing.setAttribute("class","timinginfo");
// div_box2.append(div_timing); 

// h3_timing=document.createElement("h3");
// h3_timing.setAttribute("class","time")
// h3_timing.innerText="Timing";
// div_timing.append(h3_timing);

// i_clock = document.createElement("i");
// i_clock.setAttribute("class", "fa-solid fa-clock");
// div_timing.append(i_clock);

// span_time=document.createElement("span")
// span_time.innerText=show["timing"];
// div_timing.append(span_time);


// br_tag4=document.createElement("br");
// div_box2.append(br_tag4);


// div_rules=document.createElement("div");
// div_rules.setAttribute("class","rules");
// div_sidebar_1.append(div_rules);

// h2_rules=document.createElement("h2");
// h2_rules.innerText="About it rules";
// div_rules.append(h2_rules);

// // loopla p podu (3)
// for(let i=0;i<=2;i++){
//     p_rules=document.createElement("p");
//     p_rules.innerText=show["rules"]["rule"+i]
//     div_rules.append(p_rules)
// }


// br_tag5=document.createElement("br");
// div_sidebar_1.append(br_tag5);


// div_price=document.createElement("div");
// div_price.setAttribute("class","price");
// div_sidebar_1.append(div_price);

// p_price=document.createElement("p");
// p_price.setAttribute("class","pricen")
// p_price.innerText="Price"
// div_price.append(p_price);

// p_priceamount=document.createElement("p");
// p_priceamount.setAttribute("class","pricelast")
// p_priceamount.innerText=show["price"]
// div_price.append(p_priceamount);

// br_tag6=document.createElement("br");
// div_sidebar_1.append(br_tag6);


// div_addplayers=document.createElement("div");
// div_addplayers.setAttribute("class","addplayer");
// div_sidebar_1.append(div_addplayers);

// h3_addplayers=document.createElement("h3");
// h3_addplayers.innerText="You can also Add players to play with";
// div_addplayers.append(h3_addplayers);

// br_tag7=document.createElement("br");
// div_addplayers.append(br_tag7);

// anchoraddplayers = document.createElement("a");
// anchoraddplayers.setAttribute("href","/pages/bookinground/booking.html")
// div_addplayers.append(anchoraddplayers);



// buttonAddPlayers=document.createElement("button")
// buttonAddPlayers.setAttribute("class","addplayers")
// buttonAddPlayers.innerText="Add Players";
// anchoraddplayers.append(buttonAddPlayers)



// // sidebar2

// div_sidebar_2=document.createElement("div");
// div_sidebar_2.setAttribute("class","sidebar2");
// div_parent1.append(div_sidebar_2);

// div_bookingbox=document.createElement("div"); 
// div_bookingbox.setAttribute("class","booking1");
// div_sidebar_2.append(div_bookingbox);


// div_book1=document.createElement("div"); 
// div_book1.setAttribute("class","book1");
// div_bookingbox.append(div_book1);

// h1_groundName=document.createElement("h1");
// h1_groundName.innerText=show["groundbooking"];
// div_book1.append(h1_groundName);

// br_tag8=document.createElement("br");
// div_book1.append(br_tag8);

// br_tag9=document.createElement("br");
// div_book1.append(br_tag8);


// div_book2=document.createElement("div"); 
// div_book2.setAttribute("class","book2");
// div_bookingbox.append(div_book2);


// label_date=document.createElement("label");
// label_date.setAttribute("class","headingbook");
// label_date.innerText="Date"
// div_book2.append(label_date);


// inputdate=document.createElement("input")
// inputdate.setAttribute("type","date");
// inputdate.setAttribute("id","date");
// div_book2.append(inputdate);


// br_tag10=document.createElement("br");
// div_book2.append(br_tag10);


// span_timingSelect=document.createElement("span")
// span_timingSelect.setAttribute("class","headingbook")
// span_timingSelect.innerText="Timing"
// div_book2.append(span_timingSelect);

// select_timings=document.createElement("select")
// select_timings.setAttribute("class","timings");
// div_book2.append(select_timings);


// // loopit
// for(let i=0;i<=11;i++){
//     option_timings=document.createElement("option");
//     option_timings.innerText=show["timingoptions"]["timing"+i];
//     select_timings.append(option_timings)
// }




// br_tag11=document.createElement("br");
// div_book2.append(br_tag11);


// // sportsselect
// span_sportsSelect=document.createElement("span")
// span_sportsSelect.setAttribute("class","headingbook")
// span_sportsSelect.innerText="SPORTS"
// div_book2.append(span_sportsSelect);

// select_sports=document.createElement("select")
// select_sports.setAttribute("class","sportss");
// div_book2.append(select_sports);


// // loopit
// for(let i=0;i<=2;i++){
//     option_sports=document.createElement("option");
//     option_sports.innerText=show["sportsoptions"]["sports"+i]
//     select_sports.append(option_sports)
    
// }


// br_tag12=document.createElement("br");
// div_book2.append(br_tag12);

// // durationselect
// span_durationSelect=document.createElement("span")
// span_durationSelect.setAttribute("class","headingbook")
// span_durationSelect.innerText="Duration"
// div_book2.append(span_durationSelect);

// select_duration=document.createElement("select")
// select_duration.setAttribute("class","durations");
// div_book2.append(select_duration);


// // loopit
// for(let i=0;i<=2;i++){
//     option_duration=document.createElement("option");
//     option_duration.innerText=show["durationoptions"]["duration"+i]
//     select_duration.append(option_duration)
// }



// br_tag13=document.createElement("br");
// div_book2.append(br_tag13);

// br_tag14=document.createElement("br");
// div_book2.append(br_tag14);




// // playersselect
// span_playersSelect=document.createElement("span")
// span_playersSelect.setAttribute("class","headingbook")
// span_playersSelect.innerText="Players"
// div_book2.append(span_playersSelect);

// select_players=document.createElement("select")
// select_players.setAttribute("class","players");
// div_book2.append(select_players);


// // loopit
// for(let i=0;i<=12;i++){
//     option_players=document.createElement("option");
//     option_players.innerText=show["playersoptions"]["player"+i]
//     select_players.append(option_players)
// }


// br_tag15=document.createElement("br");
// div_book2.append(br_tag15);
// br_tag16=document.createElement("br");
// div_book2.append(br_tag16);

// anchorpayonline = document.createElement("a");
// anchorpayonline.setAttribute("href","../../pages/payment/paymentpage.html")
// div_book2.append(anchorpayonline);



// button_payonline=document.createElement("button")
// button_payonline.setAttribute("class","pay")
// button_payonline.innerText="Pay online";
// anchorpayonline.append(button_payonline)

// br_tag17=document.createElement("br");
// div_book2.append(br_tag17);
// br_tag17=document.createElement("br");
// div_book2.append(br_tag17);


// anchorpaycash = document.createElement("a");
// anchorpaycash.setAttribute("href","../../pages/payment/paymentpage.html")
// div_book2.append(anchorpaycash);



// button_paycash=document.createElement("button")
// button_paycash.setAttribute("class","paycash")
// button_paycash.innerText="Pay by cash";
// anchorpaycash.append(button_paycash)


// document.querySelector("div.main2").append(div_parent1)









// crud 
const groundOwnerProduct_details=JSON.parse(localStorage.getItem("ground_info"));





 const showimage=[
  {
          "sportsiconcric":"../../assets/images/cricketicon.png",
          "sportsiconfoot":"../../assets/images/footballicon.png",
          "sportsiconten":"../../assets/images/tennisicon.png",
        },

]








const url2=window.location.search;  //?userid=97;
console.log(url2);
const urlParameter2= new URLSearchParams(url2);
// console.log(urlParameter)   // "userid":"97"
const groundSearch2=urlParameter2.get("ground_Id");
// console.log(groundSearch2); // get value of name

 let show2;
groundOwnerProduct_details.find(function(e){
    if(e["ground_id"] == groundSearch2){
        return show2= e;

    }
    else{
        return show2 = 0;
    }
})


// let div_parent1;
// let div_sidebar_1;
// let div_box1;
// let h2_groundName;
// let p_placeName;
// let div_containerSlider;
// let inputcheckbox1;
// let inputcheckbox2;
// let inputcheckbox3;
// let div_labeldot;
// let label_dots1;
// let label_dots2;
// let label_dots3;
// let div_box2;
// let ground_image1;
// let ground_image2;
// let ground_image3;

// let br_tag;
// let h3_card_title;
// let img_card;
// let p_location_name ;
// let div_symbol;
// let imgicon_card ;
// let div_ratings ;
// let i_star;
// let ratings_no;
// let button_book;
// let anchor;


div_parent1=document.createElement("div");
div_parent1.setAttribute("class","bar");
// console.log(div_parent1);

// side bar one kula box 1
div_sidebar_1=document.createElement("div");
div_sidebar_1.setAttribute("class","sidebar1");
div_parent1.append(div_sidebar_1);
// box1 start

div_box1=document.createElement("div");
div_box1.setAttribute("class","box1");
div_sidebar_1.append(div_box1);


h2_groundName=document.createElement("h2");
h2_groundName.innerText=show2["ground_name"]
div_box1.append(h2_groundName);

p_placeName=document.createElement("p");
p_placeName.setAttribute("class","place");
p_placeName.innerText=show2["ground_Place"]
div_box1.append(p_placeName);
// box1 end

// image slider

div_containerSlider=document.createElement("div");
div_containerSlider.setAttribute("class","containerslider");
div_sidebar_1.append(div_containerSlider);

// container slider kula images container

div_imagecontainer=document.createElement("div");
div_imagecontainer.setAttribute("class","images");
div_containerSlider.append(div_imagecontainer);
// input1
inputcheckbox1=document.createElement("input")
inputcheckbox1.setAttribute("type","radio");
inputcheckbox1.setAttribute("name","slides");
inputcheckbox1.setAttribute("id","images1");
div_imagecontainer.append(inputcheckbox1)
// input2
inputcheckbox2=document.createElement("input")
inputcheckbox2.setAttribute("type","radio");
inputcheckbox2.setAttribute("name","slides");
inputcheckbox2.setAttribute("id","images2");
div_imagecontainer.append(inputcheckbox2)
// input3
inputcheckbox3=document.createElement("input")
inputcheckbox3.setAttribute("type","radio");
inputcheckbox3.setAttribute("name","slides");
inputcheckbox3.setAttribute("id","images3");
div_imagecontainer.append(inputcheckbox3);

ground_image1=document.createElement("img");
ground_image1.setAttribute("src",show2["groundimg1"])
// console.log(ground_image1)
// ground_image1.setAttribute("alt",)
ground_image1.setAttribute("class","groundg1")
div_imagecontainer.append(ground_image1)

ground_image2=document.createElement("img");
ground_image2.setAttribute("src",show2["groundimg2"])
// ground_image2.setAttribute("alt",)
ground_image2.setAttribute("class","groundg2")
div_imagecontainer.append(ground_image2);

ground_image3=document.createElement("img");
ground_image3.setAttribute("src",show2["groundimg3"])
// ground_image3.setAttribute("alt",)
ground_image3.setAttribute("class","groundg3")
div_imagecontainer.append(ground_image3);

div_labeldot=document.createElement("div");
div_labeldot.setAttribute("class","labeldots");
div_containerSlider.append(div_labeldot);


label_dots1=document.createElement("label");
label_dots1.setAttribute("for","images1");
div_labeldot.append(label_dots1);

label_dots2=document.createElement("label");
label_dots2.setAttribute("for","images2");
div_labeldot.append(label_dots2);

label_dots3=document.createElement("label");
label_dots3.setAttribute("for","images3");
div_labeldot.append(label_dots3);

br_tag1=document.createElement("br");
div_sidebar_1.append(br_tag1);


// box2 into sidebar1


div_box2=document.createElement("div");
div_box2.setAttribute("class","box2");
div_sidebar_1.append(div_box2);

div_locationinfo=document.createElement("div");
div_locationinfo.setAttribute("class","locationinfo");
div_box2.append(div_locationinfo);

h3_location=document.createElement("h3");
h3_location.innerText="Location";
div_locationinfo.append(h3_location);

anchor = document.createElement("a");
anchor.setAttribute("href",show2["ground_locat_link"])
div_locationinfo.append(anchor);

i_location = document.createElement("i");
i_location.setAttribute("class", "fa-solid fa-location-dot");
anchor.append(i_location);

p_address=document.createElement("p");
p_address.innerText=show2["ground_Address"]
div_locationinfo.append(p_address);


br_tag2=document.createElement("br");
div_box2.append(br_tag2);

div_sportsavail=document.createElement("div")
div_sportsavail.setAttribute("class","sportsavail");
div_box2.append(div_sportsavail);


h2_sportsavail=document.createElement("h2");
h2_sportsavail.innerText="Sports Available";
div_sportsavail.append(h2_sportsavail);

div_sportssymbol=document.createElement("div");
div_sportssymbol.setAttribute("class","symbol")
div_sportsavail.append(div_sportssymbol);


// for loopla podu

  if(show2["sport_avail_1"]==true){
    symbolimage1=document.createElement("img");
    symbolimage1.setAttribute("class","sportsicon");
    symbolimage1.setAttribute("src",showimage[0]["sportsiconcric"])
    // symbolimage.setAttribute("alt",)
    div_sportssymbol.append(symbolimage1);
    //you alrady have an current index "show" show["sportsAvailImg"]["sportsicon"+i]

  }
  if(show2["sport_avail_2"]==true){
    symbolimage2=document.createElement("img");
    symbolimage2.setAttribute("class","sportsicon");
    symbolimage2.setAttribute("src",showimage[0]["sportsiconfoot"])
    // symbolimage.setAttribute("alt",)
    div_sportssymbol.append(symbolimage2);

  }
  if(show2["sport_avail_3"]==true){
    symbolimage3=document.createElement("img");
    symbolimage3.setAttribute("class","sportsicon");
    symbolimage3.setAttribute("src",showimage[0]["sportsiconten"])
    // symbolimage.setAttribute("alt",)
    div_sportssymbol.append(symbolimage3);

  }




br_tag3=document.createElement("br");
div_box2.append(br_tag3);

div_timing=document.createElement("div")
div_timing.setAttribute("class","timinginfo");
div_box2.append(div_timing); 

h3_timing=document.createElement("h3");
h3_timing.setAttribute("class","time")
h3_timing.innerText="Timing";
div_timing.append(h3_timing);

i_clock = document.createElement("i");
i_clock.setAttribute("class", "fa-solid fa-clock");
div_timing.append(i_clock);

span_time=document.createElement("span")
span_time.innerText=show2["ground_timing_from"]+"-";
div_timing.append(span_time);

span_time2=document.createElement("span")
span_time2.innerText=show2["ground_timing_to"];
div_timing.append(span_time2);



br_tag4=document.createElement("br");
div_box2.append(br_tag4);


div_rules=document.createElement("div");
div_rules.setAttribute("class","rules");
div_sidebar_1.append(div_rules);

h2_rules=document.createElement("h2");
h2_rules.innerText="About it rules";
div_rules.append(h2_rules);

  p_rules=document.createElement("p");
  p_rules.innerText=show2["ground_rules"]
  div_rules.append(p_rules)



br_tag5=document.createElement("br");
div_sidebar_1.append(br_tag5);


div_price=document.createElement("div");
div_price.setAttribute("class","price");
div_sidebar_1.append(div_price);

p_price=document.createElement("p");
p_price.setAttribute("class","pricen")
p_price.innerText="Price"
div_price.append(p_price);

p_priceamount=document.createElement("p");
p_priceamount.setAttribute("class","pricelast")
p_priceamount.innerText=show2["ground_price"]
div_price.append(p_priceamount);

br_tag6=document.createElement("br");
div_sidebar_1.append(br_tag6);


div_addplayers=document.createElement("div");
div_addplayers.setAttribute("class","addplayer");
div_sidebar_1.append(div_addplayers);

h3_addplayers=document.createElement("h3");
h3_addplayers.innerText="You can also Add players to play with";
div_addplayers.append(h3_addplayers);

br_tag7=document.createElement("br");
div_addplayers.append(br_tag7);

anchoraddplayers = document.createElement("a");
anchoraddplayers.setAttribute("href","../../pages/player/findplayers.html")
div_addplayers.append(anchoraddplayers);



buttonAddPlayers=document.createElement("button")
buttonAddPlayers.setAttribute("class","addplayers")
buttonAddPlayers.innerText="Add Players";
anchoraddplayers.append(buttonAddPlayers)



// sidebar2

div_sidebar_2=document.createElement("div");
div_sidebar_2.setAttribute("class","sidebar2");
div_parent1.append(div_sidebar_2);


div_forms=document.createElement("form");
div_forms.setAttribute("id","formbook_btn");
div_sidebar_2.append(div_forms)


div_bookingbox=document.createElement("div"); 
div_bookingbox.setAttribute("class","booking1");
div_forms.append(div_bookingbox);


div_book1=document.createElement("div"); 
div_book1.setAttribute("class","book1");
div_bookingbox.append(div_book1);

h1_groundName=document.createElement("h1");
h1_groundName.innerText=show2["ground_name"]+" Booking";
div_book1.append(h1_groundName);

br_tag8=document.createElement("br");
div_book1.append(br_tag8);

br_tag9=document.createElement("br");
div_book1.append(br_tag8);


div_book2=document.createElement("div"); 
div_book2.setAttribute("class","book2");
div_bookingbox.append(div_book2);


label_date=document.createElement("label");
label_date.setAttribute("class","headingbook");
label_date.innerText="Date"
div_book2.append(label_date);


inputdate=document.createElement("input")
inputdate.setAttribute("type","date");
inputdate.setAttribute("id","date");
inputdate.setAttribute("required","");
div_book2.append(inputdate);


br_tag10=document.createElement("br");
div_book2.append(br_tag10);


span_timingSelect=document.createElement("span")
span_timingSelect.setAttribute("class","headingbook")
span_timingSelect.innerText="Timing"
div_book2.append(span_timingSelect);

select_timings=document.createElement("select")
select_timings.setAttribute("class","timings");
select_timings.setAttribute("required","");
div_book2.append(select_timings);


// loopit
for(let i=0;i<=15;i++){
    option_timings=document.createElement("option");
    option_timings.innerText=ground_details[0]["timingoptions"]["timing"+i];
    select_timings.append(option_timings)
}




br_tag11=document.createElement("br");
div_book2.append(br_tag11);


// sportsselect
span_sportsSelect=document.createElement("span")
span_sportsSelect.setAttribute("class","headingbook")
span_sportsSelect.innerText="SPORTS"
div_book2.append(span_sportsSelect);

select_sports=document.createElement("select")
select_sports.setAttribute("class","sportss");
select_sports.setAttribute("required","");
div_book2.append(select_sports);


// loopit
if(show2["sport_avail_1"]==true){
    option_sports1=document.createElement("option");
    option_sports1.innerText=ground_details[0]["sportsoptions"]["sports0"]
    select_sports.append(option_sports1)
  }
  if(show2["sport_avail_2"]==true){
    option_sports2=document.createElement("option");
    option_sports2.innerText=ground_details[0]["sportsoptions"]["sports1"]
    select_sports.append(option_sports2)
  }

  if(show2["sport_avail_3"]==true){
    option_sports3=document.createElement("option");
    option_sports3.innerText=ground_details[0]["sportsoptions"]["sports2"]
    select_sports.append(option_sports3)
  }




br_tag12=document.createElement("br");
div_book2.append(br_tag12);

// durationselect
span_durationSelect=document.createElement("span")
span_durationSelect.setAttribute("class","headingbook")
span_durationSelect.innerText="Duration"
div_book2.append(span_durationSelect);

select_duration=document.createElement("select")
select_duration.setAttribute("class","durations");
select_duration.setAttribute("required","");
div_book2.append(select_duration);

sel_duration=document.createElement("option");
sel_duration.innerText="Select an Option";
select_duration.append(sel_duration)


// loopit
for(let i=0;i<=2;i++){
    option_duration=document.createElement("option");
    option_duration.innerText=ground_details[0]["durationoptions"]["duration"+i];
    option_duration.setAttribute("value",ground_details[0]["optionvalue"]["value"+i])
    select_duration.append(option_duration)
}
select_duration.options[0].removeAttribute("selected");



br_tag13=document.createElement("br");
div_book2.append(br_tag13);

br_tag14=document.createElement("br");
div_book2.append(br_tag14);




// playersselect
span_playersSelect=document.createElement("span")
span_playersSelect.setAttribute("class","headingbook")
span_playersSelect.innerText="Players"
div_book2.append(span_playersSelect);

select_players=document.createElement("select")
select_players.setAttribute("class","players");
select_players.setAttribute("required","");
div_book2.append(select_players);


// loopit
for(let i=0;i<=12;i++){
    option_players=document.createElement("option");
    option_players.innerText=ground_details[0]["playersoptions"]["player"+i]
    select_players.append(option_players)
}


br_tag15=document.createElement("br");
div_book2.append(br_tag15);
br_tag16=document.createElement("br");
div_book2.append(br_tag16);


// sportsselect
span_sportsSelect=document.createElement("span")
span_sportsSelect.setAttribute("class","headingbook")
span_sportsSelect.innerText="Courts"
div_book2.append(span_sportsSelect);

select_sports=document.createElement("select")
select_sports.setAttribute("class","courtss");
div_book2.append(select_sports);


// loopit
for(let i=1;i<=show2["groundCourt"];i++){
    option_courts=document.createElement("option");
    option_courts.innerText=ground_details[0]["courtsoptions"]["courts"+i]
    select_sports.append(option_courts)
    
}


br_tag12=document.createElement("br");
div_book2.append(br_tag12);

anchorpayonline = document.createElement("a");
anchorpayonline.setAttribute("href","../../pages/payment/paymentpage.html")
div_book2.append(anchorpayonline);



// button_payonline=document.createElement("button")
// button_payonline.setAttribute("class","pay")
// button_payonline.setAttribute("type","button")
// button_payonline.innerText="Pay online";
// anchorpayonline.append(button_payonline)

br_tag17=document.createElement("br");
div_book2.append(br_tag17);
br_tag17=document.createElement("br");
div_book2.append(br_tag17);


anchorpaycash = document.createElement("a");
anchorpaycash.setAttribute("href","../../pages/payment/paymentpage.html")
div_book2.append(anchorpaycash);



button_paycash=document.createElement("p")
button_paycash.setAttribute("class","paycash")
button_paycash.innerText="Book";
anchorpaycash.append(button_paycash)


document.querySelector("div.main2").append(div_parent1)
console.log(div_parent1);

// anchoredit = document.createElement("a");
// // anchor.setAttribute("href", "../../pages/bookinground/ground1.html")
// anchoredit.setAttribute("href", "../../pages/admin/form.html?userId="+show2["ground_id"])
// div_parent1.append(anchoredit)
// console.log(anchoredit);
// // <button class="book"></button>
// button_edit = document.createElement("button");
// button_edit.setAttribute("class", "edit");
// // button_booknow =document.createTextNode("Book Now")
// // button_book.append(button_booknow)
// button_edit.innerText = "edit"
// anchoredit.append(button_edit);

// console.log(div_child);
// document.querySelector("div.parent").append(div_child)
 popupdiv=document.createElement("div")
popupdiv.setAttribute("id","popupdivmessage");

 contentp=document.createElement("p");
contentp.innerText="Sure you want to book it"
contentp.style.color="black"
popupdiv.append(contentp);

button_no=document.createElement("p")
button_no.setAttribute("id","nobtn")
button_no.innerText="No";
popupdiv.append(button_no);

button_yes=document.createElement("button")
button_yes.setAttribute("id","yesbtn")
button_yes.setAttribute("type","submit")
button_yes.innerText="Yes";
popupdiv.append(button_yes);




document.getElementById("formbook_btn").append(popupdiv)




// const bookBtn=document.querySelector(".paycash")
// bookBtn.addEventListener("submit",()=>{
//   if(loginUser!=="false"){
//     alert("pok")
//   }
  
// });
popbox=document.getElementById("popupdivmessage");
yesbtn=document.getElementById("yesbtn")
nobtn=document.getElementById("nobtn")
const bookingBtn=document.getElementById("formbook_btn");
const bookbtn=document.querySelector(".paycash")
bookbtn.addEventListener("click",(e)=>{
  e.preventDefault()
  checkUser();

  // alert("ok");

popbox.style.display="block"



})
nobtn.addEventListener("click",(e)=>{
  e.preventDefault()

  // alert("ok");

popbox.style.display="none"

})


function checkUser(){
  if( !loginUser ){
    alert("Please login to book grounds ")
    e.preventDefault();
  }

}








const id_generator_booking = Math.floor(Math.random() * 300);
let user_record = JSON.parse(localStorage.getItem("user_details"));
let userloggedIn =JSON.parse(localStorage.getItem("user_logged_in"));


bookingBtn.addEventListener("submit",(e)=>{
  e.preventDefault();
 getBookingInfo();
console.log("jihuihuhbuhugu");
popbox.style.display="none"




});







function getBookingInfo(){

  const bookDate=document.getElementById("date").value;
  const selectTimings=document.querySelector(".timings").value
  const selectSports=document.querySelector(".sportss").value;
  const selectDuration=document.querySelector(".durations").value;
  const selectplayers=document.querySelector(".players").value;
  const selectedCourts=document.querySelector(".courtss").value
  const groundPrice=document.querySelector(".pricelast").innerText
  

let userBookingInfo=new Array();
userBookingInfo=JSON.parse(localStorage.getItem("bookingInfo")) ?
JSON.parse(localStorage.getItem("bookingInfo")) : []

if (userBookingInfo.some((v) => {
  return v.booking_Date == bookDate && v.booking_time==selectTimings && v.selectedCourts ==selectedCourts
})) {
  alert("The court is already booked on the selected timing ")
}


else{



  userBookingInfo.push(
    {
      "ordered_id":id_generator_booking,
      "request_user_id":userloggedIn[0].user_id,
      "ground_id":show2["ground_id"],
      "seller_id":show2["seller_id"],
      "booking_Date":bookDate,
      "booking_time":selectTimings,
      "booking_sports":selectSports,
      "booking_duration":selectDuration,
      "selected_players":selectplayers,
      "selectedCourts":selectedCourts,
      "booking_status":"pending",
      'groundPrice':groundPrice
    }
  );
  


}
localStorage.setItem("bookingInfo", JSON.stringify(userBookingInfo))
  




}
// function getgroundData(){



//   let userbooked_grounds=new Array();
//   userbooked_grounds=JSON.parse(localStorage.getItem("bookingGroundInfo")) ?
//   JSON.parse(localStorage.getItem("bookingGroundInfo")) : []
  

  
  
  
//     userbooked_grounds.push(
//       {
//  "ordered_id":id_generator_booking,
//  "request_user_id":userloggedIn[0].user_id,
//  "ground_id":show2["ground_id"]

//       }
//     );
    
  
  

//   localStorage.setItem("bookingGroundInfo", JSON.stringify(userbooked_grounds))
    
  
  





  
// }




// change  amount

let pricediv=parseInt(p_priceamount.innerText);
let newadded=parseInt(show2["groundIncreasePrice"]);
let newprice=pricediv

let one=newprice=pricediv+newadded;
console.log(one);
let two =newprice=pricediv+newadded*2;
console.log(two);
let three=newprice=pricediv+newadded*3



let extraHours=document.querySelector(".durations");
extraHours.addEventListener("change",()=>{
 let value=extraHours.value
 console.log(value);


 if(value==1 ){
  p_priceamount.innerText=one
 }
 else if(value==2){

  p_priceamount.innerText=two
 }
 else if(value==3){

  p_priceamount.innerText=three
  
 }
 else{
  p_priceamount.innerText=show2["ground_price"]
 }


})


// for date 

let date = document.getElementById("date");
console.log(date);
//let today = new Date().toISOString().split("T")[0];
let today=new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
.toISOString()
.split("T")[0];
date.setAttribute("min", today);