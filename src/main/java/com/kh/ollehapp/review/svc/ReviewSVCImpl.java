package com.kh.ollehapp.review.svc;


import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.kh.ollehapp.upload.FileStore;
import com.kh.ollehapp.upload.dto.UpLoadFileDTO;
import com.kh.ollehapp.upload.dto.UpLoadFile;
import com.kh.ollehapp.upload.dao.UpLoadFileDAO;
import com.kh.ollehapp.review.dao.ReviewDAO;
import com.kh.ollehapp.review.dto.ReviewDTO;
import com.kh.ollehapp.review.dto.ReviewViewDTO;
import com.kh.ollehapp.web.form.reviewForm;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


@Service
@Slf4j
@RequiredArgsConstructor
public class ReviewSVCImpl implements ReviewSVC{

	private final ReviewDAO reviewDAO;
	private final UpLoadFileDAO upLoadFileDAO;
	private final FileStore fileStore;
	
	/**
	 * 리뷰등록
	 * @throws IOException 
	 * @throws IllegalStateException 
	 */
	@Override
	public ReviewDTO editReview(ReviewDTO reviewDTO,ReviewDTO reviewDTO2) throws IllegalStateException, IOException{
		
		reviewDTO.setMemberId(reviewDTO2.getMemberId());
		reviewDTO.setId(reviewDTO2.getId());
		
		//리뷰등록
		ReviewDTO saveReviewDTO = reviewDAO.editReview(reviewDTO);
		log.info("saveReviewDTO:{}",saveReviewDTO);
		
		List<UpLoadFile> storeImageFiles = fileStore.storeFiles(reviewDTO.getMfiles());
		
		upLoadFileDAO.addFiles(convert(saveReviewDTO.getReviewNum(),storeImageFiles));
		
		return saveReviewDTO;
	}


	private List<UpLoadFileDTO> convert(Long reviewNum,List<UpLoadFile> storeImageFiles) {
		List<UpLoadFileDTO> list = new ArrayList<>();
		
		for(UpLoadFile file : storeImageFiles) {
			UpLoadFileDTO uploadFileDTO = convert(reviewNum,file);
			list.add( uploadFileDTO );
		}
		
		return list;
	}
	
	private UpLoadFileDTO convert(Long reviewNum, UpLoadFile file) {
		UpLoadFileDTO uploadFileDTO = new UpLoadFileDTO();
		BeanUtils.copyProperties(file, uploadFileDTO);
		uploadFileDTO.setReviewNum(reviewNum);
		
		return uploadFileDTO;
	}
	/**
	 * 예약조회
	 */
	@Override
	public ReviewDTO findReservation(String memberId) {
		
		return reviewDAO.findReservation(memberId);
	}
	/**
	 * 리뷰조회
	 */
	@Override
	public List<reviewForm> findReview(String memberId) {
		
		return reviewDAO.findReview(memberId);
	}

	/**
	 * 리뷰목록조회
	 */
	@Override
	public ReviewDTO findReveiwList(String memberId,long reviewNum) {
		
		return reviewDAO.findReveiwList(memberId,reviewNum);
	}
	/**
	 * 리뷰목록조회
	 */
	@Override
	public ReviewDTO findReveiwList(long reviewNum) {
		
		return reviewDAO.findReveiwList2(reviewNum);
	}


	/**
	 * 리뷰조회 + 이미지 조회 내가한거
	 */
	@Override
	public ReviewViewDTO findReviewView(String memberId, long reviewNum) {
		//이미지 정보 가져오기
		ReviewDTO reviewDTO = findReveiwList(memberId, reviewNum);
		
		List<UpLoadFileDTO> list2 = upLoadFileDAO.getFiles(reviewNum);
		
		ReviewViewDTO reviewViewDTO = new ReviewViewDTO();
		
		reviewViewDTO.setReviewNum(reviewDTO.getReviewNum());
		reviewViewDTO.setReviewTitle(reviewDTO.getReviewTitle());
		reviewViewDTO.setMemberId(reviewDTO.getMemberId());
		reviewViewDTO.setRCDATE(reviewDTO.getRCDATE());
		reviewViewDTO.setRUDATE(reviewDTO.getRUDATE());
		reviewViewDTO.setRHIT(reviewDTO.getRHIT());
		reviewViewDTO.setReviewContent(reviewDTO.getReviewContent());
		reviewViewDTO.setScore(reviewDTO.getScore());
		reviewViewDTO.setId(reviewDTO.getId());
		
		if(list2 != null && list2.size() > 0) {
			reviewViewDTO.setImageFiles(convertToUploadFile(list2));
		}
		return reviewViewDTO;
	}
	
	private UpLoadFile convertToUploadFile(UpLoadFileDTO upLoadFileDTO) {
		UpLoadFile upLoadFile = new UpLoadFile();
		upLoadFile.setStoreFileName(upLoadFileDTO.getStoreFileName());
		upLoadFile.setUploadFileName(upLoadFileDTO.getUploadFileName());
		upLoadFile.setFileSize(upLoadFileDTO.getFileSize());
		upLoadFile.setFileType(upLoadFileDTO.getFileType());
		
		return upLoadFile;
	}
	
	private List<UpLoadFile> convertToUploadFile(List<UpLoadFileDTO> list) {
		List<UpLoadFile> upLoadFiles = new ArrayList();
		for(UpLoadFileDTO f : list) {
			upLoadFiles.add(convertToUploadFile(f));
		}
		
		return upLoadFiles;
	}
	
	/**
	 * 리뷰조회 + 이미지 조회 내가한거
	 */
	@Override
	public ReviewViewDTO findReviewView2(long reviewNum) {
		//이미지 정보 가져오기
		ReviewDTO reviewDTO = findReveiwList(reviewNum);
		
		List<UpLoadFileDTO> list2 = upLoadFileDAO.getFiles(reviewNum);
		
		ReviewViewDTO reviewViewDTO = new ReviewViewDTO();
		
		reviewViewDTO.setReviewNum(reviewDTO.getReviewNum());
		reviewViewDTO.setReviewTitle(reviewDTO.getReviewTitle());
		reviewViewDTO.setMemberId(reviewDTO.getMemberId());
		reviewViewDTO.setRCDATE(reviewDTO.getRCDATE());
		reviewViewDTO.setRUDATE(reviewDTO.getRUDATE());
		reviewViewDTO.setRHIT(reviewDTO.getRHIT());
		reviewViewDTO.setReviewContent(reviewDTO.getReviewContent());
		reviewViewDTO.setScore(reviewDTO.getScore());
		reviewViewDTO.setId(reviewDTO.getId());
		
		if(list2 != null && list2.size() > 0) {
			reviewViewDTO.setImageFiles(convertToUploadFile(list2));
		}
		return reviewViewDTO;
	}
	
	private UpLoadFile convertToUploadFile2(UpLoadFileDTO upLoadFileDTO) {
		UpLoadFile upLoadFile = new UpLoadFile();
		upLoadFile.setStoreFileName(upLoadFileDTO.getStoreFileName());
		upLoadFile.setUploadFileName(upLoadFileDTO.getUploadFileName());
		upLoadFile.setFileSize(upLoadFileDTO.getFileSize());
		upLoadFile.setFileType(upLoadFileDTO.getFileType());
		
		return upLoadFile;
	}
	
	private List<UpLoadFile> convertToUploadFile2(List<UpLoadFileDTO> list) {
		List<UpLoadFile> upLoadFiles = new ArrayList();
		for(UpLoadFileDTO f : list) {
			upLoadFiles.add(convertToUploadFile(f));
		}
		
		return upLoadFiles;
	}

	
	/**
	 * 리뷰수정
	 * @throws IOException 
	 * @throws IllegalStateException 
	 */
	@Override
	public void modifyReview(String memberId, ReviewDTO reviewDTO) throws IllegalStateException, IOException {
		//여기서
		List<UpLoadFile> storeImageFiles = fileStore.storeFiles(reviewDTO.getMfiles());
		
		upLoadFileDAO.addFiles(convert(reviewDTO.getReviewNum(),storeImageFiles));
		
		//여기까지
		reviewDAO.modifyReview(memberId, reviewDTO);
		
	}
	
	/**
	 * 리뷰삭제
	 */
	
	@Override
	public void deleteReviw(long reviewNum) {
		log.info("서비스에서 삭제");
		//삭제할 파일 가져옴
		List<String> storeFileName = upLoadFileDAO.getStoreFileName(reviewNum);
		log.info("storeFileName가져오기:{}",storeFileName);
		//리뷰삭제
		reviewDAO.deleteReviw(reviewNum);
		//파일 삭제
		fileStore.deleteFiles(storeFileName);
		
		//파일시스템에서 삭제
		upLoadFileDAO.deleteFileByReviewNum(reviewNum);
		log.info("svcImpl에서 deleteFileByReviewNum호출:{}",reviewNum);
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
