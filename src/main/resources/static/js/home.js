function searchToggle(obj, evt){
    var container = $(obj).closest('.search-wrapper');
        if(!container.hasClass('active')){
            container.addClass('active');
            evt.preventDefault();
        }
        else if(container.hasClass('active') && $(obj).closest('.input-holder').length == 0){
            container.removeClass('active');
            // clear input
            container.find('.search-input').val('');
        }
}


 const $regionBtn1 = document.querySelector('.region_2');
 const $regionBtn2 = document.querySelector('.region_3');
 const $regionBtn3 = document.querySelector('.region_4');
 const $regionBtn4 = document.querySelector('.region_5');
 const $regionBtn5 = document.querySelector('.region_6');
 const $regionBtn6 = document.querySelector('.region_7');
 const $regionBtn7 = document.querySelector('.region_8');
 const $regionBtn8 = document.querySelector('.region_9');
 const $regionBtn9 = document.querySelector('.region_10');

/*
for(let i=0; i<$delBtns.length; i++){
	$delBtns[i].addEventListener('click', e=>{
		console.log('삭제버튼 	클릭됨!');
	})
	
}
*/
$regionBtn1.addEventListener('click',e=>{

		const region = e.target.dataset.region;
		console.log(region);
		location.href=`/map/${region}`;
		return;
});
$regionBtn2.addEventListener('click',e=>{

		const region = e.target.dataset.region;
		console.log(region);
		location.href=`/map/${region}`;
		return;
});
$regionBtn3.addEventListener('click',e=>{

		const region = e.target.dataset.region;
		console.log(region);
		location.href=`/map/${region}`;
		return;
});
$regionBtn4.addEventListener('click',e=>{

		const region = e.target.dataset.region;
		console.log(region);
		location.href=`/map/${region}`;
		return;
});
$regionBtn5.addEventListener('click',e=>{

		const region = e.target.dataset.region;
		console.log(region);
		location.href=`/map/${region}`;
		return;
});
$regionBtn6.addEventListener('click',e=>{

		const region = e.target.dataset.region;
		console.log(region);
		location.href=`/map/${region}`;
		return;
});
$regionBtn7.addEventListener('click',e=>{

		const region = e.target.dataset.region;
		console.log(region);
		location.href=`/map/${region}`;
		return;
});
$regionBtn8.addEventListener('click',e=>{

		const region = e.target.dataset.region;
		console.log(region);
		location.href=`/map/${region}`;
		return;
});
$regionBtn9.addEventListener('click',e=>{

		const region = e.target.dataset.region;
		console.log(region);
		location.href=`/map/${region}`;
		return;
});