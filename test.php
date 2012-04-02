<?php

header("Expires: Mon, 26 Jul 1997 05:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . "GMT");
header("Cache-Control: no-cache, must-revalidate");
header("Pragma: no-cache");
header("Content-type: application/json");

echo json_encode(array("done" => true, "data" => __FILE__ . "#" . $_POST["test_form"]["text"]));

exit();
