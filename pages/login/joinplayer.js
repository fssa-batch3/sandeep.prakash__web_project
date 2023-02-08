function getPlayerData(){
    // window.location.href="../../index.html";
    const name1 =(document.getElementById("name1").value )

const age = (document.getElementById("age").value )

const gender =(document.getElementById("gender").value )
const sportChoose =(document.getElementById("sportss").value )
const sportLocation =(document.getElementById("locationselect").value )

const  timingsfrom = (document.getElementById("timingsfrom").value )

const timingsto =(document.getElementById("timingsto").value )

let playerRecords= new Array ();
playerRecords =JSON.parse(localStorage.getItem("players_details"))?JSON.parse(localStorage.getItem("players_details")):[]
playerRecords.push(
      {
        "user_name":name1,
        "user_age":age,
        "user_gender":gender,
        "sport_Choosed":sportChoose,
        "sportLocationPlay":sportLocation,
        " timingsfrom":timingsfrom,
        "timingsto":timingsto
    }
)
  
localStorage.setItem("players_details",JSON.stringify(playerRecords));




}
