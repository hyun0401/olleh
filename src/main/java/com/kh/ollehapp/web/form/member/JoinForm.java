package com.kh.ollehapp.web.form.member;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

import lombok.Data;

@Data
public class JoinForm {
	@NotBlank
	String memberName;
	@NotBlank
	String birth;
	@NotBlank
	String memberId;
	@NotBlank
	@Size(min=8, max=16)
	String memberPw;
	@NotBlank
	@Size(min=8, max=16)
	String memberPwChk;
	@NotBlank
	@Email
	String email;
	@NotBlank
	String tel;
}
