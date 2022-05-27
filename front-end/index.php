<?php
$title = "SHOODIES";
include_once "headerConnecte.php";

$request_url = 'https://goodies-data.herokuapp.com/product';

$curl = curl_init($request_url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$response = curl_exec($curl);
curl_close($curl);
$response = json_decode($response);
?>


    <div id="product-list">

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/<?php echo $response[1][0]; ?>" alt="Casquette">
                    <span><?php echo $response[0][0] ?></span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/<?php echo $response[1][1]; ?>" alt="Casquette">
                    <span><?php echo $response[0][1] ?></span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/<?php echo $response[1][2]; ?>" alt="Gourde">
                    <span><?php echo $response[0][2] ?></span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/<?php echo $response[1][3]; ?>" alt="sac à dos">
                    <span><?php echo $response[0][3] ?></span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/<?php echo $response[1][4]; ?>" alt="t-shirt">
                    <span><?php echo $response[0][4] ?></span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/<?php echo $response[1][5]; ?>" alt="t-shirt">
                    <span><?php echo $response[0][5] ?></span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/<?php echo $response[1][6]; ?>" alt="t-shirt">
                    <span><?php echo $response[0][6] ?></span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/<?php echo $response[1][7]; ?>" alt="t-shirt">
                    <span><?php echo $response[0][7] ?></span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/<?php echo $response[1][8]; ?>" alt="Sweatshirt">
                    <span><?php echo $response[0][8] ?></span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/<?php echo $response[1][9]; ?>" alt="Sweatshirt">
                    <span><?php echo $response[0][9] ?></span>
                </div>
            </div>
        </section>

        <section class="product-data">
            <div class="container">
                <div class="product-card">
                    <img src="images/<?php echo $response[1][10]; ?>" alt="Mug">
                    <span><?php echo $response[0][10] ?></span>
                </div>
            </div>
        </section>

    </div>


<?php
include_once "footer.php";