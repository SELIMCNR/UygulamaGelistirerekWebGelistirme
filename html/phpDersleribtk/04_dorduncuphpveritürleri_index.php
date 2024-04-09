<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        /*
        Php Veri türleri 
        string : metinsel bilgiler
        int : tam sayılar
        double : ondalıklı sayılar 
        object : nesne
        array : dizi
        null : değer içermeyen bilgi

        
        */


    ?>
    
    <?php
        $urunAdi = "İphone 15";
        echo $urunAdi." :  ".gettype($urunAdi);
        echo "<br/>";
        
        $fiyat = 40000;
        echo $fiyat." : " .gettype($fiyat);
        echo "<br/>";

        $kdvOrani=0.18;
        echo $kdvOrani.": ".gettype($kdvOrani);
        echo "<br/>";

        $satistaMi = false;
        echo gettype($satistaMi);
        echo "<br/>";
        
        // veri çevirme
        $a = (double)20;
        echo gettype($a);
        echo "<br/>";

        $a = (int)20.5;
        echo gettype($a);
        echo "<br/>";

        $a = (int)"20";
        echo gettype($a);
        echo "<br/>";

        $a = (int) "a20b50";
        echo gettype($a);
        echo "<br/>";

        $a = (int) false;
        echo gettype($a);
        echo $a;





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