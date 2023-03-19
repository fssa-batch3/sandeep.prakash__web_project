const form = document.getElementById("signupform");

form.addEventListener('submit',e=>{
    e.preventDefault();
    getUserData();

});

function getUserData(){
    
  
    const name1 =(document.getElementById("name1").value.trim() )
    const name2 =(document.getElementById("name2").value.trim() )
    const email = (document.getElementById("email").value.trim()  )
    const user_phoneno =(document.getElementById("user_phoneno").value.trim()  )
 const user_password= (document.getElementById("password").value.trim()  )


//  console.log(name1)    
//  console.log(email)
//  console.log(phoneno1)
//  console.log(user_password)
 let user_records= new Array();

 user_records= JSON.parse(localStorage.getItem("user_details"))?
 JSON.parse(localStorage.getItem("user_details")):[]

 

 if(user_records.some((v)=>{return v.user_email==email})){
alert("email id already taken")
 }
 
 else{
    user_records.push({
        "user_as_ground":
         {
            "user_name":name1,
            "user_last_name":name2,
            "user_email":email,
            "user_phoneno":user_phoneno,
            "user_password":user_password        
        },

    }
     
     )
    
     window.location.href="./login .html"
 }



 localStorage.setItem("user_details",JSON.stringify(user_records));
   


 


// if(name1===""){
//     setError(name1,"Firstname cannot be blank")
 
// }
// else{
//     setSuccess(name1)
//     window.location.href="./accountcreated.html";
// }
// if(name2===""){
//     setError(name2,"Lastname cannot be blank")
   
// }
// else{
//     setSuccess(name2)
//     window.location.href="./accountcreated.html";
// }
// if(email===""){

//     setError(email,"email cannot be blank")
// }
// // else if(!correctEmail(email)){

// // }
// else{
//     setSuccess(email)
//     window.location.href="./accountcreated.html";
// }
// if(user_phoneno===""){

//     setError(user_phoneno,"phone cannot be blank")
// }
// else{
//     setSuccess(user_phoneno)
//     window.location.href="./accountcreated.html";
// }
// if(user_password===""){
   
//     setError(user_password,"password cannot be blank")
// }
// else{
//     setSuccess(user_password)
//     window.location.href="./accountcreated.html";
// }

// function setError(input){
//     const formError = input.parentElemenet;
//     const inputError = document.querySelector("input")
//     inputError.className="boxform success";


// }

// function setSuccess(input){
//     const formError = input.parentElemenet;
//     const inputError = document.querySelector("input")
//     inputError.className="boxform error";
    

// }

}

