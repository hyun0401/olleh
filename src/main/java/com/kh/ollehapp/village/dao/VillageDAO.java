package com.kh.ollehapp.village.dao;

import java.util.List;

import com.kh.ollehapp.review.dto.CommentDTO;
import com.kh.ollehapp.review.dto.ReviewDTO;
import com.kh.ollehapp.village.dto.BookmarkDTO;
import com.kh.ollehapp.village.dto.VillageDTO;

public interface VillageDAO {
	
//마을정보
VillageDTO villageData(long id);

//별점
int villageScore(long id);

//리뷰목록조회
List<ReviewDTO> searchReview(long id);

//관심리스트 등록
void bookmark(String memberId,long id);

//댓글등록
String comment(long reviewNum,String commentContent,String memberId);

//댓글목록
List<CommentDTO> commentList(long reviewNum);

//댓글삭제
void deleteComment(long commentNum);

//검색
List<VillageDTO> searchVill(String searchContent,String searchContent2);
}
