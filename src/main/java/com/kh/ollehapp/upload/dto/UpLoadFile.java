package com.kh.ollehapp.upload.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * 업로드한 파일의 메타정보
 * @author mypc
 *
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UpLoadFile {
  private String storeFileName; 	
  private String uploadFileName; 	
  private String fileSize;					
  private String fileType;					
}