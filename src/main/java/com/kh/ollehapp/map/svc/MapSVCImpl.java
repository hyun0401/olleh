package com.kh.ollehapp.map.svc;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kh.ollehapp.map.dao.MapDAO;
import com.kh.ollehapp.map.dto.MapDTO;
import com.kh.ollehapp.web.form.LongLatForm;
import com.kh.ollehapp.web.form.MapForm;

import lombok.RequiredArgsConstructor;

@Service
@Transactional
@RequiredArgsConstructor
public class MapSVCImpl implements MapSVC {

	private final MapDAO mapDAO;
	
	/**
	 * 마커표시
	 */
	@Override
	public List<MapDTO> findMarker() {
		
		return mapDAO.findMarker();
	}
	
	/**
	 * 지역줌인
	 */

	@Override
	public MapDTO zoomRegion(String region, String county) {
		// TODO Auto-generated method stub
		return mapDAO.zoomRegion(region, county);
	}
	
	/**
	 * 체험마을목록
	 */
	@Override
	public List<MapForm> villageList(String region, String county) {
		
		return mapDAO.villageList(region, county);
	}
	
	/**
	 * 위도경도
	 */
@Override
public List<LongLatForm> findLongLat() {
	
	return mapDAO.findLongLat();
}
	}

