<?php 
include 'config.php'
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="img/fav_logo.png" type="image/png">
    <title> PRO Consult Company </title>
    <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Secular+One&family=Source+Sans+Pro:wght@200;300;400;600;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/normalize.css">
    <link rel="stylesheet" href="css/fonts.css">
    <link rel="stylesheet" href="css/jquery.fancybox.min.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/media.css">
    <link rel="stylesheet" href="css/simple-adaptive-slider.min.css">
    <link rel="stylesheet" href="libs/slick.css">
    <link rel="stylesheet" href="libs/slick-theme.css">

</head>

<body>
    <div class="wrapper">
        <?php require "header.php" ?>
        <main>
            <div class="banner">
                <img src="img/services/banner.jpg" alt="">
                <div class="container">
                    <div class="banner__title">
                        About Us
                    </div>
                </div>
            </div>
            <!-- блок About Us -->
            <div class="main__block">
                <div class="container">
                    <div class="main__items">
                        <div class="main__title">
                            About Us
                        </div>
                        <div class="main__text">
                            Pro Consult Company is a multi-industrial engineering, management and development consultancy, who delivers verified and tailored solutions for the clients and partners.
                            Using extensive experience and practice of its experts PCC provides consultancy and engineering services across the project lifecycle: initiation, feasibility studies and researches, design, procurement, construction, comissioning, operation and maintenance.
                            PCC prioritizes quality, efficiency and innovativeness, integrates national knowledge with international experience and is committed to deliver fit for purpose and sustainable solutions.
                            PCC does not set competition to show its superiority, instead PCC cooperates with the leaders of the piece of area when it is wise to provide the best result for customers and clients and recieve true recognition.
                        </div>
                    </div>
                </div>
            </div>
            <!-- подблок FOUNDATION -->
            <div id='' class="block">
                <div class="container">
                    <div class="block__contents">
                        <div class="block__title">
                            <p> Plan </p>
                        </div>
                        <div class="block__content">
                            <div class="block__img">
                                <img src="img/services/plan.jpg" alt="">
                            </div>
                            <div class="block__content-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque commodi porro earum
                                ullam quod, sunt quia possimus enim accusamus fuga placeat, nesciunt vel soluta quaerat
                                hic
                                natus obcaecati quae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit in
                                dolorum quam tenetur veritatis soluta fuga error expedita rem saepe atque, libero
                                incidunt!
                                Saepe, nihil cum. Rerum a perspiciatis vel.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cumque commodi porro earum
                                ullam quod, sunt quia possimus enim accusamus fuga placeat, nesciunt vel soluta quaerat
                                hic
                                natus obcaecati quae?Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit in
                                dolorum quam tenetur veritatis soluta fuga error expedita rem saepe atque, libero
                                incidunt!
                                Saepe, nihil cum. Rerum a perspiciatis vel.
                                <ul>
                                    <li>
                                        Masterplanning
                                    </li>
                                    <li>
                                        Economic planning
                                    </li>
                                    <li>
                                        Feasibility studies
                                    </li>
                                    <li>
                                        Surveying
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
        <?php require "footer.php" ?>

    </div>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="js/jquery.fancybox.min.js"></script>
    <script src="js/simple-adaptive-slider.min.js"> </script>
    <script src="libs/slick.min.js"></script>
    <script src="js/main.js"></script>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            // инициализация слайдера
            var slider = new SimpleAdaptiveSlider('.slider', {
                autoplay: true,
                interval: 5000,
            });
        });
    </script>

</body>