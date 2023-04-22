const sellerloggedDta =JSON.parse(localStorage.getItem("seller_logged_in"));


let  sellerId= sellerloggedDta[0].seller_Id

let groundRecords = JSON.parse(localStorage.getItem("ground_info"));

let sellerProducts=groundRecords.find((data)=>{
   return  data.seller_id === sellerId

});
console.log(sellerProducts);
// local storage

// view




const groundName = document.getElementById("groname");

const groundPlace = (document.getElementById("grolname"));
const groundLocationLink = (document.getElementById("grolink"));
const groundaddress=(document.getElementById("groaddress"));
const groundImage1 = (document.getElementById("grimg1"));
const groundImage2 = (document.getElementById("grimg2"));
const groundImage3 = (document.getElementById("grimg3"));
const sportsAvail1 = (document.getElementById("sportsavail1"));
const sportsAvail2 = (document.getElementById("sportsavail2"));
const sportsAvail3 = (document.getElementById("sportsavail3"));
const groundTimingfrom = (document.getElementById("timingsfrom"));
const groundTimingTo = (document.getElementById("timingsto"));
const groundRules = (document.getElementById("rules"));
const groundCity = (document.getElementById("sportsvalue"));
const groundPrice = (document.getElementById("amount"));
const groundincreasingPrice = (document.getElementById("increaseamount"))

const groundCourts=document.getElementById("sportscourts")
console.log(groundCourts);



// view 


// const url2 = window.location.search;
// console.log(url2)
// const urlParameter2 = new URLSearchParams(url2);
// // console.log(urlParameter)
// const groundSearch2 = urlParameter2.get("userId");
// // console.log(groundSearch2);

// let sellerProducts;
// groundRecords.find(function (e) {
//     if (e["ground_id"] == groundSearch2) {
//         return sellerProducts =sellerProducts;

//     }
//    sellerProductslse {
//         return sellerProducts = 0;
//     }
// })


// sellerProducts.find((e=>{
if(sellerProducts){
    
    groundName.value = sellerProducts["ground_name"]
    groundPlace.value = sellerProducts["ground_Place"]
    groundaddress.value=sellerProducts["ground_Address"]
groundLocationLink.value = sellerProducts["ground_locat_link"]
groundImage1.value = sellerProducts["groundimg1"]
groundImage2.value = sellerProducts["groundimg2"]
groundImage3.value = sellerProducts["groundimg3"]
sportsAvail1.checked = sellerProducts["sport_avail_1"]
sportsAvail2.checked = sellerProducts["sport_avail_2"]
sportsAvail3.checked = sellerProducts["sport_avail_3"]
groundTimingfrom.value=sellerProducts["ground_timing_from"]
groundTimingTo.value = sellerProducts["ground_timing_to"]
groundRules.value = sellerProducts["ground_rules"]
groundCity.value = sellerProducts["ground_city"]
groundPrice.value = sellerProducts["ground_price"]
groundincreasingPrice.value=sellerProducts["groundIncreasePrice"];
groundCourts.value=sellerProducts["groundCourt"]

}







// }))




// // update 

const updatebutton = document.getElementById("formbtn")
updatebutton.addEventListener("submit", () => {

  sellerProducts["ground_name"] = groundName.value;
           sellerProducts["ground_Place"] = groundPlace.value
           sellerProducts["ground_locat_link"] = groundLocationLink.value
           sellerProducts["ground_Address"]=  groundaddress.value
           sellerProducts["ground_locat_link"]=groundLocationLink.value
           sellerProducts["groundimg1"] = groundImage1.value
           sellerProducts["groundimg2"] = groundImage2.value
           sellerProducts["groundimg3"] = groundImage3.value
           sellerProducts["sport_avail_1"] = sportsAvail1.checked
           sellerProducts["sport_avail_2"] = sportsAvail2.checked
           sellerProducts["sport_avail_3"] = sportsAvail3.checked
           sellerProducts["ground_timing_to"] = groundTimingTo.value
           sellerProducts["ground_rules"] = groundRules.value
           sellerProducts["ground_city"] = groundCity.value
           sellerProducts["ground_price"] = groundPrice.value
           sellerProducts["groundIncreasePrice"]=groundincreasingPrice.value
           sellerProducts["groundCourt"]=groundCourts.value


            localStorage.setItem("ground_info", JSON.stringify(groundRecords))



})

// update

const deletebutton = document.getElementById("deletebtn")
deletebutton.addEventListener("click", () => {

    let groundRecords = JSON.parse(localStorage.getItem("ground_info"));
    groundRecords.find(function (item) {
        console.log(sellerProducts);
        if (sellerProducts["ground_id"] === item["ground_id"]) {
            item["status"] = false

        }
        localStorage.setItem("ground_info", JSON.stringify(groundRecords))
    })
})


