<?php
if (!isset($_POST['ikz'])){header('location: index.html');}else{

$ag = $_POST['angouinput'];
$p=2;include_once '_h.php';
echo "<h1>还没码完，暂不可玩</h1>";
echo "<p>房间号测试：".$ag."</p>";
include_once '_f.php';

}
