package com.kh.ollehapp.member.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InquiryComDTO {
	private long inquiryCommentNum;
	private long inquiryNum;           //문의글 번호
	private String inquiryCommentTitle;
	private String memberId;       //회원아이디
	private String icdate;
	private String inquiryCommentContent;
}
