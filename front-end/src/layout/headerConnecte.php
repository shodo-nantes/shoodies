<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Site pour commander des goodies shodo">
    <link rel="stylesheet" href="./assets/css/style.css">
    <link rel="icon" href="./assets/images/logo-shodo-nantes.jpeg">
    <title><?= $title ?></title>
</head>

<body>

<header id="header">

    <div class="logo-shodo">
        <a href="./index.php"><img id="logo" width="305" height="305" src="./assets/images/logo-shodo-nantes.jpeg"
                                   alt="SHOODIES"></a>
    </div>

    <nav class="navbar">

        <ul>
            <li>
                <form action="./src/actions/logout.php" method="post">
                    <input type="hidden">
                    <button type="submit" class="btn btn-primary"><span>Se déconnecter</span></button>
                </form>
            </li>
        </ul>

    </nav>

</header>

<main>

<?php
if ($_SESSION['access_token'] == '') {
    header("Location: login.php");
}

if (isset($_GET["code"])) {
    $token = $client->fetchAccessTokenWithAuthCode($_GET["code"]);
    if (!isset($token['error'])) {
        $client->setAccessToken($token['access_token']);
        $_SESSION['access_token'] = $token['access_token'];
        $google_service = new Google_Service_Oauth2($client);
        $data = $google_service->userinfo->get();
    }
}