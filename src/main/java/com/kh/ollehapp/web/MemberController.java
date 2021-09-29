package com.kh.ollehapp.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.kh.ollehapp.domain.common.dao.CodeDAO;
import com.kh.ollehapp.member.dto.MemberDTO;
import com.kh.ollehapp.member.dto.InquiryComDTO;
import com.kh.ollehapp.member.dto.InquiryDTO;
import com.kh.ollehapp.member.svc.MemberSVC;
import com.kh.ollehapp.web.api.JsonResult;
import com.kh.ollehapp.web.form.Code;
import com.kh.ollehapp.web.form.LoginForm;
import com.kh.ollehapp.web.form.LoginMember;
import com.kh.ollehapp.web.form.LongLatForm;
import com.kh.ollehapp.web.form.ModifyForm;
import com.kh.ollehapp.web.form.bookmarkForm;
import com.kh.ollehapp.web.form.reviewForm;
import com.kh.ollehapp.web.form.member.JoinForm;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;


@Controller
@RequiredArgsConstructor
@Slf4j
@RequestMapping("/member")
public class MemberController {

	private final MemberSVC memberSVC;
	
	


	//아이디 비밀번호 찾기 양식
	@GetMapping("/findForm")
	public String findForm() {
		
		return "/member/findForm";
	}
	

	//회원가입 양식
	@GetMapping("/joinForm")
	public String joinForm(Model model) {
		log.info("String joinForm() 호출됨");
		model.addAttribute("joinForm", new JoinForm());
		
		return "member/joinForm"; //templates 폴터밑에 논리적인 파일이름
	}
	

	
	
	/**
	 * 회원가입
	 * @param memberDTO
	 * @return
	 */
	@PostMapping("/join")
	public String join(
			@Valid @ModelAttribute JoinForm joinForm,
			BindingResult bindingResult) {
		
		log.info("회원가입처리 호출됨!");
		log.info("joinForm:{}",joinForm);	
		
		//아이디 중복체크
		if(memberSVC.isExistMemberId(joinForm.getMemberId())) {
			bindingResult.reject("error.member.join","동일한 아이디가 존재합니다.");
			return "member/joinForm";
		}
		
		//비밀번호 체크						
		if(!joinForm.getMemberPw().equals(joinForm.getMemberPwChk())) {
			bindingResult.reject("error.member.join","비밀번호가 다릅니다");
			log.info("다름");
			return "member/joinForm";
		}
				
		if(bindingResult.hasErrors()) {
			log.info("errors={}",bindingResult);
			return "member/joinForm";
		}
		
		//휴대폰 인증하기
		if(memberSVC.isExistTel(joinForm.getTel())) {
			bindingResult.reject("error.member.join","인증에 실패했습니다.");
			return "member/joinForm";
		}
		
		MemberDTO mdto = new MemberDTO();
		BeanUtils.copyProperties(joinForm, mdto);
		memberSVC.joinMember(mdto);		
		return "redirect:/";
	}
	/**
	 * 아이디/비밀번호 찾기
	 * @throws IOException 
	 */
	@PostMapping("/findIdPw")
	
	public String findIdPw(@ModelAttribute MemberDTO memberDTO,HttpServletRequest request,HttpServletResponse response,Model model) throws IOException {
		
		
		
	MemberDTO memberDTO2 = memberSVC.findIdPw(memberDTO.getMemberName(), memberDTO.getTel());
	

	if(memberDTO2 == null) {
		
		response.setContentType("text/html; charset=UTF-8");
		 
		PrintWriter out = response.getWriter();
		 
		out.println("<script>alert('입력하신 정보에 해당하는 ID/PW가 없습니다.'); location.href='/member/findForm';</script>");
		 
		out.flush();



		return "/member/findForm";
	}
	
		model.addAttribute("MemberDTO",memberDTO2);
	 
		
		
				return "/member/findIdPw";
		
	
	}

/**
 * 회원정보수정 로그인 양식	
 */
@GetMapping("/modify")
public String modifyForm1() {
	return "mypage/modify";
}

/**
 * 회원정보수정 수정 양식
 */

@PostMapping("/modifyMember")
public String modifyMember(
@ModelAttribute LoginForm loginForm,
Model model, HttpServletRequest request,HttpServletResponse response) throws IOException {

	HttpSession session = request.getSession(false);
	LoginMember loginMember
	=(LoginMember)session.getAttribute("loginMember");	
	
MemberDTO memberDTO = memberSVC.modifyLogin(loginForm.getMemberId(),loginForm.getMemberPw());


MemberDTO memberDTO2 = memberSVC.findByID(loginForm.getMemberId());
ModifyForm modifyForm = new ModifyForm();
BeanUtils.copyProperties(memberDTO2, modifyForm);
model.addAttribute("modifyForm",modifyForm);


log.info("memberDTO:{}",modifyForm);
//실패
if(memberDTO == null ) {
log.info(loginMember.getMemberId());
log.info(loginForm.getMemberId());

	
response.setContentType("text/html; charset=UTF-8");
 
PrintWriter out = response.getWriter();
 
out.println("<script>alert('입력하신 ID/PW가 틀렸습니다.'); location.href='/member/modify';</script>");
 
out.flush();


}else if(!loginMember.getMemberId().equals(loginForm.getMemberId())) {
	response.setContentType("text/html; charset=UTF-8");
	 
	PrintWriter out = response.getWriter();
	 
	out.println("<script>alert('입력하신 ID/PW가 틀렸습니다.'); location.href='/member/modify';</script>");
	 
	out.flush();
}

return "mypage/modifyMember";
}


/**
 * 회원수정 처리
 */
@PatchMapping("/modify")
public String edit(@Valid @ModelAttribute ModifyForm modifyForm,
									BindingResult bindingResult,HttpServletRequest request) {
	log.info("회원수정처리 호출됨");
	HttpSession session = request.getSession(false);
	LoginMember loginMember = (LoginMember)session.getAttribute("loginMember");
	
	//세션이없으면로그인페이지로이동
	//if(loginMember == null) return "redirect:/login";
	
	if(bindingResult.hasErrors()) {
		log.info("errors={}",bindingResult);
		return "mypage/memberEditForm";
	}
	
	
	MemberDTO mdto = new MemberDTO();
	BeanUtils.copyProperties(modifyForm, mdto);

	
	memberSVC.update(loginMember.getMemberId(),mdto);
	
	log.info("회원수정처리:{}",mdto);
	
	return "redirect:/";
}

/**
 * 회원탈퇴 양식
 * @return
 */
@GetMapping("/delete")
public String deleteForm() {
	return "mypage/delete";
}


/**
 * 회원탈퇴 로그인
 */

@PostMapping("/deleteMember")
public String deleteMember(@ModelAttribute LoginForm loginForm,
		 HttpServletRequest request,HttpServletResponse response) throws IOException {
MemberDTO memberDTO = memberSVC.modifyLogin(loginForm.getMemberId(),loginForm.getMemberPw());

if(memberDTO == null) {

response.setContentType("text/html; charset=UTF-8");
 
PrintWriter out = response.getWriter();
 
out.println("<script>alert('입력하신 ID/PW가 틀렸습니다.'); location.href='/member/delete';</script>");
 
out.flush();

return "mypage/delete";
}

return "mypage/deleteMember";
}

//회원탈퇴
@GetMapping("/deleteing")
public String deleteing(HttpServletRequest request) {
	HttpSession session = request.getSession(false);
	//세션이없으면로그인페이지로이동
	if(session == null) return "redirect:/login";
	LoginMember loginMember = (LoginMember)session.getAttribute("loginMember");
	if(loginMember == null) return "redirect:/login";

	

	
	memberSVC.delete(loginMember.getMemberId());
	
	if(session != null) {
		session.invalidate();
	}
	
	return "redirect:/";
}


/**
 * 예약페이지 양식
 * @return
 */
@GetMapping("/reservation")
public String reservation() {
	return "mypage/reservation";
}



/**
 * 리뷰페이지 양식
 */

@GetMapping("/review")
public String review() {
	return "mypage/review";
}


/**
 * 1:1문의페이지 양식
 */

@GetMapping("/inquiry")
public String inquiry(HttpServletRequest request,
		Model model) {
	HttpSession session = request.getSession(false);
	LoginMember loginMember
	=(LoginMember)session.getAttribute("loginMember");
	
	List<InquiryDTO> list =
	memberSVC.findInquiry(loginMember.getMemberId());
	
	List<InquiryComDTO> list2 = memberSVC.findComment(loginMember.getMemberId());
			

	
	model.addAttribute("iqList",list);
	model.addAttribute("cmList",list2);
	
	return "mypage/inquiry";
}

/**
 * 1:1답변 상세페이지
 */
@GetMapping("/{inquiryCommentNum}/detailComment")
public String detailComment(@PathVariable long inquiryCommentNum,Model model){
	
	log.info("inquiryCommentNum:{}",inquiryCommentNum);
	
	InquiryComDTO inquiryComDTO =  memberSVC.detailComment(inquiryCommentNum);
	
	model.addAttribute("comment",inquiryComDTO);
	
	return "mypage/inquiryComment";
}


/**
 * 1:1문의 등록
 * @throws IOException 
 */
@PostMapping("/editInquiry")
public String editInquiry(@ModelAttribute InquiryDTO inquiryDTO,HttpServletRequest request,HttpServletResponse response) throws IOException {
	HttpSession session = request.getSession(false);
	LoginMember loginMember
	=(LoginMember)session.getAttribute("loginMember");
	
	log.info("inquiryDTO2:{}",inquiryDTO);
	
	if(inquiryDTO.getInquiryTitle() == null || inquiryDTO.getInquiryContent() == null || inquiryDTO.getInquiryType() == 0) {

		response.setContentType("text/html; charset=UTF-8");
		 
		PrintWriter out = response.getWriter();
		 
		out.println("<script>alert('공백란이 있습니다..'); location.href='/member/inquiry';</script>");
		 
		out.flush();

		return "member/inquiry";
		}
	
	memberSVC.editInquiry(loginMember.getMemberId(), inquiryDTO);
	
	response.setContentType("text/html; charset=UTF-8");
	
	PrintWriter out = response.getWriter();
	 
	out.println("<script>alert('등록되었습니다.'); location.href='/member/inquiry';</script>");
	 
	out.flush();
	
	return "redirect:/";
}


/**
 * 1:1문의 수정 양식
 */
@GetMapping("/{inquiryNum}/modifyInquiry")
@ResponseBody
public JsonResult<List<InquiryDTO>> modifyInquiry(@PathVariable String inquiryNum,Model model) {
	

	
 List<InquiryDTO> list =	memberSVC.inquiryData(inquiryNum);
	
	model.addAttribute("quiryDatalist",list);
	
	return new JsonResult<List<InquiryDTO>>("00","ok",list);
}

/**
 * 1:1문의 수정 처리
 * @throws IOException 
 */
@PostMapping("/modifyInquiry")
public String modifyInquiry2(@ModelAttribute InquiryDTO inquiryDTO2 )  {
	log.info("inquiryDTO:{}",inquiryDTO2);
	
	memberSVC.modifyInquiry(inquiryDTO2);
	
	return "redirect:/member/inquiry";
}


/**
 * 1:1문의 삭제 처리
 */
@GetMapping("/{inquiryNum}/deleteInquiry")
public String deleteInquiry(@PathVariable String inquiryNum) {
	
	memberSVC.deleteInquiry(inquiryNum);
	
	return "redirect:/member/inquiry";
}

/**
 * 관심리스트 양식
 */
@GetMapping("/bookmark")
public String bookmarkList(HttpServletRequest request,Model model) {
	HttpSession session = request.getSession(false);
	LoginMember loginMember
	=(LoginMember)session.getAttribute("loginMember");
	
	List<bookmarkForm> list = memberSVC.bookmarkList(loginMember.getMemberId());
	
	model.addAttribute("blist",list);
	
	log.info("blist:{}",list);
	
	return "mypage/bookmark";
}
	
/**
 * 관심리스트 삭제
 */
@GetMapping("/{bookmarkNum}/deleteBookmark")
public String deleteBookmark(@PathVariable long bookmarkNum) {
	
	memberSVC.deleteBookmark(bookmarkNum);
	
	return "home";
	
}
}















