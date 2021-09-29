package com.kh.ollehapp.reservation.svc;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.ollehapp.reservation.dao.ReservationDAO;
import com.kh.ollehapp.reservation.dto.ReservationDTO;
import com.kh.ollehapp.web.form.ReservationForm;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor

public class ReservationSVCImpl implements ReservationSVC {

	private final ReservationDAO reservationDAO;
	
	/**
	 * 마을정보
	 */
	@Override
	public ReservationForm findvill(long id) {
		
		return reservationDAO.findvill(id);
	}
	
	/**
	 * 예약목록
	 */
	@Override
	public List<ReservationDTO> findReservation(String memberId) {
		
		return reservationDAO.findReservation(memberId);
	}

	/**
	 * 예약등록
	 */
@Override
public int editReservation(ReservationForm reservationForm,String memberid) {
	int result = 0;
	result = reservationDAO.editReservation(reservationForm,memberid);
	return result;

}
 
/**
 * 예약인원확인
 */
@Override
public int reservationCount(long id) {
	
	return reservationDAO.reservationCount(id);
}

/**
 * 예약인원갱신
 */
@Override
public void editCount(int newCount, long id) {
	reservationDAO.editCount(newCount, id);
	
}

/**
 * 예약취소
 */
@Override
public void deleteReservation(long reservationNum) {
	reservationDAO.deleteReservation(reservationNum);
}

@Override
public List<ReservationDTO> managerReservation(String ctprvnNm, String signguNm, String exprnSe) {
	
	return reservationDAO.managerReservation(ctprvnNm, signguNm, exprnSe);
}

}
