<?php
$title = "SHOODIES";
include_once "./src/layout/headerConnecte.php";
include_once "./src/actions/function.php";

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