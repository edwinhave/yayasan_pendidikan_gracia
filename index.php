<?php
session_start();

if (!isset($_SESSION["login"])) {
    header("Location:home.php");
    exit;
}

//koneksi ke DB
require 'functions.php';

//pagination
//KONFIGURASI
$jumlahDataPerHalaman = 2;
$jumlahData = count(query("SELECT * FROM siswa"));
$jumlahHalaman = ceil($jumlahData / $jumlahDataPerHalaman);
$halamanAktif = (isset($_GET["halaman"])) ? $_GET["halaman"] : 1;
$awalData = ($jumlahDataPerHalaman * $halamanAktif) - $jumlahDataPerHalaman;


$apapun = query("SELECT * FROM siswa LIMIT $awalData ,$jumlahDataPerHalaman");

//JIka tombol cari ditekan
if (isset($_POST["cari"])) {
    $apapun = cari($_POST["keyword"]);
    $jumlahHalaman = 1;
}

//Ambil data dari table siswa

$result = mysqli_query($conn, "SELECT * FROM siswa");



?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Admin</title>
    <style>
        .loader {
            width: 32px;
            position: absolute;
            display: none;

        }

        @media print {

            .logout,
            .tambah,
            .cari,
            .aksi {
                display: none;
            }
        }
    </style>
</head>

<body>
    <h1>Daftar Siswa</h1>

    <a href="tambah.php" class="tambah">Tambah Siswa</a>
    <a href="logout.php" class="keluar">Logout</a>
    <a href="cetak.php" class="cetak" target="_blank">Cetak</a>
    <br><br>

    <form action="" method="post" class="cari">
        <label for="keyword">Cari</label>
        <input type="text" name="keyword" id="keyword" size="40" autofocus placeholder="masukan keyword pencarian" autocomplete="off">
        <button type="submit" name="cari" id="tombol-cari">Cari!</button>
        <img src="img/loader.gif" class="loader">
    </form>
    <br><br>
    <!-- navigasi -->
    <?php if ($halamanAktif > 1): ?>
        <a href="?halaman=<?= $halamanAktif - 1; ?>">&lt;</a>
    <?php endif; ?>

    <?php for ($i = 1; $i <= $jumlahHalaman; $i++): ?>
        <?php if ($i == $halamanAktif): ?>
            <a href="?halaman=<?= $i; ?>" style="font-weight:bold; color:red"><?= $i; ?></a>
        <?php else: ?>
            <a href="?halaman=<?= $i; ?>"><?= $i; ?></a>
        <?php endif; ?>
    <?php endfor ?>
    <?php if ($halamanAktif < $jumlahHalaman): ?>
        <a href="?halaman=<?= $halamanAktif + 1; ?>">&gt;</a>
    <?php endif; ?>


    <br><br>
    <div id="bungkus">
        <table border="1" cellpadding="10" cellspacing="0">
            <tr>
                <th>No</th>
                <th class="aksi">Aksi</th>
                <th>Gambar</th>
                <th>NISN</th>
                <th>Nama</th>
                <th>Email</th>
                <th>Jurusan</th>
            </tr>
            <?php $i = 1; ?>
            <?php foreach ($apapun as $row) : ?>
                <tr>
                    <td align="center"><?= $i; ?></td>
                    <td class="aksi">
                        <a href="update.php?nisn=<?= $row["nisn"]; ?>">Ubah</a>
                        <a href="hapus.php?nisn=<?= $row["nisn"]; ?>">Hapus</a>
                    </td>
                    <td><img src="img/<?= $row["gambar"]; ?>" width="50"></td>
                    <td><?= $row["nisn"]; ?></td>
                    <td><?= $row["nama"]; ?></td>
                    <td><?= $row["email"] ?></td>
                    <td><?= $row["jurusan"] ?></td>
                </tr>
                <?php $i++; ?>
            <?php endforeach; ?>
        </table>
    </div>

    <script src="js/jquery-3.7.1.min.js"></script>
    <script src="js/script.js"></script>


</body>

</html>