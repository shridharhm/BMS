function validate(){
    var name=document.getElementById("user");
    var usertype=document.getElementById("usertype");
    if(name.value==""){
        alert("plz enter username");
        return false;
    }else if(name.value.length<=3){
        alert("plz enter min 3 char is required");
        return false; 
    }else if(usertype.value=="0"){
        alert("plz select user type");
        return false;   
    }
    return true;
}

function userTypeValidate(){
    var usertype=document.getElementById("usertype");
     if(usertype.value=="0"){
        alert("plz select user type");
        return false;   
    }
    return true;
}