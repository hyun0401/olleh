package com.kh.ollehapp.map.dao;

import java.util.List;

import com.kh.ollehapp.map.dto.MapDTO;
import com.kh.ollehapp.web.form.LongLatForm;
import com.kh.ollehapp.web.form.MapForm;

public interface MapDAO {

	//마커출력
	List<MapDTO> findMarker();
	
	//지역출력
	MapDTO zoomRegion(String region,String county);
	
	//마을목록출력
	List<MapForm> villageList(String region,String county);
	
	//위도경도
	List<LongLatForm> findLongLat();
}
