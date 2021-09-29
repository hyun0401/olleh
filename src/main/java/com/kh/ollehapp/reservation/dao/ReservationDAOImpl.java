package com.kh.ollehapp.reservation.dao;

import java.util.List;


import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.kh.ollehapp.reservation.dto.ReservationDTO;
import com.kh.ollehapp.web.form.ReservationForm;

import lombok.RequiredArgsConstructor;

@Repository
@RequiredArgsConstructor
public class ReservationDAOImpl implements ReservationDAO {


	private final JdbcTemplate jt;
	/**
	 * 마을정보
	 */
	@Override
	public ReservationForm findvill(long id) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select ctprvnnm,signgunm,exprnse ");
		sql.append(" from village where id=? ");
		
		ReservationForm reForm = jt.queryForObject(sql.toString(), new BeanPropertyRowMapper<>(ReservationForm.class),id);
		return reForm;
	}
	
	/**
	 * 예약목록조회
	 */
	@Override
	public List<ReservationDTO> findReservation(String memberId) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select reservationNum, ");
		sql.append("   exprnVillageNm, ");
		sql.append("   reservationDate, ");
		sql.append("   checkin, ");
		sql.append("   total, ");
		sql.append("   reservation.exprnCn ");
		sql.append("   from village,reservation,member ");
		sql.append("  where village.id=reservation.id ");
		sql.append("    and member.memberId = reservation.memberId ");
		sql.append("    and reservation.memberId = ? ");
		
		

		
		
		
		List<ReservationDTO> list = jt.query(sql.toString(),
												new BeanPropertyRowMapper<>(ReservationDTO.class),memberId);
		
		if(list == null) return null;
		
		
		return list;
	}

	/**
	 * 예약등록
	 */
@Override
public int editReservation(ReservationForm reservationForm,String memberId) {
	
	StringBuffer sql = new StringBuffer();
	sql.append(" insert into reservation(reservationNum, ");
	sql.append(" memberId,id, ");
	sql.append(" reservationDate, ");
	sql.append(" checkin, ");
	sql.append(" total, ");
	sql.append(" exprnCn, ");
	sql.append(" reservationName, ");
	sql.append(" reservationTel,ctprvnNm,signguNm,exprnSe)  ");
	sql.append(" values(reservation_reservationNum_seq.nextval, ");
	sql.append(" ?,  ");
	sql.append(" ?, ");
	sql.append(" ?, ");
	sql.append(" ?, ");
	sql.append(" ?, ");
	sql.append(" ?, ");
	sql.append(" ?, ");
	sql.append(" ?, ");
	sql.append(" ?, ");
	sql.append(" ?, ");
	sql.append(" ? ) ");
	
	int result = jt.update(sql.toString(),
			 memberId,
			 reservationForm.getId(),
			 reservationForm.getReservationDate(),
			 reservationForm.getCheckin(),
			 reservationForm.getTotal(),
			 reservationForm.getExprncn(),
			 reservationForm.getReservationName(),
			 reservationForm.getReservationTel(),
			 reservationForm.getCtprvnNm(),
			 reservationForm.getSignguNm(),
			 reservationForm.getExprnSe());
	
	return result;
}

/**
 * 예약인원확인
 */
@Override
public int reservationCount(long id) {
	String sql = " select villagecount from village where id=? ";
	
	int result = jt.queryForObject(sql,Integer.class,id);
	
	return result;
}

/**
 * 예약인원갱신
 */
@Override
public void editCount(int newCount,long id) {
String sql = "	update village set villageCount = ? where id =? ";

	jt.update(sql,newCount,id);
}

/**
 * 예약취소
 */
@Override
public void deleteReservation(long reservationNum) {
	StringBuffer sql = new StringBuffer();
	sql.append(" delete reservation ");
  sql.append(" where reservationNum=? ");
  
  jt.update(sql.toString(),reservationNum);
	
}

/**
 * 관리자 예약 전체 조회
 */
@Override
public List<ReservationDTO> managerReservation(String ctprvnNm, String signguNm, String exprnSe) {
	StringBuffer sql = new StringBuffer();
	sql.append(" select  ");
	sql.append("   reservationNum, ");
	sql.append("   reservationDate, ");
	sql.append("   checkin, ");
	sql.append("   total, ");
	sql.append("   reservationName ");
	sql.append("   from reservation ");
	sql.append("  where ctprvnNm = ? ");
	sql.append("    and signguNm = ? ");
	sql.append("    and exprnSe = ? ");
	
	List<ReservationDTO> list = jt.query(sql.toString(),
											new BeanPropertyRowMapper<>(ReservationDTO.class),ctprvnNm,signguNm,exprnSe);
	return list;
}










	}


