function meter_class(Lctx){
	this.ctx=Lctx;
	this.power=0;
	this.direction=1;//right 1 , left -1
	this.change=1;
	this.height=100;
	this.max=250;
	this.ctx;
	this.timer;
	this.x=0;
	this.y=0;
	console.log("made meter object");
}

meter_class.prototype.add_pow=function(){

	this.power+=this.change*this.direction;
	if(this.power>this.max){
		this.power=this.max;
		this.direction=-1;
	}
	if(this.power<0){
		this.power=0;
		this.direction=1;
	}
	this.draw();
	console.log("use add_pow");
};

meter_class.prototype.start=function(){
	meter.timer=setInterval("meter.add_pow()",10);
};

meter_class.prototype.end=function(){
	this.ctx.clearRect(0,0,1000,1000);
};

meter_class.prototype.draw=function(){

	//set color
	var Lcol_per=(this.power/this.max)*255;
	var Lcolor=255-(Lcol_per);
	var Lcol_str="rgb(255,"+Lcolor+",0)";

	this.ctx.clearRect(0,0,1000,1000);
	this.ctx.strokeStyle="#ffffff";
	if(Lcol_per>240){
		this.ctx.lineWidth=10;
	}else{
		this.ctx.lineWidth=5;
	}
	this.ctx.beginPath();
	this.ctx.moveTo(this.x,this.y+this.height);
	this.ctx.lineTo(this.x+this.max,this.y);
	this.ctx.lineTo(this.x+this.max,this.y+this.height);
	this.ctx.closePath();
	this.ctx.stroke();

	//�����v�Z
	var Langle=Math.atan2(this.height,this.max);
	console.log("Langle"+Langle);
	var Lheight=this.power*Math.tan(Langle);


	this.ctx.beginPath();
	if(Lcol_per>245)
		Lcol_str="#ffffff";

	this.ctx.fillStyle=Lcol_str;
	this.ctx.moveTo(this.x,this.y+this.height);
	console.log("Lheight"+(this.height-Lheight));
	this.ctx.lineTo(this.x+this.power,this.y+(this.height-Lheight));
	this.ctx.lineTo(this.x+this.power,this.y+this.height);
	this.ctx.closePath();
	this.ctx.fill();

};

meter_class.prototype.get_pow=function(){
	clearInterval(this.timer);
	return this.power/this.max;
};
