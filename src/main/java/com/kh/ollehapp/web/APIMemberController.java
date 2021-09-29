package com.kh.ollehapp.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.kh.ollehapp.member.svc.MemberSVC;
import com.kh.ollehapp.web.api.JsonResult;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
@RequestMapping("/api/member")
@AllArgsConstructor
public class APIMemberController {

	private final MemberSVC memberSVC;
	
	//아이디 중복체크 (memberId)
	@GetMapping("/memberId/dupchk")
	public JsonResult<String> dupChkMemberId(
			@RequestParam String memberId
			){
	
		JsonResult<String> result = null;
	
		if(memberSVC.isExistMemberId(memberId)) {
				result = new JsonResult<String>("00","OK",memberId);
		} else {
				result = new JsonResult<String>("01","NOK",null);
		}
		return result;
	}
	
	//인증하기 (tel)
	@GetMapping("/tel/dupchk")
	public JsonResult<String> dupChkTel(
			@RequestParam String tel){
		
		JsonResult<String> result = null;
		
		if(memberSVC.isExistTel(tel)) {
			result = new JsonResult<String>("00","OK",tel);
		} else {
			result = new JsonResult<String>("01","NOK",null);
		}
		return result;
	}
}
