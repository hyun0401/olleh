package com.kh.ollehapp.map.dao;

import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.kh.ollehapp.map.dto.MapDTO;
import com.kh.ollehapp.reservation.dto.ReservationDTO;
import com.kh.ollehapp.web.form.LongLatForm;
import com.kh.ollehapp.web.form.MapForm;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Repository
@RequiredArgsConstructor
public class MapDAOImpl implements MapDAO {

	private final JdbcTemplate jt;
	
	/**
	 * 마커출력
	 */
	@Override
	public List<MapDTO> findMarker() {
	String sql="	select id,exprnVillageNm,exprnSe,exprnCn,rdnmadr,villageLatitude,villageLongitude   from village ";
	
	List<MapDTO> list = jt.query(sql, new BeanPropertyRowMapper<>(MapDTO.class));

	log.info("list:{}",list.indexOf(list));
	
		return list;
	}

	/**
	 * 지역줌
	 */
	@Override
	public MapDTO zoomRegion(String region, String county) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select villageLatitude,villageLongitude " );
		sql.append(" from village " );
		sql.append(" where ctprvnNm = ? and signguNm = ? " );
		sql.append("  and rownum = 1 " );
		
		MapDTO mapDTO = jt.queryForObject(sql.toString(), new BeanPropertyRowMapper<>(MapDTO.class),region,county);
		
		return mapDTO;
	}
	
	/**
	 * 마을목록출력
	 */
	@Override
	public List<MapForm> villageList(String region,String county) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select id,exprnVillageNm, ");
		sql.append(" homepageUrl,rprsntvName, ");
		sql.append(" phoneNumber,ctprvnNm, ");
		sql.append(" signguNm,exprnSe, ");
		sql.append(" exprnCn,rdnmadr ");
		sql.append(" from village ");
		sql.append(" where ctprvnnm = ? and signgunm = ? ");
		
		List<MapForm> list = jt.query(sql.toString(), new BeanPropertyRowMapper<>(MapForm.class),region,county);
		
		return list;
	}
	
	/**
	 * 
	 */
	@Override
	public List<LongLatForm> findLongLat() {
		StringBuffer sql = new StringBuffer();
		sql.append(" select villageLatitude,villageLongitude " );
		sql.append(" from village " );
		
		List<LongLatForm> list = jt.query(sql.toString(), new BeanPropertyRowMapper<>(LongLatForm.class));
		
		return list;
	}
	
	
	
	
	
	
	
	
	
	
	
}
