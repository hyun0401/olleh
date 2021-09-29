package com.kh.ollehapp.web.form;

import javax.validation.constraints.NotBlank;

import lombok.Data;

@Data
public class LoginForm {
	@NotBlank
	private String memberId;
	@NotBlank
	private String memberPw;
}
