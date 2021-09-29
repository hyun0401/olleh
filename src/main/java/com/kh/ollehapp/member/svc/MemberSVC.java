package com.kh.ollehapp.member.svc;

import java.util.List;

import com.kh.ollehapp.member.dto.MemberDTO;
import com.kh.ollehapp.member.dto.InquiryComDTO;
import com.kh.ollehapp.member.dto.InquiryDTO;
import com.kh.ollehapp.web.form.bookmarkForm;
import com.kh.ollehapp.web.form.reviewForm;

public interface MemberSVC {

	/**
	 * 회원코드조회
	 */
	String adminCode(String memberId);
	/**
	 * 회원 가입
	 * @param memberDTO
	 * @return
	 */
	int joinMember(MemberDTO memberDTO);	
	
	/**
	 * 아이디 중복체크
	 * @param memberId
	 * @return
	 */
	boolean isExistMemberId(String memberId);
	
	/**
	 * 휴대폰 인증하기
	 * @param tel
	 * @return
	 */
	boolean isExistTel(String tel);
	
	/**
	 * 아이디비번찾기
	 * @param memberId
	 * @param memberPw
	 * @return
	 */
	MemberDTO findIdPw(String memberName, String tel);
	
	/**
	 * 로그인하기위한 id/pw 확인
	 * @param id
	 * @param pw
	 * @return
	 */
	MemberDTO login(String memberId, String memberPw);
	
	/**
	 * 회원정보수정을 위한 id/pw확인
	 */
	MemberDTO modifyLogin(String memberId,String memberPw);
	
	/**
	 * 회원조회 by id
	 * @param id
	 * @return
	 */
	MemberDTO findByID(String memberId);
	
	/**
	 * 수정
	 * @param id
	 * @param memberDTO
	 */
	void update(String memberId, MemberDTO memberDTO);
	
	
	/**
	 * 회원탈퇴
	 */
 void delete(String memberId);
 
	/**
	 * 1:1문의목록
	 */
	
	List<InquiryDTO> findInquiry(String memberId);
	/**
	 * 1:1문의답변목록
	 */
	
	List<InquiryComDTO> findComment(String memberId);
	
	/**
	 * 1:1답변상세
	 */
	InquiryComDTO detailComment(long inquiryCommentNum);
	
/**
 * 1:1문의 등록
 */
int editInquiry(String memberId,InquiryDTO inquiryDTO);

/**
 * 1:1문의 정보 불러오기
 */
List<InquiryDTO> inquiryData(String inquiryNum);

/**
 * 1:1문의 수정 처리
 */
void modifyInquiry(InquiryDTO inquiryDTO);


/**
 * 1:1문의 삭제처리
 */
void deleteInquiry(String inquiryNum);

/**
 * 관심리스트 목록
 */
List<bookmarkForm> bookmarkList(String memberId);

/**
 * 관심리스트 삭제
 */
void deleteBookmark(long bookmarkNum);

/**
 * 1:1문의 전체
 * @return
 */
List<InquiryDTO> managerInquiry();

/**
 * 1:1문의 상세
 * @param inquiryNum
 * @return
 */
InquiryDTO detailInquiry(Long inquiryNum);

/**
 * 1:1문의 답변 등록
 * @param memberId
 * @param inquiryComDTO
 * @return
 */
int replyInquiry( InquiryComDTO inquiryComDTO);


/**
 * inquiryNum,memberId 
 * @param inquiryNum
 * @return
 */
InquiryComDTO mfindInquiry(long inquiryNum, String memberId);

}
