package com.kh.ollehapp.member.dto;

import javax.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberDTO {
	@NotBlank
	private String memberId;     			//회원아이디
	@NotBlank
	private String memberPw;					//비민번호
	@NotBlank
	private String tel;								//전화번호
	@NotBlank
	private String birth;							//생년월일
	@NotBlank
	private String memberName; 			  //이름
	@NotBlank
	private String email;   					//이메일
	private String code;							//회원코드
	private String withdrawal;				//탈퇴여부
	private String withdrawalDate;		//탈퇴시간

	
}
