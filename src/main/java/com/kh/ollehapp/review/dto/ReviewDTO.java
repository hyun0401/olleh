package com.kh.ollehapp.review.dto;

import java.time.LocalDateTime;
import java.util.List;
import javax.validation.constraints.NotBlank;


import org.springframework.web.multipart.MultipartFile;

import com.kh.ollehapp.upload.dto.UpLoadFileDTO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ReviewDTO {
	private long reviewNum;
	@NotBlank
	private String reviewTitle;
	private String memberId;
	private LocalDateTime RCDATE;
	private LocalDateTime RUDATE;
	private int RHIT;
	@NotBlank
	private String reviewContent;
	@NotBlank
	private int score;
	private long id;
	
	private List<MultipartFile> mfiles;
	
}
