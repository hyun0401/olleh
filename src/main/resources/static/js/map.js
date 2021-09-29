/**
 * 
 */
'use strict';

const $searchBtn = document.querySelector('.searchBtn');
const $region = document.getElementById('region');
const $villageReport = document.querySelectorAll(".villageReport")
	



const searchBtn_success_f = res => {
	if (res.rtcd == '00') {
	
		
	const arr = res.data;
	let villageList = [];
	villageList=arr;
		console.log("villageList="+villageList);
		console.log(arr);
const $villageList = document.getElementById('villageList');
	$villageList.addEventListener("click",e=>{
		console.log("클릭")
	})
		
		$villageList.innerHTML='';
		for(let i=0; i<villageList.length; i++){
			const $villageList = document.getElementById('villageList');
	$villageList.addEventListener("click",e=>{
		console.log("클릭")
	})
			var row = '<tr><td>'+villageList[i].id+'</td><td>'+villageList[i].exprnVillageNm+'</td><td>'+villageList[i].homepageUrl+'</td><td>'+villageList[i].rprsntvName+'</td><td>'+villageList[i].phoneNumber+'</td><td>'+villageList[i].ctprvnNm+'</td><td>'+villageList[i].signguNm+'</td><td>'+villageList[i].exprnSe+'</td><td>'+villageList[i].exprnCn+'</td><td>'+villageList[i].rdnmadr+'</td><td>'
			$villageList.innerHTML += row
		}
			
	} else {
		alert('해당 정보가 없습니다.');
	}
}

const searchBtn_err_f = err => {
	console.log(err);
}

const search_Btn = e => {
	console.log('버튼 클릭됨!');

	//ajax call
		const vregion = $region.value;
		const vcounty = document.form.county.value;
		const url = `/map/${vregion}/${vcounty}/`;
		console.log("url:"+url);
		request.get(url)
		.then(res => res.json())
		.then(res => searchBtn_success_f(res))
		.catch(err => searchBtn_err_f(err));
}

const searchBtn_init = e => {

	$searchBtn.addEventListener("click", search_Btn);
}

window.addEventListener("DOMContentLoaded", searchBtn_init);


	$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '전체'){
			   console.log("클릭")
			   panTo230();
			   
		   }
		   });
	
	function panTo230() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.418335, 127.507778);
	    map.panTo(moveLatLon);            
	    
	};  
	$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '전체'){
			   console.log("클릭")
			   panTo231();
			   
		   }
		   });
	
	function panTo231() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.811970, 128.154397);
	    map.panTo(moveLatLon);            
	    
	};  
	$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '전체'){
			   console.log("클릭")
			   panTo232();
			   
		   }
		   });
	
	function panTo232() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.871367, 126.927050);
	    map.panTo(moveLatLon);            
	    
	};  
	$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '전체'){
			   console.log("클릭")
			   panTo233();
			   
		   }
		   });
	
	function panTo233() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.729629, 127.138641);
	    map.panTo(moveLatLon);            
	    
	};  
	$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '전체'){
			   console.log("클릭")
			   panTo234();
			   
		   }
		   });
	
	function panTo234() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.451441, 128.330502);
	    map.panTo(moveLatLon);            
	    
	};  
	$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '전체'){
			   console.log("클릭")
			   panTo235();
			   
		   }
		   });
	
	function panTo235() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.296508, 128.855975);
	    map.panTo(moveLatLon);            
	    
	};  
	$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '전체'){
			   console.log("클릭")
			   panTo236();
			   
		   }
		   });
	
	function panTo236() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.652909, 126.793711);
	    map.panTo(moveLatLon);            
	    
	};  
	$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '전체'){
			   console.log("클릭")
			   panTo237();
			   
		   }
		   });
	
	function panTo237() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.772617, 127.843185);
	    map.panTo(moveLatLon);            
	    
	};  
	$searchBtn.addEventListener("click",e=>{
		   if($region.value == "제주" && sel.value == '전체'){
			   console.log("클릭")
			   panTo238();
			   
		   }
		   });
	
	function panTo238() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(33.495492, 126.534547);
	    map.panTo(moveLatLon);            
	    
	};  
	$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '강남구'){
			   console.log("클릭")
			   panTo1();
			   
		   }
		   });
	
	function panTo1() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.514575, 127.0495556);
	    map.panTo(moveLatLon);            
	    
	};  
	
	
	
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '강동구'){
			   console.log("클릭")
			   panTo2();
			   
		   }
		   });
	
	function panTo2() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.52736667, 127.1258639);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '강북구'){
			   console.log("클릭")
			   panTo3();
			   
		   }
		   });
	
	function panTo3() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.63695556, 127.0277194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
	
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '강서구'){
			   console.log("클릭")
			   panTo4();
			   
		   }
		   });
	
	function panTo4() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.54815556, 126.851675);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	

			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '관악구'){
			   console.log("클릭")
			   panTo5();
			   
		   }
		   });
	
	function panTo5() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.47538611, 126.9538444);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '광진구'){
			   console.log("클릭")
			   panTo6();
			   
		   }
		   });
	
	function panTo6() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.53573889, 127.0845333);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '구로구'){
			   console.log("클릭")
			   panTo7();
			   
		   }
		   });
	
	function panTo7() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.49265, 126.8895972);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '금천구'){
			   console.log("클릭")
			   panTo8();
			   
		   }
		   });
	
	function panTo8() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.44910833, 126.9041972);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '고양시'){
			   console.log("클릭")
			   panTo9();
			   
		   }
		   });
	
	function panTo9() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.65590833, 126.7770556);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '과천시'){
			   console.log("클릭")
			   panTo10();
			   
		   }
		   });
	
	function panTo10() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.42637222, 126.9898);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
	
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '계양구'){
			   console.log("클릭")
			   panTo11();
			   
		   }
		   });
	
	function panTo11() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.53770728, 126.737744);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '남구'){
			   console.log("클릭")
			   panTo12();
			   
		   }
		   });
	
	function panTo12() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.46369169, 126.6502972);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
	
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '남동구'){
			   console.log("클릭")
			   panTo13();
			   
		   }
		   });
	
	function panTo13() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.44971062, 126.7309669);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '동구'){
			   console.log("클릭")
			   panTo14();
			   
		   }
		   });
	
	function panTo14() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.47401607, 126.6432441);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '부평구'){
			   console.log("클릭")
			   panTo15();
			   
		   }
		   });
	
	function panTo15() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.50784204, 126.7219068);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '서구'){
			   console.log("클릭")
			   panTo16();
			   
		   }
		   });
	
	function panTo16() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.54546372, 126.6759616);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	}; 
	
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '연수구'){
			   console.log("클릭")
			   panTo17();
			   
		   }
		   });
	
	function panTo17() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.41038125, 126.6782658);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '중구'){
			   console.log("클릭")
			   panTo18();
			   
		   }
		   });
	
	function panTo18() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.47384843, 126.6217617);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '강화군'){
			   console.log("클릭")
			   panTo19();
			   
		   }
		   });
	
	function panTo19() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.74385833, 126.49);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '옹진군'){
			   console.log("클릭")
			   panTo20();
			   
		   }
		   });
	
	function panTo20() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.443725, 126.6388889);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '광명시'){
			   console.log("클릭")
			   panTo21();
			   
		   }
		   });
	
	function panTo21() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.47575, 126.8667083);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '구리시'){
			   console.log("클릭")
			   panTo22();
			   
		   }
		   });
	
	function panTo22() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.591625, 127.1318639);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '군포시'){
			   console.log("클릭")
			   panTo23();
			   
		   }
		   });
	
	function panTo23() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.35865833, 126.9375);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '노원구'){
			   console.log("클릭")
			   panTo24();
			   
		   }
		   });
	
	function panTo24() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.65146111, 127.0583889);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '남양주시'){
			   console.log("클릭")
			   panTo25();
			   
		   }
		   });
	
	function panTo25() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.63317778, 127.2186333);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '도봉구'){
			   console.log("클릭")
			   panTo26();
			   
		   }
		   });
	
	function panTo26() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.66583333, 127.0495222);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '동대문구'){
			   console.log("클릭")
			   panTo27();
			   
		   }
		   });
	
	function panTo27() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.571625, 127.0421417);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '동작구'){
			   console.log("클릭")
			   panTo2();
			   
		   }
		   });
	
	function panTo28() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.50965556, 126.941575);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '동두천시'){
			   console.log("클릭")
			   panTo2();
			   
		   }
		   });
	
	function panTo28() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(33.450580, 126.574942);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '부천시'){
			   console.log("클릭")
			   panTo29();
			   
		   }
		   });
	
	function panTo29() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.5035917, 126.766);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '성남시'){
			   console.log("클릭")
			   panTo30();
			   
		   }
		   });
	
	function panTo30() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.44749167, 127.1477194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '수원시'){
			   console.log("클릭")
			   panTo31();
			   
		   }
		   });
	
	function panTo31() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.30101111, 127.0122222);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '시흥시'){
			   console.log("클릭")
			   panTo32();
			   
		   }
		   });
	
	function panTo32() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.37731944, 126.8050778);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '안산시'){
			   console.log("클릭")
			   panTo33();
			   
		   }
		   });
	
	function panTo33() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.29851944, 126.8468194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '안양시'){
			   console.log("클릭")
			   panTo34();
			   
		   }
		   });
	
	function panTo34() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.3897, 126.9533556);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '오산시'){
			   console.log("클릭")
			   panTo35();
			   
		   }
		   });
	
	function panTo35() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.14691389, 127.0796417);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '의왕시'){
			   console.log("클릭")
			   panTo36();
			   
		   }
		   });
	
	function panTo36() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.34195, 126.9703889);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '의정부시'){
			   console.log("클릭")
			   panTo37();
			   
		   }
		   });
	
	function panTo37() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.73528889, 127.0358417);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '평택시'){
			   console.log("클릭")
			   panTo38();
			   
		   }
		   });
	
	function panTo38() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.98943889, 127.1146556);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '고양시'){
			   console.log("클릭")
			   panTo39();
			   
		   }
		   });
	
	function panTo39() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.65590833, 126.7770556);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '하남시'){
			   console.log("클릭")
			   panTo40();
			   
		   }
		   });
	
	function panTo40() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.53649722, 127.217);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '가평군'){
			   console.log("클릭")
			   panTo41();
			   
		   }
		   });
	
	function panTo41() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.82883056, 127.5117778);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '광주시'){
			   console.log("클릭")
			   panTo42();
			   
		   }
		   });
	
	function panTo42() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.41450556, 127.2577861);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '김포시'){
			   console.log("클릭")
			   panTo43();
			   
		   }
		   });
	
	function panTo43() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.61245833, 126.7177778);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '안성시'){
			   console.log("클릭")
			   panTo44();
			   
		   }
		   });
	
	function panTo44() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.005175, 127.2818444);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
			
			$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '양주시'){
			   console.log("클릭")
			   panTo45();
			   
		   }
		   });
	
	function panTo45() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.78245, 127.0478194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
	
	
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '양평군'){
			   console.log("클릭")
			   panTo46();
			   
		   }
		   });
	
	
	
	function panTo46() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.48893611, 127.4898861);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '여주군'){
			   console.log("클릭")
			   panTo47();
			   
		   }
		   });
	
	function panTo47() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(33.450580, 126.574942);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '연천군'){
			   console.log("클릭")
			   panTo48();
			   
		   }
		   });
	
	function panTo48() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(38.09336389, 127.0770667);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '용인시'){
			   console.log("클릭")
			   panTo49();
			   
		   }
		   });
	
	function panTo2() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.23147778, 127.2038444);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '이천시'){
			   console.log("클릭")
			   panTo2();
			   
		   }
		   });
	
	function panTo49() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.27543611, 127.4432194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
	
	
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '파주시'){
			   console.log("클릭")
			   panTo50();
			   
		   }
		   });
	
	function panTo50() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.75708333, 126.7819528);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '포천시'){
			   console.log("클릭")
			   panTo51();
			   
		   }
		   });
	
	function panTo51() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.89215556, 127.2024194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '화성시'){
			   console.log("클릭")
			   panTo52();
			   
		   }
		   });
	
	function panTo52() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.19681667, 126.8335306);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '마포구'){
			   console.log("클릭")
			   panTo53();
			   
		   }
		   });
	
	function panTo53() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.56070556, 126.9105306);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '서대문구'){
			   console.log("클릭")
			   panTo54();
			   
		   }
		   });
	
	function panTo54() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.57636667, 126.9388972);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '서초구'){
			   console.log("클릭")
			   panTo55();
			   
		   }
		   });
	
	function panTo55() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.48078611, 127.0348111);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '성동구'){
			   console.log("클릭")
			   panTo56();
			   
		   }
		   });
	
	function panTo56() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.56061111, 127.039);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '성북구'){
			   console.log("클릭")
			   panTo57();
			   
		   }
		   });
	
	function panTo57() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.58638333, 127.0203333);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '송파구'){
			   console.log("클릭")
			   panTo58();
			   
		   }
		   });
	
	function panTo58() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.51175556, 127.1079306);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '양천구'){
			   console.log("클릭")
			   panTo59();
			   
		   }
		   });
	
	function panTo59() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.51423056, 126.8687083);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
				$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '영등포구'){
			   console.log("클릭")
			   panTo60();
			   
		   }
		   });
	
	function panTo60() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.52361111, 126.8983417);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '용산구'){
			   console.log("클릭")
			   panTo60();
			   
		   }
		   });
	
	function panTo60() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.53609444, 126.9675222);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '은평구'){
			   console.log("클릭")
			   panTo61();
			   
		   }
		   });
	
	function panTo61() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.59996944, 126.9312417);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '종로구'){
			   console.log("클릭")
			   panTo62();
			   
		   }
		   });
	
	function panTo62() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.57037778, 126.9816417);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '중구'){
			   console.log("클릭")
			   panTo63();
			   
		   }
		   });
	
	function panTo63() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.56100278, 126.9996417);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경기" && sel.value == '중랑구'){
			   console.log("클릭")
			   panTo64();
			   
		   }
		   });
	
	function panTo64() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.60380556, 127.0947778);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '강릉시'){
			   console.log("클릭")
			   panTo65();
			   
		   }
		   });
		
	function panTo65() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.74913611, 128.8784972);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '동해시'){
			   console.log("클릭")
			   panTo66();
			   
		   }
		   });
		   function panTo66() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.52193056, 129.1166333);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '삼척시'){
			   console.log("클릭")
			   panTo67();
			   
		   }
		   });
		   function panTo67() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.44708611, 129.1674889);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '속초시'){
			   console.log("클릭")
			   panTo68();
			   
		   }
		   });
		   function panTo68() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(38.204275, 128.5941667);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '원주시'){
			   console.log("클릭")
			   panTo69();
			   
		   }
		   });
		   function panTo69() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.33908333, 127.9220556);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '춘천시'){
			   console.log("클릭")
			   panTo70();
			   
		   }
		   });
		   function panTo70() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.87854167, 127.7323111);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '태백시'){
			   console.log("클릭")
			   panTo71();
			   
		   }
		   });
		   function panTo71() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.16122778, 128.9879972);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '고성군'){
			   console.log("클릭")
			   panTo72();
			   
		   }
		   });
		   function panTo72() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.9699, 128.3245417);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '양구군'){
			   console.log("클릭")
			   panTo73();
			   
		   }
		   });
		   function panTo73() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(38.10729167, 127.9922444);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '양양군'){
			   console.log("클릭")
			   panTo74();
			   
		   }
		   });
		   function panTo74() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(38.07283333, 128.6213556);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '영월군'){
			   console.log("클릭")
			   panTo75();
			   
		   }
		   });
		   function panTo75() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.18086111, 128.4640194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '인제군'){
			   console.log("클릭")
			   panTo76();
			   
		   }
		   });
		   function panTo76() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(38.06697222, 128.1726972);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '정선군'){
			   console.log("클릭")
			   panTo77();
			   
		   }
		   });
		   function panTo77() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.37780833, 128.6630861);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '철원군'){
			   console.log("클릭")
			   panTo78();
			   
		   }
		   });
		   function panTo78() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(38.14405556, 127.3157333);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '평창군'){
			   console.log("클릭")
			   panTo79();
			   
		   }
		   });
		   function panTo79() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.36791667, 128.3923528);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '홍천군'){
			   console.log("클릭")
			   panTo80();
			   
		   }
		   });
		   function panTo80() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.69442222, 127.8908417);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '화천군'){
			   console.log("클릭")
			   panTo81();
			   
		   }
		   });
		   function panTo81() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(38.10340833, 127.7103556);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "강원" && sel.value == '횡성군'){
			   console.log("클릭")
			   panTo82();
			   
		   }
		   });
		   function panTo82() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.48895833, 127.9872222);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '대덕구'){
			   console.log("클릭")
			   panTo83();
			   
		   }
		   });
		     function panTo83() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.35218384, 127.4170933);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '대전동구'){
			   console.log("클릭")
			   panTo84();
			   
		   }
		   });
		     function panTo84() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.31204028, 127.4548596);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '대전서구'){
			   console.log("클릭")
			   panTo85();
			   
		   }
		   });
		     function panTo85() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.35707299, 127.3834158);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '대전유성구'){
			   console.log("클릭")
			   panTo86();
			   
		   }
		   });
		     function panTo86() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.36405586, 127.3561363);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '대전중구'){
			   console.log("클릭")
			   panTo87();
			   
		   }
		   });
		     function panTo87() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.32582989, 127.421381);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '제천시'){
			   console.log("클릭")
			   panTo88();
			   
		   }
		   });
		     function panTo88() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.12976944, 128.1931528);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '청주시'){
			   console.log("클릭")
			   panTo89();
			   
		   }
		   });
		     function panTo89() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.58399722, 127.5117306);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		
	
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '충주시'){
			   console.log("클릭")
			   panTo90();
			   
		   }
		   });
		     function panTo90() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.98818056, 127.9281444);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '괴산군'){
			   console.log("클릭")
			   panTo91();
			   
		   }
		   });
		     function panTo91() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.81243056, 127.7888306);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '단양군'){
			   console.log("클릭")
			   panTo92();
			   
		   }
		   });
		     function panTo92() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.98178056, 128.3678417);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '보은군'){
			   console.log("클릭")
			   panTo93();
			   
		   }
		   });
		     function panTo93() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(33.450580, 126.574942);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '영동군'){
			   console.log("클릭")
			   panTo94();
			   
		   }
		   });
		     function panTo94() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.17205833, 127.7856111);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '옥천군'){
			   console.log("클릭")
			   panTo95();
			   
		   }
		   });
		     function panTo95() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.30355, 127.5736333);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '음성군'){
			   console.log("클릭")
			   panTo96();
			   
		   }
		   });
		     function panTo96() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.93740556, 127.6926222);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '진천군'){
			   console.log("클릭")
			   panTo97();
			   
		   }
		   });
		     function panTo97() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.85253889, 127.4376444);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충북" && sel.value == '청원군'){
			   console.log("클릭")
			   panTo98();
			   
		   }
		   });
		     function panTo98() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.549748, 127.431119);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '공주시'){
			   console.log("클릭")
			   panTo99();
			   
		   }
		   });
		        function panTo99() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.44361389, 127.1211194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '보령시'){
			   console.log("클릭")
			   panTo100();
			   
		   }
		   });
		        function panTo100() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.330575, 126.6148861);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '서산시'){
			   console.log("클릭")
			   panTo101();
			   
		   }
		   });
		        function panTo101() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.78209722, 126.4521639);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '아산시'){
			   console.log("클릭")
			   panTo102();
			   
		   }
		   });
		        function panTo102() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.78710556, 127.0046417);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '천안시'){
			   console.log("클릭")
			   panTo103();
			   
		   }
		   });
		        function panTo103() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.804125, 127.1524667);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '금산군'){
			   console.log("클릭")
			   panTo104();
			   
		   }
		   });
		        function panTo104() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.10586944, 127.4903083);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '논산군'){
			   console.log("클릭")
			   panTo105();
			   
		   }
		   });
		        function panTo105() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.18420278, 127.1009111);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '당진군'){
			   console.log("클릭")
			   panTo106();
			   
		   }
		   });
		        function panTo106() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.881997, 127.684597);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '부여군'){
			   console.log("클릭")
			   panTo107();
			   
		   }
		   });
		        function panTo107() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.27282222, 126.9118639);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '서천군'){
			   console.log("클릭")
			   panTo108();
			   
		   }
		   });
		        function panTo108() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.07740556, 126.6938889);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '연기군'){
			   console.log("클릭")
			   panTo109();
			   
		   }
		   });
		        function panTo109() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.474616, 127.282781);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '예산군'){
			   console.log("클릭")
			   panTo110();
			   
		   }
		   });
		        function panTo110() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.67980556, 126.850875);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '청양군'){
			   console.log("클릭")
			   panTo111();
			   
		   }
		   });
		      function panTo111() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.45626944, 126.8042556);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '태안군'){
			   console.log("클릭")
			   panTo112();
			   
		   }
		   });
		      function panTo112() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.74266667, 126.299975);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "충남" && sel.value == '홍성군'){
			   console.log("클릭")
			   panTo113();
			   
		   }
		   });
		       function panTo113() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.59836111, 126.6629083);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '군산시'){
			   console.log("클릭")
			   panTo114();
			   
		   }
		   });
		     function panTo114() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.96464167, 126.7388444);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '김제시'){
			   console.log("클릭")
			   panTo115();
			   
		   }
		   });
		     function panTo115() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.800575, 126.8827528);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '남원시'){
			   console.log("클릭")
			   panTo116();
			   
		   }
		   });
		     function panTo116() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.41325556, 127.3925);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '익산시'){
			   console.log("클릭")
			   panTo117();
			   
		   }
		   });
		     function panTo117() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.945275, 126.9598528);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '전주시'){
			   console.log("클릭")
			   panTo118();
			   
		   }
		   });
		     function panTo118() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.80918889, 127.1219194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '정읍시'){
			   console.log("클릭")
			   panTo119();
			   
		   }
		   });
		     function panTo119() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.56687222, 126.8581111);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '고창군'){
			   console.log("클릭")
			   panTo120();
			   
		   }
		   });
		     function panTo120() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.43273889, 126.7041083);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '무주군'){
			   console.log("클릭")
			   panTo121();
			   
		   }
		   });
		     function panTo121() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.00382778, 127.6628667);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '부안군'){
			   console.log("클릭")
			   panTo122();
			   
		   }
		   });
		     function panTo122() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.72853333, 126.7356778);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '순창군'){
			   console.log("클릭")
			   panTo123();
			   
		   }
		   });
		     function panTo123() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.37138889, 127.1396306);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '완주군'){
			   console.log("클릭")
			   panTo124();
			   
		   }
		   });
		     function panTo124() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.84296944, 127.1495972);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '임실군'){
			   console.log("클릭")
			   panTo125();
			   
		   }
		   });
		     function panTo125() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.60806389, 127.2847528);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '장수군'){
			   console.log("클릭")
			   panTo126();
			   
		   }
		   });
		     function panTo126() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.64429722, 127.5233);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전북" && sel.value == '진안군'){
			   console.log("클릭")
			   panTo127();
			   
		   }
		   });
		     function panTo127() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.78871944, 127.4269667);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '광양시'){
			   console.log("클릭")
			   panTo128();
			   
		   }
		   });
		      function panTo128() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.93753611, 127.6981778);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '나주시'){
			   console.log("클릭")
			   panTo129();
			   
		   }
		   });
		      function panTo129() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.01283889, 126.7128667);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '목포시'){
			   console.log("클릭")
			   panTo130();
			   
		   }
		   });
		      function panTo130() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.80878889, 126.3944194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '순천시'){
			   console.log("클릭")
			   panTo131();
			   
		   }
		   });
		      function panTo131() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.94760556, 127.4893306);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '여수시'){
			   console.log("클릭")
			   panTo132();
			   
		   }
		   });
		      function panTo132() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.75731111, 127.6643861);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		
	
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '강진군'){
			   console.log("클릭")
			   panTo133();
			   
		   }
		   });
		      function panTo133() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.63891111, 126.7691972);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	
	
	//시작해야함...........
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '고흥군'){
			   console.log("클릭")
			   panTo134();
			   
		   }
		   });
		      function panTo134() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.60806944, 127.2870556);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '곡성군'){
			   console.log("클릭")
			   panTo135();
			   
		   }
		   });
		      function panTo135() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.27895556, 127.2941083);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '구례군'){
			   console.log("클릭")
			   panTo136();
			   
		   }
		   });
		      function panTo136() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.19945833, 127.4649333);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '담양군'){
			   console.log("클릭")
			   panTo137();
			   
		   }
		   });
		      function panTo137() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.318125, 126.9901639);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '무안군'){
			   console.log("클릭")
			   panTo138();
			   
		   }
		   });
		      function panTo138() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.98736944, 126.4837);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '보성군'){
			   console.log("클릭")
			   panTo139();
			   
		   }
		   });
		      function panTo139() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.76833333, 127.0820889);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '신안군'){
			   console.log("클릭")
			   panTo140();
			   
		   }
		   });
		    function panTo140() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.78981111, 126.3817306);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '영광군'){
			   console.log("클릭")
			   panTo141();
			   
		   }
		   });
		    function panTo141() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.27416667, 126.5140861);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '영암군'){
			   console.log("클릭")
			   panTo142();
			   
		   }
		   });
		    function panTo142() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.79698889, 126.6986194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '완도군'){
			   console.log("클릭")
			   panTo143();
			   
		   }
		   });
		    function panTo143() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.30785278, 126.7570972);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '장성군'){
			   console.log("클릭")
			   panTo144();
			   
		   }
		   });
		    function panTo144() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.29881111, 126.786975);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '장흥군'){
			   console.log("클릭")
			   panTo145();
			   
		   }
		   });
		    function panTo145() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.678525, 126.9091083);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '진도군'){
			   console.log("클릭")
			   panTo146();
			   
		   }
		   });
		    function panTo146() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.48375, 126.2655444);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '함평군'){
			   console.log("클릭")
			   panTo147();
			   
		   }
		   });
		      function panTo147() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.06274444, 126.5186194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '해남군'){
			   console.log("클릭")
			   panTo148();
			   
		   }
		   });
		       function panTo148() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.57043611, 126.6012889);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '화순군'){
			   console.log("클릭")
			   panTo149();
			   
		   }
		   });
		       function panTo149() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.06148056, 126.9885667);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '광산구'){
			   console.log("클릭")
			   panTo150();
			   
		   }
		   });
		       function panTo150() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.13995836, 126.793668);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '광주남구'){
			   console.log("클릭")
			   panTo151();
			   
		   }
		   });
		       function panTo151() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.13301749, 126.9025572);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '광주동구'){
			   console.log("클릭")
			   panTo152();
			   
		   }
		   });
		       function panTo152() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.14627776, 126.9230903);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '광주북구'){
			   console.log("클릭")
			   panTo153();
			   
		   }
		   });
		       function panTo153() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.1812138, 126.9010806);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "전남" && sel.value == '광주서구'){
			   console.log("클릭")
			   panTo154();
			   
		   }
		   });
		       function panTo154() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.1525164, 126.8895063);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '경산시'){
			   console.log("클릭")
			   panTo155();
			   
		   }
		   });
		   function panTo155() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.82208889, 128.7434639);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '경주시'){
			   console.log("클릭")
			   panTo156();
			   
		   }
		   });
		   function panTo156() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.85316944, 129.2270222);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '구미시'){
			   console.log("클릭")
			   panTo157();
			   
		   }
		   });
		   function panTo157() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.11655, 128.3467778);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '김천시'){
			   console.log("클릭")
			   panTo158();
			   
		   }
		   });
		   function panTo158() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.13689722, 128.1158);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '문경시'){
			   console.log("클릭")
			   panTo159();
			   
		   }
		   });
		   function panTo159() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.58363056, 128.1890194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '상주시'){
			   console.log("클릭")
			   panTo160();
			   
		   }
		   });
		   function panTo160() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.40796944, 128.1612639);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '안동시'){
			   console.log("클릭")
			   panTo161();
			   
		   }
		   });
		   function panTo161() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.56546389, 128.7316222);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '영주시'){
			   console.log("클릭")
			   panTo162();
			   
		   }
		   });
		   function panTo162() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.80293611, 128.6263444);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '영천시'){
			   console.log("클릭")
			   panTo163();
			   
		   }
		   });
		   function panTo163() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.97005278, 128.940775);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '포항시'){
			   console.log("클릭")
			   panTo164();
			   
		   }
		   });
		   function panTo164() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.00568611, 129.3616667);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '고령군'){
			   console.log("클릭")
			   panTo165();
			   
		   }
		   });
		   function panTo165() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.72298611, 128.2650222);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '군위군'){
			   console.log("클릭")
			   panTo166();
			   
		   }
		   });
		   function panTo166() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.23999722, 128.5750778);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '봉화군'){
			   console.log("클릭")
			   panTo167();
			   
		   }
		   });
		   function panTo167() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.89026111, 128.734875);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '성주군'){
			   console.log("클릭")
			   panTo168();
			   
		   }
		   });
		   function panTo168() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.91621111, 128.2851528);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '영덕군'){
			   console.log("클릭")
			   panTo169();
			   
		   }
		   });
		   function panTo169() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.41210278, 129.3683556);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '영양군'){
			   console.log("클릭")
			   panTo170();
			   
		   }
		   });
		   function panTo170() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.664275, 129.1146222);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '예천군'){
			   console.log("클릭")
			   panTo171();
			   
		   }
		   });
		   function panTo171() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.65495000, 128.4550222);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '울릉군'){
			   console.log("클릭")
			   panTo172();
			   
		   }
		   });
		   function panTo172() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(37.48057500, 130.9037889);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '울진군'){
			   console.log("클릭")
			   panTo173();
			   
		   }
		   });
		   function panTo173() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.99018611, 129.4027861);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '의성군'){
			   console.log("클릭")
			   panTo174();
			   
		   }
		   });
		   function panTo174() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.34975833, 128.6993639);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '청도군'){
			   console.log("클릭")
			   panTo175();
			   
		   }
		   });
		   function panTo175() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.64431111, 128.7362000);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '청송군'){
			   console.log("클릭")
			   panTo176();
			   
		   }
		   });
		   function panTo176() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(36.43329167, 129.0594000);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '칠곡군'){
			   console.log("클릭")
			   panTo177();
			   
		   }
		   });
		   function panTo177() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.99254722, 128.4037972);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '남구'){
			   console.log("클릭")
			   panTo178();
			   
		   }
		   });
		   function panTo178() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.84621351, 128.597702);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '달서구'){
			   console.log("클릭")
			   panTo179();
			   
		   }
		   });
		   function panTo179() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.82692778, 128.5350639);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '동구'){
			   console.log("클릭")
			   panTo180();
			   
		   }
		   });
		   function panTo180() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.88682728, 128.6355584);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '북구'){
			   console.log("클릭")
			   panTo181();
			   
		   }
		   });
		   function panTo181() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.8858646, 128.5828924);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '서구'){
			   console.log("클릭")
			   panTo182();
			   
		   }
		   });
		   function panTo182() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.87194054, 128.5591601);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '수성구'){
			   console.log("클릭")
			   panTo183();
			   
		   }
		   });
		   function panTo183() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.85835148, 128.6307011);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '중구'){
			   console.log("클릭")
			   panTo184();
			   
		   }
		   });
		   function panTo184() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.86952722, 128.6061745);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경북" && sel.value == '달성군'){
			   console.log("클릭")
			   panTo185();
			   
		   }
		   });
		   function panTo185() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.77475029, 128.4313995);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '울산남구'){
			   console.log("클릭")
			   panTo186();
			   
		   }
		   });
		   function panTo186() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.54404265, 129.3301754);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '울산동구'){
			   console.log("클릭")
			   panTo187();
			   
		   }
		   });
		   function panTo187() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.50516996, 129.4166919);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '울산북구'){
			   console.log("클릭")
			   panTo188();
			   
		   }
		   });
		   function panTo188() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.58270783, 129.361245);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '울산중구'){
			   console.log("클릭")
			   panTo189();
			   
		   }
		   });
		   function panTo189() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.56971228, 129.3328162);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '울산울주군'){
			   console.log("클릭")
			   panTo190();
			   
		   }
		   });
		   function panTo190() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.52230648, 129.2424748);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '거제시'){
			   console.log("클릭")
			   panTo191();
			   
		   }
		   });
		   function panTo191() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.87735833, 128.6233556);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '김해시'){
			   console.log("클릭")
			   panTo192();
			   
		   }
		   });
		   function panTo192() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.22550556, 128.8916667);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '마산시'){
			   console.log("클릭")
			   panTo193();
			   
		   }
		   });
		   function panTo193() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.196874 , 128.567863 );
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '밀양시'){
			   console.log("클릭")
			   panTo194();
			   
		   }
		   });
		   function panTo194() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.50077778, 128.7489444);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '사천시'){
			   console.log("클릭")
			   panTo195();
			   
		   }
		   });
		   function panTo195() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.00028333, 128.0667778);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '울산시'){
			   console.log("클릭")
			   panTo196();
			   
		   }
		   });
		   function panTo196() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.546, 35.546);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '진주시'){
			   console.log("클릭")
			   panTo197();
			   
		   }
		   });
		   function panTo197() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.17703333, 128.1100000);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '진해시'){
			   console.log("클릭")
			   panTo198();
			   
		   }
		   });
		   function panTo198() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.1330600 , 128.710081 );
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '창원시'){
			   console.log("클릭")
			   panTo199();
			   
		   }
		   });
		   function panTo199() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.2540033, 128.6401544);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '통영시'){
			   console.log("클릭")
			   panTo200();
			   
		   }
		   });
		   function panTo200() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.85125833, 128.4352778);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '거창군'){
			   console.log("클릭")
			   panTo201();
			   
		   }
		   });
		   function panTo201() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.683625, 127.9116556);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '고성군'){
			   console.log("클릭")
			   panTo202();
			   
		   }
		   });
		   function panTo202() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.9699, 128.3245417);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '남해군'){
			   console.log("클릭")
			   panTo203();
			   
		   }
		   });
		   function panTo203() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(34.83455833, 127.8944667);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '산청군'){
			   console.log("클릭")
			   panTo204();
			   
		   }
		   });
		   function panTo204() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.41249167, 127.8756194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '양산시'){
			   console.log("클릭")
			   panTo205();
			   
		   }
		   });
		   function panTo205() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.33192778, 129.0394111);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '의령군'){
			   console.log("클릭")
			   panTo206();
			   
		   }
		   });
		   function panTo206() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.31911944, 128.2638222);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '창녕군'){
			   console.log("클릭")
			   panTo207();
			   
		   }
		   });
		   function panTo207() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.54153611, 128.4945333);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '하동군'){
			   console.log("클릭")
			   panTo208();
			   
		   }
		   });
		   function panTo208() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.06420278, 127.7534306);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '함안군'){
			   console.log("클릭")
			   panTo209();
			   
		   }
		   });
		   function panTo209() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.26940556, 128.4087083);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '함양군'){
			   console.log("클릭")
			   panTo210();
			   
		   }
		   });
		   function panTo210() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.51746944, 127.7274194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '합천군'){
			   console.log("클릭")
			   panTo211();
			   
		   }
		   });
		   function panTo211() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.56361667, 128.1679306);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '강서구'){
			   console.log("클릭")
			   panTo212();
			   
		   }
		   });
		   function panTo212() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.20916389, 128.9829083);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '금정구'){
			   console.log("클릭")
			   panTo213();
			   
		   }
		   });
		   function panTo213() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.24007778, 129.0943194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '남구'){
			   console.log("클릭")
			   panTo214();
			   
		   }
		   });
		   function panTo214() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.13340833, 129.0865);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '동구'){
			   console.log("클릭")
			   panTo215();
			   
		   }
		   });
		    function panTo215() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.13589444, 129.059175);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '동래구'){
			   console.log("클릭")
			   panTo216();
			   
		   }
		   });
		    function panTo216() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.20187222, 129.0858556);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '부산진구'){
			   console.log("클릭")
			   panTo217();
			   
		   }
		   });
		    function panTo217() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.15995278, 129.0553194);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '북구'){
			   console.log("클릭")
			   panTo218();
			   
		   }
		   });
		    function panTo218() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.19418056, 128.992475);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '사상구'){
			   console.log("클릭")
			   panTo219();
			   
		   }
		   });
		    function panTo219() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.14946667, 128.9933333);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '사하구'){
			   console.log("클릭")
			   panTo220();
			   
		   }
		   });
		    function panTo220() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.10142778, 128.9770417);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '서구'){
			   console.log("클릭")
			   panTo221();
			   
		   }
		   });
		    function panTo221() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.09483611, 129.0263778);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '수영구'){
			   console.log("클릭")
			   panTo222();
			   
		   }
		   });
		    function panTo222() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.14246667, 129.115375);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '연제구'){
			   console.log("클릭")
			   panTo223();
			   
		   }
		   });
		    function panTo223() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.17318611, 129.082075);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '영도구'){
			   console.log("클릭")
			   panTo224();
			   
		   }
		   });
		    function panTo224() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.08811667, 129.0701861);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '중구'){
			   console.log("클릭")
			   panTo225();
			   
		   }
		   });
		    function panTo225() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.10321667, 129.0345083);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '해운대구'){
			   console.log("클릭")
			   panTo226();
			   
		   }
		   });
		    function panTo226() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.16001944, 129.1658083);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "경남" && sel.value == '기장군'){
			   console.log("클릭")
			   panTo227();
			   
		   }
		   });
		    function panTo227() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(35.24477541, 129.2222873);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "제주" && sel.value == '서귀포시'){
			   console.log("클릭")
			   panTo228();
			   
		   }
		   });
		    function panTo228() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(33.25235, 126.5125556);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
		$searchBtn.addEventListener("click",e=>{
		   if($region.value == "제주" && sel.value == '제주시'){
			   console.log("클릭")
			   panTo229();
			   
		   }
		   });
		    function panTo229() {
	    // 이동할 위도 경도 위치를 생성합니다 
	    var moveLatLon = new kakao.maps.LatLng(33.49631111, 126.5332083);
	    map.panTo(moveLatLon);            
	  
	    // 지도 중심을 부드럽게 이동시킵니다
	    // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
	};  
	