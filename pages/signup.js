// function getUserData(){
  
  
//     const name1 =(document.getElementById("name1").value )
//     const email = (document.getElementById("signupemail").value )
//     const user_phoneno =(document.getElementById("user_phoneno").value )
//  const user_password= (document.getElementById("signuppassword").value )


// //  console.log(name1)    
// //  console.log(email)
// //  console.log(phoneno1)
// //  console.log(user_password)
//  let user_records= new Array();
//  user_records=JSON.parse(localStorage.getItem("usersdetail"))?JSON.parse(localStorage.getItem("usersdetail"));[]
//  user_records.push(
//     {

//     }
//  )

//  localStorage.setItem("user_name",name1)
//  localStorage.setItem("user_email",email)
//  localStorage.setItem("user_Phoneno",user_phoneno)
//  localStorage.setItem("user_Password",user_password)


//  window.location.href="../../index.html";
        



// }
function getUserData(){
  
    window.location.href="./accountcreated.html";
    const name1 =(document.getElementById("name1").value )
    const email = (document.getElementById("email").value )
    const user_phoneno =(document.getElementById("user_phoneno").value )
 const user_password= (document.getElementById("password").value )


//  console.log(name1)    
//  console.log(email)
//  console.log(phoneno1)
//  console.log(user_password)
 let user_records= new Array();
 user_records= JSON.parse(localStorage.getItem("user_details"))?JSON.parse(localStorage.getItem("user_details")):[]
 user_records.push(
    {
        "user_name":name1,
        "user_email":email,
        "user_phoneno":user_phoneno,
        "user_password":user_password        
    }
 )

 localStorage.setItem("user_details",JSON.stringify(user_records));
 



        



}





// const formbutton=(document.getElementById("newlogin"))
// const name1 =(document.getElementById("name1"))
// const email = (document.getElementById("email"))
// const user_phoneno =(document.getElementById("user_phoneno"))
// const user_password= (document.getElementById("password"))

// formbutton.addEventListener("click",function(getUser){
// getUser.preventDefault();
// window.location.href="../../index.html"
// })

// const userName= name1.value;
// const userEmail = email.value;
// const userPhoneNumber = user_phoneno.value;
// const userPassword = user_password.value;

// localStorage.setItem("formData",JSON.stringify({userName,userEmail,userPhoneNumber,userPassword}))

// const formData=JSON.parse(localStorage.getItem("formData"));
// console.log(formData.userNmae);


// function getUserData(){
//     window.location.href="../../index.html";


//     const name1 =(document.getElementById("name1").value )
//     const email = (document.getElementById("email").value )
//     const user_phoneno =(document.getElementById("user_phoneno").value )
//  const user_password= (document.getElementById("password").value )



//  const newUserDetail={
//          "user_name":name1,
//             "user_email":email,
//           "user_phoneno":user_phoneno,
//           "user_password":user_password
//  }


//  const stringJson =JSON.stringify(newUserDetail);
//  localStorage.setItem(email,stringJson)
//  console.log("New User added");
// }