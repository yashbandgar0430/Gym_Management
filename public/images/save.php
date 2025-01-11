<?php

$server = "localhost";
$username = "root";
$password = "";
$dbname = "register";

$con = mysqli_connect($server, $username, $password, $dbname);

if(!$con)
{
     echo"mot connected";
}
// start
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['eamil'];
$password = $_POST['password'];
$Cpassword = $_POST['Cpassword'];

$sql = "INSERT INTO `signup`(`id`, `firstname`, `lastname`, 
`email`, `password`, `Cpassword`) VALUES ('$id','$firstname',
'lastname','email','password','Cpassword')";
$result = mysqli_query($con , $sql);

if(isset($_POST["mail"]))
{
    echo"data get";
}
else
{
    echo "not imported....!";
}
?>