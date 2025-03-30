var canvas_tres =  document.getElementById("lienzo-tres");

if(canvas_tres.getContext){
    console.log("si la soporta");

    var ctx_3 = canvas_tres.getContext("2d");

    ctx_3.fillStyle = "rgb(200,0,0)";
    ctx_3.fillRect(10,10,55,50);

    ctx_3.fillStyle = "rgba(0,0,200,0.5)";
    ctx_3.fillRect(30,30,55,50);

    ctx_3.fillStyle = "rgba(0,200,0,0.5)";
    ctx_3.fillRect(50,50,55,50);
}else{
    console.log("no soportó");

   
}

if(canvas_cuatro.getContext){

    console.log("si la soporta");

    var ctx_4 = canvas_cuatro.getContext("2d");

    ctx_4.beginPath();
    ctx_4.moveTo(5,5);
    ctx_4.lineTo(125,125);
    ctx_4.strokeStyle = "#FFFFFF";
    ctx_4.stroke();


}else{
    console.log("No soportó");
}

if(lienzo-cinco.getContext){

    console.log("si la soporta");

    var ctx_5 = canvas_cuatro.getContext("2d");

    ctx_5.beginPath();
    ctx_5.setLineDash([5,15]);
    ctx_5.moveTo(0.40);
    ctx_5.strokeStyle = "#FFFFFF";
    ctx_5.stroke();

    ctx_5.beginPath();
    ctx_5.setLineDash([5,15]);
    ctx_5.moveTo(0.120);
    ctx_5.lineTo(150,120);
    ctx_5.strokeStyle = "#FFFFFF";
    ctx_5.stroke();

}
