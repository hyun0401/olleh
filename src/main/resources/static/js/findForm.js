/**
 * 
 */
 function findform_check(){

    var uname =document.getElementById("uname");

    var phonenumber =document.getElementById("phonenumber");



    if(uname.value ==""){
        alert("이름을 입력하세요.");
        uname.focus();
        return false;
    };

    var reg= /^[0-9]+/g; //숫자만 입력하는 정규식

    if(phone01.value != reg || phone01.value == null ){
        alert("전화번호는 숫자만 입력할 수 있습니다.");
        phonenumber.focus();
        return false;
    }
    
    if(phone02.value != reg || phone02.value == null ){
        alert("전화번호는 숫자만 입력할 수 있습니다.");
        phonenumber.focus();
        return false;
    }
    
    if(phone03.value != reg || phone03.value == null ){
        alert("전화번호는 숫자만 입력할 수 있습니다.");
        phonenumber.focus();
        return false;
    }


    document.find_form.submit();
}