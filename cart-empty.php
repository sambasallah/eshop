<?php

include 'init/config.php';

use eshop\template\Template;

$template = new Template('views/cart-empty.php');

echo $template;

?>