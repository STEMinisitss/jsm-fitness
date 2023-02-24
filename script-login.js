function checkData()
{
	var entereduser = document.getElementById('user').value
	var enteredpass = document.getElementById('pass').value

	 var getuser = localStorage.getItem('user_name');
	 var getpass = localStorage.getItem('user_pass');

	 if(entereduser == getuser)
	 {
	 	if(enteredpass == getpass)
	 	{
	 		alert("Login Successful. Welcome to JSM!");
	 		/*code to lead user to jsm homepage if login information is correct*/
	 	}
	 	else
	 	{
	 		alert("Incorrect password.");
	 	}
	 }
	 else
	 {
	 	alert("Invaild Information.");
	 }
} 
function setcookie(){
	var user = document.getElementById('username').value;
	var pass = document.getElementById('password').value;

	document.cookie ="myuser=" + u+";path=http://localhost/website/";
	document.cookie="mypass=" + p+";path=http://localhost/website";
 }