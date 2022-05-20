<?php
include "header.php";

$url = 'http://127.0.0.1:8000/product';
$request_url = $url;

$curl = curl_init($request_url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, [
    'X-RapidAPI-Host: kvstore.p.rapidapi.com',
    'X-RapidAPI-Key: 7xxxxxxxxxxxxxxxxxxxxxxx',
    'Content-Type: application/json'
]);
$response = curl_exec($curl);
curl_close($curl);
echo $response . PHP_EOL

?>


    <div class="product-list">

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/casquette.jpeg" alt="Casquette">
                    <span>Casquette</span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/casquette.jpeg" alt="Casquette">
                    <span>Casquette</span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/gourde.jpeg" alt="Gourde">
                    <span>Gourde</span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/sac-a-dos.jpeg" alt="sac à dos">
                    <span>sac à dos</span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/t-shirt.png" alt="t-shirt">
                    <span>t-shirt</span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/t-shirt.png" alt="t-shirt">
                    <span>t-shirt</span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/t-shirt.png" alt="t-shirt">
                    <span>t-shirt</span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/t-shirt.png" alt="t-shirt">
                    <span>t-shirt</span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/sweatshirt.jpeg" alt="Sweatshirt">
                    <span>Sweatshirt</span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/sweatshirt.jpeg" alt="Sweatshirt">
                    <span>Sweatshirt</span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/mug.jpeg" alt="Mug">
                    <span>Mug</span>
                </div>
            </div>
        </section>

    </div>


<?php
include "footer.php";
?>