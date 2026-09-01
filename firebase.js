// INJINI YA NYUMBA 6WAZI
var config={
  apiKey:"AIzaSyDUMMYKEY123",
  authDomain:"nyumba6wazi.firebaseapp.com",
  databaseURL:"https://nyumba6wazi-default-rtdb.firebaseio.com",
  projectId:"nyumba6wazi"
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
