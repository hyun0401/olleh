function findform_check(){
    var uname = document.getElementById("uname");
    var uid =document.getElementById("uid");
    var pwd =document.getElementById("pwd");
    var repwd =document.getElementById("repwd");
    if(uname.value ==""){
        alert("이름을 입력하세요.");
        uname.focus();
        return false;
    }
    
    document.find_form.submit();
}

 const $btn_find = document.querySelector('.btnSubmit_join');
  
  if($btn_find.disabled == true){
	  $btn_find.addEventListener('click',e=>{
		  alert("인증을 완료해주세요");
		  return;
	  });
  }



    // if(uid.value ==""){
    //     alert("아이디를 입력하세요.");
    //     uid.focus();
    //     return false;
    // }


    // var reg = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    // if(pwd.value!=reg ||pwd.value ==null){
    //     alert("비밀번호는 8자이상이어야 하며,숫자/대문자/소문자/특수문자를 모두 포함해야합니다..");
    //     pwd.focus();
    //     return false;
    // }


         

    // document.find_form.submit();
    // }



































