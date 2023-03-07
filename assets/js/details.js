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
    "timing0":"8:00AM-9:00AM",
    "timing1":"8:00AM-10:00AM",
    "timing2":"8:00AM-9:00AM",
    "timing3":"8:00AM-9:00AM",
    "timing4":"8:00AM-9:00AM",
    "timing5":"8:00AM-9:00AM",
    "timing6":"8:00AM-9:00AM",
    "timing7":"8:00AM-9:00AM",
    "timing8":"8:00AM-9:00AM",
    "timing9":"8:00AM-9:00AM",
    "timing10":"8:00AM-9:00AM",
    "timing11":"8:00AM-9:00AM",

  },
  "sportsoptions":{
    "sports0":"Cricket",
    "sports1":"Tennis",
    "sports2":"Football"
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
    "timing0":"8:00AM-9:00AM",
    "timing1":"8:00AM-10:00AM",
    "timing2":"8:00AM-9:00AM",
    "timing3":"8:00AM-9:00AM",
    "timing4":"8:00AM-9:00AM",
    "timing5":"8:00AM-9:00AM",
    "timing6":"8:00AM-9:00AM",
    "timing7":"8:00AM-9:00AM",
    "timing8":"8:00AM-9:00AM",
    "timing9":"8:00AM-9:00AM",
    "timing10":"8:00AM-9:00AM",
    "timing11":"8:00AM-9:00AM",

  },
  "sportsoptions":{
    "sports0":"Cricket",
    "sports1":"Tennis",
    "sports2":"Football"
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







const url=window.location.search;
console.log(url)
const urlParameter= new URLSearchParams(url);
console.log(urlParameter)
const groundSearch=urlParameter.get("name");
console.log(groundSearch);

let show;
ground_details.find(function(e){
    if(e["groundname"] == groundSearch){
        return show= e;

    }
    else{
        return show = 0;
    }
})


let div_parent1;
let div_sidebar_1;
let div_box1;
let h2_groundName;
let p_placeName;
let div_containerSlider;
let inputcheckbox1;
let inputcheckbox2;
let inputcheckbox3;
let div_labeldot;
let label_dots1;
let label_dots2;
let label_dots3;
let div_box2;
let ground_image1;
let ground_image2;
let ground_image3;

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


div_parent1=document.createElement("d=iv");
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
h2_groundName.innerText=show["groundname"]
div_box1.append(h2_groundName);

p_placeName=document.createElement("p");
p_placeName.setAttribute("class","place");
p_placeName.innerText=show["groundPlace"]
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
ground_image1.setAttribute("src",show["groundimage"]["image1"])
// console.log(ground_image1)
// ground_image1.setAttribute("alt",)
ground_image1.setAttribute("class","groundg1")
div_imagecontainer.append(ground_image1)

ground_image2=document.createElement("img");
ground_image2.setAttribute("src",show["groundimage"]["image2"])
// ground_image2.setAttribute("alt",)
ground_image2.setAttribute("class","groundg2")
div_imagecontainer.append(ground_image2);

ground_image3=document.createElement("img");
ground_image3.setAttribute("src",show["groundimage"]["image3"])
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
anchor.setAttribute("href",show["locationInfo"]["locationLink"])
div_locationinfo.append(anchor);

i_location = document.createElement("i");
i_location.setAttribute("class", "fa-solid fa-location-dot");
anchor.append(i_location);

p_address=document.createElement("p");
p_address.innerText=show["locationInfo"]["locationAddress"]
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
for(let i=0;i<=2;i++){
    symbolimage=document.createElement("img");
    symbolimage.setAttribute("class","sportsicon");
    symbolimage.setAttribute("src",show["sportsAvailImg"]["sportsicon"+i])
    // symbolimage.setAttribute("alt",)
    div_sportssymbol.append(symbolimage);
    //you alrady have an current index "show" show["sportsAvailImg"]["sportsicon"+i]
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
span_time.innerText=show["timing"];
div_timing.append(span_time);


br_tag4=document.createElement("br");
div_box2.append(br_tag4);


div_rules=document.createElement("div");
div_rules.setAttribute("class","rules");
div_sidebar_1.append(div_rules);

h2_rules=document.createElement("h2");
h2_rules.innerText="About it rules";
div_rules.append(h2_rules);

// loopla p podu (3)
for(let i=0;i<=2;i++){
    p_rules=document.createElement("p");
    p_rules.innerText=show["rules"]["rule"+i]
    div_rules.append(p_rules)
}


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
p_priceamount.innerText=show["price"]
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
anchoraddplayers.setAttribute("href","/pages/bookinground/booking.html")
div_addplayers.append(anchoraddplayers);



buttonAddPlayers=document.createElement("button")
buttonAddPlayers.setAttribute("class","addplayers")
buttonAddPlayers.innerText="Add Players";
anchoraddplayers.append(buttonAddPlayers)



// sidebar2

div_sidebar_2=document.createElement("div");
div_sidebar_2.setAttribute("class","sidebar2");
div_parent1.append(div_sidebar_2);

div_bookingbox=document.createElement("div"); 
div_bookingbox.setAttribute("class","booking1");
div_sidebar_2.append(div_bookingbox);


div_book1=document.createElement("div"); 
div_book1.setAttribute("class","book1");
div_bookingbox.append(div_book1);

h1_groundName=document.createElement("h1");
h1_groundName.innerText=show["groundbooking"];
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
div_book2.append(inputdate);


br_tag10=document.createElement("br");
div_book2.append(br_tag10);


span_timingSelect=document.createElement("span")
span_timingSelect.setAttribute("class","headingbook")
span_timingSelect.innerText="Timing"
div_book2.append(span_timingSelect);

select_timings=document.createElement("select")
select_timings.setAttribute("class","timings");
div_book2.append(select_timings);


// loopit
for(let i=0;i<=11;i++){
    option_timings=document.createElement("option");
    option_timings.innerText=show["timingoptions"]["timing"+i];
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
div_book2.append(select_sports);


// loopit
for(let i=0;i<=2;i++){
    option_sports=document.createElement("option");
    option_sports.innerText=show["sportsoptions"]["sports"+i]
    select_sports.append(option_sports)
    
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
div_book2.append(select_duration);


// loopit
for(let i=0;i<=2;i++){
    option_duration=document.createElement("option");
    option_duration.innerText=show["durationoptions"]["duration"+i]
    select_duration.append(option_duration)
}



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
div_book2.append(select_players);


// loopit
for(let i=0;i<=12;i++){
    option_players=document.createElement("option");
    option_players.innerText=show["playersoptions"]["player"+i]
    select_players.append(option_players)
}


br_tag15=document.createElement("br");
div_book2.append(br_tag15);
br_tag16=document.createElement("br");
div_book2.append(br_tag16);

anchorpayonline = document.createElement("a");
anchorpayonline.setAttribute("href","../../pages/payment/paymentpage.html")
div_book2.append(anchorpayonline);



button_payonline=document.createElement("button")
button_payonline.setAttribute("class","pay")
button_payonline.innerText="Pay online";
anchorpayonline.append(button_payonline)

br_tag17=document.createElement("br");
div_book2.append(br_tag17);
br_tag17=document.createElement("br");
div_book2.append(br_tag17);


anchorpaycash = document.createElement("a");
anchorpaycash.setAttribute("href","../../pages/payment/paymentpage.html")
div_book2.append(anchorpaycash);



button_paycash=document.createElement("button")
button_paycash.setAttribute("class","paycash")
button_paycash.innerText="Pay by cash";
anchorpaycash.append(button_paycash)


document.querySelector("div.main2").append(div_parent1)






