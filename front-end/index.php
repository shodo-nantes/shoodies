<?php
$title = "SHOODIES";
include_once "./src/layout/headerConnecte.php";
require_once "./src/actions/function.php";
require_once "./src/actions/config.php";

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

$get_data = callAPI('GET', 'https://goodies-data.herokuapp.com/product', false);
$response = json_decode($get_data, true);
?>

    <div id="product-list">
        <?php foreach ($response as $l) { ?>
            <section class="product-data">
                <div class="container">
                    <div class="product-card">
                        <img src="assets/images/<?php echo $l['photo_URL']; ?>" alt="<?php echo $l['name']; ?>">
                        <span><?php echo $l['name']; ?></span>
                    </div>
                </div>
            </section>
        <?php } ?>
    </div>

<?php
include_once "./src/layout/footer.php";