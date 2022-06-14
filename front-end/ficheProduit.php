<?php
$id = filter_input(INPUT_GET, "id");
$name = filter_input(INPUT_GET, "name");
$title = $name;

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

$get_data = callAPI('GET', 'http://127.0.0.1:8000/product', false);
$response = json_decode($get_data, true);
?>

    <section id="product-page">
        <div class="container">
            <?php echo $name ?>
        </div>
    </section>

<?php
include_once "./src/layout/footer.php";