<?php

require "vendor/autoload.php";

use Monolog\Logger;
use Monolog\Processor;
use Monolog\Handler\RotatingFileHandler;

// create a log channel
$logger = new Logger('testApp');
$logger->pushProcessor(new Processor\UidProcessor());
$logger->pushHandler(new RotatingFileHandler('storage/logs/app.log'));
$logger->info('Foo 123');

// create a log channel
$logger1 = new Logger('testAppCron');
$logger1->pushProcessor(new Processor\UidProcessor());
$logger1->pushHandler(new RotatingFileHandler('storage/logs/cron/app_cron.log'));
$logger1->info('fooooo......');

/*
use Monolog\Logger;
use Monolog\Handler\StreamHandler;

// create a log channel
$log = new Logger('name');
$log->pushHandler(new StreamHandler('storage/logs/app.log', Logger::WARNING));

// add records to the log
//$log->warning('Foo');
$log->error('Bar');

$log->info('Foo');

*/



?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	
	<!-- <link href="http://localhost/insta-loan/public/css/app.css?id=f5f85442592bec5a7df0" rel="stylesheet" type="text/css"/> -->
	<script src="dest/js/index.js"></script>

</head>
<body>
	<h4></h4>
</body>
</html>