package com.kh.ollehapp.web.form;

import lombok.Data;

@Data
public class MapForm {

	private String id;                  //NUMBER(10), --마을번호
	private String exprnVillageNm;      //VARCHAR2(150) not null, --마을이름
	private String homepageUrl;         //VARCHAR2(60) not null, --홈페이지주소
	private String rprsntvName;         //VARCHAR2(15) not null, --대표자 성명
	private String phoneNumber;         //varchar2(20) not null, --대표자 연락처
	private String ctprvnNm;            //VARCHAR2(60) NOT NULL, --시도명
	private String signguNm;            //VARCHAR2(60) NOT NULL, --시군구명
	private String exprnSe;             //VARCHAR2(30), --체험프로그램구분
	private String exprnCn;             //VARCHAR2(240), --체험프로그램명
	private String rdnmadr;             //VARCHAR2(300) not null,  --도로명주소
}
