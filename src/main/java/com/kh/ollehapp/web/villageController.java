package com.kh.ollehapp.web;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.kh.ollehapp.review.dto.CommentDTO;
import com.kh.ollehapp.review.dto.ReviewDTO;
import com.kh.ollehapp.review.dto.ReviewViewDTO;
import com.kh.ollehapp.review.svc.ReviewSVC;
import com.kh.ollehapp.village.dto.BookmarkDTO;
import com.kh.ollehapp.village.dto.VillageDTO;
import com.kh.ollehapp.village.svc.VillageSVC;
import com.kh.ollehapp.web.api.JsonResult;
import com.kh.ollehapp.web.form.LoginMember;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@AllArgsConstructor
@RequestMapping("/village")
public class villageController {

	private final VillageSVC villageSVC;
	private final ReviewSVC reviewSVC;
	
	/**
	 * 마을상세목록
	 * @param id
	 * @param model
	 * @return
	 */
	@GetMapping("/{id}")
	public String village(@PathVariable long id,Model model) {
		
		VillageDTO villageDTO = villageSVC.villageData(id);
		List<ReviewDTO> list = villageSVC.searchReview(id);
		int score = villageSVC.villageScore(id);
		
		log.info("score",score);
		
		model.addAttribute("village",villageDTO);
		model.addAttribute("reviewList",list);
		model.addAttribute("villageScore",score);
		
		log.info("villageDTO:{}",villageDTO);
		return "village/villageDetail";
	}
	
	/**
	 * 관심리스트 등록
	 */
	@GetMapping("/{id}/bookmark")
	public String attention(@PathVariable long id,HttpServletRequest request) {
		
		HttpSession session = request.getSession(false);
		LoginMember loginMember 
		= (LoginMember)session.getAttribute("loginMember");
		
		
		
		log.info("id:{}",id);
		villageSVC.bookmark(loginMember.getMemberId(),id);
		
return "redirect:/village/{id}";
}
	
/**
 * 리뷰상세
 */
@GetMapping("/{reviewNum}/reviewDetail")
public String reviewDetail(		@PathVariable long reviewNum,
		HttpServletRequest request,
		Model model) {
	HttpSession session = request.getSession(false);
	LoginMember loginMember 
		= (LoginMember)session.getAttribute("loginMember");
	
	List<CommentDTO> list = villageSVC.commentList(reviewNum);
	
	ReviewViewDTO reviewViewDTO = reviewSVC.findReviewView2(reviewNum);
	
	model.addAttribute("reviewDTO",reviewViewDTO);

	
	model.addAttribute("reList",list);
	model.addAttribute("memberId",loginMember.getMemberId());

	return "village/ReviewDetail";
}
	

	/**
	 * 검색페이지 양식
	 */
	@PostMapping("/searchVill")
	public String searchVill(@RequestParam("searchContent") String searchContent,Model model) {
		log.info("searchContent:{}",searchContent);
		
		List<VillageDTO> list = villageSVC.searchVill(searchContent,searchContent);
		

		
		model.addAttribute("sList",list);
		model.addAttribute("searchContent",searchContent);
		
		return "village/searchVill";
	}
	
	
	
	
	
	
	
	
}
