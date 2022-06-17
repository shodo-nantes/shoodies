<?php
$id_product = filter_input(INPUT_GET, "id");
$name = filter_input(INPUT_GET, "name");
$title = $name;

require_once "./src/actions/function.php";
require_once "./src/actions/config.php";
include_once "./src/layout/headerConnecte.php";

$get_data = callAPI('GET', 'http://127.0.0.1:8000/product', false);
$response_data = json_decode($get_data, true);

foreach ($response_data as $r) {
    if ($r['id'] == $id_product) {
        $productInfo = $r;
    }
}

$get_size = callAPI('GET', 'http://127.0.0.1:8000/productSize', false);
$response_size = json_decode($get_size, true);

$get_photo = callAPI('GET', 'http://127.0.0.1:8000/productPhoto', false);
$response_photo = json_decode($get_photo, true);
?>

    <section id="product-page">
        <div class="product-info">

            <div class="col-image">
                <div class="product-image">
                    <?php foreach ($response_photo as $p) {
                        if ($p['id_product'] == $id_product) {
                            $productPhoto = $p; ?>
                            <img src="assets/images/<?php echo $productPhoto['url_photo']; ?>"
                                 alt="<?php echo $productInfo['name']; ?>">
                        <?php }
                    } ?>
                </div>
            </div>

            <div class="col-content">
                <?php echo $name ?>
                <form action="">
                    <div class="col-form">
                        <label for="id_size"></label>
                        <select id="id_size" name="id_size" required class="champ-control">
                            <option selected disabled>Taille disponible</option>
                            <?php
                            foreach ($response_size as $s) {
                                if ($s['id_product'] == $id_product) {
                                    $productSize = $s;
                                    echo "<option value='" . $productSize["id"] . "'>" . $productSize["size"] . "</option>";
                                }
                            } ?>
                        </select>
                    </div>
                    <button class="btn btn-primary" type="submit"><span>Ajouter au panier</span></button>
                </form>
            </div>

        </div>
    </section>

<?php
include_once "./src/layout/footer.php";