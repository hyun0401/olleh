package com.kh.ollehapp.web.form;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReservationForm {
	private String reservationDate;
	private String memberId;
	private long id;
	private String checkin;
	private int total;
	private String exprncn;
	private String reservationName;
	private String reservationTel;
	private String ctprvnNm;
	private String signguNm;
	private String exprnSe;
}
