




const editbtn = document.getElementById("editbutton");
const sideBar2part = document.querySelector("div.sidebar2")
const containerprofile = document.querySelector("div.container2")


editbtn.addEventListener("click", () => {

    containerprofile.style.display = "block"


})







let user_record = JSON.parse(localStorage.getItem("user_details"));
const loggedIn = localStorage.getItem("logged_in");





for (let i = 0; i < user_record.length; i++) {

    if (loggedIn == user_record[i].user_as_ground.user_email) {
        document.getElementById("name1").value = user_record[i]["user_as_ground"]["user_name"];
        document.getElementById("userEmail").value = user_record[i]["user_as_ground"]["user_email"];
        document.getElementById("phoneno1").value = user_record[i]["user_as_ground"]["user_phoneno"];
        document.getElementById("password").value = user_record[i]["user_as_ground"]["user_password"];
        document.getElementById("age").value = user_record[i]["user_as_player"]["user_age"];
        document.getElementById("locationselect").value = user_record[i]["user_as_player"]["sportLocationPlay"];
        document.getElementById("sportss").value = user_record[i]["user_as_player"]["sport_Choosed"];
        document.getElementById("timingsfrom").value = user_record[i]["user_as_player"]["timingsfrom"];
        document.getElementById("timingsto").value = user_record[i]["user_as_player"]["timingsto"];

        break;

    }

}
console.log(user_record);

function update() {
    for (i = 0; i < user_record.length; i++) {
        if (loggedIn == user_record[i].user_as_ground.user_email) {
            user_record[i]["user_as_ground"]["user_name"] = document.getElementById("name1").value
            user_record[i]["user_as_ground"]["user_email"] = document.getElementById("userEmail").value
            user_record[i]["user_as_ground"]["user_phoneno"] = document.getElementById("phoneno1").value
            user_record[i]["user_as_ground"]["user_password"] = document.getElementById("password").value
            user_record[i]["user_as_player"]["user_age"] = document.getElementById("age").value
            user_record[i]["user_as_player"]["sportLocationPlay"] = document.getElementById("locationselect").value
            user_record[i]["user_as_player"]["sport_Choosed"] = document.getElementById("sportss").value
            user_record[i]["user_as_player"]["timingsfrom"] = document.getElementById("timingsfrom").value
            user_record[i]["user_as_player"]["timingsto"] = document.getElementById("timingsto").value


            localStorage.setItem("user_details", JSON.stringify(user_record));
            alert("your profile updated");

            break;


        }

    }





}




function onDelete() {
    alert("Are you sure want to delete your account")
    //     alert("your account deleted")
    // const currentEmailUser= user_record.find(y=> y.user_email === userEmail);
    // const filterRecords =user_record.filter(v=> v.user_email !==currentEmailUser);
    // user_record=filterRecords;
    // localStorage.setItem("user_details",JSON.stringify(user_record));
    for (i = 0; i < user_record.length; i++) {
        if (document.getElementById("userEmail").value == user_record[i]["user_as_ground"]["user_email"]) {
            user_record.splice(i, 1)
            localStorage.setItem("user_details", JSON.stringify(user_record));

        }

    }
}







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


        for (let i = 0; i <= userRecords.length - 1; i++) {

            if (user_logged == userRecords[i]["user_as_ground"].user_email) {

                userRecords[i].userimage = {
                    imagename: file.name,
                    url: e.target.result
                };
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
  if (user_logged == userRecords[i]["user_as_ground"]["user_email"]) {
    const savedImage = userRecords[i]["userimage"];
    if (savedImage) {
      imageShow.src = savedImage.url;
    }
    break;
  }
}
