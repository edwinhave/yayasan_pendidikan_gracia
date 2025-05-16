<?php
sleep(1);
require '../functions.php';

$keyword = $_GET["keyword"];

$query = "SELECT * FROM siswa

WHERE
    nama LIKE'%$keyword%' OR
    nisn LIKE'%$keyword%' OR
    email LIKE'%$keyword%' OR
    jurusan LIKE'%$keyword%'";
$apapun = query($query);
?>


<table border="1" cellpadding="10" cellspacing="0">

    <tr>
        <th>No</th>
        <th>Aksi</th>
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
            <td>
                <a href="update.php?nisn=<?= $row["nisn"]; ?>">Ubah</a>
                <a href=" hapus.php?nisn=<?= $row["nisn"]; ?>">Hapus</a>
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