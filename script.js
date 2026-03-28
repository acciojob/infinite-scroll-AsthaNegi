const list=document.querySelector("#infi-list");

let count=1;

function addItems(n){
	
for(let i=0;i<n;i++){
   const li=document.createElement("li");
   li.textContent=`Item ${count++} `;
   list.appendChild(li);
}

}
addItems(10);

window.addEventListener("scroll",()=>{
      if(window.innerHeight+window.scrollY
       >=document.body.offSetHeight){
           addItems(2);
       }
});