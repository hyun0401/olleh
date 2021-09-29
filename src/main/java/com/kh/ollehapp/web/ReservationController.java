package com.kh.ollehapp.web;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.kh.ollehapp.member.dto.MemberDTO;
import com.kh.ollehapp.member.svc.MemberSVC;
import com.kh.ollehapp.reservation.dto.ReservationDTO;
import com.kh.ollehapp.reservation.svc.ReservationSVC;
import com.kh.ollehapp.village.dto.VillageDTO;
import com.kh.ollehapp.web.form.LoginMember;
import com.kh.ollehapp.web.form.ReservationForm;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequiredArgsConstructor
public class ReservationController {


	private final ReservationSVC reservationSVC;
	private final MemberSVC memberSVC;
	
	@PostMapping("/ReservatoinVill")
	public String UserReservation2(@ModelAttribute VillageDTO villageDTO,Model model
																,HttpServletRequest request) {
		HttpSession session = request.getSession(false);
		LoginMember loginMember
		=(LoginMember)session.getAttribute("loginMember"); 
		
		int newCount = reservationSVC.reservationCount(villageDTO.getId());
		
		MemberDTO memberDTO = memberSVC.findByID(loginMember.getMemberId());
		model.addAttribute("memberDTO",memberDTO);
		model.addAttribute("villageDTO",villageDTO);
		model.addAttribute("newCount",newCount);
		log.info("villageDTO:{}",villageDTO);
		return "reservation/UserReservation";
	}
	
	
	
	/**
	 * 예약처리
	 * @param reservationForm
	 * @return
	 * @throws IOException 
	 */
	@PostMapping("/UserReservation")
	public String UserReservation2(@ModelAttribute ReservationForm reservationForm,HttpServletRequest request,HttpServletResponse response) throws IOException {
		
		HttpSession session = request.getSession(false);
		LoginMember loginMember
		=(LoginMember)session.getAttribute("loginMember"); 
		
		ReservationForm reservationForm2 = reservationSVC.findvill(reservationForm.getId());
		
		int count = reservationSVC.reservationCount(reservationForm.getId());
		
		
		int newCount = (count - reservationForm.getTotal());
		
		log.info("count:{}",newCount);
		
		if(newCount<0) {
			response.setContentType("text/html; charset=UTF-8");
			 
			PrintWriter out = response.getWriter();
			 
			out.println("<script>alert('현재 예약가능한 인원보다 많습니다.'); location.href='javascript:history.back()';</script>");
			 
			out.flush();

			return "/village/{reservationForm.getId}";
		}
		
		reservationSVC.editCount(newCount, reservationForm.getId());
		
		reservationForm.setCtprvnNm(reservationForm2.getCtprvnNm());
		reservationForm.setExprnSe(reservationForm2.getExprnSe());
		reservationForm.setSignguNm(reservationForm2.getSignguNm());
		
		reservationSVC.editReservation(reservationForm,loginMember.getMemberId());
			
		return "redirect:/reservation";
	}
	
	
	/**
	 * 예약목록
	 * @param request
	 * @param model
	 * @return
	 */
	@GetMapping("/reservation")
	public String reservation(
			HttpServletRequest request,
			Model model) {
		HttpSession session = request.getSession(false);
		LoginMember loginMember
		=(LoginMember)session.getAttribute("loginMember");
		
		List<ReservationDTO> list =
		reservationSVC.findReservation(loginMember.getMemberId());
		
		log.info("Reservation:{}",list);
		
		model.addAttribute("rList",list);
		
		return "mypage/reservation";
	}
	
	//예약삭제
	 @GetMapping("/{reservationNum}/deleteReservation")
	 public String deleteReview(@PathVariable long reservationNum,HttpServletResponse response) throws IOException {
		 
		 
		log.info("reservationNum:{}",reservationNum);
		 
		reservationSVC.deleteReservation(reservationNum);

		
		 return "redirect:/reservation";
	 }
	 
	 
}
