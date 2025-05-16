<?php
session_start();
$_SESSION = [];
session_unset();
session_destroy();
setcookie('Uwu', '', time() - 3600);
setcookie('Uwuname', '', time() - 3600);
echo "<script>
alert('anda telah logout!');
document.location.href = 'login.php';
</script>";
exit;
