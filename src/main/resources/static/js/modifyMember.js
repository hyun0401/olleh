'use strict';


const $modifyBtn = document.getElementById('modifyBtn');
//수정
$modifyBtn.addEventListener("click", e=>{
	const joinnum = e.target.dataset.joinnum;
	location.href = `/${joinnum}/edit`;
});


	/* 아이디 중복체크 */
  const memberId_success_f = res => {
    console.log(res);
    if (res.rtcd == '00') {
      alert('사용 불가능한 아이디입니다.');
    } else {
      alert('사용 가능한 아이디입니다.');
      memberId.readOnly = "readOnly";
      btn_find.removeAttribute('disabled');					//속성제거
      memberId_dupChk.setAttribute('disabled', 'disabled');		//속성추가 및 수정
    }
  }

  const memberId_err_f = err => {
    console.log(err);
  }

  const memberId_dupChk_f = e => {
    console.log('버튼 클릭됨!');

    //공백 체크
    if(memberId.value.trim().length == 0){
    	memberId.focus();
    	memberId.select();
    	alert("아이디를 입력해 주세요");
    	return false;
    }
    
    //아이디 유효성 체크
    const regExp =  /^[a-z]+[a-z0-9]{5,19}$/g;
    if(!memberId.value.match(regExp)){
    	alert("형식에 맞지 않습니다.");
    	return false;
    }
    
    //ajax call
    const url = "/api/member/memberId/dupchk?" + "memberId=" + memberId.value;
    request.get(url)
      .then(res => res.json())
      .then(res => memberId_success_f(res))
      .catch(err => memberId_err_f(err))
  }

  const memberId_init = e => {
    memberId_dupChk.addEventListener("click", memberId_dupChk_f);
  }

  window.addEventListener("DOMContentLoaded", memberId_init);
 
  /* 인증하기 */
  const tel_success_f = res => {
    console.log(res);
    if (res.rtcd == '00') {
      alert('존재하는 휴대폰 번호입니다.');
    } else {
      alert('사용가능합니다.');
      tel.readOnly = "readOnly";
      btn_find.removeAttribute('disabled');					//속성제거
      tel_dupChk.setAttribute('disabled', 'disabled');		//속성추가 및 수정
    }
  }

  const tel_err_f = err => {
    console.log(err);
  }

  const tel_dupChk_f = e => {
    console.log('버튼 클릭됨!');
		
    //공백 체크
    if(tel.value.trim().length == 0){
    	tel.focus();
    	tel.select();
    	alert("전화번호를 입력해주세요");
    	return false;
    }
    //유효성 체크
    const regExp = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/;
    if (!tel.value.match(regExp)) {
    	alert("다시 입력해 주세요");
    	return false;
    }
    	
    //ajax call
    const url = "/api/member/tel/dupchk?" + "tel=" + tel.value;
    request.get(url)
      .then(res => res.json())
      .then(res => tel_success_f(res))
      .catch(err => tel_err_f(err))
  }

  const tel_init = e => {
    tel_dupChk.addEventListener("click", tel_dupChk_f);
  }

  window.addEventListener("DOMContentLoaded", tel_init);
  
