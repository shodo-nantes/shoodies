<?php
$title = 'LOGIN SHOODIES';
include_once "./src/layout/header.php";
require_once './src/actions/config.php';
?>

<section class="homepage-logo">
    <div class="container">
        <div class="logo-shodo-login">
            <img id="logo-login"
                 width="305"
                 height="305"
                 src="./assets/images/logo-shodo-nantes.jpeg"
                 alt="SHOODIES">
        </div>
    </div>
</section>

<div class="wrapper">
    <section id="homepage-login">
        <div class="container">
            <div class="sign-in">
                <h1>Login</h1>
                <?php if (!isset($_SESSION['access_token'])) {
                    //Create a URL to obtain user authorization
                    $google_login_btn = '<a href="' . $client->createAuthUrl() . '"><img src="https://tulu.io/wp-content/themes/tulu/assets/images/google_logo.png" alt="bouton Google"></a>';
                    echo $google_login_btn;
                } else {
                    header("Location: index.php");
                } ?>
            </div>
        </div>
    </section>
</div>