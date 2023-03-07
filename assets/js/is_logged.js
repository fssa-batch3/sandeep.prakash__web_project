const check_login = localStorage.getItem("logged_in");


if(check_login == null){

    window.location.href="../login/login.html";

}

