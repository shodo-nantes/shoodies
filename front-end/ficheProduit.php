<?php
$id = filter_input(INPUT_GET, "id");
$name = filter_input(INPUT_GET, "name");
$title = $name;

require_once "./src/actions/function.php";
require_once "./src/actions/config.php";
include_once "./src/layout/headerConnecte.php";

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