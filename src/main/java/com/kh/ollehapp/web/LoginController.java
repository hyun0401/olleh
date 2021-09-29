package com.kh.ollehapp.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.kh.ollehapp.member.dto.MemberDTO;
import com.kh.ollehapp.member.svc.MemberSVC;
import com.kh.ollehapp.web.form.LoginForm;
import com.kh.ollehapp.web.form.LoginMember;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequiredArgsConstructor
public class LoginController {
	private final MemberSVC memberSVC ;
	/**
	 * 로그인 양식
	 * @param loginForm
	 * @return
	 */
	@GetMapping("/login")
	public String loginForm(@ModelAttribute LoginForm loginForm) {
		return "login/loginForm";
	}
	/**
	 * 로그인처리
	 * @param loginForm
	 * @param bindingResult
	 * @param model
	 * @param request
	 * @return
	 * @throws IOException 
	 */
	@PostMapping("/login")
	public String login(
			@Valid
			@ModelAttribute LoginForm loginForm,
			BindingResult bindingResult,
			Model model, HttpServletRequest request,HttpServletResponse response) throws IOException {
		log.info("loginForm:{}", loginForm);

		MemberDTO memberDTO = memberSVC.login(loginForm.getMemberId(), loginForm.getMemberPw());
		
		//실패
		if(memberDTO == null) {

			response.setContentType("text/html; charset=UTF-8");
			 
			PrintWriter out = response.getWriter();
			 
			out.println("<script>alert('입력하신 정보에 해당하는 ID/PW가 없습니다.'); location.href='/member/loginForm';</script>");
			 
			out.flush();

			return "login/loginForm";
		}
		HttpSession session =request.getSession(true);
		LoginMember loginMember = new LoginMember(
				memberDTO.getMemberId());		
//			session.setAttribute("loginMember", loginMember );
		
		int code =  Integer.parseInt(memberSVC.adminCode(loginForm.getMemberId()));
		
		//관리자
		if(code == 2) {
			
			session.setAttribute("loginAdmin", loginMember );
		//회원
		} 
		
		if(code == 1) {
			session.setAttribute("loginMember", loginMember );
		}
		
		return "redirect:/";
	}
	//로그아웃
	@GetMapping("/logout")
	public String logout(HttpServletRequest request) {
		
		HttpSession session = request.getSession(false);
		if(session != null) {
			log.info("세션제거!");
			session.invalidate();
		}
		
		return "redirect:/";
	}
}
