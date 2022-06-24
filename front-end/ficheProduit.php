<?php
$id_product = filter_input(INPUT_GET, "id");
$name = filter_input(INPUT_GET, "name");
$title = $name;

require_once "./src/actions/function.php";
require_once "./src/actions/config.php";
include_once "./src/layout/headerConnecte.php";

$get_data = callAPI('GET', 'https://goodies-data.herokuapp.com/product', false);
$response_data = json_decode($get_data, true);

foreach ($response_data as $r) {
    if ($r['id'] == $id_product) {
        $productInfo = $r;
    }
}
?>

    <section id="product-page">
        <div class="product-info">

            <div class="col-image">
                <div class="product-image">
                    <img src="assets/images/<?php echo $productInfo['photo_URL']; ?>"
                         alt="<?php echo $productInfo['name']; ?>">
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
                            foreach ($productInfo["taille"] as $size) {
                                echo "<option value='1'>" . $size . "</option>";
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