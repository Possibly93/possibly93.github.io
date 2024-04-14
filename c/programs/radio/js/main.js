self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

let canvas, c, canvasgl, gl, radio, animation, w, h, w2, h2, txt, pos, ini, fin, iAnim, u, listAnimations, lastAnim, lastCtx, time, pause;

var isPlaying=false;
var infos;
var lastTrack='';
function getInfos(){
	$.getJSON( "http://radio.windows93.net:8085/status-json.xsl", function( data ) {
		infos = data.icestats.source;
		if (lastTrack!=data.icestats.source.title) {
			lastTrack=data.icestats.source.title
			if(isPlaying){selectAnimation()}
			str='';
	        str+='<span class="infoT">Artist</span> <span class="infoI">'+(data.icestats.source.artist||"???")+'</span><br>';
	        str+='<span class="infoT">Track</span> <span class="infoI">'+(data.icestats.source.title||"???")+'</span><br>';
			str+='<span class="infoT">Listeners</span> <span class="infoI">'+data.icestats.source.listeners+'</span>';
			$('#infos').html(str);
		};
	});
}

// damn
function firefoxFix(){
	var check=0;
	for (var i = 0; i < radio.data.length; i++) {
		if(radio.data[i]==128) check=check+1;
	};
	if (check==radio.data.length&&isPlaying&&radio.player.paused==false) {
		console.log('ded');
		radio.player.paused=true;
		radio = {};
		radio = new Radio();
		radio.togglePlay();
		changeCanvas(animation.context);
		update();
	};
}

function init(){

	getInfos()
	setInterval(getInfos, 10000);
	//if (window.navigator.appCodeName=="Mozilla") {setInterval(firefoxFix, 100)};

	iAnim = 0;
	count = 0;

	radio = new Radio();

	canvas = document.createElement('canvas');
	canvas.width = w = innerWidth;
	canvas.height = h = innerHeight;
	
	canvasgl = canvas.cloneNode(false);
	canvasgl.style.display = 'none';
	
	c = canvas.getContext('2d');
	gl = canvasgl.getContext('webgl') || canvasgl.getContext("experimental-webgl");

	w2 = w>>1;
	h2 = h>>1;

	document.body.appendChild(canvas);
	document.body.appendChild(canvasgl);
	
	listAnimations = [
		{index: 0, anim: Animation01},
		{index: 1, anim: Animation02},
		{index: 2, anim: Animation03},
		{index: 3, anim: Animation05},
		{index: 4, anim: Animation06}
	];
	
	if(gl){
		listAnimations.push( {index: 5, anim: Animation04 } );
	}
	
	createUI();
	
	selectAnimation();
	
	addEvents();
	update();
}

function createUI(){
	pause = document.createElement('div');
	pause.id = 'pause';
	let select = document.createElement('select');
	select.id = 'playlist';
	let slug = getParameter();
	for(let i = 0; i < radio.playlist.length; i++){
		let opt = document.createElement('option');
		opt.value = i;
		opt.innerText = radio.playlist[i].name;
		if( radio.playlist[i].slug === slug){
			opt.selected = true;
			radio.player.src = radio.playlist[i].src;
		}
		select.appendChild( opt );
	}
	select.addEventListener('change',function(){
		radio.player.src = radio.playlist[this.value].src;
	});
	let btn = document.createElement('button');
	btn.id = 'btnPlay';
	btn.innerHTML = "<img src='play.png'>";
	btn.addEventListener('click', (e)=>{ togglePlay(e) } );
	//pause.appendChild( select );
	pause.appendChild( btn );
	document.body.appendChild( pause );
}

function selectAnimation(){
	time = (Math.random() * 7000) + 7000;
	let currentAnimation = listAnimations[Math.floor(Math.random()*listAnimations.length)];
	if( lastAnim !== currentAnimation.index){
		lastAnim = currentAnimation.index;
		let anim = new currentAnimation.anim();
		if( lastCtx !== anim.context ){
			changeCanvas( anim.context );
			lastCtx = anim.context;
		}
		animation = anim;
	}
}

function changeCanvas(ctx){
	switch(ctx){
		case 'pause' :
				pause.style.display = 'flex';
				canvas.style.display = 'none';
				canvasgl.style.display = 'none';
			break;
		case '2d' :
				pause.style.display = 'none';
				canvas.style.display = 'block';
				canvasgl.style.display = 'none';
			break;
		case 'webgl' :
				pause.style.display = 'none';
				canvasgl.style.display = 'block';
				canvas.style.display = 'none';
				c.clearRect(0,0,w,h);
			break;
	}
}

function showPaused(){
	changeCanvas('pause');
}

function update(){

	if( radio.player.paused ){
		showPaused();
		return;
	}

	u = requestAnimationFrame(update);

	radio.analyser.getByteTimeDomainData(radio.data);

	animation.show();

	if(!ini)
		ini = Date.now();
	fin = Date.now();
	
	/*
	if( fin - ini > time ){
		iAnim = (iAnim + 1) % listAnimations.length;
		selectAnimation();
		ini = null;
	}	
	*/
	
}

function togglePlay(e){
	isPlaying=true;
	e.preventDefault();
	changeCanvas(animation.context);
	radio.togglePlay();
	cancelAnimationFrame(u);
	update();
}

function addEvents(){

	canvas.addEventListener('click', (e)=>{ togglePlay(e) } );
		
	canvasgl.addEventListener('click', (e)=>{ togglePlay(e) } );
	
	window.addEventListener('resize', ()=>{
		canvas.width = w = innerWidth;
		canvas.height = h = innerHeight;
		w2 = w>>1;
		h2 = h>>1;
		cancelAnimationFrame(u);
		update();
	});

}

function getParameter() {
	let url = window.location.pathname;
	return url.replace(/\/radio\//,'').replace(/[\W_]+/g,'');
}

window.onload = ()=>{	init(); };
