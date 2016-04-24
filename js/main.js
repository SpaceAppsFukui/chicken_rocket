var g_canvas;
var g_ctx;
var meter;
function myload(){
	g_canvas=document.getElementById("canvas0");
	g_ctx=g_canvas.getContext("2d");
}
var test_id;
var flg=0;
function main(){
	if(flg==0){
		myload();
		meter=new meter_class(g_ctx);
		meter.start();
		flg=1;
	}else{
		alert(meter.get_pow());
	}
}


