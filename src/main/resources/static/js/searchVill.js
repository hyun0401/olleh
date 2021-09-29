/**
 * 
 */
 'ust strict'
 
 const $villageTitle = document.querySelectorAll('.villageTitle');
for(const button of $villageTitle){
	button.addEventListener("click",e=>{
		const id = e.target.dataset.villageid;
		console.log(id);
		location.href=`/village/${id}`
	});
}
