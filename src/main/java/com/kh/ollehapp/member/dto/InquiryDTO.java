package com.kh.ollehapp.member.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class InquiryDTO {
	private long inquiryNum;
	private char inquiryType;
	private String inquiryTitle;
	private String memberId;
	private String icdate;
	private String inquiryContent;
}
