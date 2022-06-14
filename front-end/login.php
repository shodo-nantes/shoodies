<?php
$title = 'LOGIN';
include_once "./src/layout/header.php";
require_once './src/actions/config.php';
?>

<div class="homepage-wrapper">
    <section id="homepage">
        <div class="container">
            <div class="sign-in">
                <div class="login-logo">
                    <img width="305" height="305" src="./assets/images/logo-shodo-nantes.jpeg" alt="SHOODIES">
                </div>
                <div class="login-content">
                    <h1>Login</h1>
                    <?php if (!isset($_SESSION['access_token'])) {
                        //Create a URL to obtain user authorization
                        $google_login_btn = '<a href="' . $client->createAuthUrl() . '">Sign in with google</a>';
                        echo $google_login_btn;
                    } else {
                        header("Location: index.php");
                    } ?>
                </div>
            </div>
        </div>
    </section>
</div>