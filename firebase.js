const firebaseConfig = {
  apiKey: "AIzaSyANpw55jBwxMyf6AC1_y7m6idNYhLP yka0",
  authDomain: "nyumba-6wazi.firebaseapp.com",
  databaseURL: "https://nyumba-6wazi-default-rtdb.firebaseio.com",
  projectId: "nyumba-6wazi",
  storageBucket: "nyumba-6wazi.appspot.com",
  messagingSenderId: "401684834308",
  appId: "1:401684834308:web:a65ab41ee55de814ca2d51"
};
firebase.initializeApp(firebaseConfig);
var db = firebase.database().ref("chat");
var jinaLangu = "";

db.limitToLast(50).on("child_added",function(s){
  var d = s.val();
  var div = document.createElement("div");
  div.className = "msg " + (d.j == jinaLangu ? "me" : "you");
  div.innerHTML = "<b>"+d.j+":</b> "+d.u;
  document.getElementById("chat").appendChild(div);
  document.getElementById("chat").scrollTop = 99999;
});

function tuma(){
  var jinaInput = document.getElementById("n");
  var ujumbeInput = document.getElementById("m");
  
  if(jinaInput.value != "") jinaLangu = jinaInput.value;
  jinaInput.disabled = true;
  
  var ujumbe = ujumbeInput.value;
  if(jinaLangu == "" || ujumbe == "") { alert("Jaza jina na ujumbe"); return; }
  
  db.push({j:jinaLangu, u:ujumbe, t:Date.now()});
  ujumbeInput.value = "";
}
