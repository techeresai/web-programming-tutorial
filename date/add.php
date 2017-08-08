<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="refresh" content="0;url=../contacte.html">
    <title>Add Contact</title>
</head>
<body>

<?php
$contentString = file_get_contents("contacte.json");
$contacte = json_decode($contentString, true);

$newPerson = array( //creating the person information
        "id"=> 5, // TODO create new number (auto increment)
        "firstName" => $_GET["firstName"],
        "lastName" => $_GET["lastName"],
        "phone" => $_GET["phone"]
);

$contacte[] = $newPerson; //add new person into array

$contentString = json_encode($contacte, true);
file_put_contents("contacte.json",$contentString);
header('Location: ../contacte.html');
?>

Contact Added

</body>
</html>