<?php
$title = "Connexion";
include_once "./src/layout/header.php";
?>

    <section id="homepage">
        <div class="container">
            <h1>SHOODIES</h1>

            <form action="?" method="POST" enctype="multipart/form-data">

                <div class="form-field">
                    <label for="mail"></label>
                    <input type="text"
                           class="form-control"
                           id="mail"
                           name="mail"
                           placeholder="jean@shodo-nantes.io"
                           value=""
                           maxlength="255"
                           required></div>

                <div class="form-field">
                    <label for="password"></label>
                    <input type="password"
                           class="form-control"
                           id="password"
                           name="password"
                           placeholder="password"
                           value=""
                           maxlength="20"
                           required></div>

                <div class="form-field">
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </div>

            </form>
        </div>
    </section>

<?php
include_once "./src/layout/footer.php";