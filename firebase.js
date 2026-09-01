const firebaseConfig = {
  apiKey: "AIzaSyANpw55jBWxMyf6AC1_y7m6idNYhLPyka0",
  authDomain: "nyumba-6wazi.firebaseapp.com",
  databaseURL: "https://nyumba-6wazi-default-rtdb.firebaseio.com",
  projectId: "nyumba-6wazi",
  storageBucket: "nyumba-6wazi.firebasestorage.app",
  messagingSenderId: "401684834308",
  appId: "1:401684834308:web:a65ab41ee55de814ca2d51"
};
firebase.initializeApp(config);
var db=firebase.database().ref("chat");

function tuma(){
  var jina=document.getElementById("n").value;
  var ujumbe=document.getElementById("m").value;
  if(jina==""||ujumbe=="")return;
  db.push({j:jina,u:ujumbe,t:Date.now()});
  document.getElementById("m").value="";
}

db.on("child_added",function(s){
  var d=s.val();
  var div=document.createElement("div");
  div.className="msg " + (d.j==document.getElementById("n").value?"me":"you");
  div.innerHTML="<b>"+d.j+":</b> "+d.u;
  document.getElementById("chat").appendChild(div);
  document.getElementById("chat").scrollTop=99999;
});
