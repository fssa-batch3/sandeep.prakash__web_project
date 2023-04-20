// json
let user_record = JSON.parse(localStorage.getItem("user_details"));
const sellerdata = JSON.parse(localStorage.getItem("groundadmin_details"));
const sellerloggedDta = JSON.parse(localStorage.getItem("seller_logged_in"));
let requestBooking=JSON.parse(localStorage.getItem("bookingInfo"));
let  sellerId= sellerloggedDta[0].seller_Id;


let filterGroundrequest=requestBooking.filter((data)=>{
    return data.seller_id==sellerId

});


for(const request of filterGroundrequest){
    const{ request_user_id }=request
    const userDetails=user_record.find(users=> request_user_id ===users.user_id)
    request["userDetail"]=userDetails
}

console.log(JSON.stringify(filterGroundrequest, null, 2));



let childdiv;
let columndiv1;
for( let i=0; i <filterGroundrequest.length;i++){
    console.log(childdiv);
     childdiv=document.createElement("div");
     childdiv.setAttribute("class", "child");
     

     columndiv1=document.createElement("div");
    columndiv1.setAttribute("class", "column1");
    childdiv.append(columndiv1);

    h4name=document.createElement("h4");
    // h4name.setAttribute("");
    h4name.innerText="User Name"
    columndiv1.append(h4name);

    h4date=document.createElement("h4");
    // h4name.setAttribute("");
    h4date.innerText="Date"
    columndiv1.append(h4date);

    h4timing=document.createElement("h4");
    // h4name.setAttribute("");
    h4timing.innerText="Timing"
    columndiv1.append(h4timing)

    h4sports=document.createElement("h4");
    // h4name.setAttribute("");
    h4sports.innerText="Sports"
    columndiv1.append(h4sports)

    h4duration=document.createElement("h4");
    // h4name.setAttribute("");
    h4duration.innerText="Duration"
    columndiv1.append(h4duration)


    h4players=document.createElement("h4");
    // h4name.setAttribute("");
    h4players.innerText="Players"
    columndiv1.append(h4players)

    h4price=document.createElement("h4");
    // h4name.setAttribute("");
    h4price.innerText="Price"
    columndiv1.append(h4price);



    columndiv2=document.createElement("div");
    columndiv2.setAttribute("class", "column2");
    childdiv.append(columndiv2);

    
    divbox1=document.createElement("div");
    divbox1.setAttribute("class", "box1");
    divbox1.innerText=filterGroundrequest[i]["userDetail"]["user_email"];
    columndiv2.append(divbox1);

    divbox2=document.createElement("div");
    divbox2.setAttribute("class", "box2");
    divbox2.innerText=filterGroundrequest[i]["booking_Date"];
    columndiv2.append(divbox2);

    divbox3=document.createElement("div");
    divbox3.setAttribute("class", "box3");
    divbox3.innerText=filterGroundrequest[i]["booking_time"];
    columndiv2.append(divbox3);

    divbox4=document.createElement("div");
    divbox4.setAttribute("class", "box4");
    divbox4.innerText=filterGroundrequest[i]["booking_sports"];
    columndiv2.append(divbox4);

    divbox5=document.createElement("div");
    divbox5.setAttribute("class", "box5");
    divbox5.innerText=filterGroundrequest[i]["booking_duration"];
    columndiv2.append(divbox5);

    divbox6=document.createElement("div");
    divbox6.setAttribute("class", "box6");
    divbox6.innerText=filterGroundrequest[i]["selected_players"];
    columndiv2.append(divbox6);

    divbox7=document.createElement("div");
    divbox7.setAttribute("class", "box7");
    // divbox7.innerText=requestBooking[i]["selected_players"];
    columndiv2.append(divbox7);

    btnaccept=document.createElement("button");
    btnaccept.setAttribute("class","acceptbtn");
    btnaccept.setAttribute("value",filterGroundrequest[i]["ordered_id"]);
    btnaccept.innerText="Accept"
    childdiv.append(btnaccept)

    btndecline=document.createElement("button");
    btndecline.setAttribute("class","declinebtn");
    btndecline.setAttribute("value",filterGroundrequest[i]["ordered_id"]);
    btndecline.innerText="Decline"
    childdiv.append(btndecline)

document.querySelector(".parent").append(childdiv)


}






const acceptbtn= document.querySelectorAll(".acceptbtn")

acceptbtn.forEach((button)=>{
    button.addEventListener("click",()=>{
     let orderedId=button.value
     console.log(orderedId);
    //  let filterGroundrequest=JSON.parse(localStorage.getItem("bookingInfo")).filter((data)=>{
    //    return data.seller_id==sellerId

    //  })
     let bookingindex=requestBooking.findIndex((booking)=>{
      return  booking.ordered_id==orderedId
     });
     console.log(filterGroundrequest)
     console.log(bookingindex)
     console.log(requestBooking)

     if(bookingindex 
        >-1){ 
        requestBooking[bookingindex].booking_status="accepted";
        console.log(requestBooking[bookingindex])
        console.log(requestBooking)
        localStorage.setItem("bookingInfo",JSON.stringify(requestBooking));
        alert("booking accepted")
     }
  else{
    alert(`${orderedId} not found`)
  }
    //  let filterRequest=JSON.parse(localStorage.getItem("bookingInfo"))


  

})

})

const declinebtn=document.querySelectorAll(".declinebtn");
declinebtn.forEach((button)=>{
    button.addEventListener("click",()=>{
     let orderedId=button.value
     console.log(orderedId);
    //  let filterGroundrequest=JSON.parse(localStorage.getItem("bookingInfo")).filter((data)=>{
    //    return data.seller_id==sellerId

    //  })
     let bookingindex=requestBooking.findIndex((booking)=>{
      return  booking.ordered_id==orderedId
     });
     console.log(filterGroundrequest)
     console.log(bookingindex)
     console.log(requestBooking)

     if(bookingindex 
        >-1){ 
        requestBooking[bookingindex].booking_status="declined";
        console.log(requestBooking[bookingindex])
        console.log(requestBooking)
        localStorage.setItem("bookingInfo",JSON.stringify(requestBooking));
        alert("booking declined")
     }
  else{
    alert(`${orderedId} not found`)
  }
    //  let filterRequest=JSON.parse(localStorage.getItem("bookingInfo"))


  

})

})

// console.log(filterGroundrequest);

// let usersid=filterGroundrequest["request_user_id"];
// console.log(usersid);

// function acceptRequest(){


// //  for(let i=0;i<requestBooking.length;i++){
// //     if(requestBooking[i]["ordered_id"]===orderedId){
// //   console.log(requestBooking[i]["ordered_id"]);      
// //         requestBooking[i]["booking_status"]="accepted";
// //         console.log(requestBooking[i]["booking_status"]);
        
// // localStorage.setItem("bookingInfo",JSON.stringify(requestBooking))
// //         console.log("sandeep");
// //         break
// //     }
// //  }


// }

