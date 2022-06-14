<?php
require_once __DIR__ . './../../../vendor/autoload.php';

$client = new Google_Client();
$client->setClientId('928331427422-hsl0dm403e7diq0g54pu7if8a7emf7nl.apps.googleusercontent.com');
$client->setClientSecret('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');
$client->setRedirectUri('http://localhost:8888/shoodies/front-end/index.php');
$client->addScope('email');
$client->addScope('profile');

session_start();