var text;
/*--------------------Add disabled class-------------------------*/

function hasClass(ele, cls) {
    return !!ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(ele, cls) {
    if (!hasClass(ele, cls)) ele.className += " " + cls;
}

function removeClass(ele, cls) {
    if (hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
}

/*--------------------Typewiter-------------------------*/

const typeSpeed = 100;
var timerId, typeTarget = $("#typer");
function type(txt, cur = 0) {
    if (cur == txt.length) {
        timerId = -1;
        return;
    }
    if (cur == 0) {
        typeTarget.html("");
        clearTimeout(timerId);
    }
    if (txt.charAt(cur) == "@") {
        var br = document.createElement('br');
        typeTarget.append(br);
    }
    else
        typeTarget.append(txt.charAt(cur));
    timerId = setTimeout(type, typeSpeed, txt, cur + 1);
}
// type("this is test")
type("1. Please Select The Image@2. Please Load The Image@3. Please Select The Mode");

/*-----------------------volume-------------------------*/

var volFlag=1;
$("#vol").click(function(){
    if(volFlag){
        volFlag=0;
        $("#vol").removeClass("fa fa-volume-up");
        $("#vol").addClass("fa fa-volume-mute");
    }
    else{
        volFlag=1;
        $("#vol").removeClass("fa fa-volume-mute");
        $("#vol").addClass("fa fa-volume-up");
    }
});

var x = 0;
document.getElementById("selOpt").onchange = function () {
    x = document.getElementById("selOpt").value;
}
var flag = 0;
var temp = 0;
document.getElementById("exec").disabled = true;
addClass(document.getElementById("exec"), "out");
document.getElementById("graph").disabled = true;
addClass(document.getElementById("graph"), "out");
document.getElementById("ptask").disabled = true;
addClass(document.getElementById("ptask"), "out");

/*--------------------execute-------------------------*/

document.getElementById("exec").onclick = function () {
    if (x == 0) {
        showToast("Please Select The Mode");
        if(volFlag)
        textToSpeech("Please Select The Mode");
        return;
    }
    else if (x == 1) {

        showToast("Please Make The Spot");
        if(volFlag)
        textToSpeech("Please Make The Spot");
    }
    else if (x == 2) {
        showToast("Please Make The Line");
        if(volFlag)
        textToSpeech("Please Make The Line");
    }
    else if (x == 3) {

        document.getElementById("selectMode").style.display = "block";//blue,red,green
        if ((document.getElementById("mode").value == "") && (flag == 0)) {
            showToast("Please Enter The Area");
            if(volFlag)
            textToSpeech("Please Enter The Area");
            flag = 1;
        }
        else if ((document.getElementById("mode").value == "") && (flag == 1)) {
            showToast("Please Enter The Area");
            if(volFlag)
            textToSpeech("Please Enter The Area");
        }
        else {
            showToast("Please Make The Area");
            if(volFlag)
            textToSpeech("Please Make The Area");
            addClass(document.getElementById("exec"), "out");
            document.getElementById("exec").disabled = true;
            document.getElementById("graph").disabled = true;
            addClass(document.getElementById("graph"), "out");
        }
    }
    if ((x != 0) && (x != 3)) {
        document.getElementById("exec").disabled = true;
        addClass(document.getElementById("exec"), "out");
        document.getElementById("graph").disabled = true;
        addClass(document.getElementById("graph"), "out");
    }
    console.log(flag);
}


/*--------------------load-------------------------*/

$(document).ready(function(){
    $(window).resize(function(){
        // document.getElementById("myCanvas").height = img.height;
        // document.getElementById("myCanvas").width = img.width;
    });
  });

document.getElementById("load").onclick = function () {
    var opt = document.getElementById("selOptSample").value;
    var stage = new Konva.Stage({
        container: 'imgSeen',
        width: 700,
        height: 500,
      });

    var layer = new Konva.Layer();
    var poly1 = new Konva.Line({
        points: canvasPolygon1,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
      });

      // add the shape to the layer
      layer.add(poly1);

      var poly2 = new Konva.Line({
        points: canvasPolygon2,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
      });

      // add the shape to the layer
      layer.add(poly2);

      var poly3 = new Konva.Line({
        points: canvasPolygon3,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
      });

      // add the shape to the layer
      layer.add(poly3);

      var poly4 = new Konva.Line({
        points: canvasPolygon4,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
      });

      // add the shape to the layer
      layer.add(poly4);

      var poly5 = new Konva.Line({
        points: canvasPolygon5,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
      });

      // add the shape to the layer
      layer.add(poly5);

      var poly6 = new Konva.Line({
        points: canvasPolygon6,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
      });

      // add the shape to the layer
      layer.add(poly6);


      var poly7 = new Konva.Line({
        points: canvasPolygon7,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
      });

      // add the shape to the layer
      layer.add(poly7);

      var poly8 = new Konva.Line({
        points: canvasPolygon8,
        fill: '#00D2FF',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
      });

      // add the shape to the layer
      layer.add(poly8);

      var poly9 = new Konva.Line({
        points: canvasPolygon9,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
      });

      // add the shape to the layer
      layer.add(poly9);

      var poly10 = new Konva.Line({
        points: canvasPolygon10,
        fill: 'red',
        stroke: 'black',
        strokeWidth: 5,
        closed: true,
      });

      // add the shape to the layer
      layer.add(poly10);

      // add the layer to the stage
      stage.add(layer);
    if (opt == 1) {
        document.getElementById("myCanvas").style.display = "block";
    }
    else if (opt == 2) {
        document.getElementById("myCanvas").style.display = "block";
    }
    else if (opt == 3) {
        document.getElementById("myCanvas").style.display = "block";
    }
    else if (opt == 0) {
        showToast("Please Select The Sample");
        if(volFlag)
        textToSpeech("Please Select The Sample");
        return;
    }
    if (opt != 0) {
        addClass(document.getElementById("load"), "out");
        document.getElementById("load").disabled = true;
        removeClass(document.getElementById("exec"), "out");
        document.getElementById("exec").disabled = false;
        showToast("Now Select The Mode");
        if(volFlag)
        textToSpeech("Now Select The Mode");
    }
}


/*--------------------draw-------------------------*/

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
function getMousePos1(canvas, evt, a) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left - a / 2,
        y: evt.clientY - rect.top - a / 2
    };
}
//put this outside the event loop..
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var flag = 0;
var posprev, prosnext,opt,temp;
function draw(evt) {
    if (temp == 1) {
        
        showToast("Now Make The Graph");
        if(volFlag)
        textToSpeech("Now Make The Graph");
        return;
    }
    opt = document.getElementById("selOpt").value;
    if (opt == 1) {
        
        showToast("Now Make The Graph");
        if(volFlag)
        textToSpeech("Now Make The Graph");
        temp = 1;
        removeClass(document.getElementById("graph"), "out");
        document.getElementById("graph").disabled = false;
        var pos = getMousePos(canvas, evt);
        console.log(pos);
        temp=pos;
        ctx.beginPath();
        ctx.fillStyle = "#fad905";
        ctx.arc(pos.x, pos.y, 5, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();
        canvas.disabled = true;
        addClass(canvas, "out1");
    }
    else if (opt == 2) {
        flag++;
        if (flag == 1)
        {
            
            posprev = getMousePos(canvas, evt);
        }
        else {
            
        showToast("Now Make The Graph");
        if(volFlag)
        textToSpeech("Now Make The Graph");
            temp = 1;
            removeClass(document.getElementById("graph"), "out");
            document.getElementById("graph").disabled = false;
            posnext = getMousePos(canvas, evt);
            flag = 0;
            ctx.moveTo(posprev.x, posprev.y);
            ctx.lineTo(posnext.x, posnext.y);
            ctx.strokeStyle = "#fa0505";
            ctx.stroke();
            canvas.disabled = true;
            addClass(canvas, "out1");
        }
        console.log(flag);
    }
    else if (opt == 3) {
        showToast("Now Make The Graph");
        if(volFlag)
        textToSpeech("Now Make The Graph");
        temp = 1;
        removeClass(document.getElementById("graph"), "out");
        document.getElementById("graph").disabled = false;
        var area = parseInt(document.getElementById("mode").value);
        var a;
        a = Math.sqrt(area);
        var pos = getMousePos1(canvas, evt, a);
        ctx.beginPath();
        ctx.fillStyle = "#fad905";
        ctx.rect(pos.x, pos.y, a, a);
        ctx.fill();
        ctx.stroke();
        canvas.disabled = true;
        addClass(canvas, "out1");
    }
    else if (opt == 0) {
        showToast("Please Enter the mode");
        if(volFlag)
        textToSpeech("Please Enter The Mode");
    }
}

var polygon1 = [[-0.4,0.8],[174,0.8],[166,78],[80,152],[2,156]];
var canvasPolygon1=[-0.4,0.8,174,0.8,166,78,80,152,2,156];
var polygon2=[[133,104],[166,78],[173,1.4],[400,0.8],[426,100],[332,147],[246,141],[165,79]];
var canvasPolygon2=[133,104,166,78,173,1.4,400,0.8,426,100,332,147,246,141,165,79];
var polygon3=[[425,99],[498,137],[578,64],[594,0.8],[400,0.8]];
var canvasPolygon3=[425,99,498,137,578,64,594,0.8,400,0.8];
var polygon7=[[683,393],[505,324],[553,240],[578,64],[594,0.8],[683,0.8]];
var canvasPolygon7=[683,393,505,324,553,240,578,64,594,0.8,683,0.8];
var polygon4=[[2,156],[78,154],[70,400],[-0.4,430]];
var canvasPolygon4=[2,156,78,154,70,400,-0.4,430];
var polygon8=[[0,430],[70,400],[308,498],[2,498]];
var canvasPolygon8=[0,430,70,400,308,498,2,498];
var polygon5=[[246,141],[300,270],[242,382],[70,400],[78,154],[165,79]];
var canvasPolygon5=[246,141,300,270,242,382,70,400,78,154,165,79];
var polygon9=[[317,500],[70,400],[394,359],[470,388],[473,498]];
var canvasPolygon9=[317,500,70,400,394,359,470,388,473,498];
var polygon6=[[246,141],[300,270],[242,382],[394,359],[470,388],[553,240],[578,61],[498,137],[425,99],[332,147]];
var canvasPolygon6=[246,141,300,270,242,382,394,359,470,388,553,240,578,61,498,137,425,99,332,147];
var polygon10=[[683,496],[473,498],[470,388],[505,324],[683,393]];
var canvasPolygon10=[683,496,473,498,470,388,505,324,683,393];

/*--------------------Toast-------------------------*/

var tWrapper = $("#toast-wrapper"), ti = 0;
function showToast(msg, type1 = 0) {
    tWrapper.append(`<div id="t${ti++}" class="toast${type1 == 1 ? ' danger' : (type1 == 2 ? ' success' : '')}" role="alert" aria-live="assertive" aria-atomic="true">
        <div class="toast-header">
            <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="${type1 == 1 ? '#ff0000' : (type1 == 2 ? '#31a66a' : '#007aff')}" /></svg>
            <strong class="mr-auto">Notification</strong>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            ${msg}
    </div>
    </div>`);
    $(`#t${ti - 1}`).toast({
        delay: 5500
    });
    $(`#t${ti - 1}`).toast('show');
}

/*--------------------graph-------------------------*/

document.getElementById("graph").onclick = function () {
    document.getElementById("myCanvas").style.display = "none";
    if(opt==1)
    {
        // var items=["gs1.png","gs2.png","gs3.png","gs4.png","gs5.png","gs6.png","gs7.png"]
        // var item = items[Math.floor(Math.random()*items.length)];
        // img.src = "./images/"+item;
        var pos=temp;
        console.log("Pos : ",pos);
        if(inside([pos.x,pos.y],polygon1))
        showToast("Region 1");
        else if(inside([pos.x,pos.y],polygon2))
        showToast("Region 2");
        else if(inside([pos.x,pos.y],polygon3))
        showToast("Region 3");
        else if(inside([pos.x,pos.y],polygon4))
        showToast("Region 4");
        else if(inside([pos.x,pos.y],polygon5))
        showToast("Region 5");
        else if(inside([pos.x,pos.y],polygon6))
        showToast("Region 6");
        else if(inside([pos.x,pos.y],polygon7))
        showToast("Region 7");
        else if(inside([pos.x,pos.y],polygon8))
        showToast("Region 8");
        else if(inside([pos.x,pos.y],polygon9))
        showToast("Region 9");
        else if(inside([pos.x,pos.y],polygon10))
        showToast("Region 10");

    }
    else if(opt==2)
    {
        var items=["gl1.png","gl2.png","gl3.png"]
        var item = items[Math.floor(Math.random()*items.length)];
        img.src = "./images/"+item;
    }
    else if(opt==3)
    {
        var items=["ga1.png","ga2.png"]
        var item = items[Math.floor(Math.random()*items.length)];
        img.src = "./images/"+item;
    }
    if (temp == 1) {
        document.getElementById("graph").disabled = true;
        addClass(document.getElementById("graph"), "out");
        document.getElementById("ptask").disabled =false;
        removeClass(document.getElementById("ptask"), "out");
        showToast("Program Task Is now activated",2);
        if(volFlag)
        textToSpeech("Program Task Is now activated");
    }
}

function inside(point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

    var x = point[0], y = point[1];

    var inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        var xi = vs[i][0], yi = vs[i][1];
        var xj = vs[j][0], yj = vs[j][1];

        var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    
    console.log(inside);

    return inside;
}


/*--------------------Text to speech-------------------------*/

// list of languages is probably not loaded, wait for it
if (window.speechSynthesis.getVoices().length != 0) {
    window.speechSynthesis.addEventListener('voiceschanged', function () {
        textToSpeech(text);
    });
}

function textToSpeech(text) {
    // get all voices that browser offers
    var available_voices = window.speechSynthesis.getVoices();

    // this will hold an english voice
    var english_voice = '';

    // find voice by language locale "en-US"
    // if not then select the first voice
    for (var i = 0; i < available_voices.length; i++) {
        if (available_voices[i].lang === 'en-US') {
            english_voice = available_voices[i];
            break;
        }
    }
    if (english_voice === '')
        english_voice = available_voices[0];

    // new SpeechSynthesisUtterance object
    var utter = new SpeechSynthesisUtterance();
    utter.rate = 1;
    utter.pitch = 0.5;
    utter.text = text;
    utter.voice = english_voice;


    // speak
    window.speechSynthesis.speak(utter);
}
document.getElementById("rest").onclick=function(){
    window.location.reload(true);
}
document.getElementById("ptask").onclick=function(){
    document.getElementById("container1").style.display="block";
    document.getElementById("container2").style.display="none";
}

$( "#myCanvas" ).mousemove(
    function(evt) {
        var pos=getMousePos(canvas,evt);
        console.log(pos);
    }
  );