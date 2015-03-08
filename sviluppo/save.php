<?php
	$filename=$_POST['filename'];
	$source=$_POST['source'];
	$code=$_POST['code'];
	$fp=fopen("saves/$filename.xml","w");fwrite($fp,$source);fclose($fp);
	$fp=fopen("main.js","w");fwrite($fp,$code);fclose($fp);
?>
