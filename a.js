let yes=document.getElementById("yes");
let no=document.getElementById("no");
let message=document.getElementById("message");
let smallContainer=document.getElementById("head");

no.addEventListener("mouseover",()=>{
  no.style.position="absolute";
  no.style.top=Math.floor(Math.random()*100)+"vh";
  no.style.right=Math.random()*100+"vh";
})
yes.addEventListener("click",()=>{
  message.style.display="block";
  smallContainer.style.background="green";
})
