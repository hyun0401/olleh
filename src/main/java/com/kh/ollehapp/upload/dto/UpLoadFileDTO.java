package com.kh.ollehapp.upload.dto;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class UpLoadFileDTO {
	 private long fileNum; 						//파일아이디 
	 private long reviewNum; 					//리뷰번호
	 private String storeFileName; 		//서버보관 파일명 store_fname varchar2(50),
	 private String uploadFileName; 	//업로드 파일명 upload_fname varchar2(50),
	 private String fileSize;					//파일 크기 fsize varchar2(45),
	 private String fileType;					//파일 유형 ftype varchar2(50),
	 private LocalDateTime cdate; 		//생성일시 timestamp default systimestamp,
	 private LocalDateTime udate; 		// 수정일시 udate timestamp,
}
