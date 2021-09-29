const $delBtn = document.getElementById('delBtn');
$delBtn.addEventListener('click',e=>{
    if(confirm('탈퇴 하시겠습니까?') == true){
        alert('탈퇴되었습니다')
    }else{
        alert('취소되었습니다.')
    }
});


