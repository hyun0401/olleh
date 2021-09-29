package com.kh.ollehapp.review.dao;

import java.util.List;

import com.kh.ollehapp.reservation.dto.ReservationDTO;
import com.kh.ollehapp.review.dto.ReviewDTO;
import com.kh.ollehapp.web.form.reviewForm;

public interface ReviewDAO {

	//리뷰등록
	ReviewDTO editReview(ReviewDTO reviewDTO);
	
	//예약조회
	ReviewDTO findReservation(String memberId);
	
	//리뷰목록
	List<reviewForm> findReview(String memberId);
	
	//리뷰조회
	ReviewDTO findReveiwList(String memberId,long reviewNum);
	
	//리뷰조회
	ReviewDTO findReveiwList2(long reviewNum);
	
	//리뷰수정
	void modifyReview(String memberId,ReviewDTO reviewDTO);
	
	//리뷰삭제
	void deleteReviw(long reviewNum);
	
	
}
