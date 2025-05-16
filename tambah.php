<?php
session_start();

if (!isset($_SESSION["login"])) {
    header("Location:login.php");
    exit;
}
$conn = mysqli_connect('localhost', 'root', '', 'sekolah_gracia');
require 'functions.php';

//cek tombol submit sudah ditekan atau belum
if (isset($_POST["submit"])) {


    //cek apakah data berhasil ditambahkan atau tidak
    if (tambah($_POST) > 0) {
        echo "<script>
        alert('data berhasil ditambahkan!');
        document.location.href = 'index.php';
        </script>";
    } else {
        echo "<script>alert('data gagak ditambahkan!');
        document.location.href = 'index.php';</script>";
    }
}

?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        li {
            margin-bottom: 20px;
        }

        a {
            text-decoration: none;
        }
    </style>
</head>

<body>
    <h1>Tambah data siswa</h1>
    <form action="" method="post" enctype="multipart/form-data">

        <li>
            <label for="nisn">NISN :
            </label>
            <input type="text" id="nisn" name="nisn" maxlength="10" required>
        </li>
        <li>
            <label for="nama">NAMA :
            </label>
            <input type="text" id="nama" name="nama" maxlength="100" required>
        </li>
        <li>
            <label for="email">EMAIL :
            </label>
            <input type="email" id="email" name="email" maxlength="100" required>
        </li>
        <li>
            <label for="jurusan">JURUSAN :
            </label>
            <input type="text" id="jurusan" name="jurusan" required>
        </li>
        <li>
            <label for="gambar">GAMBAR :
            </label>
            <input type="file" id="gambar" name="gambar">
        </li>
        <li>
            <button type="submit" name="submit">Tambah Data!</button>
        </li>
    </form>
</body>

</html>