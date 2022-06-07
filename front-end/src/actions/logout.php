<?php
include('config.php');
$client->revokeToken();
session_destroy();
header('location: ../../login.php');