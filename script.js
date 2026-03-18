

const list=document.getElementById("infi-list");
let count=1;

function addItems(num){
 for(let i=0;i<num;i++){
    const listItem=document.createElement("li");  
    listItem.textContent=`Item ${count++}`;
    list.appendChild(listItem);
 }   
}

addItems(10);

window.addEventListener("scroll",()=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight){
        
       addItems(2); 
    }
});