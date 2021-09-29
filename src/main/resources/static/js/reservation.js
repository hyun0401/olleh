
const $canBtn = document.getElementById('canBtn');
$canBtn.addEventListener('click',e=>{
    if(confirm('예약 취소하시겠습니까?') == true){
        alert('예약 취소되었습니다')
    }else{
        alert('취소되었습니다.')
    }
});
