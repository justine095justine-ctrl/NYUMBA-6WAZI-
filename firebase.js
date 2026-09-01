var db=firebase.database(),chat=db.ref("chat");
var jina=localStorage.jina,namba=localStorage.namba;

chat.limitToLast(50).on("child_added",function(s){
  var d=s.val();if(!d.jina||!d.ujumbe)return;
  var x=document.createElement("div");
  x.className="msg "+(d.jina==jina?"me":"you");
  x.innerHTML="<b>"+d.jina+"</b>"+d.ujumbe;
  document.getElementById("chat").appendChild(x);
  document.getElementById("chat").scrollTop=99999
});

function tuma(){
  if(!jina||!namba)return;
  var msg=document.getElementById("m").value;
  if(!msg)return;
  chat.push({jina:jina,ujumbe:msg,namba:namba,t:Date.now()});
  document.getElementById("m").value=""
}
