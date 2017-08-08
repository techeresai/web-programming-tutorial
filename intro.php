<?php

$nume = gethostname() . " : " . get_current_user();
echo $nume;

function add($a, $b) {
    return $a + $b;
}

$sum = add(2, 4);
echo "<br>";
echo $sum;
echo "<br><button>Cancel</button>";


?>

<button>Save</button>

<h1>Tabla Inmultirii</h1>
<form action="">
    <input type="number" name="number" value="11">
    <button>Multiply</button>
</form>
|
<?php
    for ($i = 1; $i <= 10; $i++) {
        echo "<a href='?number=$i'>$i</a> |";
    }
?>


<table>
    <?php $numar = isset($_GET["number"]) ? $_GET["number"] : 1;

    for($i = 1; $i <= 10; $i++) {
        $r = $numar * $i;
         echo "<tr><td> $i </td><td> * $numar = </td><td> $r </td></tr>";
         //echo "<tr><td>" .$i. "</td><td> * ".$numar." = </td><td>" .$r. "</td></tr>";
        }

    ?>
</table>

