let e=(e,s)=>{let t=0,a=0;for(;t<e;)console.log(s),a+=Math.floor(Math.random()*s)+1,t++;return a};document.getElementById("button-roll").addEventListener("click",(()=>{(()=>{let s=+document.getElementById("typeDice").value,t=+document.getElementById("input-quantity-dice").value,a=document.getElementById("result"),n=document.getElementById("imgDice");switch(s){case 1:a.innerHTML=e(t,4),n.src="/assets/images/dice-d4.png";break;case 2:a.innerHTML=e(t,6),n.src="/assets/images/dice-d6.png";break;case 3:a.innerHTML=e(t,8),n.src="/assets/images/dice-d8.png";break;case 4:a.innerHTML=e(t,10),n.src="/assets/images/dice-d10.png";break;case 5:a.innerHTML=e(t,12),n.src="/assets/images/dice-d12.png";break;case 6:a.innerHTML=e(t,20),n.src="/assets/images/dice-d20.png";break;case 7:a.innerHTML=e(t,100),n.src="/assets/images/dice-d10.png";break;default:alert("falta informação!")}})()}));
//# sourceMappingURL=index.8a331076.js.map
