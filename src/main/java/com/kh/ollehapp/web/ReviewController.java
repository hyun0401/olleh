package com.kh.ollehapp.web;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.kh.ollehapp.reservation.dto.ReservationDTO;
import com.kh.ollehapp.review.dto.CommentDTO;
import com.kh.ollehapp.review.dto.ReviewDTO;
import com.kh.ollehapp.review.dto.ReviewViewDTO;
import com.kh.ollehapp.review.svc.ReviewSVC;
import com.kh.ollehapp.upload.FileStore;
import com.kh.ollehapp.upload.dto.UpLoadFile;
import com.kh.ollehapp.upload.dto.UpLoadFileDTO;
import com.kh.ollehapp.village.svc.VillageSVC;
import com.kh.ollehapp.web.form.LoginMember;
import com.kh.ollehapp.web.form.reviewForm;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequiredArgsConstructor
public class ReviewController {

	private final ReviewSVC reviewSVC;
	private final VillageSVC villageSVC;
	
	//리뷰 양식
	@GetMapping("/review")
	public String review() {
		return "mypage/review";
	}
	

	//리뷰등록
	@PostMapping("/reviewEdit")
	public String reviewEdit(
			@ModelAttribute ReviewDTO reviewDTO,
			HttpServletRequest request,
			Model model,
			RedirectAttributes redirectAttributes) throws IllegalStateException, IOException {
		HttpSession session = request.getSession(false);
		LoginMember loginMember 
			= (LoginMember)session.getAttribute("loginMember");
		

		ReviewDTO reviewDTO2 = reviewSVC.findReservation(loginMember.getMemberId());
		ReviewDTO storedReviewDTO = reviewSVC.editReview(reviewDTO,reviewDTO2);
		
						
		return "redirect:/reviewList";
	}
	
	//내리뷰 양식
	@GetMapping("/reviewList")
	public String reviewList(
			HttpServletRequest request,
			Model model) {
		HttpSession session = request.getSession(false);
		LoginMember loginMember
		=(LoginMember)session.getAttribute("loginMember");
		
		List<reviewForm> list =
		reviewSVC.findReview(loginMember.getMemberId());

		
		model.addAttribute("reList",list);
		
		return "mypage/reviewList";
	}
	
//리뷰상세양식
	@GetMapping("/{reviewNum}/detailReview")
	public String detailReview(
			@PathVariable long reviewNum,
			HttpServletRequest request,
			Model model) {
		HttpSession session = request.getSession(false);
		LoginMember loginMember 
			= (LoginMember)session.getAttribute("loginMember");
		
		
		
		ReviewViewDTO reviewViewDTO = reviewSVC.findReviewView(loginMember.getMemberId(), reviewNum);
		
		model.addAttribute("reviewDTO",reviewViewDTO);
		return "mypage/detailReview";
	}
		
//리뷰수정양식
		@GetMapping("/{reviewNum}/modifyReview")
		public String modifyReview(
				@PathVariable("reviewNum") long reviewNum, 
				Model model,
				HttpServletRequest request) {
			HttpSession session = request.getSession(false);
			LoginMember loginMember 
				= (LoginMember)session.getAttribute("loginMember");
			
			
			ReviewViewDTO reviewViewDTO = reviewSVC.findReviewView(loginMember.getMemberId(), reviewNum);
			
			model.addAttribute("reviewDTO", reviewViewDTO);
						
			return "mypage/modifyReview"; 
			
	}
	
	
	//리뷰수정처리
		@PostMapping("/updateReview")
		public String updateReview(@ModelAttribute ReviewDTO reviewDTO,
				HttpServletRequest request) throws IllegalStateException, IOException {
			HttpSession session = request.getSession(false);
			LoginMember loginMember 
				= (LoginMember)session.getAttribute("loginMember");
			
			reviewSVC.modifyReview(loginMember.getMemberId(), reviewDTO);
			
			return "redirect:/reviewList";
		}
	
	//리뷰삭제
	 @GetMapping("/{reviewNum}/deleteReview")
	 public String deleteReview(@PathVariable("reviewNum") long reviewNum ) {
		 
		 reviewSVC.deleteReviw(reviewNum);
		 log.info("컨트롤러 실행 :{}",reviewNum);
		 return "redirect:/reviewList";
	 }
		

		
		//댓글등록
		 @GetMapping("/comment/{reviewNum}/{content}/editcomment")
		 public String editcomment(@PathVariable long reviewNum,@PathVariable String content,HttpServletRequest request) {
				HttpSession session = request.getSession(false);
				LoginMember loginMember 
					= (LoginMember)session.getAttribute("loginMember");
				
			String result = villageSVC.comment(reviewNum, content, loginMember.getMemberId());

			CommentDTO commentDTO = new CommentDTO();
			commentDTO.setCommentContent(content);
			commentDTO.setReviewNum(reviewNum);
			commentDTO.setMemberId(loginMember.getMemberId());
			
			 return "redirect:/village/{reviewNum}/reviewDetail";
		 }
	
	//댓글삭제
		 @GetMapping("/comment/{commentNum}/{reviewNum}/deleteComment")
		 public String deleteComment(@PathVariable long commentNum,@PathVariable long reviewNum) {
			 log.info("commentNum:{}",commentNum);
			 villageSVC.deleteComment(commentNum);
			 
			 return "redirect:/village/{reviewNum}/reviewDetail";
		 }
}



















