package com.kh.ollehapp.map.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data

public class MapDTO {
	private String id;
	private String exprnVillageNm; //체험마을이름
	private String exprnSe; //체험프로그램 종류
	private String exprnCn; //체험프로그램 이름
	private String rdnmadr; //체험마을 주소
	private String region; //시도
	private String county; //시군구
	private String villageLatitude; //위도
	private String villageLongitude; //경도
	
}
