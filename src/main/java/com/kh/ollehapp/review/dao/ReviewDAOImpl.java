package com.kh.ollehapp.review.dao;


import java.math.BigDecimal;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.dao.IncorrectResultSizeDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import com.kh.ollehapp.review.dto.ReviewDTO;
import com.kh.ollehapp.web.form.reviewForm;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
@Slf4j
@Repository
@RequiredArgsConstructor

public class ReviewDAOImpl implements ReviewDAO {

	private final JdbcTemplate jdbcTemplate;
	
	//리뷰등록
	@Override
	public ReviewDTO editReview(ReviewDTO reviewDTO) {
		StringBuffer sql = new StringBuffer();
		sql.append(" insert into review( ");
		sql.append("   reviewNum, ");
		sql.append("   reviewTitle, ");
		sql.append("   memberId, ");
		sql.append("   reviewContent, ");
		sql.append("   score, ");
		sql.append("   id) values( ");
		sql.append("   review_reviewNum_seq.nextval, ");
		sql.append("   ?, ");
		sql.append("   ?, ");
		sql.append("   ?, ");
		sql.append("   ?, ");
		sql.append("   ?) ");
		
		KeyHolder keyHolder = new GeneratedKeyHolder();
		jdbcTemplate.update(new PreparedStatementCreator() {
			
			@Override
			public PreparedStatement createPreparedStatement(Connection con) throws SQLException {
				PreparedStatement pstmt = con.prepareStatement(
						sql.toString(), new String[] {"reviewNum"});
				pstmt.setString(1, reviewDTO.getReviewTitle());
				pstmt.setString(2, reviewDTO.getMemberId());
				pstmt.setString(3, reviewDTO.getReviewContent());
				pstmt.setLong(4, reviewDTO.getScore());
				pstmt.setLong(5, reviewDTO.getId());
				return pstmt;
			}
		},keyHolder);		
		reviewDTO.setReviewNum(keyHolder.getKeyAs(BigDecimal.class).longValue());
		return reviewDTO;
	}



	//예약조회
	@Override
	public ReviewDTO findReservation(String memberId) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select memberId,id ");
		sql.append("  from reservation ");
		sql.append(" where memberId=?  ");
		
		
		try {
			ReviewDTO reviewDTO = jdbcTemplate.queryForObject(sql.toString(),
							new BeanPropertyRowMapper<>(ReviewDTO.class),memberId);
			return reviewDTO;
			
			}catch (EmptyResultDataAccessException e) {

				return null;

			}
	}

private final JdbcTemplate jt;
	


	/**
	 * 리뷰목록조회
	 */
	@Override
	public List<reviewForm> findReview(String memberId) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select reviewNum,reviewTitle,exprnvillageNm,rdnmadr,exprnCn,score ");
		sql.append(" from review,village ");
		sql.append(" where review.id = village.id  ");
		sql.append(" and memberId=? ");
		
	

		
		List<reviewForm> list = jt.query(sql.toString(),
												new BeanPropertyRowMapper<>(reviewForm.class),memberId);
		
		
		return list;
	}
	
	/**
	 * 리뷰조회
	 */
	@Override
	public ReviewDTO findReveiwList(String memberId,long reviewNum) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select reviewNum,reviewTitle,reviewContent,score ");
		sql.append(" from review ");
		sql.append(" where memberId= ? ");
		sql.append("  and reviewNum= ? ");
		
		ReviewDTO reviewDTO = jt.queryForObject(sql.toString(), new BeanPropertyRowMapper<>(ReviewDTO.class),memberId,reviewNum);
		
		
		return reviewDTO;
	}
	
	/**
	 * 리뷰조회
	 */
	@Override
	public ReviewDTO findReveiwList2(long reviewNum) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select reviewNum,reviewTitle,reviewContent,score ");
		sql.append(" from review ");
		sql.append("  where reviewNum= ? ");
		
		ReviewDTO reviewDTO = jt.queryForObject(sql.toString(), new BeanPropertyRowMapper<>(ReviewDTO.class),reviewNum);
		
		
		return reviewDTO;
	}
	
	/**
	 * 리뷰수정
	 */
	@Override
	public void modifyReview(String memberId, ReviewDTO reviewDTO) {
		StringBuffer sql = new StringBuffer();
		sql.append(" update review ");
		sql.append("    set reviewTitle = ?,  ");
		sql.append("    reviewContent = ?,  ");
		sql.append("    score=?, ");
		sql.append("    rudate = systimestamp ");
		sql.append("  where reviewNum = ? ");
		sql.append("  and memberId = ? ");

		jt.update(sql.toString(),reviewDTO.getReviewTitle(),
							reviewDTO.getReviewContent(),reviewDTO.getScore(),reviewDTO.getReviewNum(),memberId);
	}

	/**
	 * 리뷰삭제
	 */
	@Override
	public void deleteReviw(long reviewNum) {
		String sql = "delete review where reviewNum = ?";
		
		jt.update(sql,reviewNum);
		
		
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
