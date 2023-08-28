<?php 
$file = fopen('text.txt','a+');
$messsage =strip_tags( $_GET['message']);
fputs($file, $messsage."\n");
die();
$messsage =[];
while (!feof($file))
{
    $messsage[]=fgetc($file);

}
$messsage = array_reverse($messsage);
$i=0;
foreach ($messsage as $messsage)
{
    $i++;
    echo $messsage;
    if ($i>15) break;
    
}

?>