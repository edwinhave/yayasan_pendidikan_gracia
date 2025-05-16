<?php

require_once __DIR__ . '/vendor/autoload.php';

require 'functions.php';
$siswa = query("SELECT * FROM siswa");

$mpdf = new \Mpdf\Mpdf();
$wanpis = '<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="css/print.css">
</head>

<body>
    <h1>Daftar Siswa</h1>
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <th>No</th>
            <th>Gambar</th>
            <th>NISN</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Jurusan</th>
        </tr>';
$i = 1;
foreach ($siswa as $row) {
    $wanpis .= '<tr>
            <td>' . $i++ . '</td>
            <td><img src="img/' . $row["gambar"] . '" width="50"></td>
            <td>' . $row["nisn"] . '</td>
            <td>' . $row["nama"] . '</td>
            <td>' . $row["email"] . '</td>
            <td>' . $row["jurusan"] . '</td>
            </tr>';
}

$wanpis .= ' </table>
</body>

</html>';
$mpdf->WriteHTML($wanpis);
$mpdf->Output('daftar-siswa.pdf', 'I');
