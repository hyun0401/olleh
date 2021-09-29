
'use strict';

const $bmBtn = document.querySelector('.editButton');

$bmBtn.addEventListener("click",e=>{
	console.log("클릭됨");
	const id = e.target.dataset.bookmark;
	location.href=`/village/${id}/bookmark`
	alert("등록되었습니다.");
	return;
});

const $reviewTitle = document.querySelector('.Title');

$reviewTitle.addEventListener("click",e=>{
	const reviewNum = e.target.dataset.reviewnum;
	location.href=`/village/${reviewNum}/reviewDetail`;
});