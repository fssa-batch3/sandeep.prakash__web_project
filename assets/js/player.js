
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

for (let i = 0; i < user_record.length ; i++) {
div_child = document.createElement("div");
div_child.setAttribute("class" ,"child");
console.log(div_child);


div_group = document.createElement("div");
div_group.setAttribute("class", "group");
div_child.append(div_group)

br_tag=document.createElement("br");
div_group.append(br_tag);

//  <img src="" class="groimg" alt=""/>
img_card = document.createElement("img");
img_card.setAttribute("src", user_record[i]["userimage"]["url"]);
img_card.setAttribute("alt", "playerProfile");
img_card.setAttribute("class", "userlogo");
div_group.append(img_card);

p_player= document.createElement("p");
p_player.setAttribute("class","nameplayer");
p_player.innerText = user_record[i]["user_as_player"]["user_name"];
div_group.append(p_player);

anchor = document.createElement("a");
anchor.setAttribute("href", "../../pages/player/playerprofile.html?player_id="+user_record[i]["user_as_player"]["player_id"])
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
span_ratingsno.innerText =player_list[i]["ratingsnumber"];
div_ratings.append(span_ratingsno);


document.querySelector("div.parent").append(div_child)
}


