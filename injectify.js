function scripthub() {
  function alertblock() {
    setInterval(function() { alert = function() { console.log("alert blocked!") } }, 100);
  }
  var scripthub = document.createElement("div");
  scripthub.id = "geefef";
  document.body.appendChild(scripthub);
  scripthub.style = "@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');font-family: 'Poppins', sans-serif;position:absolute;top:40%;left:40%;padding:20px;border:0;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);background-color:#F1F1F1;z-index:9999;user-select:none;cursor:default;border-radius:5px;";
  scripthub.innerHTML = `
<style>
.injector {
float: left;
width: 80%;
}
.scripts {
float: right;
width: 20%;
}
.script {
text-decorations: undeline;
color: blue;
cursor: pointer;
}

.script:hover {
text-decorations: undeline;
color: purple;

}
</style>
<div>
<div style=position:absolute;top:0;left:0;height:18%;width:100%></div>
<button style="position:absolute;top:0;right:0;padding:2px 5px 2px">X</button><br>
<a style=position:absolute;font-size:20px>Injectify v0.1 ScriptHub - TrippleMSoftware</a><br><br><br>
<p class="script" onclick="alertblock();">Alert Blocker</p>
<p class="script" onclick="window.parent.window.location.replace('https://classroom.google.com/');">Hide current site from history</p>
<div id=jsi-output style=font-family:monospace;margin-top:1em></div>
</div>
`;


  // Delete scripthub from page when X button clicked
  scripthub.getElementsByTagName("button")[0].addEventListener("click", function() {
    scripthub.parentNode.removeChild(scripthub);
  }, true);
  scripthub.getElementsByTagName("button")[1].addEventListener("click", function() {

    try { eval(scripthub.getElementsByTagName("textarea")[0].value); }
    catch (err) { alert(err.name + ":\n" + err.message); }

  }, true);
  var m1, m2, m3, m4 = 0;
  scripthub.getElementsByTagName("div")[1].onmousedown = dragMouseDown;


  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    m3 = e.clientX;
    m4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    m1 = m3 - e.clientX;
    m2 = m4 - e.clientY;
    m3 = e.clientX;
    m4 = e.clientY;
    scripthub.style.top = (scripthub.offsetTop - m2) + "px";
    scripthub.style.left = (scripthub.offsetLeft - m1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

var modal = document.createElement("div");
modal.id = "geefef";
document.body.appendChild(modal);
modal.style = "@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');font-family: 'Poppins', sans-serif;position:absolute;top:40%;left:40%;padding:20px;border:0;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);background-color:#F1F1F1;z-index:9999;user-select:none;cursor:default;border-radius:5px;";
modal.innerHTML = `
<style>
.injector {
float: left;
width: 80%;
}
.scripts {
float: right;
width: 20%;
}
.script {
text-decorations: undeline;
color: blue;
cursor: pointer;
}

.script:hover {
text-decorations: undeline;
color: purple;

}
</style>
<div>
<div style=position:absolute;top:0;left:0;height:18%;width:100%></div>
<button style="position:absolute;top:0;right:0;padding:2px 5px 2px">X</button>
<a style=position:absolute;font-size:20px>Injectify v0.1 - TrippleMSoftware</a>
<br>
<textarea placeholder="Enter javascript here..." rows=6 cols=60 autocomplete=off autocorrect=off autocapitalize=off spellcheck=false style="margin:15px 0 15px;font-family:monospace;white-space:pre;overflow-wrap:normal;overflow:scroll;resize:both"></textarea>
<br>
<button>Inject</button>
<p class="script" onclick="scripthub()">Open Scipt Hub</p>
<div id=jsi-output style=font-family:monospace;margin-top:1em></div>
</div>
`;


// Delete modal from page when X button clicked
modal.getElementsByTagName("button")[0].addEventListener("click", function() {
  modal.parentNode.removeChild(modal);
}, true);
modal.getElementsByTagName("button")[1].addEventListener("click", function() {

  try { eval(modal.getElementsByTagName("textarea")[0].value); }
  catch (err) { alert(err.name + ":\n" + err.message); }

}, true);
var m1, m2, m3, m4 = 0;
modal.getElementsByTagName("div")[1].onmousedown = dragMouseDown;


function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  m3 = e.clientX;
  m4 = e.clientY;
  document.onmouseup = closeDragElement;
  document.onmousemove = elementDrag;
}

function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();
  m1 = m3 - e.clientX;
  m2 = m4 - e.clientY;
  m3 = e.clientX;
  m4 = e.clientY;
  modal.style.top = (modal.offsetTop - m2) + "px";
  modal.style.left = (modal.offsetLeft - m1) + "px";
}

function closeDragElement() {
  document.onmouseup = null;
  document.onmousemove = null;
}
