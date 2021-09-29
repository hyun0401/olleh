package com.kh.ollehapp.member.svc;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.kh.ollehapp.member.dao.MemberDAO;
import com.kh.ollehapp.member.dto.MemberDTO;
import com.kh.ollehapp.member.dto.InquiryComDTO;
import com.kh.ollehapp.member.dto.InquiryDTO;
import com.kh.ollehapp.web.form.bookmarkForm;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
@Transactional(readOnly = true)
public class MemberSVCImpl implements MemberSVC{
	
	private final MemberDAO memberDAO;
	
	/**
	 * 회원코드조회
	 */
	@Override
	public String adminCode(String memberId) {
		
		return memberDAO.adminCode(memberId);
	}
	
	/**
	 * 회원가입
	 */
	@Override
	public int joinMember(MemberDTO memberDTO) {
		int result = 0;
		result = memberDAO.joinMember(memberDTO);
		return result;
	}
	
	/**
	 * 아이디 중복체크
	 */
	@Override
	public boolean isExistMemberId(String memberId) {
		
		return memberDAO.isExistMemberId(memberId);
	}
	
	/**
	 * 휴대폰 인증하기
	 */
	@Override
	public boolean isExistTel(String tel) {
		
		return memberDAO.isExistTel(tel);
	}
	
	/**
	 * 아이디/비밀번호 찾기
	 */
	@Override
	public MemberDTO findIdPw(String memberName,String tel) {
		
		return memberDAO.findIdPw(memberName,tel);
	}
	/**
	 * 로그인 id/pw
	 */
	@Override
	public MemberDTO login(String memberId, String memberPw) {
	
		return memberDAO.login(memberId, memberPw);
	}
	/**
	 * 회원정보수정 양식
	 */
	@Override
	public MemberDTO modifyLogin(String memberId, String memberPw) {
		
		return memberDAO.modifyLogin(memberId, memberPw);
	}
	@Override
	public MemberDTO findByID(String memberId) {
	MemberDTO memberDTO = memberDAO.findByID(memberId);
		return memberDTO;
	}

/**
 * 회원수정처리
 */
	@Override
	@Transactional(readOnly = false)
	public void update(String memberId, MemberDTO memberDTO) {
		//회원수정
		memberDAO.update(memberId, memberDTO);
	
	}
	
	/**
	 * 회원탈퇴
	 */
	@Override
	public void delete(String memberId) {
		memberDAO.delete(memberId);
	}
	
	/**
	 * 1:1문의목록
	 */
	@Override
	public List<InquiryDTO> findInquiry(String memberId) {
		
		return memberDAO.findInquiry(memberId);
	}
	/**
	 * 1:1문의 답변 목록
	 */
	@Override
	public List<InquiryComDTO> findComment(String memberId) {
		
		return memberDAO.findComment(memberId);
	}
	
	/**
	 * 1:1문의 답변 상세페이지
	 */
	@Override
	public InquiryComDTO detailComment(long inquiryCommentNum) {
		
		return memberDAO.detailComment(inquiryCommentNum);
	}
	
	/**
	 * 1:1문의등록
	 */
	@Override
	public int editInquiry(String memberId, InquiryDTO inquiryDTO) {
		int result=0;
		result = memberDAO.editInquiry(memberId, inquiryDTO);
		return result;
	}
	
	/**
	 * 1:1문의상세
	 */
	@Override
	public List<InquiryDTO> inquiryData(String inquiryNum) {
		
		return memberDAO.inquiryData(inquiryNum);
	}
	
	/**
	 * 1:1문의 수정처리
	 */
	
	@Override
	public void modifyInquiry(InquiryDTO inquiryDTO) {
		memberDAO.modifyInquiry(inquiryDTO);
	}
	/**
	 * 1:1문의 삭제
	 */
	@Override
	public void deleteInquiry(String inquiryNum) {
		memberDAO.deleteInquiry(inquiryNum);
	}
	
	/**
	 * 관심리스트 목록
	 */
	@Override
	public List<bookmarkForm> bookmarkList(String memberId) {
		
		return memberDAO.bookmarkList(memberId);
	}
	
	/**
	 * 관심리스트 삭제
	 */
@Override
public void deleteBookmark(long bookmarkNum) {
	memberDAO.deleteBookmark(bookmarkNum);
	
}
/**
 * 1:1문의 전체 조회
 */
@Override
public List<InquiryDTO> managerInquiry() {
	
	return memberDAO.managerInquiry();
}
	
/**
 * 1:1문의답변 양식
 */
@Override
public InquiryDTO detailInquiry(Long inquiryNum) {
	
	InquiryDTO inquiryDTO = memberDAO.detailInquiry(inquiryNum);
	
	return inquiryDTO;
}

/**
 * 1:1문의 답변등록
 */
@Override
public int replyInquiry( InquiryComDTO inquiryComDTO) {
	int result=0;
	result = memberDAO.replyInquiry( inquiryComDTO);
	return result;
}

/**
 * 문의번호 멤버아이디 
 */
@Override
public InquiryComDTO mfindInquiry(long inquiryNum, String memberId) {
	
InquiryComDTO inquiryComDTO = memberDAO.mfindInquiry(inquiryNum, memberId);

	return inquiryComDTO;
}
	
	
	
	
	
	
	
	
	
	
	
}
