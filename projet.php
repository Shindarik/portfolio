<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, minimum-scale=1">
    <meta property="og:title" content="Matéo SUSLU" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Portfolio de Matéo SUSLU - Projet" />
    <meta property="og:url" content="http://www.mateosuslu.fr" />
    <meta property="og:image" content="http://www.mateosuslu.fr/images/M.png" />
    <meta name="description" content="Portfolio de Matéo SUSLU - Projet">
    <link rel="shortcut icon" href="./images/M.png" type="image/x-icon">
    <link rel="stylesheet" href="./assets/css/projet.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="./assets/js/particles.min.js"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet">

    <?php
        include __DIR__ . '/assets/connect.php';

        if(isset($_GET["id"])){

            $idP = intval($_GET["id"]);

            if(($idP < 1) || ($idP > 11)){

                header("Location: index.html");
                die();
                
            }

        }else{

            header("Location: index.html");
            die();

        }

        $sql = "SELECT nom FROM projet WHERE id = :projetId";
        $req = $link -> prepare($sql);
        $req->bindValue(":projetId", $idP, PDO::PARAM_STR);
        $req -> execute();

        while($data = $req -> fetch()){
            echo '<title>Matéo Suslu - '.$data["nom"].'</title>';
        }

        $req = null;
    ?>
</head>

<body>

    <div class="loader">
        <div class="spinner">
            <div class="dot1"></div>
            <div class="dot2"></div>
        </div>
    </div>

    <div id="particles-js"></div>

    <header>
        <div class="titreProjet">
            <?php
                $sql = "SELECT nom, domaine FROM projet WHERE id = :projetId";
                $req = $link -> prepare($sql);
                $req->bindValue(":projetId", $idP, PDO::PARAM_STR);
                $req -> execute();

                while($data = $req -> fetch()){
                    echo '<h1>'.$data["nom"].'</h1>';
                    echo '<h2>'.$data["domaine"].'</h2>';
                }

                $req = null;
            ?>
        </div>

        <div class="aboutProjet">
            <div class="photoProjet">
                <?php
                    $sql = "SELECT photoPrincipale FROM projet WHERE id = :projetId";
                    $req = $link -> prepare($sql);
                    $req->bindValue(":projetId", $idP, PDO::PARAM_STR);
                    $req -> execute();

                    while($data = $req -> fetch()){
                        echo '<img src="'.$data["photoPrincipale"].'" alt="Photo du projet">';
                    }

                    $req = null;
                ?>
            </div>
            <div class="textProjet">
                <p>
                    <?php
                        $sql = "SELECT textePresentation FROM projet WHERE id = :projetId";
                        $req = $link -> prepare($sql);
                        $req->bindValue(":projetId", $idP, PDO::PARAM_STR);
                        $req -> execute();

                        while($data = $req -> fetch()){
                            echo $data["textePresentation"];
                        }

                        $req = null;
                    ?>
                </p>

                <?php
                    $sql = "SELECT lien FROM projet WHERE id = :projetId";
                    $req = $link -> prepare($sql);
                    $req->bindValue(":projetId", $idP, PDO::PARAM_STR);
                    $req -> execute();

                    while($data = $req -> fetch()){
                        echo '<a href="'.$data["lien"].'" target="_blank">Voir le projet</a>';
                    }

                    $req = null;
                ?>
            </div>
        </div>

    </header>

    <section id="med">
        <div class="titreSection">
            <h3>Médias</h3>
            <img src="./images/blob4.svg" alt="">
        </div>

        <div class="grid">
                <?php
                    $sql = "SELECT photoMed1, photoMed2, photoMed3 FROM projet WHERE id = :projetId";
                    $req = $link -> prepare($sql);
                    $req->bindValue(":projetId", $idP, PDO::PARAM_STR);
                    $req -> execute();

                    while($data = $req -> fetch()){
                        echo '<div class="iconBox" style="grid-area: 1 / 1 / 3 / 2; background-image: url('.$data["photoMed1"].')"></div>';
                        echo '<div class="iconBox" style="grid-area: 1 / 2 / 2 / 3; background-image: url('.$data["photoMed2"].');"></div>';
                        echo '<div class="iconBox" style="grid-area: 2 / 2 / 3 / 3; background-image: url('.$data["photoMed3"].');"></div>';
                    }

                    $req = null;
                ?>
        </div>

    </section>

    <div class="bgBlack">
        <img src="" alt="">
    </div>

    <footer>
        <a href="./index.html"><- Retour</a>
        <span>Tous droits réservés, 2022</span>
    </footer>

    <script src="./assets/js/projet.js"></script>
    <script src="./assets/js/particlesApp.js"></script>
</body>

</html>