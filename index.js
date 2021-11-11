function validate(){
    var username = document.getElementById("user").valaue;
    var password = document.getElementById("pass").valaue;

    if(username=="admin" && password=="user"){
        alert("Log in Succesful");
         return false;
    }else{
        alert("Log in faild");
    }
}