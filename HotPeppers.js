(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"HotPeppers_atlas_1", frames: [[1485,668,570,612],[3582,1178,243,261],[2171,0,668,607],[3097,1245,199,181],[2741,635,580,608],[3827,1178,240,251],[3323,677,569,499],[2303,1236,221,195],[2717,1245,188,213],[2526,1236,189,213],[1254,1244,189,213],[2907,1245,188,213],[2171,609,568,625],[1254,769,226,240],[1613,1282,153,130],[773,769,479,568],[3894,677,202,237],[1445,1282,166,165],[0,770,392,499],[1254,1011,218,231],[0,0,771,768],[394,770,341,339],[0,1271,166,166],[2841,0,633,633],[2057,1236,244,244],[3476,0,559,675],[3894,916,189,226],[773,0,710,767],[394,1111,251,270],[168,1271,166,166],[1485,0,684,666],[3323,1178,257,251]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Banana = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BananaGrey = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BirdsEye = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BirdsEyeGrey = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Carolina = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CarolinaGrey = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Cayenne = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CayenneGrey = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.DALIA = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.DANIEL = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.EDEN = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.ELAD = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Habanero = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.HabaneroGrey = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.HIT = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Jalapeño = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.JalapeñoGrey = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.LikeIcon = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Morich = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.MorichGrey = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Padrón = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.PadrónGrey = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.pepeerIcon = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.scorpion = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.scorpionGrey = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Scotch = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.ScotchGrey = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.Shishito = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.ShishitoGrey = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.StopIcon = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.Viper = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.ViperGrey = function() {
	this.initialize(ss["HotPeppers_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.XMild = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Ai2iwICvCwIC/i+Ai2CxICvixIC/C+");
	this.shape.setTransform(38.15,38.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EAF1D3").s().p("AkKELQhvhvAAicQAAicBvhuQBuhvCcAAQCcAABvBvQBvBuAACcQAACchvBvQhvBvicAAQicAAhuhvgAC7DFIi+i+IiwCwICwiwgAgDAHIC+i+Ii+C+IiwiwICwCwg");
	this.shape_1.setTransform(37.8,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.XMild, new cjs.Rectangle(0,0,75.6,75.6), null);


(lib.XMedium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Ai2iwICvCwIC/i+Ai2CxICvixIC/C+");
	this.shape.setTransform(38.15,38.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEF0CA").s().p("AkKELQhvhvAAicQAAicBvhuQBuhvCcAAQCcAABvBvQBvBuAACcQAACchvBvQhvBvicAAQicAAhuhvgAC7DFIi+i+IiwCwICwiwgAgDAHIC+i+Ii+C+IiwiwICwCwg");
	this.shape_1.setTransform(37.8,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.XMedium, new cjs.Rectangle(0,0,75.6,75.6), null);


(lib.XHot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Ai2iwICvCwIC/i+AgHAAIC/C+Ai2CxICvix");
	this.shape.setTransform(38.15,38.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFEBEB").s().p("AkKELQhvhvAAicQAAicBvhuQBuhvCcAAQCcAABvBvQBvBuAACcQAACchvBvQhvBvicAAQicAAhuhvgAC7DFIi+i+gAizC3ICwiwgAgDAHIC+i+Ii+C+IiwiwICwCwg");
	this.shape_1.setTransform(37.8,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.XHot, new cjs.Rectangle(0,0,75.6,75.6), null);


(lib.XHell = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Ai2iwICvCwIC/i+Ai2CxICvixIC/C+");
	this.shape.setTransform(38.15,38.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD5D5").s().p("AkKELQhvhvAAicQAAicBvhuQBuhvCcAAQCcAABvBvQBvBuAACcQAACchvBvQhvBvicAAQicAAhuhvgAC7DFIi+i+IiwCwICwiwgAgDAHIC+i+Ii+C+IiwiwICwCwg");
	this.shape_1.setTransform(37.8,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.XHell, new cjs.Rectangle(0,0,75.6,75.6), null);


(lib.XAboutUs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(5,1,1).p("Ai2iwICvCwIC/i+Ai2CxICvixIC/C+");
	this.shape.setTransform(38.15,38.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAF5F1").s().p("AkKELQhvhvAAicQAAicBvhuQBuhvCcAAQCcAABvBvQBvBuAACcQAACchvBvQhvBvicAAQicAAhuhvgAC7DFIi+i+IiwCwICwiwgAgDAHIC+i+Ii+C+IiwiwICwCwg");
	this.shape_1.setTransform(37.8,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.XAboutUs, new cjs.Rectangle(0,0,75.6,75.6), null);


(lib.TextBoldViper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("נאגה צפע", "normal 700 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBoldViper, new cjs.Rectangle(0,0,182.2,40.8), null);


(lib.TextBoldShishto = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("שישיטו", "normal 700 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBoldShishto, new cjs.Rectangle(0,0,182.2,40.8), null);


(lib.TextBoldScotch = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("מצנפת סקוטש", "normal 700 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBoldScotch, new cjs.Rectangle(0,0,182.2,40.8), null);


(lib.TextBoldScorpion = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("מורוגה סקורפיון", "normal 700 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBoldScorpion, new cjs.Rectangle(0,0,182.2,40.8), null);


(lib.TextBoldPaderon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("פדרון", "normal 700 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBoldPaderon, new cjs.Rectangle(0,0,182.2,40.8), null);


(lib.TextBoldMorich = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("נאגה מוריץ", "normal 900 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBoldMorich, new cjs.Rectangle(0,0,182.2,40.8), null);


(lib.TextBoldJalapeno = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("חלפיניו", "normal 700 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBoldJalapeno, new cjs.Rectangle(0,0,182.2,40.8), null);


(lib.TextBoldInfo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("מידע למתפלפל", "normal 900 60px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 75;
	this.text.lineWidth = 1079;
	this.text.parent = this;
	this.text.setTransform(1080.9,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBoldInfo, new cjs.Rectangle(0,0,1082.9,154.2), null);


(lib.TextBoldHabanero = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("הבאנרו", "normal 700 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBoldHabanero, new cjs.Rectangle(0,0,182.2,40.8), null);


(lib.TextBoldCrolina = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("קרולינה ריפר", "normal 700 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBoldCrolina, new cjs.Rectangle(0,0,182.2,40.8), null);


(lib.TextBoldCayenne = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("קאיין", "normal 700 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBoldCayenne, new cjs.Rectangle(0,0,182.2,40.8), null);


(lib.TextBoldBirdsEye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("עין הציפור", "normal 700 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBoldBirdsEye, new cjs.Rectangle(0,0,182.2,40.8), null);


(lib.TextBoldBanana = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("שיפקה", "normal 700 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 31;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBoldBanana, new cjs.Rectangle(0,0,182.2,40.8), null);


(lib.TextBoldAboutUs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("פלפלים חריפים", "normal 900 70px 'Rubik'", "#C20003");
	this.text.textAlign = "center";
	this.text.lineHeight = 88;
	this.text.lineWidth = 774;
	this.text.parent = this;
	this.text.setTransform(453,-195.2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.text_1 = new cjs.Text("אודות", "normal 900 60px 'Rubik'", "#FFFFFF");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 75;
	this.text_1.lineWidth = 1079;
	this.text_1.parent = this;
	this.text_1.setTransform(751.05,-318.85);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("דניאל כץ", "normal 500 20px 'Rubik'", "#C20104");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 110;
	this.text_2.parent = this;
	this.text_2.setTransform(-156.75,223.15);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("עדן בניטה", "normal 500 20px 'Rubik'", "#C20104");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 110;
	this.text_3.parent = this;
	this.text_3.setTransform(-156.75,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("דליה שרוני", "normal 500 20px 'Rubik'", "#C20104");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 24;
	this.text_4.lineWidth = 110;
	this.text_4.parent = this;
	this.text_4.setTransform(48.25,223.15);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_4);
	}

	this.text_5 = new cjs.Text("אלעד דניאל", "normal 500 20px 'Rubik'", "#C20104");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 24;
	this.text_5.lineWidth = 110;
	this.text_5.parent = this;
	this.text_5.setTransform(48.25,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_5);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.text_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TextBoldAboutUs, new cjs.Rectangle(-329.8,-320.8,1171.8,581), null);


(lib.telem = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("הפקולטה לטכנולוגיות למידה", "normal 500 20px 'Rubik'", "#065A65");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 774;
	this.text.parent = this;
	this.text.setTransform(389.05,2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.telem, new cjs.Rectangle(0,0,778.1,39.1), null);


(lib.ScovilleRuler = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9DBD40").s().p("ApfBrIAAjVIS1AAIAKAAIAADSIAAADg");
	this.shape.setTransform(61.8,11.55);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDC42C").s().p("AJaBrIyvAAIAAjTIgKAAIAAgCIS/AAIAAACIAADTg");
	this.shape_1.setTransform(182.4,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B70513").s().p("ApfBrIAAgDIAGAAIAAjSIS5AAIAAABIAADUg");
	this.shape_2.setTransform(303.35,11.55);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#88070C").s().p("ApfBrIAAgCIAAjTIS/AAIAADVg");
	this.shape_3.setTransform(424.95,11.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScovilleRuler, new cjs.Rectangle(1,0.6,484.8,21.799999999999997), null);


(lib.ScaleMildClick = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(159,189,60,0.498)").ss(10,1,1).p("ASLDTIvmu1QlzGSi5HQQi6HRAGICIVVAHQgHk9BgjoQBfjjC5h/gAs0RQIlWgRQgOqPDnonQDaoJHJnZIEcDtQmmGWjMHlQjKHjgGJeg");
	this.shape.setTransform(112.7072,106.75);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Part
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9FBD3C").s().p("An/QsIAAggQAAvpKzrKIOlNuIgBABQlkFkAAH4IAAAIgAxYQsQAJzdNnt6IDGC7QsgMrgJRxg");
	this.shape_1.setTransform(111.325,106.825);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScaleMildClick, new cjs.Rectangle(-8.6,-9.6,242.7,232.7), null);


(lib.ScaleMild = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9FBD3C").s().p("An/QsIAAggQAAvpKzrKIOlNuIgBABQlkFkAAH4IAAAIgAxYQsQAJzdNnt6IDGC7QsgMrgJRxg");
	this.shape.setTransform(111.325,106.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScaleMild, new cjs.Rectangle(0,0,222.7,213.7), null);


(lib.ScaleMediumClick = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(252,197,44,0.498)").ss(10,1,1).p("ASHMfIgL1aQoUgsoGDnQnTDQl8GLIPmOwQDVjiDyhcQDkhWDjAogAt2BRIkQjxQHDnfJkkDQJIj4KQgQIADFmQpAgHoKDpQnxDfm3G0g");
	this.shape.setTransform(108.65,110.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Part
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCC52C").s().p("AqwDfIAhgiQLUrUQBAAIAJAAIAAUCQn4AAljFjgAxOikIAcgdQOIuHT5gFIAAEbQyOAAs4M4IgQAQg");
	this.shape_1.setTransform(110.25,110.225);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScaleMediumClick, new cjs.Rectangle(-12.2,-10.8,241.7,242.60000000000002), null);


(lib.ScaleMedium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FCC52C").s().p("AqwDfIAhgiQLUrUQBAAIAJAAIAAUCQn4AAljFjgAxOikIAcgdQOIuHT5gFIAAEbQyOAAs4M4IgQAQg");
	this.shape.setTransform(110.25,110.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScaleMedium, new cjs.Rectangle(0,0,220.5,220.5), null);


(lib.ScaleHotClick = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(182,6,17,0.498)").ss(10,1,1).p("AksR2IP0uMQl6mRnyjWQnqjToIAGIgFVlQFBgHDYBWQDZBVB9C3gAySsSIAEljQKKgPJ1ERQJMD/HfHOIkyD9QmYmooDjdQoHjepagGg");
	this.shape.setTransform(113.4,110.3609);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Part
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B60611").s().p("AxcL2IgBAAIAA0CQP8ADLRLRIAsAtIuzNOQldlNnoAAgANrARQs5s4yOAAIgBAAIAAkbIAQAAQUEAAOMOMIAbAbIjcDDIgXgXg");
	this.shape_1.setTransform(111.775,109.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScaleHotClick, new cjs.Rectangle(-9.5,-8.9,245.9,238.5), null);


(lib.ScaleHot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B60611").s().p("AxcL2IgBAAIAA0CQP8ADLRLRIAsAtIuzNOQldlNnoAAgANrARQs5s4yOAAIgBAAIAAkbIAQAAQUEAAOMOMIAbAbIjcDDIgXgXg");
	this.shape.setTransform(111.775,109.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScaleHot, new cjs.Rectangle(0,0,223.6,218.2), null);


(lib.ScaleHellClick = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Line
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(137,6,19,0.498)").ss(10,1,1).p("AsYRVIUoAAQgWo5ijmrQivnLljlcIvWNxQDjDZBiD1QBeDtgqDfgAACtvID9jmQHVHBDiI+QDQIRAMKbIlmAAQALpKjHnnQjGnjmomxg");
	this.shape.setTransform(113.65,107.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Part
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#890613").s().p("ANJQ1QgEx3sesvIDbjDQNuOAADTpgAr3Q1IAAgYQAAn4lklkIgYgXIO0tNQKoLGAAPhIAAAxg");
	this.shape_1.setTransform(113.95,107.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScaleHellClick, new cjs.Rectangle(-8.3,-8.8,243.9,232), null);


(lib.ScaleHell = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#890613").s().p("ANJQ1QgEx3sesvIDbjDQNuOAADTpgAr3Q1IAAgYQAAn4lklkIgYgXIO0tNQKoLGAAPhIAAAxg");
	this.shape.setTransform(113.95,107.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ScaleHell, new cjs.Rectangle(0,0,227.9,215.4), null);


(lib.pointer = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000066").ss(1,1,1,3,true).p("EgyagIHMBk1AJBMhk1AHO");
	this.shape.setTransform(414.85,60.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1,3,true).p("AJfAAQAAD7iyCyQg2A1g7AmQiMBXiwAAQj6AAiyiyQiyiyAAj7QAAj6CyiyQCyiyD6AAQCwAACMBXQA7AlA2A2QCyCyAAD6g");
	this.shape_1.setTransform(60.65,60.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AimCmQhAhBgEhbIAAgKQAAhgBEhFQBGhFBgAAQBEAAA2AiQAYAOAUAVQBFBFAABgIAAAKQgDBbhCBBQgUAVgYAOQg2AihEAAQhgAAhGhFg");
	this.shape_2.setTransform(56.7,58.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Eg21AGtQiyiyAAj7QAAj6CyiyQCyiyD7AAQCwAACLBYQA8AkA1A2QCyCyABD6QgBD7iyCyQg1A1g8AlQiLBYiwAAQj7gBiyixgEgzWgC5QhEBFAABhIAAAKIAAAJQAABhBEBFQBFBFBiAAQBDAAA3giQAXgOAUgVQBGhFgBhhIAAgJIAAgKQABhhhGhFQgUgVgXgOQg3gihDAAQhiAAhFBFgEgrNAIHIAAAAgEgpcAGtQCyiyABj7QgBj6iyiyQg1g2g8gkMBk0AJAMhk0AHNQA8glA1g1g");
	this.shape_3.setTransform(368.75,60.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.pointer, new cjs.Rectangle(-1,-1,739.5,123.3), null);


(lib.Pepper = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(20,83,21,0.961)").s().p("AtUbMQgZgMAUhmUAZfgmTgs/gPAQhigghngTIAojNUAsvgFvALdAsiQAiCDBiCvQB3DUHJgsQJYLxrjCeQgnAJgUBmQpaCSoiAAQtGAArClYg");
	this.shape.setTransform(230.6805,208.3835);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(131,6,13,0.984)").s().p("EBxwBlPQgon6i+mQQi+mYk/AEUh3FAB1hMkg6EQAUhngpg9QsOyItMxdQAUhngihPUgNnggOACjgrYUAjugK1AqaABJIgUBmUAJ7AlwALdAkaQAbBXgTBmQGyH+FwIjQApA+gUBmUAtWAlXBPYATBQOvDjFaOfQCEFgCPFaIgoDNIgnDMIhmgUQiILToXgEIgnDMIjNgog");
	this.shape_1.setTransform(886.7969,1111.8772);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Pepper, new cjs.Rectangle(0,0,1724.4,1763.8), null);


(lib.MildArea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AgTMqQqRgHiqAAQgChjAPiUQAfkmBRjxQBylTCykRQBQh7A/g5QBDg8AfAdQDXDICwC5QB5CABKA4QBbBGCKCIQCpCmAYAUQAtApgdAYQgUARhUAxQjACPAMFyQABAJkeAAIkegCg");
	this.shape.setTransform(84.7184,81.2011);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MildArea, new cjs.Rectangle(0,0,169.5,162.4), null);


(lib.MidumeArea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AgTMqQqRgHiqAAQgChjAPiUQAfkmBRjxQBylTCykRQBQh7A/g5QBDg8AfAdQDXDICwC5QB5CABKA4QBbBGCKCIQCpCmAYAUQAtApgdAYQgUARhUAxQjACPAMFyQABAJkeAAIkegCg");
	this.shape.setTransform(84.7184,81.2011);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.MidumeArea, new cjs.Rectangle(0,0,169.5,162.4), null);


(lib.location = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjBcQgahcgIgGQgdgdAAgpQAAgpAdgdQAdgdAoAAQApAAAdAdQAdAdAAApQAAApgdAdQgIAGgWBcQgVBUgPAAQgPAAgYhUgAgfhxQgOANAAATQAAATAOANQANAOASAAQATAAANgOQAOgNAAgTQAAgTgOgNQgNgNgTAAQgSAAgNANg");
	this.shape.setTransform(9.9,17.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.location, new cjs.Rectangle(0,0,19.8,35.3), null);


(lib.InfoWindows = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("קביעת מידת החריפות נעשית באמצעות סולם סקוביל, הנמדד ביחידות חום\nכל יחידת חום מציינת את מידת נוכחות הקפסאיצין .SHU- Scoville Heat Units .שהיא התרכובת הכימית שיוצרת את החריפות", "normal 300 18px 'Rubik'");
	this.text.textAlign = "right";
	this.text.lineHeight = 23;
	this.text.lineWidth = 564;
	this.text.parent = this;
	this.text.setTransform(503.15,52.25);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EApbAHRQgFgDAAgDQAAgFAFgDQAGgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgGgEgEAoYAHRQgFgDAAgDQAAgFAFgDQAGgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgGgEgEAnVAHRQgFgDAAgDQAAgFAFgDQAGgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgGgEgEAmSAHRQgFgDAAgDQAAgFAFgDQAGgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgGgEgEAlPAHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgEAkMAHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgEAjJAHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgEAiGAHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAEADAAAFQAAADgEADQgFAEgHAAQgHAAgFgEgEAhDAHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAEADAAAFQAAADgEADQgFAEgHAAQgHAAgFgEgEAgAAHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAGAEQAEADAAAFQAAADgEADQgGAEgGAAQgHAAgFgEgAe9HRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAGAEQAEADAAAFQAAADgEADQgGAEgGAAQgHAAgFgEgAd6HRQgFgDAAgDQAAgFAFgDQAFgEAGAAQAHAAAGAEQAEADAAAFQAAADgEADQgGAEgHAAQgGAAgFgEgAc3HRQgFgDAAgDQAAgFAFgDQAFgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgFgEgAb0HRQgFgDAAgDQAAgFAFgDQAFgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgFgEgAaxHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgFgEgAZuHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgFgEgAYrHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgFgEgAXoHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgFgEgAWkHRQgEgDAAgDQAAgFAEgDQAGgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgGgEgAVhHRQgEgDAAgDQAAgFAEgDQAGgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgGgEgAUeHRQgEgDAAgDQAAgFAEgDQAGgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgGgEgATbHRQgEgDAAgDQAAgFAEgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgASYHRQgEgDAAgDQAAgFAEgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgARVHRQgEgDAAgDQAAgFAEgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgAQSHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgAPPHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgAOMHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAGAEQAFADAAAFQAAADgFADQgGAEgGAAQgHAAgFgEgANJHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAGAEQAFADAAAFQAAADgFADQgGAEgGAAQgHAAgFgEgAMGHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAGAEQAFADAAAFQAAADgFADQgGAEgGAAQgHAAgFgEgALDHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAGAEQAFADAAAFQAAADgFADQgGAEgGAAQgHAAgFgEgAKAHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAGADAAAFQAAADgGADQgFAEgGAAQgHAAgFgEgAI9HRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAGADAAAFQAAADgGADQgFAEgGAAQgHAAgFgEgAH6HRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAGADAAAFQAAADgGADQgFAEgGAAQgHAAgFgEgAG3HRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgFgEgAF0HRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgFgEgAEwHRQgEgDAAgDQAAgFAEgDQAGgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgGgEgADtHRQgEgDAAgDQAAgFAEgDQAGgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgGgEgACqHRQgEgDAAgDQAAgFAEgDQAGgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgGgEgABnHRQgEgDAAgDQAAgFAEgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgAAkHRQgEgDAAgDQAAgFAEgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgAgeHRQgEgDAAgDQAAgFAEgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgAhhHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgAikHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgAjnHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgAkqHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAGAEQAFADAAAFQAAADgFADQgGAEgGAAQgHAAgFgEgAltHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAGAEQAFADAAAFQAAADgFADQgGAEgGAAQgHAAgFgEgAmwHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAGAEQAFADAAAFQAAADgFADQgGAEgGAAQgHAAgFgEgAnzHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAGADAAAFQAAADgGADQgFAEgGAAQgHAAgFgEgAo2HRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAGADAAAFQAAADgGADQgFAEgGAAQgHAAgFgEgAp5HRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAGADAAAFQAAADgGADQgFAEgGAAQgHAAgFgEgAq8HRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgFgEgAr/HRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgFgEgAtCHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgFgEgAuFHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgFgEgAvIHRQgFgDAAgDQAAgFAFgDQAFgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgFgEgAwLHRQgFgDAAgDQAAgFAFgDQAFgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgFgEgAxOHRQgFgDAAgDQAAgFAFgDQAEgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgEgEgAyRHRQgFgDAAgDQAAgFAFgDQAEgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgEgEgAzUHRQgGgDAAgDQAAgFAGgDQAEgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgEgEgA0XHRQgGgDAAgDQAAgFAGgDQAEgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgEgEgA1aHRQgGgDAAgDQAAgFAGgDQAEgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgEgEgA2dHRQgGgDAAgDQAAgFAGgDQAEgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgEgEgA3hHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgA4kHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgA5nHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgA6qHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAEAEQAGADAAAFQAAADgGADQgEAEgHAAQgHAAgFgEgA7tHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAEAEQAGADAAAFQAAADgGADQgEAEgHAAQgHAAgFgEgA8wHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAEAEQAGADAAAFQAAADgGADQgEAEgHAAQgHAAgFgEgA9zHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAEAEQAFADAAAFQAAADgFADQgEAEgHAAQgHAAgFgEgA+2HRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAEAEQAFADAAAFQAAADgFADQgEAEgHAAQgHAAgFgEgA/5HRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgFgEgEgg8AHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgFgEgEgh/AHRQgFgDAAgDQAAgFAFgDQAFgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgFgEgEgjCAHRQgFgDAAgDQAAgFAFgDQAFgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgFgEgEgkFAHRQgFgDAAgDQAAgFAFgDQAFgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgFgEgEglIAHRQgFgDAAgDQAAgFAFgDQAFgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgFgEgEgmLAHRQgGgDAAgDQAAgFAGgDQAFgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgFgEgEgnOAHRQgGgDAAgDQAAgFAGgDQAFgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgFgEgEgoRAHRQgGgDAAgDQAAgFAGgDQAFgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgFgEgEgpVAHRQgFgDAAgDQAAgFAFgDQAGgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgGgEgEgqYAHRQgFgDAAgDQAAgFAFgDQAGgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgGgEgEgrbAHRQgFgDAAgDQAAgFAFgDQAGgEAGAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgGAAgGgEgEgseAHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgEgthAHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgEgukAHRQgFgDAAgDQAAgFAFgDQAFgEAHAAQAHAAAFAEQAFADAAAFQAAADgFADQgFAEgHAAQgHAAgFgEgEAqFAG0QgHAAgGgDIgDgDIADgDQAGgDAHAAQAGAAAFADQAFADAAAEQAAAFgFADQgFADgGAAgEgu6AG1QgFgDAAgDQAAgFAFgDQAFgEAHAAQAGAAAFAEIAEADIgEACQgFAEgGAAIAAAJQgHAAgFgEgEAqFAGLQgHAAgGgDIgDgDIADgDQAGgEAHAAQAGAAAFAEQAFACAAAEQAAAFgFACQgFAEgGAAgEgu6AGMQgFgEAAgEQAAgDAFgEQAFgDAHAAQAGAAAFADIAEADIgEAEQgFADgGAAIAAAIQgHAAgFgDgEAqFAFqIAAgIQgHAAgEgCIgEgFIAEgDQAFgDAHAAQAGAAAFADIAEACQABACAAAEQAAADgFAEQgFADgGAAIgBAAgEgu6AFiQgFgDAAgFQAAgDAFgEQAFgDAHAAQAGAAAFADQADACABACQgBADgDAAQgFADgGABIAAAHQgHAAgFgDgEAq2AFUIgDgDIgCgFIABgCIABgBIgBAAQABgCADgCQAFgEAHAAQAHAAAEAEIADACQADACAAADQAAAEgGAEQgEACgHABQgHgBgFgCgEArxAFAIgDgDQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIAAgBIACgBIgBgCIAEgDQAFgEAHAAQAHAAAFAEIADACQACACAAADQAAAEgFADQgFADgHAAQgHAAgFgDgEgu6AE4QgFgDAAgEQAAgFAFgDQAFgDAHAAQAGAAAFADIAFAEQgCADgDACQgFACgGAAIAAAHQgHAAgFgDgEAstAEtIgDgCQgCgDAAgCIACgBIgBgCQABgDADgBQAFgEAHAAQAGAAAFAEIAEACQACACAAADQAAAEgGADQgFADgGABQgHgBgFgDgEAtoAEaIgDgCQgCgDAAgDIACAAIgBgCQABgDADgCQAFgDAHAAQAHAAAFADIADADQACACAAACQAAAFgFADQgFADgHAAQgHAAgFgDgEgu6AEOQgFgDAAgEQAAgEAFgEQAFgCAHAAQAGAAAFACQAEACABAEQgBACgEABQgFAEgGAAIAAAFQgHAAgFgDgEAujAEHIgCgCIgCgGIACAAIgCgCQABgDADgCIADgBIgFgCIACgCIADgBQgFgBgEgDQgEgCgBgCIACgDIADgCQAFgEAGABQAHgBAFAEQAFADAAAEIgBAFIgEADIgCABQAFABAEACIADADQACACAAACQAAAEgFAEQgFACgHAAQgHAAgFgCgEgu6ADkQgFgDAAgEQAAgFAFgCQAFgDAHgBQAGABAFADQAEACACADQgCADgEACQgFADgGAAIAAAEQgHAAgFgDgEAthADbQgDgCgBgCIACgEIACgBQAGgEAGAAQAHAAAFAEQAFACAAAFIAAABIgBgBIgEACQgFAEgHAAQgGAAgGgEgEAsmADJQgEgCgBgCQAAgBAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIADgBQAFgDAGAAQAHAAAFADQAFADAAAEIAAACIgCgBIgDACQgFADgHAAQgGAAgFgDgEgu6AC6QgFgDAAgEQAAgEAFgDQAFgDAHgBQAGABAFADQAEACACADQgCADgEADQgFACgGAAIAAAFQgHAAgFgEgEArrAC2QgEgCgBgDQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABgBIADgCQAEgDAHAAQAHAAAFADQAFADAAAEIAAACIgCAAIgDACQgFADgHAAQgHAAgEgDgEAqvACjQgEgDAAgDIABgDIADgDQAFgCAHgBQAHABAFACQAFAEAAAEIgBADIgCgBIgCACQgFADgHAAQgHAAgFgDgEgu6ACRQgFgDAAgFQAAgEAFgDQAFgEAHABQAGgBAFAEQAFADABAEQgBACgFADQgFADgGAAIAAADQgHAAgFgDgEAp4ACPQgEgDAAgDQAAgEAEgCQAGgDAHAAQAGAAAFADQAFADAAADQAAADgCAEIgDgBQgFACgGABQgHgBgGgCgEAqFABoQgHAAgGgDQgEgCAAgEQAAgDAEgDQAGgEAHAAQAGAAAFAEQAFADAAAEQAAAEgFADQgFADgGABgEgu6ABnQgFgEAAgEQAAgEAFgDQAFgDAHAAQAGAAAFADQAFADABADQgBAFgFACQgFADgGAAIAAABQgHAAgFgCgEAqFABAQgHgBgGgDQgEgDAAgDIAAAAQAAgFAEgCQAGgDAHAAQAGAAAFADQAFADAAAEQAAAFgFADQgFADgGAAgEgu6AA8QgFgDAAgDQAAgFAFgDQAFgDAHAAQAGAAAFADQAFADABAEIAAABQgBADgFACQgFAEgGAAIAAABQgHAAgFgEgEAp4AAUQgEgEAAgEIAAgBQAAgDAEgDQAGgDAHAAIAAAAQAGAAAFADQAFADAAAEQAAAEgFAEQgFADgGgBQgHABgGgDgEgu6AATQgFgDAAgFQAAgEAFgDQAFgDAHAAIAAABQAGAAAFADQAFACABAEIAAAAQAAAFgGADQgFADgGAAQgHAAgFgDgEAp4gAWQgEgCAAgDIAAgCQAAgDAEgDQAGgDAHAAIAAgBQAGAAAFADQAFADAAAEQAAAFgFACQgFADgGABQgHgBgGgDgEguugASQgHAAgFgEQgFgDAAgFQAAgDAFgDQAFgEAHAAIAAABQAGAAAFAEQAFACABADIAAABIAAABQgBADgFADIgGADIgCABgEAp4gA/QgEgDAAgDQAAgEAEgDQAGgDAHAAIAAgCQAGAAAFADQAFADAAAEQAAAFgFADQgFADgGABQgHgBgGgDgEgu6gBAQgFgDAAgEQAAgEAFgDQAFgEAHAAIAAADQAGAAAFACQAFAEABADQgBAEgFACQgFADgGABQgHgBgFgDgEAp4gBoQgDgDgBgEQABgDADgCQAGgEAHAAIAAgDQAGAAAFADQAFAEAAAEQAAAEgFAEQgFACgGAAQgHAAgGgCgEgu6gBpQgFgEAAgEQAAgEAFgEQAFgCAHAAIAAACQAGAAAFAEQAEACACADQgCAEgEADQgFACgGAAQgHAAgFgCgEAp4gCTQgDgCgBgDQABgEADgCQAGgDAHAAIAAgEQAGAAAFADQAFADAAAFQAAAEgFADQgFAEgGAAQgHAAgGgEgEgu6gCUQgFgDAAgEQAAgEAFgDQAFgDAHAAIAAADQAGAAAFADQAEADACADQgCADgEACQgFAEgGAAQgHAAgFgEgEAp4gC8QgDgCgBgEQABgDADgCQAGgCAHgBIAAgEQAGgBAFAEQAFADAAAEQAAAEgFAEQgFACgGAAQgHAAgGgCgEgu6gC9QgFgDAAgEQAAgFAFgDQAFgDAHAAIAAAFQAGAAAFADIAGAFIgGAFQgFACgGABQgHgBgFgCgEAp4gDnIgEgEQABgCADgDQAGgCAHAAIAAgGQAGAAAFADQAFADAAAEQAAAFgFACQgFADgGAAQgHAAgGgDgEgu6gDnQgFgEAAgEQAAgDAFgEQAFgDAHAAIAAAGQAGAAAFADQAEABABADIgFAFQgFADgGAAQgHAAgFgDgEAp4gERQgCgBgBgCQABgDACgCQAGgDAHAAIAAgHQAGAAAFAEQAFADAAAFQAAADgFADQgFAEgGAAQgHAAgGgEgEgu6gESQgFgCAAgFQAAgEAFgCQAFgEAHAAIAAAGQAGABAFADQADABACADQgCADgDAAQgFAEgGAAQgHAAgFgEgEAp4gE6IgDgEIADgDQAGgEAHAAIAAgHQAGAAAFADQAFADAAAFQAAADgFAEQgFADgGAAQgHAAgGgDgEgu6gE7QgFgDAAgEQAAgEAFgEQAFgCAHAAIAAAGQAGAAAFAEQADABABACQgBACgDACQgFADgGAAQgHAAgFgDgEAp4gFkIgDgDIADgDQAGgDAHgBIAAgIQAGAAAFADQAFAEAAADQAAAFgFADQgFADgGAAQgHAAgGgDgEgu6gFkQgFgEAAgFQAAgDAFgEQAFgDAHAAIAAAJQAGAAAFADQADABABADIgEADQgFACgGAAQgHAAgFgCgEAp4gGOIgDgDIADgCQAGgDAHgBIAAgJQAGAAAFAEQAFADAAAEQAAAEgFADQgFADgGAAQgHAAgGgDgEgu6gGPQgFgDAAgEQAAgEAFgDQAFgEAHAAIAAAKQAGAAAFADIAEADIgEACQgFAEgGAAQgHAAgFgEgEAp4gG3IgCgDIACgDIAHgCIgLAAIAAAAQAAgEAEgEQADgCAEAAIAGAAQAGAAAFACQAFAEAAAEQAAAEgFAEQgFACgGAAQgHAAgGgCgEgu6gG4QgFgEAAgDQAAgEABgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAgEAFgDQAFgEAHABQAGgBAFAEQAGADAAAEQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAQACACAAAEIAAAAQgBADgFAEQgFACgGAAQgHAAgFgCgEApFgHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAGAEQAFADAAAEQAAAEgFADQgGADgGABQgHgBgFgDgEAoCgHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAGAEQAFADAAAEQAAAEgFADQgGADgGABQgHgBgFgDgEAm/gHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAGAEQAFADAAAEQAAAEgFADQgGADgGABQgHgBgFgDgEAl8gHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAFAEQAGADAAAEQAAAEgGADQgFADgGABQgHgBgFgDgEAk5gHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAFAEQAGADAAAEQAAAEgGADQgFADgGABQgHgBgFgDgEAj2gHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAFAEQAGADAAAEQAAAEgGADQgFADgGABQgHgBgFgDgEAizgHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAFAEQAFADAAAEQAAAEgFADQgFADgGABQgHgBgFgDgEAhwgHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAFAEQAFADAAAEQAAAEgFADQgFADgGABQgHgBgFgDgEAgtgHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAFAEQAFADAAAEQAAAEgFADQgFADgGABQgHgBgFgDgAfpnCQgEgDAAgEQAAgEAEgDQAGgEAHABQAGgBAFAEQAFADAAAEQAAAEgFADQgFADgGABQgHgBgGgDgAennCQgFgDAAgEQAAgEAFgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgAdknCQgFgDAAgEQAAgEAFgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgAchnCQgFgDAAgEQAAgEAFgDQAEgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgEgDgAbenCQgFgDAAgEQAAgEAFgDQAEgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgEgDgAabnCQgGgDAAgEQAAgEAGgDQAEgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgEgDgAZYnCQgGgDAAgEQAAgEAGgDQAEgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgEgDgAYVnCQgGgDAAgEQAAgEAGgDQAEgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgEgDgAXSnCQgGgDAAgEQAAgEAGgDQAEgEAHABQAGgBAGAEQAFADAAAEQAAAEgFADQgGADgGABQgHgBgEgDgAWOnCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAGAEQAFADAAAEQAAAEgFADQgGADgGABQgHgBgFgDgAVLnCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAGAEQAFADAAAEQAAAEgFADQgGADgGABQgHgBgFgDgAUInCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgFgDgATFnCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAEAEQAGADAAAEQAAAEgGADQgEADgHABQgHgBgFgDgASCnCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAEAEQAGADAAAEQAAAEgGADQgEADgHABQgHgBgFgDgAQ/nCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAEAEQAGADAAAEQAAAEgGADQgEADgHABQgHgBgFgDgAP8nCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAEAEQAFADAAAEQAAAEgFADQgEADgHABQgHgBgFgDgAO5nCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAEAEQAFADAAAEQAAAEgFADQgEADgHABQgHgBgFgDgAN2nCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAFAEQAFADAAAEQAAAEgFADQgFADgGABQgHgBgFgDgAMznCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAFAEQAFADAAAEQAAAEgFADQgFADgGABQgHgBgFgDgALwnCQgFgDAAgEQAAgEAFgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgAKtnCQgFgDAAgEQAAgEAFgDQAEgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgEgDgAJqnCQgFgDAAgEQAAgEAFgDQAEgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgEgDgAInnCQgFgDAAgEQAAgEAFgDQAEgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgEgDgAHknCQgGgDAAgEQAAgEAGgDQAEgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgEgDgAGhnCQgGgDAAgEQAAgEAGgDQAEgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgEgDgAFenCQgGgDAAgEQAAgEAGgDQAEgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgEgDgAEanCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgFgDgADXnCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgFgDgACUnCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgFgDgABRnCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAEAEQAGADAAAEQAAAEgGADQgEADgHABQgHgBgFgDgAAOnCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAEAEQAGADAAAEQAAAEgGADQgEADgHABQgHgBgFgDgAg0nCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAEAEQAGADAAAEQAAAEgGADQgEADgHABQgHgBgFgDgAh3nCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAEAEQAFADAAAEQAAAEgFADQgEADgHABQgHgBgFgDgAi6nCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAEAEQAFADAAAEQAAAEgFADQgEADgHABQgHgBgFgDgAj9nCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAEAEQAFADAAAEQAAAEgFADQgEADgHABQgHgBgFgDgAlAnCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAFAEQAFADAAAEQAAAEgFADQgFADgGABQgHgBgFgDgAmDnCQgFgDAAgEQAAgEAFgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgAnGnCQgFgDAAgEQAAgEAFgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgAoJnCQgFgDAAgEQAAgEAFgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgApMnCQgFgDAAgEQAAgEAFgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgAqPnCQgGgDAAgEQAAgEAGgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgArSnCQgGgDAAgEQAAgEAGgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgAsVnCQgGgDAAgEQAAgEAGgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgAtZnCQgFgDAAgEQAAgEAFgDQAGgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgGgDgAucnCQgFgDAAgEQAAgEAFgDQAGgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgGgDgAvfnCQgFgDAAgEQAAgEAFgDQAGgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgGgDgAwinCQgFgDAAgEQAAgEAFgDQAGgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgGgDgAxlnCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgFgDgAyonCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgFgDgAzrnCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgFgDgA0unCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAFAEQAEADAAAEQAAAEgEADQgFADgHABQgHgBgFgDgA1xnCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAFAEQAEADAAAEQAAAEgEADQgFADgHABQgHgBgFgDgA20nCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAGAEQAEADAAAEQAAAEgEADQgGADgGABQgHgBgFgDgA33nCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAGAEQAEADAAAEQAAAEgEADQgGADgGABQgHgBgFgDgA46nCQgFgDAAgEQAAgEAFgDQAFgEAGABQAHgBAGAEQAEADAAAEQAAAEgEADQgGADgHABQgGgBgFgDgA59nCQgFgDAAgEQAAgEAFgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgA7AnCQgFgDAAgEQAAgEAFgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgA8DnCQgFgDAAgEQAAgEAFgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgA9GnCQgGgDAAgEQAAgEAGgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgA+JnCQgGgDAAgEQAAgEAGgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgA/MnCQgGgDAAgEQAAgEAGgDQAFgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgFgDgEggQgHCQgFgDAAgEQAAgEAFgDQAGgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgGgDgEghTgHCQgFgDAAgEQAAgEAFgDQAGgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgGgDgEgiWgHCQgFgDAAgEQAAgEAFgDQAGgEAGABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgGgBgGgDgEgjZgHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgFgDgEgkcgHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgFgDgEglfgHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgFgDgEgmigHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAFAEQAEADAAAEQAAAEgEADQgFADgHABQgHgBgFgDgEgnlgHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAHgBAFAEQAFADAAAEQAAAEgFADQgFADgHABQgHgBgFgDgEgoogHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAGAEQAFADAAAEQAAAEgFADQgGADgGABQgHgBgFgDgEgprgHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAGAEQAFADAAAEQAAAEgFADQgGADgGABQgHgBgFgDgEgqugHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAGAEQAFADAAAEQAAAEgFADQgGADgGABQgHgBgFgDgEgrxgHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAGAEQAFADAAAEQAAAEgFADQgGADgGABQgHgBgFgDgEgs0gHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAFAEQAGADAAAEQAAAEgGADQgFADgGABQgHgBgFgDgEgt3gHCQgFgDAAgEQAAgEAFgDQAFgEAHABQAGgBAFAEQAGADAAAEQAAAEgGADQgFADgGABQgHgBgFgDg");
	this.shape.setTransform(239.375,85.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EApqAHAQAAgDgEgEQgGgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgEgEQgGgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgEgEQgGgCgHAAQgGAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgGAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgGAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgGAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgGAAgFACQgGAEAAADIghAAQAAgDgFgEQgFgCgHAAQgGAAgFACQgGAEAAADIghAAQAAgDgFgEQgFgCgHAAQgGAAgFACQgGAEAAADIghAAQAAgDgFgEQgFgCgHAAQgGAAgGACQgFAEAAADIghAAQAAgDgFgEQgFgCgHAAQgGAAgGACQgFAEAAADIghAAQAAgDgFgEQgFgCgHAAQgGAAgGACQgFAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgGgCgGAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgGgCgGAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgGgCgGAAQgHAAgFACQgFAEAAADIghAAQAAgDgGgEQgFgCgGAAQgHAAgFACQgFAEAAADIghAAQAAgDgGgEQgFgCgGAAQgHAAgFACQgFAEAAADIghAAQAAgDgGgEQgFgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgGAAQgHAAgGACQgEAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgGAAgGACQgEAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgGAAgGACQgEAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgEAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgEAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgGgCgGAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgGgCgGAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgGgCgGAAQgHAAgFACQgFAEAAADIghAAQAAgDgGgEQgFgCgGAAQgHAAgFACQgFAEAAADIghAAQAAgDgGgEQgFgCgGAAQgHAAgFACQgFAEAAADIggAAQAAgDgGgEQgFgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgGAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgHAAgEACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgHAAgEACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgHAAgEACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgHAAgEACQgGAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgEACQgGAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgEACQgGAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgGgEQgEgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgGgEQgEgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgGgEQgEgCgHAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgEgCgHAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgEgCgHAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgGAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgGAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgHAAgEACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgHAAgEACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgHAAgEACQgGAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgEACQgGAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgEACQgGAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgFgEQgFgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgGgEQgEgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgGgEQgEgCgHAAQgHAAgFACQgFAEAAADIghAAQAAgDgGgEQgEgCgHAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgEgCgHAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgEgCgHAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgEgCgHAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgGAAQgHAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgGAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgGAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgGAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgGAAgFACQgFAEAAADIgiAAQAAgDgFgEQgFgCgHAAQgGAAgFACQgFAEAAADIgGAAIAAgIIAAgJQAHAAAFgDIADgDQABAAAAgBQABAAAAgBQAAAAAAgBQAAAAAAgBQAAgEgFgDQgFgDgHAAIAAgMIAAgIQAHAAAFgEIAEgDQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAQAAgEgFgDQgFgDgHAAIAAgNIAAgIQAHAAAFgDQADgBABgCIABgDQAAgFgFgDQgFgDgHAAIAAgOIAAgHQAHAAAFgDQADgBABgDIABgDQAAgEgFgDQgFgDgHAAIAAgPIAAgFQAHAAAFgEQADgCABgCIABgDQAAgEgFgDQgFgDgHAAIAAgQIAAgEQAHAAAFgEQADgBACgDIAAgDQAAgEgFgDQgFgDgHAAIAAgRIAAgEQAHAAAFgCQAEgDABgDIAAgCQAAgEgFgDQgFgDgHAAIAAgRIAAgDQAHAAAFgDQAEgDABgDIAAgCQAAgDgFgEQgFgDgHAAIAAgTIAAgBQAHAAAFgDQAEgDABgEIAAgBQAAgEgFgDQgFgDgHAAIAAgTIAAgCQAHAAAFgDQAEgCABgEIAAgBQgBgDgEgDQgFgEgHAAIAAgUQAHAAAFgDQAFgDAAgFIAAAAQgBgEgEgCQgFgEgHAAIAAAAIAAgUIAEAAIABAAIAHgDQAFgDAAgDIAAgBIAAgBQgBgDgEgDQgFgDgHAAIAAgBIAAgTQAHAAAFgDQAFgDAAgFIAAgBQgBgDgEgDQgFgCgHAAIAAgDIAAgSQAHAAAFgDQAFgDAAgEIAAgCQgBgDgEgDQgFgDgHAAIAAgCIAAgSQAHAAAFgDQAFgEAAgDIAAgCQgBgDgEgDQgFgDgHAAIAAgDIAAgRQAHAAAFgDQAFgDAAgEIAAgDIgFgEQgFgDgHAAIAAgGIAAgPQAHAAAFgDQAFgDAAgFIgBgCQgBgDgDgCQgFgDgHAAIAAgFIAAgPQAHAAAFgDQAFgDAAgEIgBgDQgBgDgDgBQgFgEgHAAIAAgGIAAgOQAHAAAFgDQAFgDAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBgCgDgBQgFgEgHAAIAAgHIAAgNQAHAAAFgDQAFgDAAgFQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAAAAAgBQgCgCgCgBQgFgDgHAAIAAgJIAAgMQAHAAAFgDQAFgDAAgEQAAgBAAAAQAAgBAAAAQAAgBgBgBQAAAAgBgBIgDgDQgFgCgHAAIAAgKIAAgLQAHAAAFgDQAFgDAAgEQAAgBAAAAQAAgBAAAAQAAgBgBAAQAAgBgBAAQACgDAAgCIAiAAQAAAEAEAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAEAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAEAEQAGACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAEAEQAGACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAEAEQAGACAHAAQAGAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAGAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAGgCQAEgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAGgCQAEgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAGAAAGgCQAEgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAEgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAEgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAEgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAFAEQAGACAGAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAFAEQAGACAGAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAFAEQAGACAGAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAGAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAGAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAGAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAGgCQAEgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAGAAAGgCQAEgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAGAAAGgCQAEgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAEgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAEgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAHAAAEgCQAGgEAAgEIAhAAQAAAEAFAEQAGACAGAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAFAEQAGACAGAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAFAEQAGACAGAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAGAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAGAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAGAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAEAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAGAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAGAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAHAAAEgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAHAAAEgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAHAAAEgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAHAAAEgCQAGgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAHAAAEgCQAGgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAHAAAEgCQAGgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAGAEQAEACAHAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAGAEQAEACAHAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAGAEQAEACAHAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAEACAHAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAEACAHAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAGAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAGAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAGAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAGAAAFgCQAFgEAAgEIAiAAQAAAEAFAEQAFACAHAAQAGAAAFgCQAGgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAGAAAFgCQAGgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAGAAAFgCQAGgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAGAAAGgCQAFgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAGAAAGgCQAFgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAGAAAGgCQAFgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAhAAQAAAEAFAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAEAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAEAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAEAEQAFACAHAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAEAEQAGACAGAAQAHAAAFgCQAFgEAAgEIAiAAQAAAEAEAEQAGACAHAAQAGAAAFgCQAFgEAAgEIAiAAQAAAEAEAEQAGACAHAAQAGAAAFgCQAFgEAAgEIASAAIALAAIgGACIgDADQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQAAAEAFADQAFAEAHAAIAAALIAAAJQgHAAgFADIgDADIgCAEQAAAFAFACQAFAEAHAAIAAAMIAAAIQgHAAgFAEIgDADQgBAAAAABQAAAAAAAAQgBABAAAAQAAABAAAAQAAAFAFADQAFADAHAAIAAANIAAAHQgHAAgFADIgEAEIgBAEQAAADAFAEQAFACAHAAIAAAOIAAAHQgHAAgFADQgDACgBACIgBADQAAAFAFADQAFADAHAAIAAAPIAAAFQgHAAgFADQgDACgBADIgBACQAAAFAFADQAFADAHAAIAAAPIAAAFQgHAAgFADQgDACgBADIgBACQAAAEAFAEQAFACAHAAIAAARIAAAEQgHAAgFADQgEACAAADIgBACQAAAEAFAEQAFADAHAAIAAARIAAADQgHAAgFADQgEACAAAEIgBABQAAAFAFACQAFAEAHAAIAAASIAAACQgHAAgFADQgEADgBADIAAABQAAAEAFADQAFAEAHAAIAAATIAAABQgHAAgFADQgEADgBADIAAABQAAAEAFADQAFADAHAAIAAAUIAAAAQgHAAgFADQgEADgBADIAAABQAAAEAFAEQAFACAHAAIAAAVQgHAAgFADQgFADAAAEIAAABQABADAEADQAFADAHAAIAAACIAAATQgHAAgFADQgFADAAAEIAAABQABADAEADQAFADAHAAIAAACIAAATQgHAAgFADQgFADAAAEIAAACQABACAEAEQAFACAHAAQAGAAAGgCIACAAIAZAIIgBAFIAAABQABADAEADQAFADAGAAQAHAAAFgDIADgCIACABIAcAIQgCACAAADIABACQAAADAEACQAFADAHAAQAGAAAFgDIAEgCIACAAIAbAJQgCACAAADIABACQAAADAEACQAGADAGAAQAHAAAFgDIADgDIACABIAdAJQgDABAAADIABACQAAACAEADQAFAEAHAAQAGAAAGgEIADgDIACABIAcAKQgDACAAACIABADQABACADACQAEADAFABIgCAAIgDADQAAABgBAAQAAABAAAAQgBABAAAAQAAABAAAAIABADIABADIgCAAIgcAJIgDgCQgFgDgHAAQgGAAgFADQgFADAAADIAAADIACADIgCAAIgcAIIgDgCQgFgDgHAAQgHAAgEADQgFADAAAFIABADIABACIgCABIgcAHIgEgCQgFgDgHAAQgGAAgFADQgFADAAAEIABADIABACIgCABIgcAJIgDgDQgFgDgHAAQgHAAgEADQgFADAAAEIABAEIAAAAIgBABIgdAKQAAgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgFgDgHAAQgHAAgFADQgFADAAAEIABADIAEAEQAFADAGAAIAAAHIAAANQgHAAgFADQgFADAAAEIACAEIADAEQAFACAHAAIAAAJIAAAMQgHAAgFADQgFADAAAEQAAABAAAAQAAABABABQAAAAAAABQAAAAABABIADACQAFAEAHAAIAAAJIAAADgEAutAD4QgEgDgEAAIACgCIADgCIATAGIgMADIgEgCg");
	this.shape_1.setTransform(240.725,85.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.InfoWindows, new cjs.Rectangle(-62.9,38.9,604.1,126.6), null);


(lib.Information = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("מידע למתפלפל", "normal 400 24px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 28;
	this.text.lineWidth = 179;
	this.text.parent = this;
	this.text.setTransform(91.25,7.5);
	this.text.shadow = new cjs.Shadow("rgba(0,0,0,1)",1,1,4);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C00000").s().p("Ar0DSQhEAAAAhBIAAkhQAAhBBEAAIXpAAQBEAAAABBIAAEhQAABBhEAAg");
	this.shape.setTransform(89.825,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Information, new cjs.Rectangle(-5,-5,196,56), null);


(lib.i = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(255,255,255,0.008)").ss(0.1,1,1).p("ABQAAQAAAjgXAZQgYAZghAAQggAAgYgZQgXgZAAgjQAAgiAXgZQAYgZAgAAQAhAAAYAZQAXAZAAAig");
	this.shape.setTransform(9.3903,9.3971,1.2387,1.1587);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.008)").s().p("Ag3A8QgYgZAAgjQAAgiAYgZQAXgZAgAAQAhAAAXAZQAYAZAAAiQAAAjgYAZQgXAZghAAQggAAgXgZg");
	this.shape_1.setTransform(9.3903,9.3971,1.2387,1.1587);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer_1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ABeAAQAAAngcAbQgbAcgnAAQgmAAgbgcQgcgbAAgnQAAgmAcgcQAbgbAmAAQAnAAAbAbQAcAcAAAmg");
	this.shape_2.setTransform(9.375,9.375);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag6A7QgYgYAAgjQAAghAYgZQAZgYAhAAQAjAAAYAYQAYAZAAAhQAAAjgYAYQgYAYgjAAQghAAgZgYgAgKApIAUAAIAAg7IgUAAgAgHgrQgEADAAAEQAAAFAEADQADADAEAAQAEAAADgDQAEgDAAgFQAAgEgEgDQgDgDgEAAQgEAAgDADg");
	this.shape_3.setTransform(9.45,9.425);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.i, new cjs.Rectangle(-1.5,-1.4,21.8,21.7), null);


(lib.HotArea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AgTMqQqRgHiqAAQgChjAPiUQAfkmBRjxQBylTCykRQBQh7A/g5QBDg8AfAdQDXDICwC5QB5CABKA4QBbBGCKCIQCpCmAYAUQAtApgdAYQgUARhUAxQjACPAMFyQABAJkeAAIkegCg");
	this.shape.setTransform(84.7184,81.2011);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HotArea, new cjs.Rectangle(0,0,169.5,162.4), null);


(lib.HitSymbol = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.HIT();
	this.instance.setTransform(0,0,0.6941,0.6941);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HitSymbol, new cjs.Rectangle(0,0,106.2,90.3), null);


(lib.HellArea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AgTMqQqRgHiqAAQgChjAPiUQAfkmBRjxQBylTCykRQBQh7A/g5QBDg8AfAdQDXDICwC5QB5CABKA4QBbBGCKCIQCpCmAYAUQAtApgdAYQgUARhUAxQjACPAMFyQABAJkeAAIkegCg");
	this.shape.setTransform(84.7184,81.2011);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HellArea, new cjs.Rectangle(0,0,169.5,162.4), null);


(lib.fireWhite = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(183,183,183,0.725)").s().p("AAAA7QgEg7AAg7IAJAAIAABtIAAAKIgFgBg");
	this.shape.setTransform(29.5,216);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(86,86,86,0.345)").s().p("AAABVQgEhVAAhUIAJAAIAACfIAAAKIgFAAg");
	this.shape_1.setTransform(54.5,175.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(144,144,144,0.573)").s().p("AAAAoQgFgoAAgnQAQAXgHAuIAAAKIgEAAg");
	this.shape_2.setTransform(0.625,188);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(105,105,105,0.42)").s().p("AgEAjIAAhPQAQAggMA4QAAABgEAAIAAgKg");
	this.shape_3.setTransform(134.5104,84.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(160,160,160,0.635)").s().p("AgFAjIAAhPIAJAAIAAAKQAIAzgRAcIAAgKg");
	this.shape_4.setTransform(186.6353,185.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(253,253,253,0.992)").s().p("AgiTJQgmh2hJhTQi4jRg3lUIAAgKIAAigQAAgFABgEQAUhGgLgzQAAAFgDACQjGDAg7FLIAAAUIAAAKIgKAAQAAA8AFA7IAFABIAAAKQAYC0AiB8IgBAAQkcjGg/mgIAAgKQAHgvgRgXIAAgKIAAhkQBYnXFMjkQE4jVBnmiQAahpgWhyQgUhkgnhQQGYC5CHHQQABABAFAAQAABLAJBBIABAKIAABQIAAAKQAHA6gLAiQhODxh2DEIAACCIAAAKQA7CmCpA7QACAAAAAFICWAAIAKAAQC7g/AqjPIABgKQARgWgCgwIAFAAQA3BfAYB9IABAKQAAAoAFAoIAFAAIAAAyIAAAKIgKAAIAABQIAAAKIgBAKQiDLisUBSQgRhIgWhEg");
	this.shape_5.setTransform(93.5125,136.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(128,128,128,0.51)").s().p("AAxCqQgFgoAAgoQARAWgHAwIAAAKIgFAAgAg3hPIAAhaQAKAKAHAMQADADAAAFIgFAAQACAwgRAWIAAgKg");
	this.shape_6.setTransform(181.625,158);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fireWhite, new cjs.Rectangle(0,0,187.3,273), null);


(lib.fireMild = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(56,67,21,0.494)").s().p("AAAAtQgEgtAAgsIAJAAIAABPIAAAKIgFAAg");
	this.shape.setTransform(103.6,140.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(70,83,26,0.612)").s().p("AAAA8QgEg8AAg7IAJAAIAABtIAAAKIgFAAg");
	this.shape_1.setTransform(54.6,166);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(54,64,20,0.478)").s().p("AAABGQgEhGAAhFIAJAAIAACBIAAAKIgFAAg");
	this.shape_2.setTransform(24.6,201);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(44,53,17,0.392)").s().p("AAABVQgEhVAAhUIAJAAIAACfIAAAKIgFAAg");
	this.shape_3.setTransform(5.6,166.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(62,74,23,0.545)").s().p("AgEA3IAAh3QAQA1gMBLQAAABgEAAIAAgKg");
	this.shape_4.setTransform(125.6104,78.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(51,60,19,0.447)").s().p("AgEAoIAAhZQAQAlgMA9QAAABgEAAIAAgKg");
	this.shape_5.setTransform(89.6104,28);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(72,86,27,0.627)").s().p("AgEAjIAAhPQAQAggMA4QAAABgEAAIAAgKg");
	this.shape_6.setTransform(167.6104,165.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(111,132,43,0.957)").s().p("AiyO8Qi8jlgImcQAFAAABgBQAMgzgSgcIAAAKIAAAKQgoAegeArQhXB9gPDBQgVENBHC4QmBjZARppQB+mxFXjeQCXhiBniVIAIgLQAbgpAYgsQAjhAANhIQAXh8goiVQgRg/gag7QEtBqCNEhQBCCKAeCxIABAKIAABuIAAAKIgBAKQgyEmifC5IAAAUIAAAKIgKAAQAAAtAFAtIAFAAQAhCoCmAlQABAAAAAFQDwAAA3i9QAAgBAFAAQAEiBgThkIAFAAQBnCIAkDLIABAKIAAB4IAAAKIAAAKQhrMAtKAgQgCjFhchwgAk/HHIAFAAQApEcCSCxQAYAdAOAgQAuBsAdB4QLYg+Bbq6IAAgKQAFAAAAgBQANg4gSghIAAgKQAAhGgUgyQgFAAAAABQg3CpigA8IgKAAQlPAQgtkUIAAgKIAAhQIAAgKIAAgeQCSi8A/kQIABgJQAFAAAAgBQANhMgSg1IAAgKQgcizhIiIQhii3i2hmQAWAsgCBCIAAAKIAABaIAAAKQgGAhgHAgQhNFIj0CeQlWDeiZGWIAAA8IAAAKIgKAAQAABVAFBVIAFAAQAjEnCjCnQACADAAAEQgBgtgIhUIgBgKIAAgKIAAiCIAAgKIAAg8QBglYD2jBQADgDAFAAQgnBzgKCRIgBAKIgKAAQAAA8AFA8g");
	this.shape_7.setTransform(86.562,126.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fireMild, new cjs.Rectangle(0,0,173.1,253), null);


(lib.fireHot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(49,2,6,0.412)").s().p("AgEBBIAAiLQAQA/gMBVIgEABIAAgKg");
	this.shape.setTransform(217.5104,216.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(50,1,6,0.424)").s().p("AAABFQgEhFAAhFIAJAAIAACBIAAAKIgFgBg");
	this.shape_1.setTransform(6.5,218);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(53,1,7,0.447)").s().p("AAABBQgEhBAAhAIAJAAIAAB3IAAAKIgFAAg");
	this.shape_2.setTransform(70.5,212.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(55,2,7,0.459)").s().p("AgEA3IAAh3QAQA1gMBLQAAABgEAAIAAgKg");
	this.shape_3.setTransform(156.5104,105.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(119,5,16,0.969)").s().p("AA8ZyIhtAAQgolZi4jIQi7jMgUlgQgIiEgVhDQAAAFgDAEQiDC2hCD5IAABQIAAAKIgKAAQAABLAFBKIAFABIAAAKQAmELBSCtQgFAAgEgCQnIjzhLpxIAAgKIAAhQIAAgKIAAhQIAAgKIAAgyQCGoXGKkYQCChbBth1QECkShKnqQgIg7gcg9QgZg5geg3QKLDQBuMRQAYCtgqCEQhDDRhiCxQhGB/BECGQByDeEohIQBIgRAwgzQCPiahRjyQgOgpAPgUQDIDRAeF8IAAAKIgKAAIAABGIAAAKQgMCPgmB1QjdKisLB0IgKAAgAmoIcIAFAAQAwGbDeDuQBEBJAqBiQAoBjATB5QMdhiDHq8QAXhTABhtIAFgBQAMhWgRg/IAAgKQgBiBgxhRQgSCEhHBOQhLBSh/ASQnfBEgenoQBUjwBujQQAqhQAEhvQAFAAAAgBQANhMgSg1IAAgKQhZpZnMjlQASA0ALA6QALA8gEA7QgmIglLEHQgcAWgbAUQmRERiXIGIAABQIAAAKIgKAAQAABGAFBFIAFABQAuHFEFDvIACACQhYljB/lQQByktDajKQgVB8gTCwIAAAKIgKAAQAABBAFBBg");
	this.shape_4.setTransform(113,165);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fireHot, new cjs.Rectangle(0,0,226,330), null);


(lib.fireHell = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(77,3,10,0.965)").s().p("AjeSzQj/kIgRn4QAFAAAAgBQARhUggAFIAAAKQhTBmg6CFQg4B/ADCyQAFFsBtDiQgFAAgEgCQn0kIgprUQASgXgHgvIgBgKIAAgKIAAhaQCin8GIkYQFRjwBjnhQAFAAAAgBQAMhDgRgqIAAgKQggjQhYiYQJdDWCbKaQAwDQg5DBQhMEEiIDGQgSEbC2BZQCiBQCphcQBkg3Afh3QAwi7gsieQCBCgBADWQArCQgZCzQhRI8mCEdQkDC+m8AFQgVkqidikgAmjIgIAFABQAwGhDnDqQAmAmAbAxQBICHAhCxQMZhnDEq5QBQkdhPkdQhNEGkRBDIgKABIgKAAIhaAAIgKgBQlpg6ALmvQCFjjBUkKQAQg0AHg2QAFAAAAgBQAMhHgRgwIAAgKQhUpinRjmQAjBfADB9QACCHglBuQimHsmFEbQlDDqhVHbQAHJHE3EYIABABQgeiOABjUQAAkxB7jBQB6jBCbifQgWCAgRC2IgBAKIgKAAQAAA8AFA7g");
	this.shape.setTransform(113.4962,166.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fireHell, new cjs.Rectangle(0,0,227,333), null);


(lib.AboutUsMC = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AsyCyIAAljIZlAAIAAFjg");
	this.shape.setTransform(81.9,15.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.text = new cjs.Text("אודות", "normal 400 25px 'Rubik'", "#C00000");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 161;
	this.text.parent = this;
	this.text.setTransform(82.35,1.3);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C00000").ss(2,1,1).p("ArnjdIXPAAQBRAAAABVIAAERQAABVhRAAI3PAAQhRAAAAhVIAAkRQAAhVBRAAg");
	this.shape_1.setTransform(82.475,14.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.008)").s().p("ArnDdQhRAAAAhUIAAkRQAAhUBRAAIXPAAQBRAAAABUIAAERQAABUhRAAg");
	this.shape_2.setTransform(82.475,14.85);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.text}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AboutUsMC, new cjs.Rectangle(-1,-8.3,167,46.3), null);


(lib.TabMild = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Pattern
	this.XMild = new lib.XMild();
	this.XMild.name = "XMild";
	this.XMild.setTransform(46.15,12.45,0.7553,0.7553,0,0,0,37.8,37.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.6)").ss(5,1,1).p("EBQXAAAMigtAAA");
	this.shape.setTransform(517.2,66.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#9EBD3C").ss(1,1,1).p("EhQsglvIAApHQAAhLCeAAMCcgAAAQCeAAAABLIAAKPQACAzAAA3MAAABIQQAAKvjoAAMiaTAAAQjoAAAAqvMAAAhIQQAAhgAFhSgEhQsggCIAAltEBQwgknIAAEl");
	this.shape_1.setTransform(516.975,271.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAF1D3").s().p("EhNJAq5QjoAAAAqvMAAAhIQQAAhgAFhSIAAFtMChcAAAIAAklQACAzAAA3MAAABIQQAAKvjoAAgEBQZglGMigsAAAg");
	this.shape_2.setTransform(516.975,304.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9EBD3D").s().p("EhQuAH/IAAlsIAApHQAAhKCeAAMCchAAAQCeAAAABKIAAKPIAAEkg");
	this.shape_3.setTransform(517.125,15.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.XMild}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TabMild, new cjs.Rectangle(-1,-37,1036,616.8), null);


(lib.TabMedium = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.XMedium = new lib.XMedium();
	this.XMedium.name = "XMedium";
	this.XMedium.setTransform(46.15,48.45,0.7553,0.7553,0,0,0,37.8,37.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.6)").ss(5,1,1).p("EBQXAAAMigtAAA");
	this.shape.setTransform(517.2,102.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FCC52C").ss(1,1,1).p("EhQsglvIAApHQAAhLCeAAMCcgAAAQCeAAAABLIAAKPQACAzAAA3MAAABIQQAAKvjoAAMiaTAAAQjoAAAAqvMAAAhIQQAAhgAFhSgEBQwgknIAAElMihcAAAIAAlt");
	this.shape_1.setTransform(516.975,307.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEF0CA").s().p("EhNJAq5QjoAAAAqvMAAAhIQQAAhgAFhSIAAFtMChcAAAIAAklQACAzAAA3MAAABIQQAAKvjoAAgEBQZglGMigsAAAg");
	this.shape_2.setTransform(516.975,340.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FCC52C").s().p("EhQuAH/IAAlsIAApHQAAhKCeAAMCchAAAQCeAAAABKIAAKPIAAEkg");
	this.shape_3.setTransform(517.125,51.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.XMedium}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TabMedium, new cjs.Rectangle(-1,-1,1036,616.8), null);


(lib.TabHot = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.XHot = new lib.XHot();
	this.XHot.name = "XHot";
	this.XHot.setTransform(46.15,48.45,0.7553,0.7553,0,0,0,37.8,37.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.6)").ss(5,1,1).p("EBQXAAAMigtAAA");
	this.shape.setTransform(517.2,102.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B60611").ss(1,1,1).p("EhQsglvIAApHQAAhLCeAAMCcgAAAQCeAAAABLIAAKPQACAzAAA3MAAABIQQAAKvjoAAMiaTAAAQjoAAAAqvMAAAhIQQAAhgAFhSgEBQwgknIAAElMihcAAAIAAlt");
	this.shape_1.setTransform(516.975,307.375);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFEBEB").s().p("EhNJAq5QjoAAAAqvMAAAhIQQAAhgAFhSIAAFtMChcAAAIAAklQACAzAAA3MAAABIQQAAKvjoAAgEBQZglGMigsAAAg");
	this.shape_2.setTransform(516.975,340.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B60611").s().p("EhQuAH/IAAlsIAApHQAAhKCeAAMCchAAAQCeAAAABKIAAKPIAAEkg");
	this.shape_3.setTransform(517.125,51.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.XHot}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TabHot, new cjs.Rectangle(-1,-1,1036,616.8), null);


(lib.TabHell = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.XHell = new lib.XHell();
	this.XHell.name = "XHell";
	this.XHell.setTransform(46.15,48.45,0.7553,0.7553,0,0,0,37.8,37.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.6)").ss(5,1,1).p("EBQXAAAMigtAAA");
	this.shape.setTransform(517.2,102.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#86070E").ss(1,1,1).p("EBQwgpwQACAzAAA3MAAABIQQAAKvjoAAMiaTAAAQjoAAAAqvMAAAhIQQAAhgAFhSIAAFtMChcAAAg");
	this.shape_1.setTransform(516.975,340.275);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B60611").ss(1,1,1).p("EhQuAElIAApHQAAhKCeAAMCchAAAQCeAAAABKIAAKP");
	this.shape_2.setTransform(517.125,36.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFD5D5").s().p("EhNJAq5QjoAAAAqvMAAAhIQQAAhgAFhSIAAFtMChcAAAIAAklQACAzAAA3MAAABIQQAAKvjoAAgEBQZglGMigsAAAg");
	this.shape_3.setTransform(516.975,340.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#86070E").s().p("EhQuAH/IAAlsIAApHQAAhKCeAAMCchAAAQCeAAAABKIAAKPIAAEkg");
	this.shape_4.setTransform(517.125,51.125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.XHell}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.TabHell, new cjs.Rectangle(-1,-1,1036,616.8), null);


(lib.AboutUs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.XMore = new lib.XAboutUs();
	this.XMore.name = "XMore";
	this.XMore.setTransform(46.15,48.45,0.7553,0.7553,0,0,0,37.8,37.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#B80916","#F4AE2C"],[0,1],-516.6,0,516.7,0).s().p("EhQuAH/IAAlsIAApHQAAhKCeAAMCchAAAQCeAAAABKIAAKPIAAEkg");
	this.shape.setTransform(517.125,51.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FAF5F1").s().p("EhNJAq5QjoAAAAqvMAAAhIQQAAhgAFhSIAAFtMChcAAAIAAklQACAzAAA3MAAABIQQAAKvjoAAg");
	this.shape_1.setTransform(516.975,340.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.XMore}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.AboutUs, new cjs.Rectangle(0,0,1034,614.8), null);


(lib.Tabs = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Babbel
	this.Bubble = new lib.InfoWindows();
	this.Bubble.name = "Bubble";
	this.Bubble.setTransform(545.3,208.95,1,1,0,0,0,268.9,68.5);

	this.timeline.addTween(cjs.Tween.get(this.Bubble).wait(14));

	// ScovilleRuler
	this.InfoIcon = new lib.i();
	this.InfoIcon.name = "InfoIcon";
	this.InfoIcon.setTransform(820.15,241.8);

	this.instance = new lib.location();
	this.instance.setTransform(543.5,326.25,1,1,0,0,0,9.9,17.6);

	this.instance_1 = new lib.ScovilleRuler();
	this.instance_1.setTransform(766.9,346,1,1,0,0,0,242.8,11.1);

	this.text = new cjs.Text("Scotch Bonnet - מצנפת סקוטש ", "normal 900 58px 'Rubik'", "#FFFFFF");
	this.text.textAlign = "right";
	this.text.lineHeight = 73;
	this.text.lineWidth = 1079;
	this.text.parent = this;
	this.text.setTransform(1030,-13.7);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1,p:{y:346}},{t:this.instance,p:{x:543.5,y:326.25}},{t:this.InfoIcon,p:{y:241.8}}]}).to({state:[{t:this.instance_1,p:{y:343}},{t:this.instance,p:{x:615.5,y:323.25}},{t:this.InfoIcon,p:{y:241.8}}]},1).to({state:[{t:this.instance_1,p:{y:346}},{t:this.instance,p:{x:571.5,y:326.25}},{t:this.InfoIcon,p:{y:241.8}}]},1).to({state:[{t:this.instance_1,p:{y:345}},{t:this.instance,p:{x:545.5,y:325.25}},{t:this.InfoIcon,p:{y:241.8}}]},1).to({state:[{t:this.instance_1,p:{y:352}},{t:this.instance,p:{x:738,y:332.25}},{t:this.InfoIcon,p:{y:241.8}}]},1).to({state:[{t:this.instance_1,p:{y:338.35}},{t:this.instance,p:{x:712,y:318.6}},{t:this.InfoIcon,p:{y:240.65}}]},1).to({state:[{t:this.instance_1,p:{y:347.25}},{t:this.instance,p:{x:800,y:327.5}},{t:this.InfoIcon,p:{y:245.7}},{t:this.text}]},1).to({state:[{t:this.instance_1,p:{y:338.35}},{t:this.instance,p:{x:795,y:318.6}},{t:this.InfoIcon,p:{y:240.65}}]},1).to({state:[{t:this.instance_1,p:{y:363.7}},{t:this.instance,p:{x:918,y:343.95}},{t:this.InfoIcon,p:{y:243.8}}]},1).to({state:[{t:this.instance_1,p:{y:338.35}},{t:this.instance,p:{x:914,y:318.6}},{t:this.InfoIcon,p:{y:239.4}}]},1).to({state:[{t:this.instance_1,p:{y:350.05}},{t:this.instance,p:{x:905,y:330.3}},{t:this.InfoIcon,p:{y:239.85}}]},1).to({state:[{t:this.instance_1,p:{y:338.35}},{t:this.instance,p:{x:922.5,y:318.6}},{t:this.InfoIcon,p:{y:240.65}}]},1).to({state:[]},1).wait(2));

	// Pepper
	this.instance_2 = new lib.Banana();
	this.instance_2.setTransform(-5,152,0.6999,0.6999);

	this.instance_3 = new lib.Jalapeño();
	this.instance_3.setTransform(313.55,176.05,0.5577,0.5577,0,6.5244,-173.4756);

	this.instance_4 = new lib.Padrón();
	this.instance_4.setTransform(-194.05,148.55,0.7005,0.7005,-11.1895);

	this.instance_5 = new lib.Shishito();
	this.instance_5.setTransform(-74,109,0.6704,0.6704);

	this.instance_6 = new lib.BirdsEye();
	this.instance_6.setTransform(367.65,182.75,0.5885,0.5885,0,9.0068,-170.9932);

	this.instance_7 = new lib.Cayenne();
	this.instance_7.setTransform(369.4,244.45,0.581,0.581,0,19.9965,-160.0035);

	this.instance_8 = new lib.Scotch();
	this.instance_8.setTransform(-60.6,268.55,0.4948,0.4843,-32.8454);

	this.instance_9 = new lib.Habanero();
	this.instance_9.setTransform(-15,122,0.6824,0.6824);

	this.instance_10 = new lib.scorpion();
	this.instance_10.setTransform(-110.9,263.05,0.6318,0.6318,-20.9961);

	this.instance_11 = new lib.Morich();
	this.instance_11.setTransform(30,189,0.6824,0.6824);

	this.instance_12 = new lib.Viper();
	this.instance_12.setTransform(-139,178.3,0.6823,0.6823,-9.4889);

	this.instance_13 = new lib.Carolina();
	this.instance_13.setTransform(-21,168,0.6824,0.6824);

	this.instance_14 = new lib.Pepper();
	this.instance_14.setTransform(963.75,94.55,0.0238,0.0238,-14.9906,0,0,1732.5,888.5);

	this.instance_15 = new lib.DALIA();
	this.instance_15.setTransform(257,365,0.707,0.707);

	this.instance_16 = new lib.DANIEL();
	this.instance_16.setTransform(56,365,0.707,0.707);

	this.instance_17 = new lib.EDEN();
	this.instance_17.setTransform(56,143,0.707,0.707);

	this.instance_18 = new lib.ELAD();
	this.instance_18.setTransform(257,143,0.707,0.707);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]},1).to({state:[]},1).wait(1));

	// Text
	this.text_1 = new cjs.Text(".נאכל בדרך כלל על פיצה, בסלטים יוונים, על כריכים, במילוי בשר או גבינה", "normal 300 25px 'Rubik'");
	this.text_1.textAlign = "right";
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 792;
	this.text_1.parent = this;
	this.text_1.setTransform(1008,507.3);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("שימושים", "normal 500 30px 'Rubik'");
	this.text_2.textAlign = "right";
	this.text_2.lineHeight = 36;
	this.text_2.lineWidth = 208;
	this.text_2.parent = this;
	this.text_2.setTransform(1007.85,466);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_2);
	}

	this.text_3 = new cjs.Text("דרום אמריקה", "normal 300 25px 'Rubik'");
	this.text_3.textAlign = "right";
	this.text_3.lineHeight = 29;
	this.text_3.lineWidth = 792;
	this.text_3.parent = this;
	this.text_3.setTransform(1008,415.1);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_3);
	}

	this.text_4 = new cjs.Text("מקור", "normal 500 30px 'Rubik'");
	this.text_4.textAlign = "right";
	this.text_4.lineHeight = 36;
	this.text_4.lineWidth = 208;
	this.text_4.parent = this;
	this.text_4.setTransform(1007.85,373.8);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_4);
	}

	this.text_5 = new cjs.Text(" SHU בין 0 ל- 500 יחידות ", "normal 300 25px 'Rubik'");
	this.text_5.textAlign = "right";
	this.text_5.lineHeight = 29;
	this.text_5.lineWidth = 792;
	this.text_5.parent = this;
	this.text_5.setTransform(1008,273.55);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_5);
	}

	this.text_6 = new cjs.Text("מידת סקוביל", "normal 500 30px 'Rubik'");
	this.text_6.textAlign = "right";
	this.text_6.lineHeight = 36;
	this.text_6.lineWidth = 208;
	this.text_6.parent = this;
	this.text_6.setTransform(1007.85,232.25);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_6);
	}

	this.text_7 = new cjs.Text("מכונה גם פלפל שעווה צהוב או צ'ילי בננה. פלפל עדין ובינוני עם טעם חריף .ומתקתק מעט. הוא בדרך כלל צהוב בוהק, אך מתבגר לירוק, אדום או כתום", "normal 300 25px 'Rubik'");
	this.text_7.textAlign = "right";
	this.text_7.lineHeight = 29;
	this.text_7.lineWidth = 792;
	this.text_7.parent = this;
	this.text_7.setTransform(1010.5,152.2);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_7);
	}

	this.text_8 = new cjs.Text("קצת על הפלפל", "normal 500 30px 'Rubik'");
	this.text_8.textAlign = "right";
	this.text_8.lineHeight = 36;
	this.text_8.lineWidth = 208;
	this.text_8.parent = this;
	this.text_8.setTransform(1010.35,110.9);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_8);
	}

	this.text_9 = new cjs.Text("Banana - שיפקה", "normal 900 60px 'Rubik'", "#FFFFFF");
	this.text_9.textAlign = "right";
	this.text_9.lineHeight = 75;
	this.text_9.lineWidth = 713;
	this.text_9.parent = this;
	this.text_9.setTransform(1030,-19.6);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_9);
	}

	this.telem = new lib.telem();
	this.telem.name = "telem";
	this.telem.setTransform(735.1,442.05,1,1,0,0,0,389.1,19.5);

	this.instance_19 = new lib.TextBoldAboutUs();
	this.instance_19.setTransform(333.15,430,1,1,0,0,0,56.8,130.1);

	this.HitSymbol = new lib.HitSymbol();
	this.HitSymbol.name = "HitSymbol";
	this.HitSymbol.setTransform(731.8,507.1,1,1,0,0,0,53.1,45.1);

	this.instance_20 = new lib.TextBoldInfo();
	this.instance_20.setTransform(495.5,58.25,1,1,0,0,0,541.5,77.1);

	this.instance_21 = new lib.pepeerIcon();
	this.instance_21.setTransform(919,108,0.6052,0.6052);

	this.instance_22 = new lib.LikeIcon();
	this.instance_22.setTransform(919,270,0.6052,0.6052);

	this.instance_23 = new lib.StopIcon();
	this.instance_23.setTransform(919,432,0.6052,0.6052);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_9,p:{text:"Banana - שיפקה",lineWidth:713,y:-19.6,font:"normal 900 60px 'Rubik'",lineHeight:75.1,x:1030}},{t:this.text_8,p:{y:110.9}},{t:this.text_7,p:{y:152.2,text:"מכונה גם פלפל שעווה צהוב או צ'ילי בננה. פלפל עדין ובינוני עם טעם חריף .ומתקתק מעט. הוא בדרך כלל צהוב בוהק, אך מתבגר לירוק, אדום או כתום",lineHeight:29.2,lineWidth:792,font:"normal 300 25px 'Rubik'"}},{t:this.text_6,p:{y:232.25,x:1007.85,text:"מידת סקוביל"}},{t:this.text_5,p:{text:" SHU בין 0 ל- 500 יחידות ",y:273.55,x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_4,p:{y:373.8,x:1007.85,text:"מקור",lineWidth:208}},{t:this.text_3,p:{y:415.1,text:"דרום אמריקה",x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_2,p:{y:466,x:1007.85,text:"שימושים",textAlign:"right",lineHeight:36.1,lineWidth:208}},{t:this.text_1,p:{y:507.3,text:".נאכל בדרך כלל על פיצה, בסלטים יוונים, על כריכים, במילוי בשר או גבינה",font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792,x:1008,textAlign:"right"}}]}).to({state:[{t:this.text_9,p:{text:"Jalapeño - חלפיניו",lineWidth:808,y:-19.6,font:"normal 900 60px 'Rubik'",lineHeight:75.1,x:1030}},{t:this.text_8,p:{y:96.9}},{t:this.text_7,p:{y:138.2,text:"פלפל חלק, קטן ובשרני. לרוב הפרי נקטף ונאכל בעודו ירוק, אך לעיתים מאפשרים לו .להמשיך להבשיל לאחר קטיפתו עד שצבעו נהפך לאדמדם. אורכו נע בין 5-10 ס\"מ",lineHeight:31.2,lineWidth:825,font:"normal 300 25px 'Rubik'"}},{t:this.text_6,p:{y:232.25,x:1007.85,text:"מידת סקוביל"}},{t:this.text_5,p:{text:" SHU בין 8,000 ל- 2,500 יחידות ",y:273.55,x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_4,p:{y:376.4,x:1007.85,text:"מקור",lineWidth:208}},{t:this.text_3,p:{y:417.7,text:"מקסיקו",x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_2,p:{y:464.05,x:1007.85,text:"שימושים",textAlign:"right",lineHeight:36.1,lineWidth:208}},{t:this.text_1,p:{y:505.35,text:"לרוב משולב כרוטב סלסה וכתוספת לתבשילים, ולעיתים נאכל לאחר החמצה. את תבשיל הצ'יפוטלה .המוכר מכינים מפלפל חלפניו, והוא מעשיר כל מאכל מקסיקני בטעמים מעושנים-חריפים",font:"normal 300 24px 'Rubik'",lineHeight:29.45,lineWidth:952,x:1008,textAlign:"right"}}]},1).to({state:[{t:this.text_9,p:{text:"Padrón - פדרון",lineWidth:808,y:-19.6,font:"normal 900 60px 'Rubik'",lineHeight:75.1,x:1030}},{t:this.text_8,p:{y:110.9}},{t:this.text_7,p:{y:152.2,text:"פלפלים קטנים באורך של 5 ס\"מ, בעלי צבע שנע בין ירוק עז לירוק צהבהב, ולעתים .גם אדום. הפלפלים בעלי מרקם מחורץ ",lineHeight:29.2,lineWidth:792,font:"normal 300 25px 'Rubik'"}},{t:this.text_6,p:{y:232.25,x:1007.85,text:"מידת סקוביל"}},{t:this.text_5,p:{text:" SHU בין 2,500 ל- 500 יחידות ",y:273.55,x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_4,p:{y:376.4,x:1007.85,text:"מקור",lineWidth:208}},{t:this.text_3,p:{y:417.7,text:"גליסיה, צפון ספרד",x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_2,p:{y:464.05,x:1007.85,text:"שימושים",textAlign:"right",lineHeight:36.1,lineWidth:208}},{t:this.text_1,p:{y:505.35,text:"הכי פופולרי על הגריל או על מחבת עם שמן זית ומלח גס. משפר את הטעם של רוב .המאכלים כמו פיצות, סלטים, כריכים וכמובן טעים גם בצורתו הכבושה",font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792,x:1008,textAlign:"right"}}]},1).to({state:[{t:this.text_9,p:{text:"Shishito - שישיטו",lineWidth:808,y:-15.6,font:"normal 900 60px 'Rubik'",lineHeight:75.1,x:1030}},{t:this.text_8,p:{y:110.9}},{t:this.text_7,p:{y:152.2,text:".אורכו 12 ס״מ, מקומט מעט, בעל ברק בצבע ירוק וטעם פיקנטי",lineHeight:29.2,lineWidth:792,font:"normal 300 25px 'Rubik'"}},{t:this.text_6,p:{y:232.25,x:1007.85,text:"מידת סקוביל"}},{t:this.text_5,p:{text:" SHU בין 500 ל- 50 יחידות ",y:273.55,x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_4,p:{y:374.55,x:1007.85,text:"מקור",lineWidth:208}},{t:this.text_3,p:{y:415.85,text:"אסיה",x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_2,p:{y:464.05,x:1007.85,text:"שימושים",textAlign:"right",lineHeight:36.1,lineWidth:208}},{t:this.text_1,p:{y:505.35,text:"לרוב אוכלים לאחר חימום על מחבת, עושים חריץ בפלפל מוסיפים שמן זית ומלח .גס, ניתן להוסיף תבלינים נוספים ורטבים שונים לשיפור הטעם",font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792,x:1008,textAlign:"right"}}]},1).to({state:[{t:this.text_9,p:{text:"Bird's eye chili - צ'ילי עין הציפור ",lineWidth:1079,y:-12.6,font:"normal 900 60px 'Rubik'",lineHeight:75.1,x:1030}},{t:this.text_8,p:{y:110.9}},{t:this.text_7,p:{y:152.2,text:".פלפלים קטנים ולרוב בצבעי אדום-כתום, דלים בלחות ועשירים בקפסאיצין",lineHeight:29.2,lineWidth:792,font:"normal 300 25px 'Rubik'"}},{t:this.text_6,p:{y:232.25,x:1007.85,text:"מידת סקוביל"}},{t:this.text_5,p:{text:" SHU בין 100,000 ל- 50,000 יחידות ",y:273.55,x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_4,p:{y:375.55,x:1007.85,text:"מקור",lineWidth:208}},{t:this.text_3,p:{y:416.85,text:"בדרום מזרח אסיה",x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_2,p:{y:464.05,x:1007.85,text:"שימושים",textAlign:"right",lineHeight:36.1,lineWidth:208}},{t:this.text_1,p:{y:505.35,text:"מסייע בהפחתת לחץ, כאבי שיניים, דלקת פרקים ובעיות במערכת העיכול. ממנו .יוצרים את פלפל השאטה המוכר שמשמש כתבלין",font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792,x:1008,textAlign:"right"}}]},1).to({state:[{t:this.text_9,p:{text:"Cayenne - קאיין ",lineWidth:1079,y:-12.6,font:"normal 900 60px 'Rubik'",lineHeight:75.1,x:1030}},{t:this.text_8,p:{y:103.55}},{t:this.text_7,p:{y:144.85,text:"אורכו בין 10 עד 25 ס\"מ, בדרך כלל רזה, ובצבע אדום. לעתים קרובות עם קצה .מעוגל ועור מקומט מעט",lineHeight:29.2,lineWidth:792,font:"normal 300 25px 'Rubik'"}},{t:this.text_6,p:{y:231.1,x:1007.85,text:"מידת סקוביל"}},{t:this.text_5,p:{text:" SHU בין 50,000 ל- 30,000 יחידות ",y:272.4,x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_4,p:{y:368.2,x:1007.85,text:"מקור",lineWidth:208}},{t:this.text_3,p:{y:409.5,text:"הודו",x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_2,p:{y:454.25,x:1007.85,text:"שימושים",textAlign:"right",lineHeight:36.1,lineWidth:208}},{t:this.text_1,p:{y:495.55,text:"משמש בעיקר בבישול של מנות חריפות, בצורת אבקה, בצורתו הטבעית, או בצורת שמן .מזוקק. משמש גם כתוסף צמחי. בנוסף יש לו סגולות העוזרות למערכת הלב וכלי הדם",font:"normal 300 24px 'Rubik'",lineHeight:30.05,lineWidth:792,x:1008,textAlign:"right"}}]},1).to({state:[{t:this.text_8,p:{y:106.3}},{t:this.text_7,p:{y:147.6,text:"צורתו מעט עגולה ומעוטרת בחרכים. גודלו בינוני ומגיע ל-4 ס\"מ. בשיא בשלותו וטריותו .צבעו משתנה מירוק, לצהוב, אדום עז, וכתום",lineHeight:30.45,lineWidth:823,font:"normal 300 24px 'Rubik'"}},{t:this.text_6,p:{y:236.15,x:1007.85,text:"מידת סקוביל"}},{t:this.text_5,p:{text:" SHU בין 350,000 ל- 100,000 יחידות ",y:277.45,x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_4,p:{y:383.45,x:1007.85,text:"מקור",lineWidth:208}},{t:this.text_3,p:{y:424.75,text:"מערב אירופה",x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_2,p:{y:475.95,x:1007.85,text:"שימושים",textAlign:"right",lineHeight:36.1,lineWidth:208}},{t:this.text_1,p:{y:517.25,text:".ניתן לשלב פלפל זה כתבלין עבור תבשילים מלוחים כמו מרינדת בשרים, אפונה, ואורז קאלאלו",font:"normal 300 25px 'Rubik'",lineHeight:31.2,lineWidth:899,x:1008,textAlign:"right"}}]},1).to({state:[{t:this.text_9,p:{text:"Habanero - הבאנרו ",lineWidth:1079,y:-19.6,font:"normal 900 60px 'Rubik'",lineHeight:75.1,x:1030}},{t:this.text_8,p:{y:109.75}},{t:this.text_7,p:{y:151.05,text:"צורת דמוי לב, גודלו בין 2-6 ס\"מ. צבעו ירוק, והוא הופך לאדום או כתום עם .הבשלתו, אך ניתן למוצאו גם בגווני לבן, חום או ורוד",lineHeight:31.2,lineWidth:792,font:"normal 300 25px 'Rubik'"}},{t:this.text_6,p:{y:231.1,x:1007.85,text:"מידת סקוביל"}},{t:this.text_5,p:{text:" SHU בין 300,000 ל- 150,000 יחידות ",y:272.4,x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_4,p:{y:365.9,x:1007.85,text:"מקור",lineWidth:208}},{t:this.text_3,p:{y:407.2,text:"הוואנה, קובה",x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_2,p:{y:453.5,x:1007.85,text:"שימושים",textAlign:"right",lineHeight:36.1,lineWidth:208}},{t:this.text_1,p:{y:494.8,text:"מפלפל זה מפיקים את תרסיס גז הפלפל. פלפל זה מעניק טעם חזק יותר .בתבשילים המשלבים פירות, כמו סלסה",font:"normal 300 25px 'Rubik'",lineHeight:31.2,lineWidth:792,x:1008,textAlign:"right"}}]},1).to({state:[{t:this.text_9,p:{text:"  Moruga scorpion -  מורוגה סקורפיון ",lineWidth:1079,y:-13.75,font:"normal 900 55px 'Rubik'",lineHeight:68.85,x:1030}},{t:this.text_8,p:{y:89.9}},{t:this.text_7,p:{y:131.2,text:"טעמו דמוי פרי עדין ומרקמו מעט חלק. מכונה סקורפיון (עקרב) בשל צורתו בקצה הדומה לצורת עוקץ העקרב. אורכו מגיע עד ל-2 סנטימטרים, וצבעו משתנה בהתאם .לבשלותו מירוק לכתום/ צהוב ולבסוף אדום",lineHeight:30.05,lineWidth:792,font:"normal 300 24px 'Rubik'"}},{t:this.text_6,p:{y:234.25,x:1007.85,text:"מידת סקוביל"}},{t:this.text_5,p:{text:" SHU בין 1,463,700 ל- 800,000 יחידות ",y:281.8,x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_4,p:{y:390.25,x:1007.85,text:"מקור",lineWidth:208}},{t:this.text_3,p:{y:431.55,text:"אוסטרליה",x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_2,p:{y:474.85,x:1007.85,text:"שימושים",textAlign:"right",lineHeight:36.1,lineWidth:208}},{t:this.text_1,p:{y:516.15,text:".משמש עבור רטבים חריפים במיוחד ומומלץ לשימוש ללא כפפות",font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792,x:1008,textAlign:"right"}}]},1).to({state:[{t:this.text_9,p:{text:"Naga Morich - נאגה מוריץ  ",lineWidth:1079,y:-17.65,font:"normal 900 58px 'Rubik'",lineHeight:72.6,x:1030}},{t:this.text_8,p:{y:104.75}},{t:this.text_7,p:{y:146.05,text:"נקרא גם צ'ילי הנחש. אורכו מגיע לסביבות שני סנטימטרים. הם מבשילים מירוק .עשיר לצהוב-כתום ולבסוף אדומים",lineHeight:29.2,lineWidth:792,font:"normal 300 25px 'Rubik'"}},{t:this.text_6,p:{y:229.85,x:1007.85,text:"מידת סקוביל"}},{t:this.text_5,p:{text:" SHU בין 1,598,227 ל- 1,000,000 יחידות ",y:269.9,x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_4,p:{y:356.9,x:1007.85,text:"מקור",lineWidth:208}},{t:this.text_3,p:{y:398.2,text:"צפון מזרח הודו ובנגלדש",x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_2,p:{y:446.5,x:1007.85,text:"שימושים",textAlign:"right",lineHeight:36.1,lineWidth:208}},{t:this.text_1,p:{y:487.8,text:"משמש עבור מרינדות ורטבים חריפים. מספיקה פרוסה דקה אחת עבור מספר רב .של סירים ולכן לרוב לא משתמשים בו בבישולים",font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792,x:1008,textAlign:"right"}}]},1).to({state:[{t:this.text_9,p:{text:"Naga Viper - נאגה צפע   ",lineWidth:1079,y:-8.65,font:"normal 900 58px 'Rubik'",lineHeight:72.6,x:1034}},{t:this.text_8,p:{y:99.15}},{t:this.text_7,p:{y:140.45,text:"פלפל זה הוא הכלאה של מספר פלפלים, לכן הוא אחד החריפים בעולם. טעמו מתוק ופירותי. לרוב אורכו .ס\"מ 4 וצורתו מוארכת ומקומטת מעט. מסוכן למגע ולכן חשוב לשים כפפות בכדי לא לקבל צריבה",lineHeight:30.05,lineWidth:951,font:"normal 300 24px 'Rubik'"}},{t:this.text_6,p:{y:230.3,x:1007.85,text:"מידת סקוביל"}},{t:this.text_5,p:{text:" SHU בין 1,382,118 ל- 800,000 יחידות ",y:271.6,x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_4,p:{y:381.6,x:1007.85,text:"מקור",lineWidth:208}},{t:this.text_3,p:{y:422.9,text:"אנגליה",x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_2,p:{y:466.2,x:1007.85,text:"שימושים",textAlign:"right",lineHeight:36.1,lineWidth:208}},{t:this.text_1,p:{y:507.5,text:"משמש עבור רטבים חריפים קיצוניים, לרוב מייבשים אותו והופכים אותו לאבקה .(שאיתה מתבלים מאכלים (קורט אחד מספיק",font:"normal 300 25px 'Rubik'",lineHeight:31.2,lineWidth:792,x:1008,textAlign:"right"}}]},1).to({state:[{t:this.text_9,p:{text:"Carolina Reaper - קרוליינה ריפר  ",lineWidth:1079,y:-17.65,font:"normal 900 60px 'Rubik'",lineHeight:75.1,x:1030}},{t:this.text_8,p:{y:95.75}},{t:this.text_7,p:{y:137.05,text:".פלפל זה הוא הכלאה של מספר פלפלים ולכן הוא נחשב בין החריפים בעולם\n.טעמו פירותי ומתוק, וצבעו אדום עז. בעל מרקם גבשושי וזנב מחודד קטן",lineHeight:31.2,lineWidth:816,font:"normal 300 25px 'Rubik'"}},{t:this.text_6,p:{y:231.1,x:1007.85,text:"מידת סקוביל"}},{t:this.text_5,p:{text:" SHU בין 2,200,000 ל- 1,500,000 יחידות ",y:272.4,x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_4,p:{y:368.9,x:1007.85,text:"מקור",lineWidth:208}},{t:this.text_3,p:{y:410.2,text:"דרום קרוליינה ארצות הברית",x:1008,font:"normal 300 25px 'Rubik'",lineHeight:29.2,lineWidth:792}},{t:this.text_2,p:{y:458.5,x:1007.85,text:"שימושים",textAlign:"right",lineHeight:36.1,lineWidth:208}},{t:this.text_1,p:{y:499.8,text:",ניתן למצוא אותו כאבקה, ולעשות בו שימוש ברטבים חריפים ובאוכל תאילנדי .מרקים ותבשילים",font:"normal 300 25px 'Rubik'",lineHeight:31.2,lineWidth:792,x:1008,textAlign:"right"}}]},1).to({state:[{t:this.text_2,p:{y:200.4,x:730.05,text:"ייצוג זה הופק כחלק מפרויקט משותף לקורסים \n\"ארגון וייצוג ידע\" ו-\"מבוא לתכנות אינטרקציה ואנימציה\" בפקולטה לטכנולוגיות למידה",textAlign:"center",lineHeight:48.05,lineWidth:625}},{t:this.text_1,p:{y:383.85,text:"תש\"פ | 2020",font:"normal 300 20px 'Rubik'",lineHeight:23.4,lineWidth:774,x:734.35,textAlign:"center"}},{t:this.HitSymbol},{t:this.instance_19},{t:this.telem}]},1).to({state:[{t:this.text_6,p:{y:109.4,x:893.8,text:"?מה זה חריף"}},{t:this.text_5,p:{text:"חריף הוא תחושה. החריף מתבטא בתחושת צריבה בחלל הפה, ולכן אינו מוגדר כטעם. חריף פועל על כל .תאי העצב התחושתיים ולכן תרגישו חום או צריבה באזור החשוף",y:159.5,x:893.8,font:"normal 300 21px 'Rubik'",lineHeight:27.55,lineWidth:851}},{t:this.text_4,p:{y:271.5,x:893.8,text:"?למה כדאי לאכול חריף",lineWidth:358}},{t:this.text_3,p:{y:321.6,text:"פלפלים מסייעים לפתיחת דרכי הנשימה ומקלים על תופעות הצטננות. הם מעודדים את חילוף החומרים .(בגוף ומעוררים את תחושת השובע. אכילת חריף גורמת לאושר (באמצעות שחרור אנדורפינים",x:893.8,font:"normal 300 21px 'Rubik'",lineHeight:27.55,lineWidth:845}},{t:this.text_2,p:{y:429.35,x:895.9,text:"?איך מנטרלים חריף",textAlign:"right",lineHeight:36.1,lineWidth:358}},{t:this.text_1,p:{y:479.45,text:"הפתרונות המומלצים הם מוצרי חלב או פשוט פרוסת לחם. שתיית מים אינה עוזרת ואף מגבירה את .תחושת הבערה",font:"normal 300 21px 'Rubik'",lineHeight:27.55,lineWidth:847,x:895.9,textAlign:"right"}},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20}]},1).wait(1));

	// Pattern
	this.TabMild = new lib.TabMild();
	this.TabMild.name = "TabMild";
	this.TabMild.setTransform(519.95,271.4,1,1,0,0,0,517,271.4);

	this.instance_24 = new lib.XMild();
	this.instance_24.setTransform(46.15,12.45,0.7553,0.7553,0,0,0,37.8,37.8);

	this.TabMedium = new lib.TabMedium();
	this.TabMedium.name = "TabMedium";
	this.TabMedium.setTransform(519.95,239.55,1,1,0,0,0,517,271.4);

	this.TabHot = new lib.TabHot();
	this.TabHot.name = "TabHot";
	this.TabHot.setTransform(519.95,239.55,1,1,0,0,0,517,271.4);

	this.TabHell = new lib.TabHell();
	this.TabHell.name = "TabHell";
	this.TabHell.setTransform(519.95,239.55,1,1,0,0,0,517,271.4);
	this.TabHell._off = true;

	this.AboutUs = new lib.AboutUs();
	this.AboutUs.name = "AboutUs";
	this.AboutUs.setTransform(519.95,239.55,1,1,0,0,0,517,271.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_24},{t:this.TabMild}]}).to({state:[{t:this.instance_24},{t:this.TabMild}]},1).to({state:[{t:this.instance_24},{t:this.TabMild}]},1).to({state:[{t:this.TabMild}]},1).to({state:[{t:this.TabMedium}]},1).to({state:[{t:this.TabMedium}]},1).to({state:[{t:this.TabHot}]},1).to({state:[{t:this.TabHot}]},1).to({state:[{t:this.TabHell}]},1).to({state:[{t:this.TabHell}]},1).to({state:[{t:this.TabHell}]},1).to({state:[{t:this.TabHell}]},1).to({state:[{t:this.AboutUs}]},1).to({state:[{t:this.AboutUs}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.TabHell).wait(8).to({_off:false},0).wait(3).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-194,-36.5,1318.1,712.9);


(lib.scovilleMain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(8).call(this.frame_8).wait(1));

	// SHU
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.906)").s().p("AgPAyIg3g2IAKgLIA4A3QAPAQANABQANABAKgLQALgKgBgNQgBgOgQgPIg2g3IAKgKIA2A3QAVAUAAASQAAASgPAPQgPAPgSAAQgSAAgUgVg");
	this.shape.setTransform(77.375,79.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.906)").s().p("AhPgNIALgKIAoAnIAsgsIgngoIALgLIBbBcIgKALIgtgrIgsAsIAsAsIgKALg");
	this.shape_1.setTransform(69.1,89.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.906)").s().p("AABBCIgBgOQAKAAALgDQAJgEAIgHQAJgKABgKQABgKgHgHQgFgEgFgBQgFgBgFABIgNAEIgSAIQgMAEgLAAQgKAAgKgKQgHgGgCgJQgCgJAEgJQAEgKAIgIQAIgIAKgEQAKgEAKAAIABANQgSAAgMAMQgJAIgBAJQgBAJAHAHQAEAEAGABQAFAAAEgBIAMgEIATgHQANgGALABQAKAAAKAKQAHAHACAJQADAKgEAKQgEALgJAJQgKAKgMAEQgLAFgLAAIgCAAg");
	this.shape_2.setTransform(61.0157,97.8245);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(0,0,0,0.906)").s().p("AhPgOIAKgLIAwAwIABgBIgIhXIAMgMIAGBBIBaAWIgMANIhNgWIADAkIAdAfIgKAKg");
	this.shape_3.setTransform(58.675,63.15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.906)").s().p("AAOA4QgTgFgXgXQgWgWgFgTQgEgTANgOQANgNAUAFQASAEAXAXQAWAWAFATQAFAUgNANQgKAKgOAAIgJgBgAglglQgJAJAFAOQAEAOATASQATAUAOAEQAPAGAJgJQAIgJgFgPQgFgOgTgSQgTgUgNgEIgJgCQgIAAgGAGg");
	this.shape_4.setTransform(50.6516,71.1984);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.906)").s().p("AAGA0IAVgVIhEhDIgQAQIgHgHQAKgNADgLIAIgIIBQBQIATgTIAJAJIgyAxg");
	this.shape_5.setTransform(44.525,78.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(0,0,0,0.91)").s().p("AhCAuIAAgOIBNAAQAXAAAKgIQAKgKAAgOQAAgNgKgKQgKgIgXAAIhNAAIAAgOIBNAAQAdgBAOANQANANAAAUQAAAWgNAMQgOAMgdAAg");
	this.shape_6.setTransform(-22.45,273.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(0,0,0,0.91)").s().p("AhBAvIAAgPIA4AAIAAg+Ig4AAIAAgQICDAAIAAAQIg/AAIAAA+IA/AAIAAAPg");
	this.shape_7.setTransform(-22.575,286.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.91)").s().p("AAmAkQAIgIAFgJQAEgKAAgJQAAgOgGgHQgGgIgLAAQgGAAgFADQgEADgDAEIgGAMIgIASQgEAMgIAIQgIAHgNAAQgKAAgHgFQgIgFgFgKQgEgJAAgKQAAgMAEgKQAFgKAHgHIAKAIQgNAOAAARQAAAKAGAHQAFAHAJAAQAHAAAEgDIAGgHIAGgMIAIgSQAFgNAIgHQAIgHANAAQALAAAIAFQAJAGAEAKQAFAKAAANQAAANgFALQgFAMgJAJg");
	this.shape_8.setTransform(-22.575,298.275);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("rgba(0,0,0,0.91)").s().p("AgwAeQgRgLAAgTQAAgSARgLQARgKAfAAQAfAAASAKQARALAAASQAAATgRALQgSAKgfAAQgfAAgRgKgAgogSQgNAHAAALQAAAMANAHQANAHAbAAQAbAAAOgHQANgHAAgMQAAgLgNgHQgOgHgbAAQgbAAgNAHg");
	this.shape_9.setTransform(-48.525,285.425);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.902)").s().p("AghA2QgMgNAAgdIAAhOIAOAAIAABOQAAAWAIAKQAKAKANAAQAPAAAIgKQAJgKAAgWIAAhOIAPAAIAABOQgBAdgNANQgMANgVAAQgVAAgMgNg");
	this.shape_10.setTransform(321.95,-14.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(0,0,0,0.902)").s().p("AAgBCIAAg/Ig/AAIAAA/IgPAAIAAiDIAPAAIAAA4IA/AAIAAg4IAPAAIAACDg");
	this.shape_11.setTransform(309.05,-14.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("rgba(0,0,0,0.902)").s().p("AgXA/QgMgFgJgJIAJgLQAIAIAJAFQAKAEAJAAQAOAAAHgGQAIgGAAgLQAAgGgDgFQgDgEgEgDIgMgGIgSgIQgMgEgIgIQgHgIAAgNQAAgKAFgHQAFgIAKgFQAJgEAKAAQAMAAAKAEQAKAFAHAHIgIAKQgOgNgRAAQgKAAgHAGQgHAFAAAJQAAAHADAEIAHAGIAMAGIASAIQANAFAHAIQAHAIAAANQAAALgFAIQgGAJgKAEQgKAFgNAAQgNAAgLgFg");
	this.shape_12.setTransform(297.325,-14.625);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("rgba(0,0,0,0.902)").s().p("AAfBCIgnhFIgYAaIAAArIgOAAIAAiDIAOAAIAABDIAAAAIA5hDIARAAIgqAyIAvBRg");
	this.shape_13.setTransform(325.4,-40.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(0,0,0,0.902)").s().p("AgdAxQgKgSAAgfQAAgfAKgRQALgRASAAQATAAALARQAKARAAAfQAAAfgKASQgLARgTAAQgSAAgLgRgAgSgoQgHANAAAbQAAAbAHAOQAHANALAAQAMAAAHgNQAHgOAAgbQAAgbgHgNQgHgNgMAAQgLAAgHANg");
	this.shape_14.setTransform(313.875,-40.575);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(0,0,0,0.902)").s().p("AgdAxQgKgSAAgfQAAgfAKgRQALgRASAAQATAAALARQAKARAAAfQAAAfgKASQgLARgTAAQgSAAgLgRgAgSgoQgHANAAAbQAAAbAHAOQAHANALAAQAMAAAHgNQAHgOAAgbQAAgbgHgNQgHgNgMAAQgLAAgHANg");
	this.shape_15.setTransform(304.025,-40.575);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.902)").s().p("AgiBAIAAgMIAdAAIAAhgIgXAAIAAgKQAQgDAKgGIALAAIAABzIAaAAIAAAMg");
	this.shape_16.setTransform(294.625,-40.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("rgba(0,0,0,0.906)").s().p("Ag3A4QgPgPAAgRQAAgTAVgUIA1g3IAMAKIg2A4QgQAPgBANQgBANAKAKQALALANgBQANgBAQgRIA2g2IAKAKIg2A2QgUAVgTABQgSAAgPgPg");
	this.shape_17.setTransform(558.4,93.625);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("rgba(0,0,0,0.906)").s().p("AgWBFIArgtIgtgrIgsAsIgKgLIBbhcIAKAKIgmAoIAtArIAngnIAKALIhbBcg");
	this.shape_18.setTransform(548.375,85.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("rgba(0,0,0,0.906)").s().p("AgaA8QgKgEgKgJQgJgKgFgLQgFgMAAgNIAOgBQAAALADAJQAEALAIAHQAJAJAKABQAKABAHgHQAEgFABgFQABgFgCgFIgEgNIgGgSQgFgMAAgLQAAgLAJgJQAGgHAJgCQAJgCAKAEQAKADAIAIQAIAIAEAKQAEAKAAAKIgNABQAAgSgNgMQgIgIgIgBQgJgBgHAHQgEAEgBAGQgBAFACAEIAEAMIAHATQAGANgBAKQAAALgKAKQgHAHgJACIgIABQgGAAgGgCg");
	this.shape_19.setTransform(540.025,77.3657);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("rgba(0,0,0,0.906)").s().p("AgRBKIA1g2QAIgIATgQIAAgBIgcANIhDAhIgHgHIAehEIAOgdIgBAAIgEADIgUAZIg2A1IgJgJIBbhcIAMAMIgeBFIgNAaIABABIAKgGIAOgIIBFggIAOANIhcBcg");
	this.shape_20.setTransform(570.75,70.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("rgba(0,0,0,0.906)").s().p("Ag8APIAJgIIAVAVIBDhFIgRgRIAHgGQANAKANADIAHAHIhQBSIAUATIgJAIg");
	this.shape_21.setTransform(561.35,63.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("rgba(0,0,0,0.902)").s().p("AgLAuQgcAAgOgMQgNgNAAgVQAAgUANgNQAOgNAcABIBOAAIAAAOIhOAAQgWAAgKAJQgKAIAAAOQAAAOAKAKQAKAIAWAAIBOAAIAAAOg");
	this.shape_22.setTransform(644.3,294.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("rgba(0,0,0,0.902)").s().p("AhBAuIAAgPIA/AAIAAg+Ig/AAIAAgOICDAAIAAAOIg4AAIAAA+IA4AAIAAAPg");
	this.shape_23.setTransform(644.425,282);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("rgba(0,0,0,0.902)").s().p("AgxAoQgJgGgEgKQgFgKAAgNQAAgNAFgLQAFgMAJgJIALAJQgIAIgFAJQgEAKAAAJQAAAOAGAHQAGAIALAAQAGAAAFgDQAEgDADgEIAGgMIAHgSQAFgMAIgIQAIgHANAAQAKAAAHAFQAIAFAFAKQAEAJAAAKQAAAMgEAKQgFAKgHAHIgKgIQANgOAAgRQAAgKgGgHQgFgHgJAAQgHAAgEADIgGAHIgGAMIgIASQgFANgIAHQgIAHgNAAQgLAAgIgFg");
	this.shape_24.setTransform(644.425,270.275);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.902)").s().p("AhBA2IAAgOIBLAAIAmACIAAgBIgegKIhFgaIAAgJIBFgaIAegLIAAAAIgFAAIghACIhLAAIAAgOICDAAIAAASIhHAaIgcAJIAAAAIALAEIARAGIBHAZIAAATg");
	this.shape_25.setTransform(670.575,292.575);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("rgba(0,0,0,0.902)").s().p("AguAjQgJgFgFgIQgFgJAAgKQAAgLAHgLQAHgJANgGQAOgFAUAAQAYAAAQAGQAQAHAHALQAHALAAAMQAAASgNAMIgJgJQAFgEACgFQADgGAAgGQAAgOgNgKQgOgJgdgBQAHAHAFAIQAEAIAAAHQAAARgKAKQgJAJgUAAQgLAAgKgFgAgrgQQgLAHAAANQAAAJAJAHQAIAGAMAAQAOAAAHgGQAHgGAAgMQAAgGgDgHQgFgIgJgGQgTABgKAIg");
	this.shape_26.setTransform(670.375,280.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("rgba(0,0,0,0.902)").s().p("Ag/AjIAAhFIAMAAIAAAdIBgAAIAAgXIAKAAQADAQAGAKIAAALIhzAAIAAAag");
	this.shape_27.setTransform(670.375,271.025);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("rgba(0,0,0,0.902)").s().p("AgPAyIg3g2IAKgLIA4A3QAPAQANABQANABAKgLQALgKgBgNQgBgOgQgPIg2g3IAKgKIA2A3QAVAUAAASQAAASgPAPQgPAPgSAAQgSAAgUgVg");
	this.shape_28.setTransform(77.375,79.575);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("rgba(0,0,0,0.902)").s().p("AhPgNIALgKIAoAnIAsgsIgngoIALgLIBbBcIgKALIgtgrIgsAsIAsAsIgKALg");
	this.shape_29.setTransform(69.1,89.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("rgba(0,0,0,0.902)").s().p("AABBCIgBgOQAKAAALgDQAJgEAIgHQAJgKABgKQABgKgHgHQgFgEgFgBQgFgBgFABIgNAEIgSAIQgMAEgLAAQgKAAgKgKQgHgGgCgJQgCgJAEgJQAEgKAIgIQAIgIAKgEQAKgEAKAAIABANQgSAAgMAMQgJAIgBAJQgBAJAHAHQAEAEAGABQAFAAAEgBIAMgEIATgHQANgGALABQAKAAAKAKQAHAHACAJQADAKgEAKQgEALgJAJQgKAKgMAEQgLAFgLAAIgCAAg");
	this.shape_30.setTransform(61.0157,97.8245);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("rgba(0,0,0,0.902)").s().p("AhPgOIAKgLIAwAwIABgBIgIhXIAMgMIAGBBIBaAWIgMANIhNgWIADAkIAdAfIgKAKg");
	this.shape_31.setTransform(58.675,63.15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("rgba(0,0,0,0.902)").s().p("AAOA4QgTgFgXgXQgWgWgFgTQgEgTANgOQANgNAUAFQASAEAXAXQAWAWAFATQAFAUgNANQgKAKgOAAIgJgBgAglglQgJAJAFAOQAEAOATASQATAUAOAEQAPAGAJgJQAIgJgFgPQgFgOgTgSQgTgUgNgEIgJgCQgIAAgGAGg");
	this.shape_32.setTransform(50.6516,71.1984);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("rgba(0,0,0,0.902)").s().p("AAGA0IAVgVIhEhDIgQAQIgHgHQAKgNADgLIAIgIIBQBQIATgTIAJAJIgyAxg");
	this.shape_33.setTransform(44.525,78.85);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("rgba(0,0,0,0.906)").s().p("AhCAuIAAgOIBNAAQAXAAAKgIQAKgKAAgOQAAgNgKgKQgKgIgXAAIhNAAIAAgOIBNAAQAdgBAOANQANANAAAUQAAAWgNAMQgOAMgdAAg");
	this.shape_34.setTransform(-22.45,273.65);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("rgba(0,0,0,0.906)").s().p("AhBAvIAAgPIA4AAIAAg+Ig4AAIAAgQICDAAIAAAQIg/AAIAAA+IA/AAIAAAPg");
	this.shape_35.setTransform(-22.575,286.55);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("rgba(0,0,0,0.906)").s().p("AAmAkQAIgIAFgJQAEgKAAgJQAAgOgGgHQgGgIgLAAQgGAAgFADQgEADgDAEIgGAMIgIASQgEAMgIAIQgIAHgNAAQgKAAgHgFQgIgFgFgKQgEgJAAgKQAAgMAEgKQAFgKAHgHIAKAIQgNAOAAARQAAAKAGAHQAFAHAJAAQAHAAAEgDIAGgHIAGgMIAIgSQAFgNAIgHQAIgHANAAQALAAAIAFQAJAGAEAKQAFAKAAANQAAANgFALQgFAMgJAJg");
	this.shape_36.setTransform(-22.575,298.275);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("rgba(0,0,0,0.906)").s().p("AgwAeQgRgLAAgTQAAgSARgLQARgKAfAAQAfAAASAKQARALAAASQAAATgRALQgSAKgfAAQgfAAgRgKgAgogSQgNAHAAALQAAAMANAHQANAHAbAAQAbAAAOgHQANgHAAgMQAAgLgNgHQgOgHgbAAQgbAAgNAHg");
	this.shape_37.setTransform(-48.525,285.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("rgba(0,0,0,0.902)").s().p("Ag3A4QgPgPAAgRQAAgTAVgUIA1g3IAMAKIg2A4QgQAPgBANQgBANAKAKQALALANgBQANgBAQgRIA2g2IAKAKIg2A2QgUAVgTABQgSAAgPgPg");
	this.shape_38.setTransform(558.4,93.625);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("rgba(0,0,0,0.902)").s().p("AgWBFIArgtIgtgrIgsAsIgKgLIBbhcIAKAKIgmAoIAtArIAngnIAKALIhbBcg");
	this.shape_39.setTransform(548.375,85.375);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("rgba(0,0,0,0.902)").s().p("AgaA8QgKgEgKgJQgJgKgFgLQgFgMAAgNIAOgBQAAALADAJQAEALAIAHQAJAJAKABQAKABAHgHQAEgFABgFQABgFgCgFIgEgNIgGgSQgFgMAAgLQAAgLAJgJQAGgHAJgCQAJgCAKAEQAKADAIAIQAIAIAEAKQAEAKAAAKIgNABQAAgSgNgMQgIgIgIgBQgJgBgHAHQgEAEgBAGQgBAFACAEIAEAMIAHATQAGANgBAKQAAALgKAKQgHAHgJACIgIABQgGAAgGgCg");
	this.shape_40.setTransform(540.025,77.3657);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("rgba(0,0,0,0.902)").s().p("AgRBKIA1g2QAIgIATgQIAAgBIgcANIhDAhIgHgHIAehEIAOgdIgBAAIgEADIgUAZIg2A1IgJgJIBbhcIAMAMIgeBFIgNAaIABABIAKgGIAOgIIBFggIAOANIhcBcg");
	this.shape_41.setTransform(570.75,70.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("rgba(0,0,0,0.902)").s().p("Ag8APIAJgIIAVAVIBDhFIgRgRIAHgGQANAKANADIAHAHIhQBSIAUATIgJAIg");
	this.shape_42.setTransform(561.35,63.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("rgba(0,0,0,0.902)").s().p("Ag3A4QgPgPAAgRQAAgTAVgUIA1g3IAMAKIg2A4QgQAPgBANQgBANAKAKQALALANgBQANgBAQgRIA2g2IAKAKIg2A2QgUAVgTABQgSAAgPgPg");
	this.shape_43.setTransform(558.4,93.625);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("rgba(0,0,0,0.902)").s().p("AgWBFIArgtIgtgrIgsAsIgKgLIBbhcIAKAKIgmAoIAtArIAngnIAKALIhbBcg");
	this.shape_44.setTransform(548.375,85.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("rgba(0,0,0,0.902)").s().p("AgaA8QgKgEgKgJQgJgKgFgLQgFgMAAgNIAOgBQAAALADAJQAEALAIAHQAJAJAKABQAKABAHgHQAEgFABgFQABgFgCgFIgEgNIgGgSQgFgMAAgLQAAgLAJgJQAGgHAJgCQAJgCAKAEQAKADAIAIQAIAIAEAKQAEAKAAAKIgNABQAAgSgNgMQgIgIgIgBQgJgBgHAHQgEAEgBAGQgBAFACAEIAEAMIAHATQAGANgBAKQAAALgKAKQgHAHgJACIgIABQgGAAgGgCg");
	this.shape_45.setTransform(540.025,77.3657);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("rgba(0,0,0,0.902)").s().p("AgRBKIA1g2QAIgIATgQIAAgBIgcANIhDAhIgHgHIAehEIAOgdIgBAAIgEADIgUAZIg2A1IgJgJIBbhcIAMAMIgeBFIgNAaIABABIAKgGIAOgIIBFggIAOANIhcBcg");
	this.shape_46.setTransform(570.75,70.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("rgba(0,0,0,0.902)").s().p("Ag8APIAJgIIAVAVIBDhFIgRgRIAHgGQANAKANADIAHAHIhQBSIAUATIgJAIg");
	this.shape_47.setTransform(561.35,63.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},1).to({state:[{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]},1).wait(1));

	// Text
	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("rgba(255,255,255,0.906)").s().p("Ah0AbIBKgWIhKgfIAAg0ICMA/IBdgcIAAAyIjpBIg");
	this.shape_48.setTransform(21.375,250.475);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("rgba(255,255,255,0.906)").s().p("AAZBZIAUhIIiTAkIAOg1IA7gNIgugiIAOg0IBZBIIBLgTIgOA0IgZBeg");
	this.shape_49.setTransform(23.125,234.625);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("rgba(255,255,255,0.906)").s().p("AgiBDIgRgOIARgsICYA8IgUAygAh1AeIA6iUIAgAOIAgAPQAqAUATAcQAUAdgRAsIgogLQAGgSgIgLQgGgLgWgKIgqgUIglBeg");
	this.shape_50.setTransform(29.75,218.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("rgba(255,255,255,0.906)").s().p("AAhBmIAKgtIiJgYIAWgxIB8AYQgBgLgIgIQgIgJgNgHQgNgHgVgKIgpgRIAWgxQA0AWAaAQQAbAQANAbQANAbgJAqIgQBHg");
	this.shape_51.setTransform(34.6134,200.75);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("rgba(255,255,255,0.906)").s().p("AgtAhIg/gIIAcgwIAiAHQgNgPgCgOQgBgPAIgOQARgeAcgDQAcgDAnAXQAkAVALAdQALAegTAeQgGALgLAMIghgYQAHgHAEgHQAJgPgHgMQgHgMgVgMQgWgMgMgBQgOAAgHANQgFAJABAJQACAJAIAHIBYBGIgbAvg");
	this.shape_52.setTransform(42.8051,185.0324);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("rgba(255,255,255,0.902)").s().p("AhYANIB9g5IAegSIAWAxIgeASIh9A6g");
	this.shape_53.setTransform(579.6,199.225);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("rgba(255,255,255,0.906)").s().p("AhagLIAkgQIAQAjIBIgfQAHgEACgEQADgFgDgFIgGgWIAngKIANAqQAFASgIAOQgJAPgUAIIhtAyg");
	this.shape_54.setTransform(583.008,209.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("rgba(255,255,255,0.906)").s().p("Ag2A/IgthMIgFgKICVhXIAcAvIAYAqQAMAVgFASQgFAUgZAOIhlA7gAgqADIAXAoIBEgoQAMgFgHgMIgQgcg");
	this.shape_55.setTransform(571.8235,185.975);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("rgba(255,255,255,0.906)").s().p("AhGAtIBygjQANgEgEgMIgYhOIAmgNIAdBfQAHAVgJASQgJARgcAJIhvAigAhjgwIBPgYIAVABIANAtIhhAeg");
	this.shape_56.setTransform(588.5531,224.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("rgba(255,255,255,0.906)").s().p("Ag7gJIBIgSIAigMIANA0IghAMIgtALIgTAEg");
	this.shape_57.setTransform(594.45,237.875);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("rgba(255,255,255,0.906)").s().p("AhNAMIAagJQgNgFgKgJQgKgJgIgPIAngbQAKAVALAMQAMANAOAEIAsgIQAIgBADgDQADgEgBgHIgBgSIAoAAIACApQACAlgpAHIg2AKIhEAUg");
	this.shape_58.setTransform(593.8047,249.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("rgba(255,255,255,0.906)").s().p("AhYBSIAhiuIA0AQIgZB+QAVAEAKgEQAMgDAGgJQAGgJAEgOIADgLQAEgJgEgKQgEgJgLgFIgNgFIAQgmIASAHQARAGANALQAMAMAFAQQAFAQgFATIgCAIQgOA0gsANQgSAFgVAAQghAAgrgLg");
	this.shape_59.setTransform(407.4441,37.535);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("rgba(255,255,255,0.906)").s().p("AgKBXIA1hqQAGgMgMgHIhJgkIASgkIBXAsQAVALAHASQAHATgNAZIg1BpgAhiArIAlhJIAQgOIAqAVIguBbg");
	this.shape_60.setTransform(422.8475,46.15);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("rgba(255,255,255,0.906)").s().p("Ag9BDIA9h8IANggIAxAXIgNAiIg9B7g");
	this.shape_61.setTransform(435.175,52.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("rgba(255,255,255,0.906)").s().p("AhYBYIBuhaIhIgpIAohHIAqAYIgVAkIBOAsIgWAmIhrBXg");
	this.shape_62.setTransform(446.525,55.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("rgba(255,255,255,0.906)").s().p("AgIghQgHgNgKgFQgKgGgMAHIgPAJIAFAPQAGAKAFAEQAFAEAHgEIAJAfQgaAPgQgDQgRgEgKgQQgEgHgDgIIgQg0IA/glQAcgQAZALQAXAKASAfIBOCGIgvAbg");
	this.shape_63.setTransform(172.375,56.292);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("rgba(255,255,255,0.906)").s().p("AgdgHIgRggIAxgVIARAfIATAqIAIASIguAeg");
	this.shape_64.setTransform(180.075,46.925);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("rgba(255,255,255,0.906)").s().p("AgCgbQgFgNgNAFIg4AXIgQglIBIgdQAVgJATAIQATAIAKAbIAsBrIg0AUg");
	this.shape_65.setTransform(192.05,44.3545);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("rgba(255,255,255,0.906)").s().p("AheglIgIgZIBigiQAWgIASAIQATAJAJAbIAnBtIgzASIgphwQgEgNgMAFIggALIAsB9IgzASg");
	this.shape_66.setTransform(208.3,39.725);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48}]}).wait(9));

	// Pointer
	this.instance = new lib.pointer();
	this.instance.setTransform(317.7,277.35,0.2055,0.2055,164.3491,0,0,44.5,77.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({rotation:185.06},0).wait(1).to({regX:44.3,regY:77.5,rotation:234.5578,y:277.4},0).wait(1).to({regX:44.5,regY:77.7,rotation:295.9107,x:317.65,y:277.35},0).wait(1).to({regX:44.4,regY:77.3,rotation:355.094,y:277.3},0).wait(1).to({regX:44.5,regY:77.4,rotation:185.06,x:317.7,y:277.35},0).wait(1).to({regX:44.3,regY:77.5,rotation:234.5578,y:277.4},0).wait(1).to({regX:44.5,regY:77.7,rotation:295.9107,x:317.65,y:277.35},0).wait(1).to({regX:44.4,regY:77.3,rotation:355.094,y:277.3},0).wait(1));

	// Fire
	this.instance_1 = new lib.fireMild();
	this.instance_1.setTransform(138,254.85,0.4324,0.4324,-74.9953,0,0,86.7,126.5);

	this.instance_2 = new lib.fireHot();
	this.instance_2.setTransform(376.2,147.3,0.3363,0.3363,14.9991,0,0,113.1,165.3);

	this.instance_3 = new lib.fireHell();
	this.instance_3.setTransform(478.45,250.9,0.3316,0.3316,59.9997,0,0,113.7,166.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("rgba(182,137,0,0.957)").s().p("Ak0FUIgCgEIgYgpIgCgEIgPgaQgwi+BOidQAxhjgEhxQgDhhhQhJQgWgVgYgSQDagiCeDAIACADIAYAqIACADIABAEQAwCDgRBwIAYApIACAEQAzAsBFgRIACABIAmgVIADgCQAtgzgOhCIgBgEIABgCQgJgcgQgMIgCgDQgQgSgQgTQBLAWA9BLIACADQAKARAMAQIACgBQAZAyAMArQAMAvADAqQAODajvCVIgCgEQgIgUgLgEQgggpgngSQhsgyhfhsIgCgDIgfg1IgGgLIgEgIQgYBJAYBcIAKATIADAEIgEACQASAgAUAfIACgBIADADQAxA6AoAmIAAAAIgDAAQinAAh6ipgAheHdQgJgUgWgbIgDgEIgCgDIgjg8IgCgEIgJgPQgqidAziEIADgDQANBAAiBFIACAEQALASAMASIADgBQBPBeBdAmQA6AXAuBBQENi7h0kiIgCgFIACgBQgLgdgRgPIgCgDQgQgcgVgLQAMAlgIAfQgIAhgaAYQhrBfhhhRQg3hWAQhFQAQhGg1hUQh7i+iyADQASASAQAXIACAEIAYApIACAEQAzCPgvB1QgHASgIAPQhSCdAkC7IAPAaIACAEIgDACQATAhAVAhIACgBQBQBpBlAcIACACIAAAAg");
	this.shape_67.setTransform(242.2887,152.5263);

	this.instance_4 = new lib.fireWhite();
	this.instance_4.setTransform(138.55,254,0.4069,0.4069,-74.9985,0,0,93.4,137.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_67},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{x:138,y:254.85}}]}).to({state:[{t:this.shape_67},{t:this.instance_3},{t:this.instance_2},{t:this.instance_4,p:{regX:93.4,regY:137.1,scaleX:0.4069,scaleY:0.4069,rotation:-74.9985,x:138.55,y:254}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{x:138.25,y:255.15}},{t:this.instance_4,p:{regX:93.6,regY:137.8,scaleX:0.4068,scaleY:0.4068,rotation:-27.854,x:235.45,y:149.2}}]},1).to({state:[{t:this.shape_67},{t:this.instance_3},{t:this.instance_1,p:{x:138.25,y:255.15}},{t:this.instance_4,p:{regX:93.5,regY:137.3,scaleX:0.4068,scaleY:0.4068,rotation:13.06,x:375.75,y:147.4}}]},1).to({state:[{t:this.shape_67},{t:this.instance_2},{t:this.instance_1,p:{x:138.25,y:255.15}},{t:this.instance_4,p:{regX:93.4,regY:137.1,scaleX:0.4069,scaleY:0.4069,rotation:60.0022,x:478.75,y:250.6}}]},1).to({state:[{t:this.shape_67},{t:this.instance_3},{t:this.instance_2},{t:this.instance_4,p:{regX:93.4,regY:137.1,scaleX:0.4069,scaleY:0.4069,rotation:-74.9985,x:138.55,y:254}}]},1).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1,p:{x:138.25,y:255.15}},{t:this.instance_4,p:{regX:93.6,regY:137.8,scaleX:0.4068,scaleY:0.4068,rotation:-27.854,x:235.45,y:149.2}}]},1).to({state:[{t:this.shape_67},{t:this.instance_3},{t:this.instance_1,p:{x:138.25,y:255.15}},{t:this.instance_4,p:{regX:93.5,regY:137.3,scaleX:0.4068,scaleY:0.4068,rotation:13.06,x:375.75,y:147.4}}]},1).to({state:[{t:this.shape_67},{t:this.instance_2},{t:this.instance_1,p:{x:138.25,y:255.15}},{t:this.instance_4,p:{regX:93.4,regY:137.1,scaleX:0.4069,scaleY:0.4069,rotation:60.0022,x:478.75,y:250.6}}]},1).wait(1));

	// Scale
	this.instance_5 = new lib.ScaleMild();
	this.instance_5.setTransform(111.05,209.8,1,1,0,0,0,111.3,107.6);

	this.Medium = new lib.ScaleMedium();
	this.Medium.name = "Medium";
	this.Medium.setTransform(198.05,118.95,1,1,0,0,0,110.3,110.2);

	this.instance_6 = new lib.ScaleHell();
	this.instance_6.setTransform(504.95,101.1,1,1,0,0,0,114,0);

	this.instance_7 = new lib.ScaleHot();
	this.instance_7.setTransform(420,117.85,1,1,0,0,0,111.8,109.1);

	this.MildPress = new lib.ScaleMildClick();
	this.MildPress.name = "MildPress";
	this.MildPress.setTransform(111.3,210.1,1,1,0,0,0,111.3,107.6);

	this.instance_8 = new lib.ScaleMedium();
	this.instance_8.setTransform(198.05,118.95,1,1,0,0,0,110.3,110.2);

	this.MediumPress = new lib.ScaleMediumClick();
	this.MediumPress.name = "MediumPress";
	this.MediumPress.setTransform(198.05,118.95,1,1,0,0,0,110.3,110.2);

	this.instance_9 = new lib.ScaleHotClick();
	this.instance_9.setTransform(420,117.85,1,1,0,0,0,111.8,109.1);

	this.instance_10 = new lib.ScaleHellClick();
	this.instance_10.setTransform(504.95,101.1,1,1,0,0,0,114,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.Medium},{t:this.instance_5,p:{x:111.05,y:209.8}}]}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_8},{t:this.MildPress}]},5).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{x:111.3,y:210.1}},{t:this.MediumPress}]},1).to({state:[{t:this.instance_6},{t:this.instance_5,p:{x:111.3,y:210.1}},{t:this.instance_8},{t:this.instance_9}]},1).to({state:[{t:this.instance_7},{t:this.instance_10},{t:this.instance_5,p:{x:111.3,y:210.1}},{t:this.instance_8}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-56.6,750.9,387.8);


(lib.ViperStage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AqgPSIAA+jIVAAAIAAejg");
	this.shape.setTransform(437.15,253.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer_1
	this.instance = new lib.Viper();
	this.instance.setTransform(325,109,0.3105,0.3105);

	this.text = new cjs.Text("נאגה צפע", "normal 400 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(422.55,303.45);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_1 = new lib.ViperGrey();
	this.instance_1.setTransform(313,99,0.8876,0.8876);

	this.instance_2 = new lib.TextBoldViper();
	this.instance_2.setTransform(422.55,321.85,1,1,0,0,0,91.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}},{t:this.instance,p:{scaleX:0.3105,scaleY:0.3105,x:325,y:109}}]}).to({state:[{t:this.text,p:{color:"#666666"}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.4747,scaleY:0.4747,x:289,y:26}},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(289,26,324.79999999999995,325.6);


(lib.ShishtoStage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArfP0IAA/nIW/AAIAAfng");
	this.shape.setTransform(727.775,218.175);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer_1
	this.instance = new lib.Shishito();
	this.instance.setTransform(626,117,0.2801,0.2801);

	this.text = new cjs.Text("שישיטו", "normal 400 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(710.3,294.65);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_1 = new lib.ShishitoGrey();
	this.instance_1.setTransform(625,116,0.7778,0.7778);

	this.instance_2 = new lib.TextBoldShishto();
	this.instance_2.setTransform(710.3,313.05,1,1,0,0,0,91.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}},{t:this.instance,p:{scaleX:0.2801,scaleY:0.2801,x:626,y:117}}]}).to({state:[{t:this.text,p:{color:"#666666"}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.3888,scaleY:0.3888,x:601,y:60}},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(601,60,276.1,298.2);


(lib.ScotchStage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArfP0IAA/nIW/AAIAAfng");
	this.shape.setTransform(93.325,122.375);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer_1
	this.instance = new lib.Scotch();
	this.instance.setTransform(35.7,9,0.2504,0.2504);

	this.text = new cjs.Text("מצנפת סקוטש", "normal 400 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,189.65);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_1 = new lib.ScotchGrey();
	this.instance_1.setTransform(25,-3,0.8297,0.8297);

	this.instance_2 = new lib.TextBoldScotch();
	this.instance_2.setTransform(91.1,208.05,1,1,0,0,0,91.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}},{t:this.instance,p:{scaleX:0.2504,scaleY:0.2504,x:35.7,y:9}}]}).to({state:[{t:this.text,p:{color:"#666666"}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.3217,scaleY:0.3217,x:23,y:-28}},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-28,202.9,256.4);


(lib.ScorpionStage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArfP0IAA/nIW/AAIAAfng");
	this.shape.setTransform(90.275,262.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer_1
	this.instance = new lib.scorpion();
	this.instance.setTransform(10.7,171,0.2664,0.2664);

	this.text = new cjs.Text("מורוגה סקורפיון", "normal 400 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,327.3);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_1 = new lib.scorpionGrey();
	this.instance_1.setTransform(4,164,0.7305,0.7305);

	this.instance_2 = new lib.TextBoldScorpion();
	this.instance_2.setTransform(91.1,345.7,1,1,0,0,0,91.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}},{t:this.instance,p:{scaleX:0.2664,scaleY:0.2664,x:10.7,y:171}}]}).to({state:[{t:this.text,p:{color:"#666666"}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.4279,scaleY:0.4279,x:-43,y:95}},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43,95,270.9,271.1);


(lib.PadronStage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArfP0IAA/nIW/AAIAAfng");
	this.shape.setTransform(143.725,400.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer_1
	this.instance = new lib.Padrón();
	this.instance.setTransform(0,249,0.3284,0.3284);

	this.text = new cjs.Text("פדרון", "normal 400 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(126.25,469.65);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_1 = new lib.PadrónGrey();
	this.instance_1.setTransform(-1,249,0.7401,0.7401);

	this.instance_2 = new lib.TextBoldPaderon();
	this.instance_2.setTransform(126.25,488.05,1,1,0,0,0,91.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}},{t:this.instance,p:{scaleX:0.3284,scaleY:0.3284,x:0,y:249}}]}).to({state:[{t:this.text,p:{color:"#666666"}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.4135,scaleY:0.4135,x:-19,y:200}},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19,200,318.8,317.6);


(lib.MorichStage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArfP0IAA/nIW/AAIAAfng");
	this.shape.setTransform(91.475,247.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer_1
	this.instance = new lib.Morich();
	this.instance.setTransform(70.2,145.85,0.2875,0.2875,14.9937);

	this.text = new cjs.Text("נאגה מוריץ", "normal 400 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,312.35);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_1 = new lib.MorichGrey();
	this.instance_1.setTransform(-14,159.65,0.8415,0.8415,-14.9988);

	this.instance_2 = new lib.TextBoldMorich();
	this.instance_2.setTransform(91.1,330.75,1,1,0,0,0,91.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}},{t:this.instance,p:{scaleX:0.2875,scaleY:0.2875,rotation:14.9937,x:70.2,y:145.85}}]}).to({state:[{t:this.text,p:{color:"#666666"}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.3851,scaleY:0.3851,rotation:14.9909,x:61.75,y:105.1}},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14,105.1,227.5,246.00000000000003);


(lib.JalapenoStage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArfP0IAA/nIW/AAIAAfng");
	this.shape.setTransform(113.075,109.275);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer_1
	this.instance = new lib.Jalapeño();
	this.instance.setTransform(49.45,2,0.3078,0.3078);

	this.text = new cjs.Text("חלפיניו", "normal 400 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,174.65);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_1 = new lib.JalapeñoGrey();
	this.instance_1.setTransform(47,0,0.7337,0.7337);

	this.instance_2 = new lib.TextBoldJalapeno();
	this.instance_2.setTransform(91.1,193.05,1,1,0,0,0,91.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}},{t:this.instance,p:{scaleX:0.3078,scaleY:0.3078,x:49.45,y:2}}]}).to({state:[{t:this.text,p:{color:"#666666"}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.4543,scaleY:0.4543,x:47,y:-65}},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-65,264.6,278.4);


(lib.HabaneroStage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArfP0IAA/nIW/AAIAAfng");
	this.shape.setTransform(90.275,146.625);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer_1
	this.instance = new lib.Habanero();
	this.instance.setTransform(30.5,36.3,0.2812,0.2812);

	this.text = new cjs.Text("הבאנרו", "normal 400 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(91.1,212.95);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_1 = new lib.HabaneroGrey();
	this.instance_1.setTransform(9.65,42.6,0.7583,0.7583,-7.6933);

	this.instance_2 = new lib.TextBoldHabanero();
	this.instance_2.setTransform(91.1,231.35,1,1,0,0,0,91.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}},{t:this.instance,p:{scaleX:0.2812,scaleY:0.2812,x:30.5,y:36.3}}]}).to({state:[{t:this.text,p:{color:"#666666"}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.4284,scaleY:0.4284,x:0,y:-42}},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-42,243.4,293.7);


(lib.CrolinaStage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArfP0IAA/nIW/AAIAAfng");
	this.shape.setTransform(477.725,277.725);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer_1
	this.instance = new lib.Carolina();
	this.instance.setTransform(387,163,0.325,0.325);

	this.text = new cjs.Text("קרולינה ריפר", "normal 400 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(469.4,344.3);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_1 = new lib.CarolinaGrey();
	this.instance_1.setTransform(378,151,0.8533,0.8533);

	this.instance_2 = new lib.TextBoldCrolina();
	this.instance_2.setTransform(469.4,362.7,1,1,0,0,0,91.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}},{t:this.instance,p:{scaleX:0.325,scaleY:0.325,x:387,y:163}}]}).to({state:[{t:this.text,p:{color:"#666666"}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.453,scaleY:0.453,x:367,y:109}},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(367,109,262.79999999999995,275.4);


(lib.CayenneStage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArfP0IAA/nIW/AAIAAfng");
	this.shape.setTransform(103.175,119.925);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer_1
	this.instance = new lib.Cayenne();
	this.instance.setTransform(0,45.2,0.304,0.304,-14.9983);

	this.text = new cjs.Text("קאיין", "normal 400 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(99.65,183.5);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_1 = new lib.CayenneGrey();
	this.instance_1.setTransform(-3.45,44.65,0.7806,0.7806,-14.9992);

	this.instance_2 = new lib.TextBoldCayenne();
	this.instance_2.setTransform(99.65,201.9,1,1,0,0,0,91.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}},{t:this.instance,p:{scaleX:0.304,scaleY:0.304,rotation:-14.9983,x:0,y:45.2}}]}).to({state:[{t:this.text,p:{color:"#666666"}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.4506,scaleY:0.4506,rotation:-14.9954,x:-31.85,y:-5.55}},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.8,-71.9,305.8,294.20000000000005);


(lib.BirdsEyeStage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArfP0IAA/nIW/AAIAAfng");
	this.shape.setTransform(397.175,234.825);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer_1
	this.instance = new lib.BirdsEye();
	this.instance.setTransform(323.55,165.8,0.239,0.239,-14.9979);

	this.text = new cjs.Text("עין הציפור", "normal 400 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(391.1,299);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_1 = new lib.BirdsEyeGrey();
	this.instance_1.setTransform(319.8,163.35,0.8014,0.8014,-14.9988);

	this.instance_2 = new lib.TextBoldBirdsEye();
	this.instance_2.setTransform(391.1,317.4,1,1,0,0,0,91.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}},{t:this.instance,p:{scaleX:0.239,scaleY:0.239,rotation:-14.9979,x:323.55,y:165.8}}]}).to({state:[{t:this.text,p:{color:"#666666"}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.3647,scaleY:0.3647,rotation:-14.9961,x:289.5,y:114}},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(289.5,51,292.70000000000005,286.8);


(lib.BananaStage = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(1));

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("ArfP0IAA/nIW/AAIAAfng");
	this.shape.setTransform(531.625,155.075);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3));

	// Layer_1
	this.instance = new lib.Banana();
	this.instance.setTransform(458,41,0.3225,0.3225);

	this.text = new cjs.Text("שיפקה", "normal 400 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 30;
	this.text.lineWidth = 178;
	this.text.parent = this;
	this.text.setTransform(513.7,220.45);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.instance_1 = new lib.BananaGrey();
	this.instance_1.setTransform(453,35,0.7765,0.7765);

	this.instance_2 = new lib.TextBoldBanana();
	this.instance_2.setTransform(513.7,238.85,1,1,0,0,0,91.1,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text,p:{color:"#000000"}},{t:this.instance,p:{scaleX:0.3225,scaleY:0.3225,x:458,y:41}}]}).to({state:[{t:this.text,p:{color:"#666666"}},{t:this.instance_1}]},1).to({state:[{t:this.instance,p:{scaleX:0.4466,scaleY:0.4466,x:443,y:-17}},{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(422.6,-17,275,276.2);


// stage content:
(lib.HotPeppers = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var self = this;
		// קוד הפרוייקט
		
		stage.enableMouseOver(24); //בדיקת אירועי עכבר
		self.Tabs.visible = false; //הסתרת הכרטיסיות
		
		var status = "clear";
		addEventListenerMouse();
		
		
		//הפעלת ליסנרים של מעבר ויציאת עכבר של פלפלים ומד סקוביל
		function addEventListenerMouse() {
			addEventListenerClick();
		
			//ליסנרים לפלפל במעבר עכבר
			self.Scotch.addEventListener("mouseover", MOkScotch);
			self.Jalapeno.addEventListener("mouseover", MOJalapeno);
			self.Habanero.addEventListener("mouseover", MOHabanero);
			self.Padron.addEventListener("mouseover", MOPadron);
			self.Cayenne.addEventListener("mouseover", MOCayenne);
			self.Shishito.addEventListener("mouseover", MOShishito);
			self.Banana.addEventListener("mouseover", MOBanana);
			self.Viper.addEventListener("mouseover", MOViper);
			self.scorpion.addEventListener("mouseover", MOscorpion);
			self.Morich.addEventListener("mouseover", MOMorich);
			self.Carolina.addEventListener("mouseover", MOCarolina);
			self.BirdsEye.addEventListener("mouseover", MOBirdsEye);
		
			//ליסנרים לפלפלים ביציאה ממעבר עבר
			self.Scotch.addEventListener("mouseout", MOUTkScotch);
			self.Jalapeno.addEventListener("mouseout", MOUTJalapeno);
			self.Habanero.addEventListener("mouseout", MOUTHabanero);
			self.Padron.addEventListener("mouseout", MOUTPadron);
			self.Cayenne.addEventListener("mouseout", MOUTCayenne);
			self.Shishito.addEventListener("mouseout", MOUTShishito);
			self.Banana.addEventListener("mouseout", MOUTBanana);
			self.Viper.addEventListener("mouseout", MOUTViper);
			self.scorpion.addEventListener("mouseout", MOUTscorpion);
			self.Morich.addEventListener("mouseout", MOUTMorich);
			self.Carolina.addEventListener("mouseout", MOUTCarolina);
			self.BirdsEye.addEventListener("mouseout", MOUTBirdsEye);
		
			//ליסנרים למעבר עכבר על מד החריפות
			self.MildArea.addEventListener("mouseover", MOMild);
			self.MediumArea.addEventListener("mouseover", MOMedium);
			self.HotArea.addEventListener("mouseover", MOHot);
			self.HellArea.addEventListener("mouseover", MOHell);
		
			//ליסנרים ליציאה ממעבר עכבר על מד החריפות
			self.MildArea.addEventListener("mouseout", MOUTMild);
			self.MediumArea.addEventListener("mouseout", MOUTMedium);
			self.HotArea.addEventListener("mouseout", MOUTHot);
			self.HellArea.addEventListener("mouseout", MOUTHell);
		
			self.Scotch.mouseEnabled = true;
			self.Jalapeno.mouseEnabled = true;
			self.Habanero.mouseEnabled = true;
			self.Padron.mouseEnabled = true;
			self.Cayenne.mouseEnabled = true;
			self.Shishito.mouseEnabled = true;
			self.Banana.mouseEnabled = true;
			self.Viper.mouseEnabled = true;
			self.scorpion.mouseEnabled = true;
			self.Morich.mouseEnabled = true;
			self.Carolina.mouseEnabled = true;
			self.BirdsEye.mouseEnabled = true;
		
			self.MildArea.mouseEnabled = true;
			self.MediumArea.mouseEnabled = true;
			self.HotArea.mouseEnabled = true;
			self.HellArea.mouseEnabled = true;
		
			self.Scotch.cursor = "pointer";
			self.Jalapeno.cursor = "pointer";
			self.Habanero.cursor = "pointer";
			self.Padron.cursor = "pointer";
			self.Cayenne.cursor = "pointer";
			self.Shishito.cursor = "pointer";
			self.Banana.cursor = "pointer";
			self.Viper.cursor = "pointer";
			self.scorpion.cursor = "pointer";
			self.Morich.cursor = "pointer";
			self.Carolina.cursor = "pointer";
			self.BirdsEye.cursor = "pointer";
		
			self.MildArea.cursor = "pointer";
			self.MediumArea.cursor = "pointer";
			self.HotArea.cursor = "pointer";
			self.HellArea.cursor = "pointer";
		
		}
		
		//הפעלת ליסנרים בלחיצה על פלפלים ומד סקוביל
		function addEventListenerClick() {
			//ליסנרים לפלפל בעת לחיצה
			self.Scotch.addEventListener("click", clickScotch);
			self.Jalapeno.addEventListener("click", clickJalapeno);
			self.Habanero.addEventListener("click", clickHabanero);
			self.Padron.addEventListener("click", clickPadron);
			self.Cayenne.addEventListener("click", clickCayenne);
			self.Shishito.addEventListener("click", clickShishito);
			self.Banana.addEventListener("click", clickBanana);
			self.Viper.addEventListener("click", clickViper);
			self.scorpion.addEventListener("click", clickscorpion);
			self.Morich.addEventListener("click", clickMorich);
			self.Carolina.addEventListener("click", clickCarolina);
			self.BirdsEye.addEventListener("click", clickBirdsEye);
		
			//ליסנרים ללחיצה על מד החריפות
			self.MildArea.addEventListener("click", MildClick);
			self.MediumArea.addEventListener("click", MediumClick);
			self.HotArea.addEventListener("click", HotClick);
			self.HellArea.addEventListener("click", HellClick);
		
		}
		
		
		//ליסנרים של כפתורים נוספים על המסך
		self.AboutUs.addEventListener("click", clickAboutUs);
		self.Information.addEventListener("click", clickInformation);
		self.AboutUs.addEventListener("mouseover", MOAboutUs);
		self.Information.addEventListener("mouseover", MOInformation);
		self.AboutUs.addEventListener("mouseout", MOUTAboutUs);
		self.Information.addEventListener("mouseout", MOUTInformation);
		
		//ליסנרים של כפתור בועית
		self.Tabs.InfoIcon.addEventListener("mouseover", MOInfoIcon);
		self.Tabs.InfoIcon.addEventListener("mouseout", MOUTInfoIcon);
		
		
		//ליסנרים עבור יציאה מהכרטיסיה- איקס
		self.Tabs.TabMild.XMild.addEventListener("click", clickXMild);
		self.Tabs.TabMedium.XMedium.addEventListener("click", clickXMedium);
		self.Tabs.TabHot.XHot.addEventListener("click", clickXHot);
		self.Tabs.TabHell.XHell.addEventListener("click", clickXHell);
		self.Tabs.AboutUs.XMore.addEventListener("click", clickXAboutUs);
		
		self.Tabs.TabMild.XMild.addEventListener("mouseover", MOXMild);
		self.Tabs.TabMedium.XMedium.addEventListener("mouseover", MOXMedium);
		self.Tabs.TabHot.XHot.addEventListener("mouseover", MOXHot);
		self.Tabs.TabHell.XHell.addEventListener("mouseover", MOXHell);
		self.Tabs.AboutUs.XMore.addEventListener("mouseover", MOXAboutUs);
		
		self.Tabs.TabMild.XMild.addEventListener("mouseout", MOUTXMild);
		self.Tabs.TabMedium.XMedium.addEventListener("mouseout", MOUTXMedium);
		self.Tabs.TabHot.XHot.addEventListener("mouseout", MOUTXHot);
		self.Tabs.TabHell.XHell.addEventListener("mouseout", MOUTXHell);
		self.Tabs.AboutUs.XMore.addEventListener("mouseout", MOUTXAboutUs);
		
		
		//ליסנר קליק על קישור לאתר HIT
		self.Tabs.HitSymbol.addEventListener("click", goURLhit);
		self.Tabs.telem.addEventListener("click",goURLtelem);
		self.Tabs.telem.addEventListener("mouseover", MOURLtelem);
		self.Tabs.telem.addEventListener("mouseout", MOUTURLtelem);
		self.Tabs.HitSymbol.addEventListener("mouseover", MOURL);
		self.Tabs.HitSymbol.addEventListener("mouseout", MOUTURL);
		
		//פונקציה לקישור לאתר HIT
		function goURLtelem(){
		    window.open("https://www.hit.ac.il/telem/overview");
		    }
		function goURLhit(){
		    window.open("https://www.hit.ac.il");
		    }
		function MOURL()
			{
				self.Tabs.HitSymbol.cursor = "pointer";
				self.Tabs.HitSymbol.alpha = 0.6;
			}
		function MOUTURL()
			{
				self.Tabs.HitSymbol.alpha = 1;
			}
			function MOURLtelem()
			{
				self.Tabs.telem.cursor = "pointer";
				self.Tabs.telem.alpha = 0.6;
			}
		function MOUTURLtelem()
			{
				self.Tabs.telem.alpha = 1;
			}
		
		function disableAll() //נטרול קליקים ומעברי עכבר
		{
			self.Scotch.removeEventListener("click", clickScotch);
			self.Jalapeno.removeEventListener("click", clickJalapeno);
			self.Habanero.removeEventListener("click", clickHabanero);
			self.Padron.removeEventListener("click", clickPadron);
			self.Cayenne.removeEventListener("click", clickCayenne);
			self.Shishito.removeEventListener("click", clickShishito);
			self.Banana.removeEventListener("click", clickBanana);
			self.Viper.removeEventListener("click", clickViper);
			self.scorpion.removeEventListener("click", clickscorpion);
			self.Morich.removeEventListener("click", clickMorich);
			self.Carolina.removeEventListener("click", clickCarolina);
			self.BirdsEye.removeEventListener("click", clickBirdsEye);
		
			self.Scotch.removeEventListener("mouseover", MOkScotch);
			self.Jalapeno.removeEventListener("mouseover", MOJalapeno);
			self.Habanero.removeEventListener("mouseover", MOHabanero);
			self.Padron.removeEventListener("mouseover", MOPadron);
			self.Cayenne.removeEventListener("mouseover", MOCayenne);
			self.Shishito.removeEventListener("mouseover", MOShishito);
			self.Banana.removeEventListener("mouseover", MOBanana);
			self.Viper.removeEventListener("mouseover", MOViper);
			self.scorpion.removeEventListener("mouseover", MOscorpion);
			self.Morich.removeEventListener("mouseover", MOMorich);
			self.Carolina.removeEventListener("mouseover", MOCarolina);
			self.BirdsEye.removeEventListener("mouseover", MOBirdsEye);
		
			self.Scotch.removeEventListener("mouseout", MOUTkScotch);
			self.Jalapeno.removeEventListener("mouseout", MOUTJalapeno);
			self.Habanero.removeEventListener("mouseout", MOUTHabanero);
			self.Padron.removeEventListener("mouseout", MOUTPadron);
			self.Cayenne.removeEventListener("mouseout", MOUTCayenne);
			self.Shishito.removeEventListener("mouseout", MOUTShishito);
			self.Banana.removeEventListener("mouseout", MOUTBanana);
			self.Viper.removeEventListener("mouseout", MOUTViper);
			self.scorpion.removeEventListener("mouseout", MOUTscorpion);
			self.Morich.removeEventListener("mouseout", MOUTMorich);
			self.Carolina.removeEventListener("mouseout", MOUTCarolina);
			self.BirdsEye.removeEventListener("mouseout", MOUTBirdsEye);
		
			//ביטול לחצני מד חריפות בעת לחיצה
			self.MildArea.removeEventListener("click", MildClick);
			self.MediumArea.removeEventListener("click", MediumClick);
			self.HotArea.removeEventListener("click", HotClick);
			self.HellArea.removeEventListener("click", HellClick);
		
			//ביטול לחצני מד החריפות בעת מעבר עכבר
			self.MildArea.removeEventListener("mouseover", MOMild);
			self.MediumArea.removeEventListener("mouseover", MOMedium);
			self.HotArea.removeEventListener("mouseover", MOHot);
			self.HellArea.removeEventListener("mouseover", MOHell);
		
			// ביטול לחצני מד חריפות בעת יציאה ממעבר עכבר
			self.MildArea.removeEventListener("mouseout", MOUTMild);
			self.MediumArea.removeEventListener("mouseout", MOUTMedium);
			self.HotArea.removeEventListener("mouseout", MOUTHot);
			self.HellArea.removeEventListener("mouseout", MOUTHell);
		}
		
		//מבטלת אינטרקצית עכבר של פלפלים ושל מד סקוביל
		function removemouseEnabled() {
			self.Scotch.mouseEnabled = false;
			self.Jalapeno.mouseEnabled = false;
			self.Habanero.mouseEnabled = false;
			self.Padron.mouseEnabled = false;
			self.Cayenne.mouseEnabled = false;
			self.Shishito.mouseEnabled = false;
			self.Banana.mouseEnabled = false;
			self.Viper.mouseEnabled = false;
			self.scorpion.mouseEnabled = false;
			self.Morich.mouseEnabled = false;
			self.Carolina.mouseEnabled = false;
			self.BirdsEye.mouseEnabled = false;
		
			self.MildArea.mouseEnabled = false;
			self.MediumArea.mouseEnabled = false;
			self.HotArea.mouseEnabled = false;
			self.HellArea.mouseEnabled = false;
		
			self.AboutUs.mouseEnabled = false;
			self.Information.mouseEnabled = false;
		}
		//פונקציות של כפתורים נלווים
		function clickAboutUs() {
			removemouseEnabled();
			self.Tabs.gotoAndStop(12);
			self.Tabs.visible = true;
			self.Tabs.Bubble.visible = false;
		}
		
		function clickInformation() {
			removemouseEnabled();
			self.Tabs.gotoAndStop(13);
			self.Tabs.visible = true;
			self.Tabs.Bubble.visible = false;
		}
		function MOAboutUs() {
			self.AboutUs.alpha = 0.6;
			self.AboutUs.cursor = "pointer";
		}
		
		function MOInformation() {
			self.Information.alpha = 0.8;
			self.Information.cursor = "pointer";
		
		}
		function MOUTAboutUs() {
			self.AboutUs.alpha = 1;
		}
		
		function MOUTInformation() {
			self.Information.alpha = 1;
		}
		
		//פונקציות של כפתור אינפורמציה
		function MOInfoIcon() {
			self.Tabs.Bubble.visible = true;
		}
		
		function MOUTInfoIcon() {
			self.Tabs.Bubble.visible = false;
		}
		
		function pepperGrey() //פונקצית עזר להפיכת פלפלים לאפור
		{
			self.Scotch.gotoAndStop(1);
			self.Jalapeno.gotoAndStop(1);
			self.Habanero.gotoAndStop(1);
			self.Padron.gotoAndStop(1);
			self.Cayenne.gotoAndStop(1);
			self.Shishito.gotoAndStop(1);
			self.Banana.gotoAndStop(1);
			self.Viper.gotoAndStop(1);
			self.scorpion.gotoAndStop(1);
			self.Morich.gotoAndStop(1);
			self.Carolina.gotoAndStop(1);
			self.BirdsEye.gotoAndStop(1);
		}
		
		function pepperZero() //פונקצית עזר להפיכת פלפלים חזרה למצב סטנדרט
		{
			self.Scotch.gotoAndStop(0);
			self.Jalapeno.gotoAndStop(0);
			self.Habanero.gotoAndStop(0);
			self.Padron.gotoAndStop(0);
			self.Cayenne.gotoAndStop(0);
			self.Shishito.gotoAndStop(0);
			self.Banana.gotoAndStop(0);
			self.Viper.gotoAndStop(0);
			self.scorpion.gotoAndStop(0);
			self.Morich.gotoAndStop(0);
			self.Carolina.gotoAndStop(0);
			self.BirdsEye.gotoAndStop(0);
		}
		
		//פונקציות ללחיצה על פלפל ופתיחת כרטיסייה
		function clickScotch() //בעת לחיצה על פלפל מצנפת
		{
			removemouseEnabled();
			self.Tabs.gotoAndStop(6);
			self.Tabs.visible = true;
			self.Tabs.Bubble.visible = false;
		}
		
		function clickJalapeno() //בעת לחיצה על פלפל חלפיניו
		{
			removemouseEnabled();
			self.Tabs.gotoAndStop(1);
			self.Tabs.visible = true;
			self.Tabs.Bubble.visible = false;
		}
		
		function clickHabanero() //בעת לחיצה על פלפל הבנארו
		{
			removemouseEnabled();
			self.Tabs.gotoAndStop(7);
			self.Tabs.visible = true;
			self.Tabs.Bubble.visible = false;
		}
		
		function clickPadron() //בעת לחיצה על פלפל פדרון
		{
			removemouseEnabled();
			self.Tabs.gotoAndStop(2);
			self.Tabs.visible = true;
			self.Tabs.Bubble.visible = false;
		}
		
		function clickCayenne() //בעת לחיצה על פלפל קאיין
		{
			removemouseEnabled();
			self.Tabs.gotoAndStop(5);
			self.Tabs.visible = true;
			self.Tabs.Bubble.visible = false;
		}
		
		function clickShishito() //בעת לחיצה על פלפל שישיטו
		{
			removemouseEnabled();
			self.Tabs.gotoAndStop(3);
			self.Tabs.visible = true;
			self.Tabs.Bubble.visible = false;
		}
		
		function clickBanana() //בעת לחיצה על פלפל הבננה
		{
			removemouseEnabled();
			self.Tabs.gotoAndStop(0);
			self.Tabs.visible = true;
			self.Tabs.Bubble.visible = false;
		}
		
		function clickViper() //בעת לחיצה על פלפל צפע
		{
			removemouseEnabled();
			self.Tabs.gotoAndStop(10);
			self.Tabs.visible = true;
			self.Tabs.Bubble.visible = false;
		}
		
		function clickscorpion() //בעת לחיצה על פלפל סקורפיון
		{
			removemouseEnabled();
			self.Tabs.gotoAndStop(8);
			self.Tabs.visible = true;
			self.Tabs.Bubble.visible = false;
		}
		
		function clickMorich() //בעת לחיצה על פלפל מוריץ
		{
			removemouseEnabled();
			self.Tabs.gotoAndStop(9);
			self.Tabs.visible = true;
			self.Tabs.Bubble.visible = false;
		}
		
		function clickCarolina() //בעת לחיצה על פלפל קרולינה
		{
			removemouseEnabled();
			self.Tabs.gotoAndStop(11);
			self.Tabs.visible = true;
			self.Tabs.Bubble.visible = false;
		}
		
		function clickBirdsEye() //בעת לחיצה על פלפל עין הציפור
		{
			removemouseEnabled();
			self.Tabs.gotoAndStop(4);
			self.Tabs.visible = true;
			self.Tabs.Bubble.visible = false;
		}
		
		//פונקציות למעבר עכבר על פלפל והגדלתו
		function MOkScotch() //בעת מעבר עכבר על מצנפת
		{
			pepperGrey();
			self.Scotch.gotoAndStop(2);
			self.Scotch.cursor = "pointer";
			self.ScovilleScale.gotoAndStop(3);
		}
		function MOJalapeno() //בעת מעבר עכבר על חלפיניו
		{
			pepperGrey();
			self.Jalapeno.gotoAndStop(2);
			self.Jalapeno.cursor = "pointer";
			self.ScovilleScale.gotoAndStop(1);
		}
		function MOHabanero() //בעת מעבר עכבר על הבאנרו
		{
			pepperGrey();
			self.Habanero.gotoAndStop(2);
			self.Habanero.cursor = "pointer";
			self.ScovilleScale.gotoAndStop(3);
		}
		function MOPadron() //בעת מעבר עכבר על פדרון
		{
			pepperGrey();
			self.Padron.gotoAndStop(2);
			self.Padron.cursor = "pointer";
			self.ScovilleScale.gotoAndStop(1);
		}
		function MOCayenne() //בעת מעבר עכבר על קאיין
		{
			pepperGrey();
			self.Cayenne.gotoAndStop(2);
			self.Cayenne.cursor = "pointer";
			self.ScovilleScale.gotoAndStop(2);
		}
		function MOShishito() //בעת מעבר עכבר על שישיטו
		{
			pepperGrey();
			self.Shishito.gotoAndStop(2);
			self.Shishito.cursor = "pointer";
			self.ScovilleScale.gotoAndStop(1);
		}
		function MOBanana() //בעת מעבר עכבר על שיפקה
		{
			pepperGrey();
			self.Banana.gotoAndStop(2);
			self.Banana.cursor = "pointer";
			self.ScovilleScale.gotoAndStop(1);
		}
		function MOViper() //בעת מעבר עכבר על צפע
		{
			pepperGrey();
			self.Viper.gotoAndStop(2);
			self.Viper.cursor = "pointer";
			self.ScovilleScale.gotoAndStop(4);
		}
		function MOscorpion() //בעת מעבר עכבר על סקורפיון
		{
			pepperGrey();
			self.scorpion.gotoAndStop(2);
			self.scorpion.cursor = "pointer";
			self.ScovilleScale.gotoAndStop(4);
		}
		function MOMorich() //בעת מעבר עכבר על מוריץ
		{
			pepperGrey();
			self.Morich.gotoAndStop(2);
			self.Morich.cursor = "pointer";
			self.ScovilleScale.gotoAndStop(4);
		}
		function MOCarolina() //בעת מעבר עכבר על קרולינה
		{
			pepperGrey();
			self.Carolina.gotoAndStop(2);
			self.Carolina.cursor = "pointer";
			self.ScovilleScale.gotoAndStop(4);
		}
		function MOBirdsEye() //בעת מעבר עכבר על עין הציפור
		{
			pepperGrey();
			self.BirdsEye.gotoAndStop(2);
			self.BirdsEye.cursor = "pointer";
			self.ScovilleScale.gotoAndStop(2);
		}
		
		
		//פונקציה ליציאה ממעבר עכבר על פלפל
		function MOUTkScotch() //ביציאה ממעבר עכבר על פלפל מצנפת
		{
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		function MOUTJalapeno() //ביציאה ממעבר עכבר על פלפל חלפיניו
		{
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		function MOUTHabanero() //ביציאה ממעבר עכבר על פלפל הבנארו
		{
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		function MOUTPadron() //ביציאה ממעבר עכבר על פלפל פדרון
		{
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		function MOUTCayenne() //ביציאה ממעבר עכבר על פלפל קאיין
		{
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		function MOUTShishito() //ביציאה ממעבר עכבר על פלפל שישיטו
		{
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		function MOUTBanana() //ביציאה ממעבר עכבר על פלפל שיפקה
		{
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		function MOUTViper() //ביציאה ממעבר עכבר על פלפל צפע
		{
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		function MOUTscorpion() //ביציאה ממעבר עכבר על פלפל סקורפיון
		{
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		function MOUTMorich() //ביציאה ממעבר עכבר על פלפל מוריץ
		{
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		function MOUTCarolina() //ביציאה ממעבר עכבר על פלפל קרולינה
		{
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		function MOUTBirdsEye() //ביציאה ממעבר עכבר על פלפל עין הציפר
		{
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		
		
		//פונקציה לחיצה על מאפיין מעקצץ
		function MildClick() {
			if (status != "Mild") {
				pepperGrey();
				disableAll();
				addEventListenerClick();
				self.Jalapeno.gotoAndStop(0);
				self.Banana.gotoAndStop(0);
				self.Padron.gotoAndStop(0);
				self.Shishito.gotoAndStop(0);
		
				self.Scotch.mouseEnabled = false;
				self.Habanero.mouseEnabled = false;
				self.BirdsEye.mouseEnabled = false;
				self.Cayenne.mouseEnabled = false;
				self.Viper.mouseEnabled = false;
				self.scorpion.mouseEnabled = false;
				self.Morich.mouseEnabled = false;
				self.Carolina.mouseEnabled = false;
				self.MediumArea.mouseEnabled = false;
				self.HotArea.mouseEnabled = false;
				self.HellArea.mouseEnabled = false;
		
				self.ScovilleScale.gotoAndStop(5);
				status = "Mild";
			} else {
				pepperGrey();
				self.Jalapeno.gotoAndStop(0);
				self.Banana.gotoAndStop(0);
				self.Padron.gotoAndStop(0);
				self.Shishito.gotoAndStop(0);
				status = "clear";
				self.ScovilleScale.gotoAndStop(1);
				addEventListenerMouse();
			}
		}
		
		//פונקציה לחיצה על מאפיין לוהט
		function MediumClick() {
			if (status != "Medium") {
				pepperGrey();
				disableAll();
				addEventListenerClick();
				self.BirdsEye.gotoAndStop(0);
				self.Cayenne.gotoAndStop(0);
		
				self.Scotch.mouseEnabled = false;
				self.Habanero.mouseEnabled = false;
				self.Viper.mouseEnabled = false;
				self.scorpion.mouseEnabled = false;
				self.Morich.mouseEnabled = false;
				self.Carolina.mouseEnabled = false;
				self.Jalapeno.mouseEnabled = false;
				self.Banana.mouseEnabled = false;
				self.Padron.mouseEnabled = false;
				self.Shishito.mouseEnabled = false;
				self.MildArea.mouseEnabled = false;
				self.HotArea.mouseEnabled = false;
				self.HellArea.mouseEnabled = false;
		
				self.ScovilleScale.gotoAndStop(6);
				status = "Medium";
			} else {
				pepperGrey();
				self.BirdsEye.gotoAndStop(0);
				self.Cayenne.gotoAndStop(0);
				status = "clear";
				self.ScovilleScale.gotoAndStop(2);
				addEventListenerMouse();
			}
		}
		
		//פונקציה לחיצה על מאפיין חריף
		function HotClick() {
			if (status != "Hot") {
				pepperGrey();
				disableAll();
				addEventListenerClick();
				self.Scotch.gotoAndStop(0);
				self.Habanero.gotoAndStop(0);
		
				self.Viper.mouseEnabled = false;
				self.scorpion.mouseEnabled = false;
				self.Morich.mouseEnabled = false;
				self.Carolina.mouseEnabled = false;
				self.Jalapeno.mouseEnabled = false;
				self.Banana.mouseEnabled = false;
				self.Padron.mouseEnabled = false;
				self.Shishito.mouseEnabled = false;
				self.BirdsEye.mouseEnabled = false;
				self.Cayenne.mouseEnabled = false;
				self.MildArea.mouseEnabled = false;
				self.MediumArea.mouseEnabled = false;
				self.HellArea.mouseEnabled = false;
		
				self.ScovilleScale.gotoAndStop(7);
				status = "Hot";
			} else {
				pepperGrey();
				self.Scotch.gotoAndStop(0);
				self.Habanero.gotoAndStop(0);
				status = "clear";
				self.ScovilleScale.gotoAndStop(3);
				addEventListenerMouse();
			}
		}
		
		//פונקציה לחיצה על מאפיין גיהנום
		function HellClick() {
			if (status != "Hell") {
				pepperGrey();
				disableAll();
				addEventListenerClick();
				self.Morich.gotoAndStop(0);
				self.Viper.gotoAndStop(0);
				self.Carolina.gotoAndStop(0);
				self.scorpion.gotoAndStop(0);
		
				self.Jalapeno.mouseEnabled = false;
				self.Banana.mouseEnabled = false;
				self.Padron.mouseEnabled = false;
				self.Shishito.mouseEnabled = false;
				self.BirdsEye.mouseEnabled = false;
				self.Cayenne.mouseEnabled = false;
				self.Scotch.mouseEnabled = false;
				self.Habanero.mouseEnabled = false;
				self.MildArea.mouseEnabled = false;
				self.MediumArea.mouseEnabled = false;
				self.HotArea.mouseEnabled = false;
		
				self.ScovilleScale.gotoAndStop(8);
				status = "Hell";
			} else {
				pepperGrey();
				addEventListenerClick();
				self.Morich.gotoAndStop(0);
				self.Viper.gotoAndStop(0);
				self.Carolina.gotoAndStop(0);
				self.scorpion.gotoAndStop(0);
				status = "clear";
				self.ScovilleScale.gotoAndStop(4);
				addEventListenerMouse();
			}
		}
		
		//פונקציה למעבר עכבר על מעקצץ
		function MOMild() {
			pepperGrey();
		
			self.Jalapeno.gotoAndStop(0);
			self.Banana.gotoAndStop(0);
			self.Padron.gotoAndStop(0);
			self.Shishito.gotoAndStop(0);
		
			self.ScovilleScale.gotoAndStop(1);
		}
		
		//פונקציה למעבר עכבר על לוהט
		function MOMedium() {
			pepperGrey();
		
			self.BirdsEye.gotoAndStop(0);
			self.Cayenne.gotoAndStop(0);
		
			self.ScovilleScale.gotoAndStop(2);
		}
		
		//פונקציה למעבר עכבר על חריף
		function MOHot() {
			pepperGrey();
		
			self.Scotch.gotoAndStop(0);
			self.Habanero.gotoAndStop(0);
		
			self.ScovilleScale.gotoAndStop(3);
		}
		
		//פונקציה למעבר עכבר על גיהנום
		function MOHell() {
			pepperGrey();
		
			self.Morich.gotoAndStop(0);
			self.Viper.gotoAndStop(0);
			self.Carolina.gotoAndStop(0);
			self.scorpion.gotoAndStop(0);
		
			self.ScovilleScale.gotoAndStop(4);
		}
		
		//פונקציה ליציאה ממעבר עכבר על מעקצץ
		function MOUTMild() {
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		
		//פונקציה ליציאה ממעבר עכבר על לוהט
		function MOUTMedium() {
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		
		//פונקציה ליציאה ממעבר עכבר על חריף
		function MOUTHot() {
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		
		//פונקציה ליציאה ממעבר עכבר על גיהנום
		function MOUTHell() {
			pepperZero();
			self.ScovilleScale.gotoAndStop(0);
		}
		
		
		//פונקציות לקליק על האיקסים של כל כרטיסייה
		function clickXMild() {
			if (status == "Mild") {
				pepperGrey();
				disableAll();
				addEventListenerClick();
				self.Jalapeno.gotoAndStop(0);
				self.Banana.gotoAndStop(0);
				self.Padron.gotoAndStop(0);
				self.Shishito.gotoAndStop(0);
		
				self.Jalapeno.mouseEnabled = true;
				self.Banana.mouseEnabled = true;
				self.Padron.mouseEnabled = true;
				self.Shishito.mouseEnabled = true;
				self.MildArea.mouseEnabled = true;
				self.AboutUs.mouseEnabled = true;
				self.Information.mouseEnabled = true;
		
		
				self.Scotch.mouseEnabled = false;
				self.Habanero.mouseEnabled = false;
				self.BirdsEye.mouseEnabled = false;
				self.Cayenne.mouseEnabled = false;
				self.Viper.mouseEnabled = false;
				self.scorpion.mouseEnabled = false;
				self.Morich.mouseEnabled = false;
				self.Carolina.mouseEnabled = false;
		
				self.ScovilleScale.gotoAndStop(5);
			} else {
				pepperZero();
				self.ScovilleScale.gotoAndStop(0);
				addEventListenerMouse();
				self.AboutUs.mouseEnabled = true;
				self.Information.mouseEnabled = true;
			}
			self.Tabs.visible = false;
		}
		
		function clickXMedium() {
			self.Tabs.TabMedium.XMedium.cursor = "pointer";
			if (status == "Medium") {
				pepperGrey();
				disableAll();
				addEventListenerClick();
				self.BirdsEye.gotoAndStop(0);
				self.Cayenne.gotoAndStop(0);
		
				self.Cayenne.mouseEnabled = true;
				self.BirdsEye.mouseEnabled = true;
				self.MediumArea.mouseEnabled = true;
				self.AboutUs.mouseEnabled = true;
				self.Information.mouseEnabled = true;
		
				self.Scotch.mouseEnabled = false;
				self.Habanero.mouseEnabled = false;
				self.Viper.mouseEnabled = false;
				self.scorpion.mouseEnabled = false;
				self.Morich.mouseEnabled = false;
				self.Carolina.mouseEnabled = false;
				self.Jalapeno.mouseEnabled = false;
				self.Banana.mouseEnabled = false;
				self.Padron.mouseEnabled = false;
				self.Shishito.mouseEnabled = false;
		
				self.ScovilleScale.gotoAndStop(6);
			} else {
				pepperZero();
				self.ScovilleScale.gotoAndStop(0);
				addEventListenerMouse();
				self.AboutUs.mouseEnabled = true;
				self.Information.mouseEnabled = true;
			}
			self.Tabs.visible = false;
		}
		
		function clickXHot() {
			self.Tabs.TabHot.XHot.cursor = "pointer";
			if (status == "Hot") {
				pepperGrey();
				disableAll();
				addEventListenerClick();
				self.Habanero.gotoAndStop(0);
				self.Scotch.gotoAndStop(0);
		
				self.Habanero.mouseEnabled = true;
				self.Scotch.mouseEnabled = true;
				self.HotArea.mouseEnabled = true;
				self.AboutUs.mouseEnabled = true;
				self.Information.mouseEnabled = true;
		
				self.Viper.mouseEnabled = false;
				self.scorpion.mouseEnabled = false;
				self.Morich.mouseEnabled = false;
				self.Carolina.mouseEnabled = false;
				self.Jalapeno.mouseEnabled = false;
				self.Banana.mouseEnabled = false;
				self.Padron.mouseEnabled = false;
				self.Shishito.mouseEnabled = false;
				self.Cayenne.mouseEnabled = false;
				self.BirdsEye.mouseEnabled = false;
		
				self.ScovilleScale.gotoAndStop(7);
			} else {
				pepperZero();
				self.ScovilleScale.gotoAndStop(0);
				addEventListenerMouse();
				self.AboutUs.mouseEnabled = true;
				self.Information.mouseEnabled = true;
			}
			self.Tabs.visible = false;
		}
		
		
		function clickXHell() {
			self.Tabs.TabHell.XHell.cursor = "pointer";
			if (status == "Hell") {
				pepperGrey();
				disableAll();
				addEventListenerClick();
				self.scorpion.gotoAndStop(0);
				self.Morich.gotoAndStop(0);
				self.Carolina.gotoAndStop(0);
				self.Viper.gotoAndStop(0);
		
				self.scorpion.mouseEnabled = true;
				self.Morich.mouseEnabled = true;
				self.Carolina.mouseEnabled = true;
				self.Viper.mouseEnabled = true;
				self.HellArea.mouseEnabled = true;
				self.AboutUs.mouseEnabled = true;
				self.Information.mouseEnabled = true;
		
				self.Jalapeno.mouseEnabled = false;
				self.Banana.mouseEnabled = false;
				self.Padron.mouseEnabled = false;
				self.Shishito.mouseEnabled = false;
				self.Cayenne.mouseEnabled = false;
				self.BirdsEye.mouseEnabled = false;
				self.Habanero.mouseEnabled = false;
				self.Scotch.mouseEnabled = false;
		
				self.ScovilleScale.gotoAndStop(8);
			} else {
				pepperZero();
				self.ScovilleScale.gotoAndStop(0);
				addEventListenerMouse();
				self.AboutUs.mouseEnabled = true;
				self.Information.mouseEnabled = true;
			}
			self.Tabs.visible = false;
		}
		
		function clickXAboutUs() {
			self.Tabs.AboutUs.XMore.cursor = "pointer";
			if (status == "Mild") {
				console.log("Mild");
		
				pepperGrey();
				disableAll();
				addEventListenerClick();
				self.Jalapeno.gotoAndStop(0);
				self.Banana.gotoAndStop(0);
				self.Padron.gotoAndStop(0);
				self.Shishito.gotoAndStop(0);
		
				self.Jalapeno.mouseEnabled = true;
				self.Banana.mouseEnabled = true;
				self.Padron.mouseEnabled = true;
				self.Shishito.mouseEnabled = true;
				self.MildArea.mouseEnabled = true;
				self.AboutUs.mouseEnabled = true;
				self.Information.mouseEnabled = true;
		
		
				self.Scotch.mouseEnabled = false;
				self.Habanero.mouseEnabled = false;
				self.BirdsEye.mouseEnabled = false;
				self.Cayenne.mouseEnabled = false;
				self.Viper.mouseEnabled = false;
				self.scorpion.mouseEnabled = false;
				self.Morich.mouseEnabled = false;
				self.Carolina.mouseEnabled = false;
		
				self.ScovilleScale.gotoAndStop(5);
		
			} else {
				if (status == "Medium") {
					console.log("Medium");
		
					pepperGrey();
					disableAll();
					addEventListenerClick();
					self.BirdsEye.gotoAndStop(0);
					self.Cayenne.gotoAndStop(0);
		
					self.Cayenne.mouseEnabled = true;
					self.BirdsEye.mouseEnabled = true;
					self.MediumArea.mouseEnabled = true;
					self.AboutUs.mouseEnabled = true;
					self.Information.mouseEnabled = true;
		
					self.Scotch.mouseEnabled = false;
					self.Habanero.mouseEnabled = false;
					self.Viper.mouseEnabled = false;
					self.scorpion.mouseEnabled = false;
					self.Morich.mouseEnabled = false;
					self.Carolina.mouseEnabled = false;
					self.Jalapeno.mouseEnabled = false;
					self.Banana.mouseEnabled = false;
					self.Padron.mouseEnabled = false;
					self.Shishito.mouseEnabled = false;
		
					self.ScovilleScale.gotoAndStop(6);
		
				} else {
					if (status == "Hot") {
						console.log("Hot");
		
						pepperGrey();
						disableAll();
						addEventListenerClick();
						self.Habanero.gotoAndStop(0);
						self.Scotch.gotoAndStop(0);
		
						self.Habanero.mouseEnabled = true;
						self.Scotch.mouseEnabled = true;
						self.HotArea.mouseEnabled = true;
						self.AboutUs.mouseEnabled = true;
						self.Information.mouseEnabled = true;
		
						self.Viper.mouseEnabled = false;
						self.scorpion.mouseEnabled = false;
						self.Morich.mouseEnabled = false;
						self.Carolina.mouseEnabled = false;
						self.Jalapeno.mouseEnabled = false;
						self.Banana.mouseEnabled = false;
						self.Padron.mouseEnabled = false;
						self.Shishito.mouseEnabled = false;
						self.Cayenne.mouseEnabled = false;
						self.BirdsEye.mouseEnabled = false;
		
						self.ScovilleScale.gotoAndStop(7);
		
					} else {
						if (status == "Hell") {
							console.log("Hell");
		
							pepperGrey();
							disableAll();
							addEventListenerClick();
							self.scorpion.gotoAndStop(0);
							self.Morich.gotoAndStop(0);
							self.Carolina.gotoAndStop(0);
							self.Viper.gotoAndStop(0);
		
							self.scorpion.mouseEnabled = true;
							self.Morich.mouseEnabled = true;
							self.Carolina.mouseEnabled = true;
							self.Viper.mouseEnabled = true;
							self.HellArea.mouseEnabled = true;
							self.AboutUs.mouseEnabled = true;
							self.Information.mouseEnabled = true;
		
							self.Jalapeno.mouseEnabled = false;
							self.Banana.mouseEnabled = false;
							self.Padron.mouseEnabled = false;
							self.Shishito.mouseEnabled = false;
							self.Cayenne.mouseEnabled = false;
							self.BirdsEye.mouseEnabled = false;
							self.Habanero.mouseEnabled = false;
							self.Scotch.mouseEnabled = false;
		
							self.ScovilleScale.gotoAndStop(8);
		
						} else {
							console.log("Else");
							pepperZero();
							self.ScovilleScale.gotoAndStop(0);
							addEventListenerMouse();
							self.AboutUs.mouseEnabled = true;
							self.Information.mouseEnabled = true;
						}
					}
				}
			}
			self.Tabs.visible = false;
		}
		
		function MOXMild() {
			self.Tabs.TabMild.XMild.cursor = "pointer";
			self.Tabs.TabMild.XMild.alpha = 0.6;
		}
		function MOXMedium() {
			self.Tabs.TabMedium.XMedium.cursor = "pointer";
			self.Tabs.TabMedium.XMedium.alpha = 0.6;
		}
		function MOXHot() {
			self.Tabs.TabHot.XHot.cursor = "pointer";
			self.Tabs.TabHot.XHot.alpha = 0.6;
		}
		function MOXHell() {
			self.Tabs.TabHell.XHell.cursor = "pointer";
			self.Tabs.TabHell.XHell.alpha = 0.6;
		}
		function MOXAboutUs() {
			self.Tabs.AboutUs.XMore.cursor = "pointer";
			self.Tabs.AboutUs.XMore.alpha = 0.6;
		}
		//יציאה ממעבר עכבר על איקס
		function MOUTXMild() {
			self.Tabs.TabMild.XMild.alpha = 1;
		}
		function MOUTXMedium() {
			self.Tabs.TabMedium.XMedium.alpha = 1;
		}
		function MOUTXHot() {
			self.Tabs.TabHot.XHot.alpha = 1;
		}
		function MOUTXHell() {
			self.Tabs.TabHell.XHell.alpha = 1;
		}
		function MOUTXAboutUs() {
			self.Tabs.AboutUs.XMore.alpha = 1;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Tabs
	this.Tabs = new lib.Tabs();
	this.Tabs.name = "Tabs";
	this.Tabs.setTransform(637.4,390,1,1,0,0,0,517,279.4);

	this.timeline.addTween(cjs.Tween.get(this.Tabs).wait(1));

	// Buttons
	this.AboutUs = new lib.AboutUsMC();
	this.AboutUs.name = "AboutUs";
	this.AboutUs.setTransform(1090.3,117.6);

	this.Information = new lib.Information();
	this.Information.name = "Information";
	this.Information.setTransform(1173.25,79.1,1,1,0,0,0,91.3,21);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Information},{t:this.AboutUs}]}).wait(1));

	// clickingArea
	this.MediumArea = new lib.MidumeArea();
	this.MediumArea.name = "MediumArea";
	this.MediumArea.setTransform(572,559.7,1,1,44.9994,0,0,84.8,81.2);

	this.HotArea = new lib.HotArea();
	this.HotArea.name = "HotArea";
	this.HotArea.setTransform(701.3,571.9,1,1,90,0,0,84.7,81.2);

	this.HellArea = new lib.HellArea();
	this.HellArea.name = "HellArea";
	this.HellArea.setTransform(781,673.85,0.9999,0.9999,134.9981,0,0,84.8,81.2);

	this.MildArea = new lib.MildArea();
	this.MildArea.name = "MildArea";
	this.MildArea.setTransform(470.45,639.9,1,1,0,0,0,84.7,81.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MildArea},{t:this.HellArea},{t:this.HotArea},{t:this.MediumArea}]}).wait(1));

	// ScovilleScale
	this.ScovilleScale = new lib.scovilleMain();
	this.ScovilleScale.name = "ScovilleScale";
	this.ScovilleScale.setTransform(626.6,599.95,0.7572,0.7572,0,0,0,319.4,157.7);

	this.timeline.addTween(cjs.Tween.get(this.ScovilleScale).wait(1));

	// Pepper
	this.Scotch = new lib.ScotchStage();
	this.Scotch.name = "Scotch";
	this.Scotch.setTransform(1325.1,410.8,1,1,0,0,0,234.8,226.8);

	this.Padron = new lib.PadronStage();
	this.Padron.name = "Padron";
	this.Padron.setTransform(1068.9,158.2,1,1,0,0,0,477.9,254.2);

	this.scorpion = new lib.ScorpionStage();
	this.scorpion.name = "scorpion";
	this.scorpion.setTransform(1340.1,506.9,1,1,0,0,0,257.8,212.9);

	this.Morich = new lib.MorichStage();
	this.Morich.name = "Morich";
	this.Morich.setTransform(1205.35,520.15,1,1,0,0,0,303.4,211.2);

	this.Carolina = new lib.CrolinaStage();
	this.Carolina.name = "Carolina";
	this.Carolina.setTransform(58.8,508.1,1,1,0,0,0,287.8,231.1);

	this.BirdsEye = new lib.BirdsEyeStage();
	this.BirdsEye.name = "BirdsEye";
	this.BirdsEye.setTransform(-59.05,501.9,1,1,0,0,0,257.6,179.6);

	this.Viper = new lib.ViperStage();
	this.Viper.name = "Viper";
	this.Viper.setTransform(-80.3,301.4,1,1,0,0,0,268.7,231.4);

	this.Banana = new lib.BananaStage();
	this.Banana.name = "Banana";
	this.Banana.setTransform(41.9,381.2,1,1,0,0,0,320.9,228.2);

	this.Shishito = new lib.ShishtoStage();
	this.Shishito.name = "Shishito";
	this.Shishito.setTransform(101.4,317.9,1,1,0,0,0,412.4,238.9);

	this.Cayenne = new lib.CayenneStage();
	this.Cayenne.name = "Cayenne";
	this.Cayenne.setTransform(1062.8,413.85,1,1,0,0,0,592.4,223.7);

	this.Habanero = new lib.HabaneroStage();
	this.Habanero.name = "Habanero";
	this.Habanero.setTransform(1149.4,372.2,1,1,0,0,0,366.9,211.5);

	this.Jalapeno = new lib.JalapenoStage();
	this.Jalapeno.name = "Jalapeno";
	this.Jalapeno.setTransform(1254.15,441.5,1,1,0,0,0,342.6,242.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.Jalapeno},{t:this.Habanero},{t:this.Cayenne},{t:this.Shishito},{t:this.Banana},{t:this.Viper},{t:this.BirdsEye},{t:this.Carolina},{t:this.Morich},{t:this.scorpion},{t:this.Padron},{t:this.Scotch}]}).wait(1));

	// Text
	this.text = new cjs.Text("לחצו על מד החריפות לסינון הפלפלים או לחצו על אחד הפלפלים למידע עליו", "normal 300 25px 'Rubik'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 1277;
	this.text.parent = this;
	this.text.setTransform(640.65,128.3);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text);
	}

	this.text_1 = new cjs.Text("?מה החריף שלכם", "normal 900 80px 'Rubik'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 100;
	this.text_1.lineWidth = 1275;
	this.text_1.parent = this;
	this.text_1.setTransform(641.65,30);
	this.text_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",2,1,4);
	if(!lib.properties.webfonts['Rubik']) {
		lib.webFontTxtInst['Rubik'] = lib.webFontTxtInst['Rubik'] || [];
		lib.webFontTxtInst['Rubik'].push(this.text_1);
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.text}]}).wait(1));

	// Backroung
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F3EADD").s().p("EhkFA4bMAAAhIGIAoAAIAAgQIgoAAMAAAgofMDILAAAMAAABw1g");
	this.shape.setTransform(640.65,359.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(616,358,675,433.1);
// library properties:
lib.properties = {
	id: '7489C32EEBC20041AF2C00D52531BE59',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/HotPeppers_atlas_1.png", id:"HotPeppers_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['7489C32EEBC20041AF2C00D52531BE59'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;