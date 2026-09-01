const cfg={apiKey:"AIzaSyANpw55jBwxMyf6AC1_y7m6idNYhLP yka0",authDomain:"nyumba-6wazi.firebaseapp.com",databaseURL:"https://nyumba-6wazi-default-rtdb.firebaseio.com",projectId:"nyumba-6wazi",storageBucket:"nyumba-6wazi.appspot.com",messagingSenderId:"401684834308",appId:"1:401684834308:web:a65ab41ee55de814ca2d51"};
firebase.initializeApp(cfg);const db=firebase.database(),chat=db.ref("chat");

let jina=localStorage.jina||"",namba=localStorage.namba||"";
const chatDiv=document.getElementById("chat");

chat.limitToLast(50).on("child_added",s=>{
  let d=s.val();if(!d.jina||!d.ujumbe)return;
  let x=document.createElement("div");
  x.className="msg "+(d.jina==jina?"me":"you");
  x.innerHTML="<b>"+d.jina+"</b>"+d.ujumbe;
  chatDiv.appendChild(x);chatDiv.scrollTop=99999
});

function tuma(){
  if(!jina||!namba)return alert("Tafadhali jisajili kwanza");
  let msg=document.getElementById("m").value;
  if(!msg)return;
  chat.push({jina:jina,ujumbe:msg,namba:namba,t:Date.now()});
  document.getElementById("m").value=""
}
