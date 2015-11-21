var flags_canvas = document.getElementById("flags");
var stage = flags_canvas.getContext("2d");
stage.fillStyle="white";
stage.fillRect(0,0,1200,120);
stage.fillStyle="#002395";
stage.fillRect(20,10,60,100);
stage.fillStyle="#D7D8DE";
stage.fillRect(80,10,60,100);
stage.fillStyle="red";
stage.fillRect(140,10,60,100);

stage.fillStyle="black";
stage.fillRect(350,10,150,33.3);
stage.fillStyle="#DD0000";
stage.fillRect(350,42,150,33.3);
stage.fillStyle="#FFCE00";
stage.fillRect(350,75,150,33.3);

stage.fillStyle="#D7D8DE";
stage.fillRect(650,10,150,33.3);
stage.fillStyle="#0073CE";
stage.fillRect(650,42,150,33.3);
stage.fillStyle="#DE2110";
stage.fillRect(650,75,150,33.3);

stage.fillStyle="#FF6500";
stage.fillRect(950,10,150,33.3);
stage.fillStyle="#D7D8DE";
stage.fillRect(950,42,150,33.3);
stage.fillStyle="#21A500";
stage.fillRect(950,75,150,33.3);
stage.beginPath();
stage.arc(1020,58,15,0,2*Math.PI);
stage.stroke();





