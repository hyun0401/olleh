package com.kh.ollehapp.map.svc;

import java.util.List;



import com.kh.ollehapp.map.dto.MapDTO;
import com.kh.ollehapp.web.form.LongLatForm;
import com.kh.ollehapp.web.form.MapForm;



public interface MapSVC {

	//마커표시
	List<MapDTO> findMarker();
	
	//지역줌인
	MapDTO zoomRegion(String region,String county);
	
	//체험마일목록
	List<MapForm> villageList(String region,String county); 
	
	//위도경도
	List<LongLatForm> findLongLat();
}
