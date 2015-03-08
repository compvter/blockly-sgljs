// SGL.JS
var display="";
var D;
var ticks;
var fps;
var tupd;

var current=new Array();
current.canvas=new Array();
current.object= new Array();
current.col=new Array();

// parametri di default
current.col.foreground="#000000";
current.col.background="#ffffff";
current.size="16";
current.x1=10;
current.y1=10;





//                              Main screen
//--------------------------------------------------------------------------------------------------------------------------------------------

function setdisplay( width, height){
	if (! width) var width=window.innerWidth-20;
	if (! height)var height=window.innerHeight-20;
	if (display!=""){
		display.width=width;
		display.height=height;
	}
	document.write("<canvas id='display' width='"+width+"' height='"+height+"'></canvas>");

	display = document.getElementById("display");
	current.target = display;
	
	display.addEventListener('mousemove',handleMouseMove,false);
	display.addEventListener('mousedown',handleMouseDown,false);
	display.addEventListener('mouseup',handleMouseUp,false);

	display.addEventListener('touchstart',handleTouchStart, false);
	display.addEventListener('touchend', handleTouchEnd, false);
	display.addEventListener('touchmove',handleTouchMove , false);
	//'dragstart', 'dragmove', 'dragend'
	setfps(50);
}
//--------------------------------------------------------------------------------------------------------------------------------------------

// SETFPS 
function setfps(fps){
	var milliseconds =1000 / fps;
	window.clearInterval(tupd);
	tupd=self.setInterval( _update, milliseconds);
	var d = new Date();
	ticks = d.getTime();
}
//--------------------------------------------------------------------------------------------------------------------------------------------

// UPDATE 
function _update(){
	var oldt=ticks
	if(self.update) update();	
	var d = new Date();
	ticks = d.getTime() ;
	fps=Math.round(1000 /(ticks-oldt));
}
//--------------------------------------------------------------------------------------------------------------------------------------------
 
function createsurface(width,height){
	if (width==null)width=current.canvas.width;
	if (height==null)height=current.canvas.height;

	var surface=document.createElement("canvas");
	surface.width=width;
	surface.height=height;

	current.canvas.width=width;
	current.canvas.height=height;
	
	return surface;
}
//--------------------------------------------------------------------------------------------------------------------------------------------

function loadsurface(filepath){
	if (filepath==null)width=current.filepath;

	var image= document.createElement("img");
	var surface=document.createElement("canvas");
	image.src=filepath;
	image.onload=function(){
		surface.width=image.width;
		surface.height=image.height;
		var ctx=surface.getContext("2d");
		ctx.drawImage(image,0,0);
	}
	surface.width=image.width;
	surface.height=image.height;
	
	current.filepath=filepath;
	current.surface=surface;
	return surface;	
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function blt( target,  xdest,  ydest, wdest, hdest, surface, xsource, ysource, wsource, hsource){
	if (target==null)target=current.target;
	if (surface==null)surface=current.surface;

	var ctx=target.getContext("2d");
	ctx.drawImage( surface, xsource, ysource, wsource, hsource, xdest, ydest, wdest, hdest);

	current.target=target;
	current.surface=surface;

}
//--------------------------------------------------------------------------------------------------------------------------------------------

function paste( target, x, y, surface,angle,zoom){
	if (target==null)target=current.target;
	if (surface==null)surface=current.surface;
	if (x==null)x=current.x1;
	if (y==null)y=current.y1;

        if (angle==null)angle=0;
        if (zoom==null)zoom=100;

  	var ctx=target.getContext('2d');
        var rangle=angle*6.28 / 360;
  	ctx.translate(x,y);
  	ctx.rotate( rangle );
  	var ssw=surface.width*zoom /100;
        var ssh=surface.height*zoom /100;
	ctx.drawImage( surface, 0, 0, surface.width, surface.height, 0-ssw/2, 0-ssh/2, ssw, ssh );
  	ctx.rotate( -rangle );
   	ctx.translate(-x,-y);

	current.target=target;
	current.surface=surface;
	current.x1=x;
	current.y1=y;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
 
// surfaces collisions
function hit(surfacea, xa, ya, surfaceb, xb, yb, xa2, ya2, xb2, yb2){
	var cc=0;
	
	if(!xa2)var xa2=xa+surfacea.width;
	if(!ya2)var ya2=ya+surfacea.height;
	if(!xb2)var xb2=xb+surfaceb.width;
	if(!yb2)var yb2=yb+surfaceb.height;
	
	//for debug
	//box(display,xa,ya,xa2-xa,ya2-ya,"#00ff00");
	//box(display,xb,yb,xb2-xb,yb2-yb,"#00ff00");

	if (xa<xb){
		if(xa2 >xb)
			cc+=1;
	}
	else{
		if(xb2 >xa)
			cc+=1;
	}
	if (ya<yb){
		if(ya2 >yb)
			cc+=1;
	}
	else{
		if(yb2 >ya)
			cc+=1;
	}
	
	if (cc==2)return 1;
	else return 0;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
 
// pixel precision surfaces collisions
function hitpp(surfacea, xa, ya, surfaceb, xb, yb, xa2, ya2, xb2, yb2){
	var xa2,ya2,xb2,yb2; //optional values
	var xaa,yaa,xbb,ybb;
	var xw,yh;
	var x,y;
	var cc;
	var colorkey="#000000";
 

	if(!xa2)xa2=xa+surfacea.width;
	if(!ya2)ya2=ya+surfacea.height;
	if(!xb2)xb2=xb+surfaceb.width;
	if(!yb2)yb2=yb+surfaceb.height;
	
	//for debug
	//box(display,xa,ya,xa2-xa,ya2-ya,"#00ff00");
	//box(display,xb,yb,xb2-xb,yb2-yb,"#00ff00");

	xaa=0;
	xbb=0;
	if (xa<xb)
		xaa=Math.max(xa,xb)-Math.min(xa,xb);
	else
		xbb=Math.max(xa,xb)-Math.min(xa,xb);

	yaa=0;
	ybb=0;
	if (ya<yb)
		yaa=Math.max(ya,yb)-Math.min(ya,yb);
	else
		ybb=Math.max(ya,yb)-Math.min(ya,yb);

	xw=Math.min(xa2,xb2)-Math.max(xa,xb);
	yh=Math.min(ya2,yb2)-Math.max(ya,yb);

	for (y=0; y<yh; y++){
		for (x=0; x<xw; x++){
			if(getpixel(surfacea,xaa+x,yaa+y)!=colorkey){
				if(getpixel(surfaceb,xbb+x,ybb+y)!=colorkey){
					return 1;
				}
			}
		}
	}
	return 0;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
 

//                              GRAPHICS
//--------------------------------------------------------------------------------------------------------------------------------------------
 
function _hex(n){
	var h=n.toString(16);
	if(h.length==1) h="0"+h;
	return h.toUpperCase();
}
//--------------------------------------------------------------------------------------------------------------------------------------------

function rgb( r, g, b){
	return ("#" + _hex(r)+ _hex(g) + _hex(b));
}
//--------------------------------------------------------------------------------------------------------------------------------------------

function cls( target, col){
	if (target==null)target=current.target;
	if (col==null)col=current.col.background;

	var ctx=target.getContext("2d");
	ctx.fillStyle=col;
	ctx.clearRect(0,0,target.width,target.height);
	ctx.fillRect(0,0,target.width,target.height);	

	current.target=target;
	current.col.background=col;
}
//--------------------------------------------------------------------------------------------------------------------------------------------

function putpixel( target, x, y, col){
	if (target==null)target=current.target;
	if (x==null)x=current.x1;
	if (y==null)y=current.y1;
	if (col==null)col=current.col.foreground;

	var ctx=target.getContext("2d");
	ctx.fillStyle=col;
	ctx.fillRect(x,y,1,1);

	current.target=target;
	current.x1=x;
	current.y1=y;
	current.col.foreground=col;
}
//--------------------------------------------------------------------------------------------------------------------------------------------

function getpixel( target, x, y){
	if (target==null)target=current.target;
	if (x==null)x=current.x1;
	if (y==null)y=current.y1;

	var ctx=target.getContext("2d");
	var c = ctx.getImageData(x, y, 1, 1).data;
	var hex = "#" + ("000000" + ((c[0] << 16) | (c[1] << 8) | c[2]).toString(16)).slice(-6);

	current.target=target;
	current.x1=x;
	current.y1=y;
	
	current.col.foreground=hex;

	return  hex;
}
//--------------------------------------------------------------------------------------------------------------------------------------------

function hline( target, x, y, h, col){
	if (target==null)target=current.target;
	if (x==null)x=current.x1;
	if (y==null)y=current.y1;
	if (col==null)col=current.col.foreground;

	var ctx=target.getContext("2d");
	ctx.fillStyle=col;
	ctx.fillRect(x,y,h,1);

	current.target=target;
	current.x1=x+h;
	current.y1=y;
	current.col.foreground=col;
}
//--------------------------------------------------------------------------------------------------------------------------------------------

function vline( target, x, y, v, col){
	if (target==null)target=current.target;
	if (x==null)x=current.x1;
	if (y==null)y=current.y1;
	if (col==null)col=current.col.foreground;

	var ctx=target.getContext("2d");
	ctx.fillStyle=col;
	ctx.fillRect(x,y,1,v);

	current.target=target;
	current.x1=x;
	current.y1=y+v;
	current.col.foreground=col;

}
//--------------------------------------------------------------------------------------------------------------------------------------------

function line( target, x1, y1, x2, y2, col){
	if (target==null)target=current.target;
	if (x1==null)x1=current.x1;
	if (y1==null)y1=current.y1;
	if (col==null)col=current.col.foreground;

	var ctx=target.getContext("2d");
	ctx.beginPath();
	ctx.moveTo(x1,y1);
	ctx.lineTo(x2,y2);
	ctx.strokeStyle=col;
	ctx.stroke();

	current.target=target;
	current.x1=x2;
	current.y1=y2;
	current.col.foreground=col;

}
//--------------------------------------------------------------------------------------------------------------------------------------------

function aline( target, x1, y1, d , a, col){
	current.x1   = x1;
	current.y1   = y1;
	current.x2   = x1 + d * Math.sin(a*3.14/180);
	current.y2   = y1 + d * Math.cos(a*3.14/180);
	line ( target , x1,y1,current.x2,current.y2,col ) ;
}
//--------------------------------------------------------------------------------------------------------------------------------------------

function box( target, x, y, w, h, col){
	if (target==null)target=current.target;
	if (x==null)x=current.x1;
	if (y==null)y=current.y1;
	if (col==null)col=current.col.foreground;

	var ctx=target.getContext("2d");
	ctx.strokeStyle=col;
	ctx.strokeRect(x,y,w,h);

	current.target=target;
	current.col.foreground=col;

}
//--------------------------------------------------------------------------------------------------------------------------------------------

function bar( target, x, y, w, h, col){
	if (target==null)target=current.target;
	if (x==null)x=current.x1;
	if (y==null)y=current.y1;
	if (col==null)col=current.col.foreground;

	var ctx=target.getContext("2d");
	ctx.fillStyle=col;
	ctx.fillRect(x,y,w,h);

	current.target=target;
	current.col.foreground=col;

}
//--------------------------------------------------------------------------------------------------------------------------------------------

function circle( target, vx, vy, r, col){
	if (target==null)target=current.target;
	if (vx==null)vx=current.x1;
	if (vy==null)vy=current.y1;
	if (col==null)col=current.col.foreground;

	var ctx=target.getContext("2d");
	ctx.beginPath();
	ctx.arc(vx,vy,r,0,2*Math.PI);
	ctx.strokeStyle=col;
	ctx.stroke();

	current.target=target;
	current.col.foreground=col;
}
//--------------------------------------------------------------------------------------------------------------------------------------------

function fillcircle( target, vx, vy, r, col){
	if (target==null)target=current.target;
	if (vx==null)vx=current.x1;
	if (vy==null)vy=current.y1;
	if (col==null)col=current.col.foreground;

	var ctx=target.getContext("2d");
	ctx.beginPath();
	ctx.arc(vx,vy,r,0,2*Math.PI);
	ctx.fillStyle=col;
	ctx.strokeStyle=col;
	ctx.fill();
	ctx.stroke();

	current.target=target;
	current.col.foreground=col;
}
//--------------------------------------------------------------------------------------------------------------------------------------------

//text
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var fontName="Arial";


function setfont(fnt){
	fontName=fnt;
}
//--------------------------------------------------------------------------------------------------------------------------------------------

function text ( target, x, y, size, col, txt){
	if (target==null)target=current.target;
	if (x==null)x=current.x1;
	if (y==null)y=current.y1;
	if (size==null)size=current.size;
	if (col==null)col=current.col.foreground;
	if (txt==null)txt=current.txt;
	

	var ctx=target.getContext("2d");
	ctx.fillStyle=col;
	ctx.font=size+"px "+fontName;
	ctx.fillText(txt,x,y);

	current.target=target;
	current.x1=x;
	current.y1=y;
	current.size=size;
	current.col.foreground=col;
}
//--------------------------------------------------------------------------------------------------------------------------------------------

//mouse code
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

var mouseX=0;
var mouseY=0;
var mouseB=0;

function handleMouseMove( e){
	if(e.offsetX){
		mouseX = e.offsetX;
		mouseY = e.offsetY;
	}
	else if(e.layerX){
		mouseX = e.layerX;
		mouseY = e.layerY;
	}
}
//--------------------------------------------------------------------------------------------------------------------------------------------
 
function handleMouseDown( e){
		mouseB=e.button+1;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
 
function handleMouseUp(e){
	mouseB-=e.button+1;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
 
//touch code
 
var touchB =new Array();
var touchX=new Array();
var touchY=new Array();

 
function handleTouchStart(e){ 
	e.preventDefault();
	mouseB = 1;
	mouseX=e.touches[0].clientX;
	mouseY=e.touches[0].clientY;
	for (var i=0;i<e.touches.length;i++){
		touchB[i] = 1;
		touchX[i]=e.touches[i].clientX;
		touchY[i]=e.touches[i].clientY;
	}	
}
//--------------------------------------------------------------------------------------------------------------------------------------------
 
function handleTouchEnd(e){ 
	e.preventDefault();
	mouseB = 0;
	for (var i=0;i<8;i++){
		touchB[i] = 0;
	}	

}
//--------------------------------------------------------------------------------------------------------------------------------------------
 
function handleTouchMove(e){
	e.preventDefault();
	mouseX=e.changedTouches[0].clientX;
	mouseY=e.changedTouches[0].clientY; 
	for (var i=0;i<e.touches.length;i++){
		touchB[i] = 1;
		touchX[i]=e.touches[i].clientX;
		touchY[i]=e.touches[i].clientY;
	}	
}
//--------------------------------------------------------------------------------------------------------------------------------------------
 
//keyboard code
//--------------------------------------------------------------------------------------------

var KEY_ESC	=27;
var KEY_SPACE= 32; 	
var KEY_UP	= 38;		
var KEY_LEFT 	= 37;		
var KEY_RIGHT = 39;	
var KEY_DOWN = 40;	
var KEY_CTRL= 17;
var KEY_BACKSPACE	 = 8;
var KEY_TAB = 9;
var KEY_ENTER = 13;
var KEY_SHIFT	= 16;
var KEY_CTRL	= 17;
var KEY_ALT =	 18;
var KEY_PAUSE_BREAK =	 19;
var KEY_CAPS_LOCK = 20;
var KEY_ESCAPE = 27;
var KEY_PAGE_UP =	 33;
var KEY_PAGE_DOWN = 34;
var KEY_END = 35;
var KEY_HOME = 36;
var KEY_LEFT_ARROW = 37;
var KEY_UP_ARROW = 38;
var KEY_RIGHT_ARROW = 39;
var KEY_DOWN_ARROW = 40;
var KEY_INSERT = 45;
var KEY_DEL =	 46;
var KEY_0 =	 48;
var KEY_1 =	 49;
var KEY_2 =	 50;
var KEY_3 =	 51;
var KEY_4 =	 52;
var KEY_5 =	 53;
var KEY_6 =	 54;
var KEY_7 =	 55;
var KEY_8 =	 56;
var KEY_9 =	 57;
var KEY_A =	 65;
var KEY_B =	 66;
var KEY_C =	 67;
var KEY_D =	 68;
var KEY_E =	 69;
var KEY_F =	 70;
var KEY_G =	 71;
var KEY_H =	 72;
var KEY_I	 =	 73;
var KEY_J	 =	 74;
var KEY_K	 =	 75;
var KEY_L	 =	 76;
var KEY_M =	 77;
var KEY_N =	 78;
var KEY_O =	 79;
var KEY_P =	 80;
var KEY_Q =	 81;
var KEY_R =	 82;
var KEY_S =	 83;
var KEY_T =	 84;
var KEY_U =	 85;
var KEY_V =	 86;
var KEY_W=	 87;
var KEY_X =	 88;
var KEY_Y =	 89;
var KEY_Z =	 90;
var KEY_LEFT_WINDOW_KEY =	  91;
var KEY_RIGHT_WINDOW_KEY =  92;
var KEY_SELECT_KEY = 93;
var KEY_NUMPAD_0 =   96;
var KEY_NUMPAD_1 =   97;
var KEY_NUMPAD_2 =   98;
var KEY_NUMPAD_3 =   99;
var KEY_NUMPAD_4 =	 100;
var KEY_NUMPAD_5 = 101;
var KEY_NUMPAD_6 =	 102;
var KEY_NUMPAD_7 =	 103;
var KEY_NUMPAD_8 =	 104;
var KEY_NUMPAD_9 =	 105;
var KEY_MULTIPLY     =	 106;
var KEY_ADD	   = 107;
var KEY_SUBTRACT =	 109;
var KEY_DECIMAL_POINT =	 110;
var KEY_DIVIDE	= 111;
var KEY_F1	 =112;
var KEY_F2	 =113;
var KEY_F3	 =114;
var KEY_F4	 =115;
var KEY_F5	= 116;
var KEY_F6	 =117;
var KEY_F7	= 118;
var KEY_F8	 =119;
var KEY_F9	 =120;
var KEY_F10	 =121;
var KEY_F11	 =122;
var KEY_F12	 =123;
var KEY_NUM_LOCK	 =144;
var KEY_SCROLL_LOCK	 =145;
var KEY_SEMI_COLON	 =186;
var KEY_EQUAL_SIGN	 =187;
var KEY_COMMA	 =188;
var KEY_DASH	 =189;
var KEY_PERIOD	 =190;
var KEY_FORWARD_SLASH	 =191;
var KEY_GRAVE_ACCENT	 =192;
var KEY_OPEN_BRACKET	 =219;
var KEY_BACK_SLASH	 	 =220;
var KEY_CLOSE_BRAKET	 =221;
var KEY_SINGLE_QUOTE	 =222;

document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;

var key=new Array();
//attiva tastiera

function handleKeyDown( e ){
	//cross browser issues exist
	if(!e){ var e = window.event; }
	key[e.keyCode]=1;
}
//--------------------------------------------------------------------------------------------------------------------------------------------

function handleKeyUp( e ){
	//cross browser issues exist
	if(!e){ var e = window.event; }
	key[e.keyCode]=0;
}
//--------------------------------------------------------------------------------------------------------------------------------------------
 

// sound
 
function loadsound(filepath){
	var sound= document.createElement("audio");
	sound.src=filepath;
	sound.autoplay="";
	if (filepath.substr(filepath.length - 3,filepath.length)=="wav") sound.type="audio/wav";
	if (filepath.substr(filepath.length - 3,filepath.length)=="ogg") sound.type="audio/ogg";
	if (filepath.substr(filepath.length - 3,filepath.length)=="mp3") sound.type="audio/mp3";
	current.sound=sound;
	return sound;
}
//--------------------------------------------------------------------------------------------------------------------------------------------

function playsound(sound){
	sound.play();
}
//--------------------------------------------------------------------------------------------------------------------------------------------


//defalt param
//--------------------------------------------------------------------------------------
current.col.foreground="#000000";
current.col.background="#ffffff";
current.size=16;

setdisplay();
 
