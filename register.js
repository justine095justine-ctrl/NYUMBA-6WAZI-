const cfg={apiKey:"AIzaSyANpw55jBwxMyf6AC1_y7m6idNYhLP yka0",authDomain:"nyumba-6wazi.firebaseapp.com",databaseURL:"https://nyumba-6wazi-default-rtdb.firebaseio.com",projectId:"nyumba-6wazi",storageBucket:"nyumba-6wazi.appspot.com",messagingSenderId:"401684834308",appId:"1:401684834308:web:a65ab41ee55de814ca2d51"};
firebase.initializeApp(cfg);const db=firebase.database(),users=db.ref("users");

let jina=localStorage.jina||"",namba=localStorage.namba||"";
onload=()=>{if(jina&&namba){document.getElementById("reg").style.display="none"}};

function ingia(){
  jina=document.getElementById("jina").value;
  namba=document.getElementById("namba").value;
  if(!jina||!namba)return alert("Jaza jina na namba");
  localStorage.jina=jina;localStorage.namba=namba;
  users.child(namba).set({jina:jina,namba:namba,t:Date.now()});
  document.getElementById("reg").style.display="none";
  location.reload(); // ili i-load firebase.js ya chat
                          }
