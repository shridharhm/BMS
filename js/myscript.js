function validate(){
    var name=document.getElementById("username");
    var pass=document.getElementById("pass");
    var error=document.getElementById("msg");

     console.log(`UserName:${name.value}\n
      Password:${pass.value}`);
    if(name.value=='sathish' && pass.value=='123'){
        alert("Login sucessfully...")

        window.location="https://www.facebook.com/";
    }else{
       // alert("Invalid user or password")
       error.innerHTML="Invalid user or password"
       error.style.color="red";
       error.style.fontSize="24px";
       name.style.border="2px solid red"
    }


     }

     function show(){
        var pass=document.getElementById("pass");
        pass.setAttribute('type','text')
     }
     function hide(){
        var pass=document.getElementById("pass");
        pass.setAttribute('type','password')
     }

     function myTime(){
         var d=new Date();
         var times=document.getElementById("time");
         times.innerHTML=`Time:${d.toLocaleTimeString()}`;
        //  document.write(d.toLocaleTimeString());
     }

     (function(){
         setInterval(myTime,1000);//time objects
     })();
     
     function gotopage(){
         window.location="http://www.jspiders.com/";
     }

     (function(){
         setTimeout(gotopage,9000);
         clearInterval
         clearTimeout
     })();