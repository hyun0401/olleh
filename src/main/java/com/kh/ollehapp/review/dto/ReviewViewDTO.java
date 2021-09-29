package com.kh.ollehapp.review.dto;

import java.time.LocalDateTime;
import java.util.List;

import com.kh.ollehapp.upload.dto.UpLoadFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class ReviewViewDTO {
	private long reviewNum;
	private String reviewTitle;
	private String memberId;
	private LocalDateTime RCDATE;
	private LocalDateTime RUDATE;
	private int RHIT;
	private String reviewContent;
	private int score;
	private long id;

	private List<UpLoadFile> imageFiles;
}