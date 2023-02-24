 function addData()
 {
 	var username = document.getElementById('user').value;
 	var password = document.getElementById('pass').value;

 	localStorage.setItem('user_name',username);
 	localStorage.setItem('user_pass',password);

    var theuser = localStorage.getItem('user_name');
    var thepass = localStorage.getItem('user_pass');

    /*if(theuser == username)
    {
        if(thepass == password)
        {
            alert("An account has already been made with this information. Please Login.");
        }
    }
    if(thepass != password && theuser==username)
    {
        alert("That username is already in use. Please use another username.");
        window.location.href="register.html";
    }*/
 }
 