let tabName=document.querySelector("#tabNav");

let lis=tabName.querySelectorAll("li");

let items=document.querySelectorAll(".item");

for(let i=0;i<lis.length;i++){
	lis[i].onclick=function(){
		lis.forEach(value=>{value.className='';});
		lis[i].className='active';
		items.forEach(value=>{value.className='item'});
		items[i].className='item show';
	}
}