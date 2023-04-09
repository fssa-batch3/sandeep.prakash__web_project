
const player_list =[
    {
        "image":"../../assets/images/userlogo.png",
        "playersName":"Ramesh",
        "ratingsnumber":"5.0",
        "anchorlocataion":"../../pages/player/playerprofile.html"
    },
    {
        "image":"../../assets/images/userlogo.png",
        "playersName":"Ramesh",
        "ratingsnumber":"5.0",
        "anchorlocataion":"../../pages/player/playerprofile.html"
    }


    
    
    
    ]



    let user_record = JSON.parse(localStorage.getItem("user_details"));
// player filter 



let filterPlayer=[];
filterPlayer = user_record.filter((item)=>{
    return item.player==true;
})

console.log(filterPlayer);









let div_child;
let div_group;
let br_tag;
let img_card;
let p_player;
let anchor;
let button_visit;
let div_ratings;
let i_star;
let span_ratingsno;





    for (let i = 0; i < filterPlayer.length ; i++) {
        div_child = document.createElement("div");
        div_child.setAttribute("class" ,"child");
        div_child.setAttribute("value", filterPlayer[i]["sportLocationPlay"])
        console.log(div_child);
        
        
        div_group = document.createElement("div");
        div_group.setAttribute("class", "group");
        div_child.append(div_group)
        
        br_tag=document.createElement("br");
        div_group.append(br_tag);
        
        //  <img src="" class="groimg" alt=""/>
        img_card = document.createElement("img");
        img_card.setAttribute("src", filterPlayer[i]["url"]);
        img_card.setAttribute("alt", "playerProfile");
        img_card.setAttribute("class", "userlogo");
        div_group.append(img_card);
        
        p_player= document.createElement("p");
        p_player.setAttribute("class","nameplayer");
        p_player.innerText = filterPlayer[i]["user_name"];
        div_group.append(p_player);
        
        anchor = document.createElement("a");
        anchor.setAttribute("href", "../../pages/player/playerprofile.html?player_id="+filterPlayer[i]["user_id"])
        // anchor.setAttribute("href", player_list[i]["anchorlocataion"])
        div_group.append(anchor)
        
        // <button class="book"></button>
        button_visit = document.createElement("button");
        button_visit .setAttribute("class", "visit");
        button_visit.innerText="Visit"
        anchor.append(button_visit);
        
        div_ratings = document.createElement("div");
        div_ratings.setAttribute("class", "ratings");
        div_group.append(div_ratings); 
        
        i_star = document.createElement("i");
        i_star.setAttribute("class", "fa-solid fa-star");
        // h3_card_title.innerText = names[i];
        div_ratings.append(i_star);
        
        span_ratingsno = document.createElement("span");
        span_ratingsno.setAttribute("class", "ratingno");
        span_ratingsno.innerText =player_list[0]["ratingsnumber"];
        div_ratings.append(span_ratingsno);
        
        
        document.querySelector("div.parent").append(div_child)
    
        
        
        



}



// filter player





const selectOption = document.querySelector(".locationselect")

let filteredData = [];
selectOption.addEventListener("input", () => {
  const seletedQueryfil = selectOption.value.trim()
  console.log(seletedQueryfil);
  
  // const searchbox = document.getElementById("search2");


  if (seletedQueryfil !== "all") {
    filteredData = filterPlayer.filter((item) => {
      return item.sportLocationPlay.includes(seletedQueryfil)
      
    })
    filteredData=filteredData.filter((item)=>
      item.sportLocationPlay!==undefined)

  } 
  // else if (e.target===searchbox){
  //   filteredData=ground_list.filter((item) => {
  //     return item.groundname.toLowerCase().includes(searchQuery) || item.locationname.toLowerCase().includes(searchQuery)
  //   })
  

  // }
  else {
    filteredData = filterPlayer;
  }





const parentHtmlDiv = document.querySelector(".parent");
parentHtmlDiv.innerHTML = "";






filteredData.forEach((item) => {


    div_child = document.createElement("div");
    div_child.setAttribute("class" ,"child");
    div_child.setAttribute("value", item.sportLocationPlay)
    console.log(div_child);
    
    
    div_group = document.createElement("div");
    div_group.setAttribute("class", "group");
    div_child.append(div_group)
    
    br_tag=document.createElement("br");
    div_group.append(br_tag);
    
    //  <img src="" class="groimg" alt=""/>
    img_card = document.createElement("img");
    img_card.setAttribute("src", item.url);
    img_card.setAttribute("alt", "playerProfile");
    img_card.setAttribute("class", "userlogo");
    div_group.append(img_card);
    
    p_player= document.createElement("p");
    p_player.setAttribute("class","nameplayer");
    p_player.innerText = item.user_name;
    div_group.append(p_player);
    
    anchor = document.createElement("a");
    anchor.setAttribute("href", "../../pages/player/playerprofile.html?player_id="+item.user_id)
    // anchor.setAttribute("href", player_list[i]["anchorlocataion"])
    div_group.append(anchor)
    
    // <button class="book"></button>
    button_visit = document.createElement("button");
    button_visit .setAttribute("class", "visit");
    button_visit.innerText="Visit"
    anchor.append(button_visit);
    
    div_ratings = document.createElement("div");
    div_ratings.setAttribute("class", "ratings");
    div_group.append(div_ratings); 
    
    i_star = document.createElement("i");
    i_star.setAttribute("class", "fa-solid fa-star");
    // h3_card_title.innerText = names[i];
    div_ratings.append(i_star);
    
    span_ratingsno = document.createElement("span");
    span_ratingsno.setAttribute("class", "ratingno");
    span_ratingsno.innerText =player_list[0]["ratingsnumber"];
    div_ratings.append(span_ratingsno);
    
    
    document.querySelector("div.parent").append(div_child)

    









})
})


//search






const searchbox = document.getElementById("search2");
searchbox.addEventListener("keydown", (e) => {
  const searchQuery = searchbox.value.trim().toUpperCase().toLowerCase();
  // console.log(searchQuery);
  

  if (e.key === "Enter") {
    e.preventDefault();
  
  }
    const filteredList = filteredData.filter((item) => {
    return item.user_name.toLowerCase().includes(searchQuery) 
  })


  const parentHtmlDiv = document.querySelector(".parent");
  parentHtmlDiv.innerHTML = "";



  filteredList.forEach((item) => {




    div_child = document.createElement("div");
    div_child.setAttribute("class" ,"child");
    div_child.setAttribute("value", item.sportLocationPlay)
    console.log(div_child);
    
    
    div_group = document.createElement("div");
    div_group.setAttribute("class", "group");
    div_child.append(div_group)
    
    br_tag=document.createElement("br");
    div_group.append(br_tag);
    
    //  <img src="" class="groimg" alt=""/>
    img_card = document.createElement("img");
    img_card.setAttribute("src", item.url);
    img_card.setAttribute("alt", "playerProfile");
    img_card.setAttribute("class", "userlogo");
    div_group.append(img_card);
    
    p_player= document.createElement("p");
    p_player.setAttribute("class","nameplayer");
    p_player.innerText = item.user_name;
    div_group.append(p_player);
    
    anchor = document.createElement("a");
    anchor.setAttribute("href", "../../pages/player/playerprofile.html?player_id="+item.user_id)
    // anchor.setAttribute("href", player_list[i]["anchorlocataion"])
    div_group.append(anchor)
    
    // <button class="book"></button>
    button_visit = document.createElement("button");
    button_visit .setAttribute("class", "visit");
    button_visit.innerText="Visit"
    anchor.append(button_visit);
    
    div_ratings = document.createElement("div");
    div_ratings.setAttribute("class", "ratings");
    div_group.append(div_ratings); 
    
    i_star = document.createElement("i");
    i_star.setAttribute("class", "fa-solid fa-star");
    // h3_card_title.innerText = names[i];
    div_ratings.append(i_star);
    
    span_ratingsno = document.createElement("span");
    span_ratingsno.setAttribute("class", "ratingno");
    span_ratingsno.innerText =player_list[0]["ratingsnumber"];
    div_ratings.append(span_ratingsno);
    
    
    document.querySelector("div.parent").append(div_child)

    









})


  

})