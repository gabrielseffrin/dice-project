let e=(e,s)=>{let t=0,n=0;for(;t<e;)console.log(s),n+=Math.floor(Math.random()*s)+1,t++;return n};document.getElementById("button-roll").addEventListener("click",(()=>{(()=>{let s=+document.getElementById("typeDice").value,t=+document.getElementById("input-quantity-dice").value,n=document.getElementById("result"),a=document.getElementById("imgDice");switch(s){case 1:n.innerHTML=e(t,4),a.src="/dice-project/dice-d4.e8e4b8c6.png";break;case 2:n.innerHTML=e(t,6),a.src="/dice-project/dice-d6.1f559445.png";break;case 3:n.innerHTML=e(t,8),a.src="/dice-project/dice-d8.6074fb98.png";break;case 4:n.innerHTML=e(t,10),a.src="/dice-project/dice-d10.38a196ff.png";break;case 5:n.innerHTML=e(t,12),a.src="/dice-project/dice-d12.56d3d972.png";break;case 6:n.innerHTML=e(t,20),a.src="/dice-project/dice-d20.5dbb753f.png";break;case 7:n.innerHTML=e(t,100),a.src="/dice-project/dice-d10.38a196ff.png";break;default:alert("error")}})()}));
//# sourceMappingURL=index.5b734a7b.js.map

