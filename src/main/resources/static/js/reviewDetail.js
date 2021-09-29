


const $content = document.getElementById('comment')
const $commentBtn = document.getElementById('commentBtn');
$commentBtn.addEventListener("click",e=>{
	console.log("클릭됨");
		const reviewNum = e.target.dataset.reviewnum;
	const content = $content.value;
	location.href=`/comment/${reviewNum}/${content}/editcomment`;
});

const $cmdelBtn = document.getElementById('cmdelBtn')

$cmdelBtn.addEventListener("click",e=>{
	console.log('클릭됨')
	const commentNum = e.target.dataset.commentnum;
	const reviewNum2 = e.target.dataset.reviewnum;
	
	console.log(commentNum);
	console.log(reviewNum2);
	location.href=`/comment/${commentNum}/${reviewNum2}/deleteComment`;
});