package com.kh.ollehapp.reservation.dao;

import java.util.List;

import com.kh.ollehapp.reservation.dto.ReservationDTO;
import com.kh.ollehapp.web.form.ReservationForm;

public interface ReservationDAO {

	/**
	 * 마을정보
	 */
	ReservationForm findvill(long id);
	/**
	 * 예약목록
	 */
	List<ReservationDTO> findReservation(String memberId);
	
	/**
	 * 예약등록
	 */
	int editReservation(ReservationForm reservationForm,String memberId);
	
	/**
	 * 예약인원확인
	 */
	
	int reservationCount(long id);
	
	/**
	 * 예약인원갱신
	 */
	void editCount(int newCount,long id);
	
	/**
	 * 예약취소
	 */
	void deleteReservation(long reservationNum);

	/**
	 * 관리자예약조회
	 * @param ctprvnNmg
	 * @param signguNm
	 * @param exprnSe
	 * @return
	 */
	List<ReservationDTO> managerReservation(String ctprvnNm, String signguNm, String exprnSe);
}
