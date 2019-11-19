
window.addEventListener("keyup", function(event) {
	if (event.keyCode == 13) {
		event.preventDefault();
		document.getElementById("loginButton").click();
	}
});

var objectUsers = [
	{
		username: "testuser",
		password: "123"
	},
	{
		username: "testuser2",
		password: "123"
	}
]

function checkUserinfo() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	console.log("uname: " + username);

	if (username == "") {
		console.log("ASDFASDF");
		loginText = "Missing username.";
		document.getElementById("loginMessage").innerHTML = loginText;
		return;
	}

	if (password == "") {
		loginText = "Missing password.";
		document.getElementById("loginMessage").innerHTML = loginText;
		return;
	}

	for (i = 0; i < objectUsers.length; i++) {
		if (username == objectUsers[i].username && password == objectUsers[i].password) {
			console.log("USER FOUND");
			window.location.replace("test.html");
		}
	}
	loginText = "Wrong username or password.";
	document.getElementById("loginMessage").innerHTML = loginText;
}
