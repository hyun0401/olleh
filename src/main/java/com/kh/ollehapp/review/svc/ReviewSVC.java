package com.kh.ollehapp.review.svc;

import java.util.List;
import java.io.IOException;
import com.kh.ollehapp.reservation.dto.ReservationDTO;
import com.kh.ollehapp.review.dto.ReviewDTO;
import com.kh.ollehapp.review.dto.ReviewViewDTO;
import com.kh.ollehapp.web.form.reviewForm;

public interface ReviewSVC {

	/**
	 * 리뷰등록
	 */
	ReviewDTO editReview(ReviewDTO reviewDTO,ReviewDTO reviewDTO2)throws IllegalStateException,IOException;;
	
	/**
	 * 예약조회
	 */
	ReviewDTO findReservation(String memberId);
	
	/**
	 * 예약목록
	 */
	
	List<reviewForm> findReview(String memberId);
	
	//리뷰조회
	ReviewDTO findReveiwList(String memberId,long reviewNum);
	
	//리뷰조회
	ReviewDTO findReveiwList(long reviewNum);
	

	//내가한거
	ReviewViewDTO findReviewView(String memberId,long reviewNum);
	
	//내가한거
	ReviewViewDTO findReviewView2(long reviewNum);
	
	//리뷰수정
	void modifyReview(String memberId,ReviewDTO reviewDTO) throws IllegalStateException, IOException;
	
	//리뷰삭제
	void deleteReviw(long reviewNum);
}
