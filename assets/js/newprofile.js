
const editbtn = document.getElementById("editbutton");
const sideBar2part = document.querySelector("div.sidebar2")
const containerprofile = document.querySelector("div.container2")


editbtn.addEventListener("click", () => {

    containerprofile.style.display = "block"


})
const fsidename=document.querySelector(".nameperson")
const  namebox=document.getElementById("name1")
const user_email=document.getElementById("userEmail")
const user_phone=document.getElementById("phoneno1")
const user_password=document.getElementById("password")
const user_age= document.getElementById("age")
const user_location=document.getElementById("locationselect")
const user_sports= document.getElementById("sportss")
const user_timingsfrom= document.getElementById("timingsfrom")
const user_timingsto= document.getElementById("timingsto")



let user_record = JSON.parse(localStorage.getItem("user_details"));
let loggedIn = localStorage.getItem("logged_in");


for (let i = 0; i < user_record.length; i++) {

    if (loggedIn == user_record[i]["user_email"]) {
        fsidename.innerText=user_record[i]["user_name"];
       namebox.value = user_record[i]["user_name"];
      user_email.value = user_record[i]["user_email"];
      user_phone.value = user_record[i]["user_phoneno"];
    user_password.value = user_record[i]["user_password"];
     user_age.value = user_record[i]["user_age"];
     document.getElementById("locationselect").value = user_record[i]["sportLocationPlay"];
     document.getElementById("sportss").value  = user_record[i]["sport_Choosed"];
       user_timingsfrom.value = user_record[i]["timingsfrom"];
        user_timingsto.value = user_record[i]["timingsto"];

        break;

    }

}



// // edit
const editbutn =document.querySelector(".profile2");
editbutn.addEventListener("click",()=>{




    
    if(editbutn.innerHTML=="Edit"){


        editbutn.innerHTML="Save"
        user_email.removeAttribute("disabled")
        namebox.removeAttribute("disabled");
        fsidename.removeAttribute("disabled")
        user_phone.removeAttribute("disabled");
        user_password.removeAttribute("disabled")
        user_age.removeAttribute("disabled");
        user_location.removeAttribute("disabled")
        user_sports.removeAttribute("disabled");
        user_timingsfrom.removeAttribute("disabled")
        user_timingsto.removeAttribute("disabled");

    }

    else if(editbutn.innerHTML=="Save"){
        editbutn.innerHTML="Edit";
        namebox.setAttribute("disabled","");
        user_email.setAttribute("disabled","")
        user_phone.setAttribute("disabled","");
        user_password.setAttribute("disabled","")
        user_age.setAttribute("disabled","");
        user_location.setAttribute("disabled","")
        user_sports.setAttribute("disabled","");
        user_timingsfrom.setAttribute("disabled","")
        user_timingsto.setAttribute("disabled","");
        
        
    }





    
    user_record.find(e=>{



        if (user_email.value == e["user_email"]) {

       e["user_name"]=fsidename.innerText
       e["user_name"] =namebox.value
       e["user_email"] = user_email.value
       e["user_phoneno"] =user_phone.value
       e["user_password"] =user_password.value
       e["user_age"] = user_age.value
       e["sportLocationPlay"] = user_location.value
       e["sport_Choosed"] =user_sports.value
       e["timingsfrom"] = user_timingsfrom.value
      e["timingsto"] = user_timingsto.value


   
       localStorage.setItem("user_details", JSON.stringify(user_record));

 

}
  

})



})
    // for (i = 0; i < user_record.length; i++) {
    //     if (loggedIn == user_record[i]["user_email"]) {

    //         user_record[i]["user_name"]=fsidename.innerText
    //         user_record[i]["user_name"] =namebox.value
    //         user_record[i]["user_email"] = user_email.value
    //         user_record[i]["user_phoneno"] =user_phone.value
    //         user_record[i]["user_password"] =user_password.value
    //         user_record[i]["user_age"] = user_age.value
    //         user_record[i]["sportLocationPlay"] = user_location.value
    //         user_record[i]["sport_Choosed"] =user_sports.value
    //         user_record[i]["timingsfrom"] = user_timingsfrom.value
    //         user_record[i]["timingsto"] = user_timingsto.value


           
    //         alert("your profile updated");
    //         localStorage.setItem("user_details", JSON.stringify(user_record));
    //         break;


    //     }



    



// if()
// console.log(user_record);





// function onDelete() {
//     alert("Are you sure want to delete your account")
//     //     alert("your account deleted")
//     // const currentEmailUser= user_record.find(y=> y.user_email === userEmail);
//     // const filterRecords =user_record.filter(v=> v.user_email !==currentEmailUser);
//     // user_record=filterRecords;
//     // localStorage.setItem("user_details",JSON.stringify(user_record));
//     for (i = 0; i < user_record.length; i++) {
//         if (document.getElementById("userEmail").value == user_record[i]["user_email"]) {
//             user_record.splice(i, 1)
//             localStorage.setItem("user_details", JSON.stringify(user_record));

//         }

//     }
// }

const logOut=document.querySelector(".logout")
logOut.addEventListener("click",(e)=>{

    const log_out=delete loggedIn

    localStorage.setItem("logged_in", log_out);
    window.location.href="../../pages/login/login.html"


})









//profile image
const imageFileUpload = document.getElementById("input-file");
const imageShow = document.querySelector(".profileimg");



imageFileUpload.addEventListener("change", (e) => {

    const file = e.target.files[0];


    // if (file != file.type.match("image.*")) {
    //     alert("please choose the image ");

    // };

    const fileReader = new FileReader();
    fileReader.onload = (e) => {
        imageShow.src = e.target.result;

        const userRecords = JSON.parse(localStorage.getItem("user_details"))
        const user_logged = localStorage.getItem("logged_in");


        for (let i = 0; i < userRecords.length; i++) {

            if (user_logged == userRecords[i]["user_email"]) {
                // let user_data;
                // user_data = {
                 
                //     imagename: file.name,
                //     url: e.target.result
                // };
                console.log(userRecords[i])
           //4
            console.log(userRecords[i]["imagename"])
            userRecords[i]["imagename"]=file.name;
            userRecords[i]["url"]=e.target.result;


                break;
            };


        }
        localStorage.setItem("user_details", JSON.stringify(userRecords));
    };
    fileReader.readAsDataURL(file);




})

const userRecords = JSON.parse(localStorage.getItem("user_details"));
const user_logged = localStorage.getItem("logged_in");

for (let i = 0; i < userRecords.length; i++) {
    if (user_logged == userRecords[i]["user_email"]) {
        const savedImage = userRecords[i];
        if (savedImage) {
            imageShow.src = savedImage.url;
        }
        break;
    }
}
