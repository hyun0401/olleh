package com.kh.ollehapp.web;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kh.ollehapp.review.svc.ReviewSVC;
import com.kh.ollehapp.upload.FileStore;
import com.kh.ollehapp.upload.dao.UpLoadFileDAO;
import com.kh.ollehapp.web.api.JsonResult;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequiredArgsConstructor
//@RequestMapping("review")
public class APIReviewController {

	private final ReviewSVC reviewSVC;
	private final UpLoadFileDAO upLoadFileDAO;
	private final FileStore fileStore;
	
	//첨부파일 삭제
	@DeleteMapping("/review/attach/{storeFileName}/")
	public JsonResult<String> delFile(@PathVariable String storeFileName){
		log.info("첨부파일삭제출력:{}",storeFileName);
		if(fileStore.deleteFile(storeFileName)) {
			upLoadFileDAO.deleteFileBystoreFileName(storeFileName);
		}
		return new JsonResult<String>("00","ok","파일삭제 성공"); 
	}
}
