<?php
session_start();


session_destroy();
echo "<script>
alert('anda telah logout!');
document.location.href = 'index1.php';
</script>";
