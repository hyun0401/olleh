package com.kh.ollehapp.upload.dao;

import java.util.List;

import com.kh.ollehapp.upload.dto.UpLoadFileDTO;

public interface UpLoadFileDAO {
	
	/**
	 * 리뷰 사진 추가
	 * @param list
	 */
	void addFile(UpLoadFileDTO uploadFileDTO);		//1개 추가
	void addFiles(List<UpLoadFileDTO> list);			//여러개 추가
	
	/**
	 * 리뷰 사진 조회
	 * @param ReviewNum
	 * @return
	 */
	List<UpLoadFileDTO> getFiles(Long reviewNum);
	
	/**
	 * 리뷰 사진 삭제
	 */
	void deleteFileByReviewNum(Long reviewNum);
	
	List<String> getStoreFileName(Long reviewNum);
	
	void deleteFileBystoreFileName(String storeFileName);
	
}
