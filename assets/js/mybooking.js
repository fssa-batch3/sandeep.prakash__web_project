

let user_record = JSON.parse(localStorage.getItem("user_details"));
const loginUser = JSON.parse(localStorage.getItem("user_logged_in"));
const groundOwnerProduct = JSON.parse(localStorage.getItem("ground_info"));
let requestBooking = JSON.parse(localStorage.getItem("bookingInfo"));

let loginuserid = loginUser[0]["user_id"]

let acceptedBooking = requestBooking.filter((data) => {
  return data.booking_status == "accepted" && data.request_user_id == loginuserid

})
console.log(acceptedBooking);

for (const booking of acceptedBooking) {
  const { ground_id } = booking
  const groundDetail = groundOwnerProduct.find(ground => ground_id === ground.ground_id)
  booking["groundDetail"] = groundDetail


  const{ request_user_id }=booking
  const userDetails=user_record.find(users=> request_user_id ===users.user_id)
  booking["userDetail"]=userDetails
}

console.log(JSON.stringify(acceptedBooking, null, 2))



// sports image
 const showimage=[
  {
          "sportsiconcric":"../../assets/images/cricketicon.png",
          "sportsiconfoot":"../../assets/images/footballicon.png",
          "sportsiconten":"../../assets/images/tennisicon.png",
          "ratingsnumber": "4.0",
        },

      


]
//

// let filterground;
// for(let i=0;i<groundOwnerProduct.length;i++){
//   let groundid=acceptedBooking[i]["ground_id"]
//  filterground=groundOwnerProduct.filter((ground)=>{
//    return ground.ground_id===groundid

//   })
// }




// const url2=window.location.search;  //?userid=97;
// console.log(url2);
// const urlParameter2= new URLSearchParams(url2);
// // console.log(urlParameter)   // "userid":"97"
// const userSearch=urlParameter2.get("userid");
// // console.log(groundSearch2); // get value of name

//  let show2;
// user_record.find(function(e){
//     if(e["user_id"] == userSearch){
//         return show2= e;

//     }
//     else{
//         return show2 = 0;
//     }
// })




// const filtered=JSON.parse(localStorage.getItem("ground_info"));

// console.log(filtered);
// // ground_list.push(filtered);

// // let filtered;
// // filtered=filtered.filter((item=>{
// //   if(item["status"]==true){
// //     return true

// //   }
// //   else{
// // return false
// //   }
// // }))


let divBox;
for (let i = 0; i < acceptedBooking.length; i++) {
  // console.log(divBox);


  divBox = document.createElement("div");
  divBox.setAttribute("class", "box");
  //  <div class="child"> </div>
  div_child = document.createElement("div");
  div_child.setAttribute("class", "child");
  divBox.append(div_child)
  div_child.setAttribute("value", acceptedBooking[i]["groundDetail"]["ground_city"])
  // console.log(div_child);
  //<br>
  br_tag = document.createElement("br");
  div_child.append(br_tag);
  //  <h3 class="card-title"> </h5>
  h3_card_title = document.createElement("h3");
  h3_card_title.setAttribute("class", "groundn");
  h3_card_title.innerText = acceptedBooking[i]["groundDetail"]["ground_name"];
  div_child.append(h3_card_title);


  //  <img src="" class="groimg" alt=""/>
  img_card = document.createElement("img");
  img_card.setAttribute("src", acceptedBooking[i]["groundDetail"]["groundimg1"]);
  img_card.setAttribute("alt", "groundimage");
  img_card.setAttribute("class", "groimg");
  div_child.append(img_card);

  //  <p class="location_name"> </p>
  p_location_name = document.createElement("p");
  p_location_name.setAttribute("class", "locationn");
  p_location_name.innerText = acceptedBooking[i]["groundDetail"]["ground_Place"];
  div_child.append(p_location_name);



  //  <div class="symbol"> </div>
  div_symbol = document.createElement("div");
  div_symbol.setAttribute("class", "symbol");
  div_child.append(div_symbol);


  if(acceptedBooking[i]["groundDetail"]["sport_avail_1"]==true){

  imgicon_card1 = document.createElement("img");
  imgicon_card1.setAttribute("class", "sportsicon");
  imgicon_card1.setAttribute("src", showimage[0]["sportsiconcric"]);
  // imgicon_card1.setAttribute("alt", "icons");
  div_symbol.append(imgicon_card1);

  }

  if(acceptedBooking[i]["groundDetail"]["sport_avail_2"]==true){
  
  imgicon_card2 = document.createElement("img");
  imgicon_card2.setAttribute("class", "sportsicon");
  imgicon_card2.setAttribute("src", showimage[0]["sportsiconfoot"]);
  // imgicon_card2.setAttribute("alt", "icons");
  div_symbol.append(imgicon_card2);

  }


   if(acceptedBooking[i]["groundDetail"]["sport_avail_3"]==true){
 
  imgicon_card3 = document.createElement("img");
  imgicon_card3.setAttribute("class", "sportsicon");
  imgicon_card3.setAttribute("src", showimage[0]["sportsiconten"]);
  // imgicon_card.setAttribute("alt", "icons");
  div_symbol.append(imgicon_card3);

  }



  //  <div class="ratings"> </div>
  div_ratings = document.createElement("div");
  div_ratings.setAttribute("class", "ratings");
  div_child.append(div_ratings);

  //  <i class="fa-solid fa-star"> </i>
  i_star = document.createElement("i");
  i_star.setAttribute("class", "fa-solid fa-star");
  // h3_card_title.innerText = names[i];
  div_ratings.append(i_star);

  //  <span class="ratingno"> </span>
  ratings_no = document.createElement("span");
  ratings_no.setAttribute("class", "ratingno");
    ratings_no.innerText = showimage[0]["ratingsnumber"];
  div_ratings.append(ratings_no);

  //anchor
  // anchor = document.createElement("a");
  // // anchor.setAttribute("href", "../../pages/bookinground/ground1.html")
  // // anchor.setAttribute("href", "../../pages/bookinground/ground1.html?userId=" + filtered[i]["ground_id"])
  // div_child.append(anchor)

  // <button class="book"></button>
  button_book = document.createElement("button");
  button_book.setAttribute("class", "cancelbtn");
  button_book.setAttribute("value",acceptedBooking[i]["ordered_id"])
  // button_booknow =document.createTextNode("Book Now")
  // button_book.append(button_booknow)
  button_book.innerText = "Cancel"
  div_child.append(button_book);






  // INFO OF BOOKING


  childdiv = document.createElement("div");
  childdiv.setAttribute("class", "child1");
  divBox.append(childdiv)


  columndiv1 = document.createElement("div");
  columndiv1.setAttribute("class", "column1");
  childdiv.append(columndiv1);

  h4name = document.createElement("h4");
  // h4name.setAttribute("");
  h4name.innerText = "User Name"
  columndiv1.append(h4name);

  h4date = document.createElement("h4");
  // h4name.setAttribute("");
  h4date.innerText = "Date"
  columndiv1.append(h4date);

  h4timing = document.createElement("h4");
  // h4name.setAttribute("");
  h4timing.innerText = "Timing"
  columndiv1.append(h4timing)

  h4sports = document.createElement("h4");
  // h4name.setAttribute("");
  h4sports.innerText = "Sports"
  columndiv1.append(h4sports)

  h4duration = document.createElement("h4");
  // h4name.setAttribute("");
  h4duration.innerText = "Duration"
  columndiv1.append(h4duration)


  h4players = document.createElement("h4");
  // h4name.setAttribute("");
  h4players.innerText = "Players"
  columndiv1.append(h4players);




  h4courts=document.createElement("h4");
  // h4name.setAttribute("");
  h4courts.innerText="Court"
  columndiv1.append(h4courts);

  h4price = document.createElement("h4");
  // h4name.setAttribute("");
  h4price.innerText = "Price"
  columndiv1.append(h4price);



  columndiv2 = document.createElement("div");
  columndiv2.setAttribute("class", "column2");
  childdiv.append(columndiv2);


  divbox1 = document.createElement("div");
  divbox1.setAttribute("class", "box1");
  divbox1.innerText = acceptedBooking[i]["userDetail"]["user_email"];
  columndiv2.append(divbox1);

  divbox2 = document.createElement("div");
  divbox2.setAttribute("class", "box2");
  divbox2.innerText=acceptedBooking[i]["booking_Date"];
  columndiv2.append(divbox2);

  divbox3 = document.createElement("div");
  divbox3.setAttribute("class", "box3");
  divbox3.innerText=acceptedBooking[i]["booking_time"];
  columndiv2.append(divbox3);

  divbox4 = document.createElement("div");
  divbox4.setAttribute("class", "box4");
  divbox4.innerText=acceptedBooking[i]["booking_sports"];
  columndiv2.append(divbox4);

  divbox5 = document.createElement("div");
  divbox5.setAttribute("class", "box5");
  divbox5.innerText=acceptedBooking[i]["booking_duration"];
  columndiv2.append(divbox5);

  divbox6 = document.createElement("div");
  divbox6.setAttribute("class", "box6");
  divbox6.innerText=acceptedBooking[i]["selected_players"];
  columndiv2.append(divbox6);

  divbox7=document.createElement("div");
  divbox7.setAttribute("class", "box7");
  divbox7.innerText=acceptedBooking[i]["selectedCourts"];
  columndiv2.append(divbox7);



  divbox8=document.createElement("div");
  divbox8.setAttribute("class", "box8");
  divbox8.innerText=acceptedBooking[i]["groundPrice"];
  columndiv2.append(divbox8);

  // btnaccept = document.createElement("button");
  // btnaccept.setAttribute("id", "acceptbtn");
  // // btnaccept.innerText="Accept"
  // childdiv.append(btnaccept)

  // btndecline = document.createElement("button");
  // btndecline.setAttribute("id", "declinebtn");
  // // btndecline.innerText="Decline"
  // childdiv.append(btndecline)

  // document.querySelector(".parent").append(childdiv)



  // console.log(div_child);
  document.querySelector("div.parent").append(divBox)


}



//cancel

const cancelbtn=document.querySelectorAll(".cancelbtn");
cancelbtn.forEach((button)=>{
    button.addEventListener("click",()=>{
     let orderedId=button.value
     console.log(orderedId);
    //  let filterGroundrequest=JSON.parse(localStorage.getItem("bookingInfo")).filter((data)=>{
    //    return data.seller_id==sellerId

    //  })
     let bookingindex=requestBooking.findIndex((booking)=>{
      return  booking.ordered_id==orderedId
     });
    //  console.log(filterGroundrequest)
     console.log(bookingindex)
    //  console.log(requestBooking)

     if(bookingindex > -1 && requestBooking[bookingindex].booking_status=="accepted"){ 
        requestBooking[bookingindex].booking_status="cancel";
        console.log(requestBooking[bookingindex])
        console.log(requestBooking)
        localStorage.setItem("bookingInfo",JSON.stringify(requestBooking));
        alert("canceled")
     }
  else{
    alert(`${orderedId} not found`)
  }
    //  let filterRequest=JSON.parse(localStorage.getItem("bookingInfo"))


  

})

})




