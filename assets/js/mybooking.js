

let user_record = JSON.parse(localStorage.getItem("user_details"));

const url2=window.location.search;  //?userid=97;
console.log(url2);
const urlParameter2= new URLSearchParams(url2);
// console.log(urlParameter)   // "userid":"97"
const userSearch=urlParameter2.get("userid");
// console.log(groundSearch2); // get value of name

 let show2;
user_record.find(function(e){
    if(e["user_id"] == userSearch){
        return show2= e;

    }
    else{
        return show2 = 0;
    }
})











const filtered=JSON.parse(localStorage.getItem("ground_info"));

console.log(filtered);
// ground_list.push(filtered);

// let filtered;
// filtered=filtered.filter((item=>{
//   if(item["status"]==true){
//     return true

//   }
//   else{
// return false
//   }
// }))



for (let i = 0; i <filtered.length; i++) {
  //  <div class="child"> </div>
  div_child = document.createElement("div");
  div_child.setAttribute("class", "child");
  div_child.setAttribute("value", filtered[i]["ground_city"])
  // console.log(div_child);
  //<br>
  br_tag = document.createElement("br");
  div_child.append(br_tag);
  //  <h3 class="card-title"> </h5>
  h3_card_title = document.createElement("h3");
  h3_card_title.setAttribute("class", "groundn");
  h3_card_title.innerText = filtered[i]["ground_name"];
  div_child.append(h3_card_title);


  //  <img src="" class="groimg" alt=""/>
  img_card = document.createElement("img");
  img_card.setAttribute("src", filtered[i]["groundimg1"]);
  img_card.setAttribute("alt", "groundimage");
  img_card.setAttribute("class", "groimg");
  div_child.append(img_card);

  //  <p class="location_name"> </p>
  p_location_name = document.createElement("p");
  p_location_name.setAttribute("class", "locationn");
  p_location_name.innerText = filtered[i]["ground_Place"];
  div_child.append(p_location_name);



  //  <div class="symbol"> </div>
  div_symbol = document.createElement("div");
  div_symbol.setAttribute("class", "symbol");
  div_child.append(div_symbol);


if(filtered[i]["sport_avail_1"]==true){
    //  <img src="" class="sportsicon" alt=""/>
    imgicon_card1 = document.createElement("img");
    imgicon_card1.setAttribute("class", "sportsicon");
    // imgicon_card1.setAttribute("src", ground_list[i]["sportsicon"]["cricketicon"]);
    imgicon_card1.setAttribute("alt", "icons");
    div_symbol.append(imgicon_card1);

}

  if(filtered[i]["sport_avail_2"]==true){
    //  <img src="" class="sportsicon" alt=""/>
    imgicon_card2 = document.createElement("img");
    imgicon_card2.setAttribute("class", "sportsicon");
    // imgicon_card2.setAttribute("src", ground_list[i]["sportsicon"]["footballicon"]);
    imgicon_card2.setAttribute("alt", "icons");
    div_symbol.append(imgicon_card2);

}


 if(filtered[i]["sport_avail_3"]==true){
    //  <img src="" class="sportsicon" alt=""/>
    imgicon_card3 = document.createElement("img");
    imgicon_card3.setAttribute("class", "sportsicon");
    // imgicon_card3.setAttribute("src", ground_list[i]["sportsicon"]["tennisicon"]);
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
//   ratings_no.innerText = ground_list[i]["ratingsnumber"];
  div_ratings.append(ratings_no);

  //anchor
  anchor = document.createElement("a");
  // anchor.setAttribute("href", "../../pages/bookinground/ground1.html")
  anchor.setAttribute("href", "../../pages/bookinground/ground1.html?userId=" + filtered[i]["ground_id"])
  div_child.append(anchor)

  // <button class="book"></button>
  button_book = document.createElement("button");
  button_book.setAttribute("class", "book");
  // button_booknow =document.createTextNode("Book Now")
  // button_book.append(button_booknow)
  button_book.innerText = "Book Now"
  anchor.append(button_book);

  // console.log(div_child);
  document.querySelector("div.parent").append(div_child)


}



