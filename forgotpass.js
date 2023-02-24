function checkData(){
	var theuser = document.getElementById('user').value
	var getuserr = localStorage.getItem('user_name');
	var getpass = localStorage.getItem('user_pass');

	if (theuser == getuserr)
	{
		alert("Your password is " + getpass);
	}
	else
	{
		alert ("That username is not registered to an account. Please register or try again.");
	}
}