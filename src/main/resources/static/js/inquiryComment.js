


$('.change-price').on('click',
function() {
  $('.none-sq-price').toggle(200);
}
);
$('.none-sq-price').hide();
$('.change').on('click',
function() {
 $('.sq-price').toggle(200);
}
);

const $change = document.querySelectorAll('.change');

	
  const inquiry_success = res => {
    
    if (res.rtcd == '00') {
      const arr = res.data;
    
    
  
    const $inquiryDataList = document.getElementById('inquiryDataList');
    
   $inquiryDataList.innerHTML = '';
   
    var row =	'<form action="/member/modifyInquiry" method="post"> '+
    					 '  <div class="container3"> ' +  
    					 '  <input name="inquiryNum"  value="'+arr[0].inquiryNum+'" hidden/> '+
                ' <label for="inquiryType">문의 종류    </label> '  +          
                     '<select name="inquiryType" >'+
                         '<option selected="selected" value="0">문의 종류</option>'+
                         '<option value="1">체험관련</option>'+
                         '<option value="2">예약관련</option>'+
                         '<option value="3">회원정보관련</option>'+
                     '</select>'+                 
                ' <label for="subject3">제목</label>'+
                     '<input for="subject3" type="text" name="inquiryTitle" style="color: black" value="'+arr[0].inquiryTitle+'"/>'+
                     '</div> '+
                '<div class="container4">'+
                    '<label for="content3">내용</label>'+
                       ' <textarea for="content3" name="inquiryContent" style="color: black">'+arr[0].inquiryContent+'</textarea>'+
                '</div>'+
                 
                 '<div class="btn3" id="btn3_group">'+
                 
                 '<button type="submit" class="button_3" >수정</button>'+               
                
                    '<button type="button" class="DelBtn" id="a" style="float: inline-end;" data-inquirynum="'+arr[0].inquiryNum+'">삭제</button>	'+
                 '</div>'+
             '</div> '+
             '</form>'
             
      
      $inquiryDataList.innerHTML += row
  
      const $DelBtn = document.querySelectorAll('.DelBtn')
    for (const button of $DelBtn) {
  button.addEventListener('click',e=>{
	console.log("버튼클릭됨")
	const inquiryNum = e.target.dataset.inquirynum;
	console.log(inquiryNum);
	location.href=`/member/${inquiryNum}/deleteInquiry`
});
};
    } 
  
  }
  const inquiry_err_f = err => {
    console.log(err);
  }

  const inquirydata = e => {
	const inquiryNum = e.target.dataset.inquirynum;
    console.log('버튼 클릭됨!');
		console.log(inquiryNum);
    //ajax call
    const url = `/member/${inquiryNum}/modifyInquiry` 
    request.get(url)
      .then(res => res.json())
      .then(res => inquiry_success(res))
      .catch(err => inquiry_err_f(err))
  }

  const inquiry_init = e => {
	for (const button of $change) {
  button.addEventListener('click',inquirydata);
  }};

  window.addEventListener("DOMContentLoaded", inquiry_init);
  

  const $delFile = document.querySelectorAll('.delFile');

  $delFile.addEventListener('click',e=>{
    console.log('클릭');
      
  });
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

addEventListener