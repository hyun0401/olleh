package com.kh.ollehapp.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.kh.ollehapp.member.dto.InquiryComDTO;
import com.kh.ollehapp.member.dto.InquiryDTO;
import com.kh.ollehapp.member.svc.MemberSVC;
import com.kh.ollehapp.reservation.dto.ReservationDTO;
import com.kh.ollehapp.reservation.svc.ReservationSVC;
import com.kh.ollehapp.web.form.LoginMember;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RequiredArgsConstructor
@Controller
@RequestMapping("/manager")
public class ManagerController {
	
	private final ReservationSVC reservationSVC;
	private final MemberSVC memberSVC;
	
	/**
	 * 관리자페이지 예약리스트
	 * @return
	 */
	@GetMapping("/reservationList")
	public String manager() {
		
		return "manager/reservationList";
	}
	
	/**
	 * 관리자페이지 1:1문의사항
	 * @return
	 */
	@GetMapping("/inquiries")
	public String managerInquiries(HttpServletRequest request,
			Model model) {
		HttpSession session = request.getSession(false);
		
		LoginMember loginMember
		=(LoginMember)session.getAttribute("loginMember");
		
		List<InquiryDTO> list =
		memberSVC.managerInquiry();
		
		model.addAttribute("iqList",list);
		
		return "manager/inquiries";
	}
	
	
	/**
	 * 1:1문의 답변 양식
	 * @param memberId 
	 */

	@GetMapping("/reply/{inquiryNum}")
	public String inquiry(
			@PathVariable long inquiryNum,
			Model model,
			HttpServletRequest request, String memberId) { 
		
		
		InquiryComDTO inquiryComDTO = new InquiryComDTO();
		log.info("inquiryComDTO1:{}",inquiryComDTO);
		HttpSession session = request.getSession(false);
		
//		inquiryComDTO.setInquiryNum();
//		inquiryComDTO.getMemberId(InquiryDTO.setMemberId);
		
		
		InquiryComDTO inquiryDTO = memberSVC.mfindInquiry(inquiryNum, memberId);
		log.info("inquiryDTO2:{}",inquiryDTO);
		
		model.addAttribute("inquiryDTO", inquiryDTO);
		
		log.info("inquiryDTO3:{}",inquiryDTO);
	
		return "manager/reply";
	}


	/**
	 * 1:1문의 답변 등록
	 * @param inquiryComDTO
	 * @param request
	 * @param response
	 * @return
	 * @throws IOException
	 */
	@PostMapping("/reply")
	public String replyInquiry(
			
			@ModelAttribute InquiryComDTO inquiryComDTO,
			HttpServletRequest request, 
			
			HttpServletResponse response) throws IOException {
		
		
		log.info("inquiryDTO2야야:{}",inquiryComDTO);
		
		if(inquiryComDTO.getInquiryCommentTitle() == null || inquiryComDTO.getInquiryCommentContent() == null ) {

			response.setContentType("text/html; charset=UTF-8");
			 
			PrintWriter out = response.getWriter();
			 
			out.println("<script>alert('공백란이 있습니다..'); location.href='/manager/inquiries';</script>");
			 
			out.flush();

			return "/inquiries";
			}
		
		memberSVC.replyInquiry(inquiryComDTO);
		
		response.setContentType("text/html; charset=UTF-8");
		
		PrintWriter out = response.getWriter();
		 
		out.println("<script>alert('등록되었습니다.'); location.href='/manager/inquiries';</script>");
		 
		out.flush();
		
		return "redirect:/";
	}
	
	/**
	 * 관리자 예약목록 검색
	 * @param reservationDTO
	 * @param model
	 * @return
	 */
	@PostMapping("/searchReservation")
	public String searchReservation(@ModelAttribute ReservationDTO reservationDTO,Model model) {
		log.info("reservationDTO:{}",reservationDTO);
		List<ReservationDTO> list =  reservationSVC.managerReservation(
				reservationDTO.getCtprvnNm(),reservationDTO.getSignguNm(),reservationDTO.getExprnSe());
		
		model.addAttribute("relist",list);
		
		log.info("relist:{}",list);
		return "manager/reservationList";
	}

/**
 * 예약삭제
 */
	//리뷰삭제
	 @GetMapping("/{reservationNum}/deleteManagerReservation")
	 public String deleteReview(@PathVariable long reservationNum,HttpServletResponse response) throws IOException {
		 
		 
		log.info("reservationNum:{}",reservationNum);
		 
		reservationSVC.deleteReservation(reservationNum);

		
		 return "redirect:/manager/reservationList";
	 }
}























