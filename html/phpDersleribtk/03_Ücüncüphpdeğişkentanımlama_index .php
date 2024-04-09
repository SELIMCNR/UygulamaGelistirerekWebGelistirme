<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $ad = "Selim";
        $Soyad="Çınar";
    ?>
    
    <?php
        echo $ad . $Soyad;
    ?>
    <h1>
    <?php
        $price =21000;
        $price2=15000;
        $price3=13000;

        $kdv=0.1;

        $toplam = ($price+$price2+$price3)*$kdv;

        echo $toplam." ".$price." php ";
    ?>
    </h1>
   
</body>
</html>