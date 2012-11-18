<html>
<style type="text/css">
p.results {
  word-wrap: normal;
}
<body>
</style>
<p class="results">
<img src="USMap.png" alt="map">
<h6>
nest <?php echo $_POST["nest"]; ?></br>
age <?php echo $_GET["age"]; ?></br>
maxy<?php echo $_GET["maxy"]; ?></br>
maxx<?php echo $_GET["maxx"]; ?></br>
miny<?php echo $_GET["miny"]; ?></br>
minx<?php echo $_GET["minx"]; ?></br>
parameter<?php echo $_GET["parameter"]; ?></br>
time<?php echo $_GET["time"]; ?></br>
hour<?php echo $_GET["hour"]; ?></br>
typef<?php echo $_GET["typef"]; ?></br>
movie<?php echo $_GET["nbmovie"]; ?></br>
minval<?php echo $_GET["minval"]; ?></br>
maxval<?php echo $_GET["maxval"]; ?></br>
log<?php echo $_GET["log"]; ?></br>
agl<?php echo $_GET["agl"]; ?></br>
intergrate<?php echo $_GET["intergrate"]; ?></br>
typecoupe<?php echo $_GET["typecoupe"]; ?></br>
both<?php echo $_GET["both"]; ?></br>
minlat<?php echo $_GET["minlat"]; ?></br>
maxlat<?php echo $_GET["maxlat"]; ?></br>
minlon<?php echo $_GET["minlon"]; ?></br>
maxlon<?php echo $_GET["maxlon"]; ?></br>
minlatv<?php echo $_GET["minlatv"]; ?></br>
maxlatv<?php echo $_GET["maxlatv"]; ?></br>
minlonv<?php echo $_GET["minlonv"]; ?></br>
maxlonv<?php echo $_GET["maxlonv"]; ?></br>


<?php
$time = microtime();
$time = explode(' ', $time);
$time = $time[1] + $time[0];
$start = $time;

sleep(5);

$time = microtime();
$time = explode(' ', $time);
$time = $time[1] + $time[0];
$finish = $time;
$total_time = round(($finish - $start), 4);
echo 'Page generated in '.$total_time.' seconds.'."<br>";
?></h6>
</p>
</body>
</html> 
