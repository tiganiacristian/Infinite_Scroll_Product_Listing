function showValue(newValue)
{
	document.getElementById("range").innerHTML=newValue;

}
function showMaxValue(newValue)
{
	document.getElementById("rangeMax").innerHTML=newValue;
	
}

function playIt()	
{
   document.getElementById("play").innerHTML="<buy-button src='kaching.mp3' autostart=true loop=false volume=100 hidden=true>";
   return true;
}





