<?php
session_start();

$_SESSION["nama"] = "Edwin";

echo $_SESSION["nama"];
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <a href="index2.php">Halaman 2</a>
</body>

</html>