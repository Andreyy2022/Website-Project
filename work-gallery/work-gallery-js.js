<?php
$images = array();
$folder = 'work-gallery-images';
$array_to_js = 'var imgs=[';
$all_files = scandir($folder);
for ($i=2; $i<=sizeof($all_files)-1; $i++) {
    $array_to_js.='"'.$folder.$all_files[$i].'",';
}
echo substr($array_to_js,0,-1).'];';
?>

var n = 0;
var time = 800;
play = setInterval("chgImg()", 3000);

function chgImg() {
$('#slide_show').fadeOut(time, function() {
  $(this).attr('src', imgs[n]).fadeIn(time);
});

n++;
if (n>=imgs.length) n = 0;
}