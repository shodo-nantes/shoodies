<?php
$title = "SHOODIES";
require_once "./src/actions/function.php";
require_once "./src/actions/config.php";
include_once "./src/layout/headerConnecte.php";

$get_data = callAPI('GET', 'http://127.0.0.1:8000/product', false);
$response = json_decode($get_data, true);
?>

    <section id="product-list">
        <?php foreach ($response as $l) { ?>
            <div class="product-data">
                <div class="container">
                    <a href="ficheProduit.php?id=<?php echo $l["id"] . "&name=" . $l["name"] ?>">
                        <div class="product-card">
                            <div class="card-image">
                                <img src="assets/images/<?php echo $l['url_photo']; ?>" alt="<?php echo $l['name']; ?>">
                            </div>
                            <div class="card-content">
                                <span><?php echo $l['name']; ?></span>
                            </div>
                            <input type="hidden" name="id" value="<?= $l['id'] ?>">
                        </div>
                    </a>
                </div>
            </div>
        <?php } ?>
    </section>

<?php
include_once "./src/layout/footer.php";