package com.kh.ollehapp.review.dto;

import lombok.Data;

@Data
public class CommentDTO {
private String memberId;
private long reviewNum;
private long commentNum;
private String commentContent;
}
