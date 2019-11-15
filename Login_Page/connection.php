<?php
	$dbservername = "localhost";
	$dbusername = "root";
	$dbpassword = "test";
	$dbname = "test";

	$conn = new mysqli($dbservername, $dbusername, $dbpassword, $dbname);

	if ($conn->connect_error)
	{
		die("error" . $conn->connect_error);
	}
?>
