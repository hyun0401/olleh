/**
 * 
 */
'use strict';
 
 const $delBtn = document.getElementById('delBtn');
$delBtn.addEventListener('click',e=>{
    if(confirm('예약 삭제하시겠습니까?') == true){
		const reservationNum = e.target.dataset.reservationnum;
		location.href=`/manager/${reservationNum}/deleteManagerReservation`
		console.log(reservationNum);
        alert('예약 삭제되었습니다')
    }else{
        alert('취소되었습니다.')
    }
});
function togglereservtion() {
  const div = document.getElementById('reservtion');
  
  if(div.style.visibility === 'visible')  {
    div.style.visibility = 'hidden';
  }else {
    div.style.visibility = 'visible';
  }
} 
