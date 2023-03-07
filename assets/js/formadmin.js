const formButton= document.getElementById("formbtn");

formButton.addEventListener("submit",e=>{
    
    e.preventDefault();
    getSellerGround();
});
function getSellerGround(){
    const groundName=(document.getElementById("groname").value);
    const groundLocation=(document.getElementById("grolname").value);
    const groundLocationLink=(document.getElementById("grolink").value);
const groundImage1=(document.getElementById("grimg1").value);
const groundImage2=(document.getElementById("grimg2").value);
const groundImage3=(document.getElementById("grimg3").value);
const sportsAvail1=(document.getElementById("sportsavail1").value);
const sportsAvail2=(document.getElementById("sportsavail2").value);
const sportsAvail3=(document.getElementById("sportsavail3").value);
const groundTimingfrom=(document.getElementById("timingsfrom").value);
const groundTimingTo=(document.getElementById("timingsfrom").value);
const groundRules=(document.getElementById("rules").value);
const groundPrice=(document.getElementById("amount").value);
console.log(groundName);
let groundOwnerRecords = new Array ();
groundOwnerRecords=JSON.parse(localStorage.getItem("ground_info"))?
JSON.parse(localStorage.getItem("ground_info")):[]

if(groundOwnerRecords.some((v)=>{
    return v.ground_name==groundName
})){
alert("the ground name is already there")
}
else{
    
groundOwnerRecords.push({
    "ground_name":groundName,
    "groundlocation":groundLocation,
  "ground_locat_link":groundLocationLink,
  "groundimg1":groundImage1,
  "groundimg2":groundImage2,
  "groundimg3":groundImage3,
  "sport_avail_1":sportsAvail1,
  "sport_avail_2":sportsAvail2,
  "sport_avail_3":sportsAvail3,
  "ground_timing_from":groundTimingfrom,
  "ground_timing_to":groundTimingTo,
  "ground_rules":groundRules,
  "ground_price":groundPrice


});

}
localStorage.setItem("ground_info",JSON.stringify(groundOwnerRecords))











}