package com.kh.ollehapp.village.svc;

import com.kh.ollehapp.village.svc.VillageSVC;

import lombok.RequiredArgsConstructor;

import java.util.List;

import org.springframework.stereotype.Service;

import com.kh.ollehapp.review.dto.CommentDTO;
import com.kh.ollehapp.review.dto.ReviewDTO;
import com.kh.ollehapp.village.dao.VillageDAO;
import com.kh.ollehapp.village.dto.BookmarkDTO;
import com.kh.ollehapp.village.dto.VillageDTO;

@Service
@RequiredArgsConstructor
public class VillageSVCImpl implements VillageSVC {
	
	private final VillageDAO villageDAO;
	
/**
 * 마을정보검색
 */
@Override
public VillageDTO villageData(long id) {

	return villageDAO.villageData(id);
}

/**
 * 별점
 */
@Override
public int villageScore(long id) {
	
	return villageDAO.villageScore(id);
}


/**
 * 리뷰조회 
 */
@Override
public List<ReviewDTO> searchReview(long id) {
	
	return villageDAO.searchReview(id);
}
/**
 * 관심리스트 등록
 */
@Override
public void bookmark(String memberId,long id) {
	villageDAO.bookmark(memberId,id);
	
}

/**
 * 댓글등록
 */
@Override
public String comment(long reviewNum, String commentContent, String memberId) {
	return villageDAO.comment(reviewNum, commentContent, memberId);
}

/**
 * 댓글목록
 */
@Override
public List<CommentDTO> commentList(long reviewNum) {
	return villageDAO.commentList(reviewNum);
}
/**
 * 댓글삭제
 */
@Override
public void deleteComment(long commentNum) {
	villageDAO.deleteComment(commentNum);
	
}

/**
 * 검색
 */
@Override
public List<VillageDTO> searchVill(String searchContent,String searchContent2) {
	
	return villageDAO.searchVill(searchContent,searchContent2);
}
}

