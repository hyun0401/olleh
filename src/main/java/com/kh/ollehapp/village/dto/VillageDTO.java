package com.kh.ollehapp.village.dto;

import lombok.Data;

@Data
public class VillageDTO {
	private long id; 									//마을고유번호
	private String exprnVillageNm;		//마을이름
	private String homepageUrl;       //홈페이지주소
	private String rprsntvName;       //대표자이름
	private String phoneNumber;       //대표자 연락처
	private String ctpvnNm;           //시도명
	private String signguNm;          //시군구명
	private String exprnSe;           //체험프로그램종류
	private String exprnCn;           //체험프로그램명
	private String rdnmadr;           //도로명주소
	private String villageLatitude;   //위도
	private String villageLongitude;  //경도
	
	
}
