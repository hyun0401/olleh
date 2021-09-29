package com.kh.ollehapp.member.dao;

import java.util.List;
import java.util.Map;

import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;


import com.kh.ollehapp.member.dto.MemberDTO;
import com.kh.ollehapp.member.dto.InquiryComDTO;
import com.kh.ollehapp.member.dto.InquiryDTO;
import com.kh.ollehapp.web.form.bookmarkForm;
import com.kh.ollehapp.web.form.reviewForm;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Repository
@RequiredArgsConstructor
@Slf4j
public class MemberDAOImpl implements MemberDAO {

	private final JdbcTemplate jdbcTemplate;
	
//관리자 로그인
	@Override
	public String adminCode(String memberId) {
		String sql = "select Code from member where memberId=? ";
		
		 return jdbcTemplate.queryForObject(sql, String.class, memberId);
		
	
	}
	
	/**
	 * 회원가입
	 */
	@Override
	public int joinMember(MemberDTO memberDTO) {
		
		String sql = "insert into member(memberid,memberPw,tel,birth,memberName,email) values(?,?,?,?,?,?)";
		
		int result = jdbcTemplate.update(sql.toString(),
				 memberDTO.getMemberId(),
				 memberDTO.getMemberPw(),
				 memberDTO.getTel(),
				 memberDTO.getBirth(),
				 memberDTO.getMemberName(),
				 memberDTO.getEmail());


return result;
	}

	/**
	 * 아이디 중복체크
	 */
	@Override
	public boolean isExistMemberId(String memberId) {
		
		boolean isExistMemberId = false;
		
		String sql = "select count(*) from member where memberId = ? ";
		
		Integer cnt = 
				jdbcTemplate.queryForObject(sql.toString(), Integer.class, memberId);
		
		if(cnt == 1) isExistMemberId = true;
				
		return isExistMemberId;
	}
	/**
	 * 휴대폰번호인증
	 */
	@Override
	public boolean isExistTel(String tel) {
		
		boolean isExistTel = false;
		
		String sql = "select count(*) from member where tel = ? ";
		
		Integer cnt = 
					jdbcTemplate.queryForObject(sql.toString(), Integer.class, tel);
		
		if(cnt == 1) isExistTel = true;
		
		return isExistTel;
	}

	
	/**
	 * 아이디 비밀번호 찾기
	 */
	@Override
	public MemberDTO findIdPw(String memberName,String tel) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select memberId,memberPw  ");
		sql.append(" from member  ");
		sql.append(" where memberName=?  ");
		sql.append(" and tel=? ");
		sql.append(" and withdrawal = 'N' ");
	
		

		try {

			MemberDTO memberDTO = jdbcTemplate.queryForObject(sql.toString(),new BeanPropertyRowMapper<MemberDTO>(MemberDTO.class),memberName,tel);
			return memberDTO;

		} catch (EmptyResultDataAccessException e) {

			return null;

		}

	}
	
	/**
	 * 로그인
	 */
	 @Override
	  public MemberDTO login(String memberId, String memberPw) {
	     
	     StringBuffer sql = new StringBuffer();
	     
	     sql.append("select memberId,memberPw  ");
	     sql.append("  from member ");
	     sql.append(" where memberId = ? and memberPw = ? and withdrawal='N'  ");
	     
	     log.info("id:{},pw:{}",memberId,memberPw);

	     try {

	        return jdbcTemplate.queryForObject(sql.toString(), new BeanPropertyRowMapper<>(MemberDTO.class),memberId,memberPw);
	     
	     } catch (EmptyResultDataAccessException e) {
	        return null;
	    }	  
	     
	  }
	 /**
	  * 회원정보수정로그인
	  */
	 

		@Override
		public MemberDTO modifyLogin(String memberId, String memberPw) {
			 StringBuffer sql = new StringBuffer();
			 
			 sql.append(" select memberId,memberPw,memberName,birth ");
	     sql.append("  from member ");
	     sql.append(" where memberId = ? and memberPw = ? ");
	     sql.append(" and withdrawal='N'");
	     
	     try {
	    	 MemberDTO memberDTO = jdbcTemplate.queryForObject(sql.toString(), new BeanPropertyRowMapper<>(MemberDTO.class),memberId,memberPw);
	       return memberDTO;
	    
	    } catch (EmptyResultDataAccessException e) {
	    	
	       return null;
	   }	  
		
	     
		}
	 
	//회원정보검색
	@Override
	public MemberDTO findByID(String memberId) {
	StringBuffer sql = new StringBuffer();
		
		sql.append("select  ");
		sql.append("    memberId, ");
		sql.append("    memberName,  ");
		sql.append("    memberPw, ");
		sql.append("    birth, ");
		sql.append("    email, ");
		sql.append("    tel ");
		sql.append("  from member ");
		sql.append(" where memberId = ?  ");
		
		MemberDTO mdto = jdbcTemplate.queryForObject(
				sql.toString(), new BeanPropertyRowMapper<>(MemberDTO.class),memberId);
		return mdto;
	}
	 
	 //회원수정
	@Override
	public void update(String memberId, MemberDTO memberDTO) {
		StringBuffer sql = new StringBuffer();
		sql.append(" update member ");
		sql.append(" set memberId = ?, ");
		sql.append("     memberName = ?, ");
		sql.append("     memberPw = ?, ");
		sql.append("     birth = ?, ");
		sql.append("     email = ?, ");
		sql.append("     tel = ? ");
		sql.append(" where memberId = ? ");
		
		jdbcTemplate.update(sql.toString(),
				memberDTO.getMemberId(),
				memberDTO.getMemberName(),
				memberDTO.getMemberPw(),
				memberDTO.getBirth(),
				memberDTO.getEmail(),
				memberDTO.getTel(),
				memberId);		
	}
	 
//회원탈퇴
	@Override
	public void delete(String memberId) {
	StringBuffer sql = new StringBuffer();
	sql.append(" update member set withdrawal='Y', ");
	sql.append(" withdrawaldate=systimestamp ");
	sql.append(" where memberId = ? ");
	jdbcTemplate.update(sql.toString(),memberId);
		
	}
	 
	 
	 //1:1문의목록
	@Override
	public List<InquiryDTO> findInquiry(String memberId) {
			StringBuffer sql = new StringBuffer();
			sql.append(" select inquiryNum,inquiryType,inquiryTitle,inquiryContent ");
			sql.append(" from inquiry, member ");
			sql.append(" where inquiry.memberId = member.memberId  ");
			sql.append("   and inquiry.memberId = ? ");
			
			
			
			
			List<InquiryDTO> list = jdbcTemplate.query(sql.toString(),
													new BeanPropertyRowMapper<>(InquiryDTO.class),memberId);
			
	
		return list;
	}
	 
	//1:1문의답변목록
	@Override
	public List<InquiryComDTO> findComment(String memberId) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select inquiryCommentNum,inquiryNum,inquiryCommentTitle,inquiryCommentContent ");
		sql.append(" from inquirycomment ");
		sql.append(" where  ");
		sql.append(" memberId = ? ");
		
		
		
		
		List<InquiryComDTO> list = jdbcTemplate.query(sql.toString(),
												new BeanPropertyRowMapper<>(InquiryComDTO.class),memberId);
		return list;
	}
	
	//1:1문의 상세페이지
	@Override
	public InquiryComDTO detailComment(long inquiryCommentNum) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select inquiryCommentTitle,inquiryCommentContent ");
		sql.append(" from inquiryComment ");
		sql.append(" where inquiryCommentNum = ? ");
		
		InquiryComDTO inDTO = jdbcTemplate.queryForObject(sql.toString(), new BeanPropertyRowMapper<>(InquiryComDTO.class),inquiryCommentNum);
		
		return inDTO;
	}
	
	//1:1문의등록
	@Override
	public int editInquiry(String memberId, InquiryDTO inquiryDTO) {
		StringBuffer sql = new StringBuffer();
		sql.append(" insert into  ");
		sql.append(" inquiry(inquiryNum,inquiryType, ");
		sql.append(" inquiryTitle,memberId,iCDATE,inquiryContent)  ");
		sql.append(" values (inquiry_inquiryNum_seq.nextval, ");
		sql.append(" ?,?,?,systimestamp,?) ");
		
		int result = jdbcTemplate.update(sql.toString(),
										inquiryDTO.getInquiryType(),inquiryDTO.getInquiryTitle(),
										memberId,inquiryDTO.getInquiryContent());
		
		
		return result;
	}
	 
	 
	/**
	 * 1:1문의 정보 가져오기
	 */
	 @Override
	public List<InquiryDTO> inquiryData(String inquiryNum) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select  ");
		sql.append(" inquiryNum, ");
		sql.append(" inquiryType, ");
		sql.append(" inquiryTitle, ");
		sql.append(" inquiryContent ");
		sql.append(" from inquiry ");
		sql.append(" where inquiryNum = ? ");
		
		List<InquiryDTO> list = jdbcTemplate.query(sql.toString(),new BeanPropertyRowMapper<>(InquiryDTO.class),inquiryNum);
		return list;
	}
	 
	/**
	 * 1:1문의 수정처리
	 */
	 @Override
	public void modifyInquiry(InquiryDTO inquiryDTO) {
		StringBuffer sql = new StringBuffer();
		sql.append(" update  ");
		sql.append(" inquiry  ");
		sql.append(" set inquirytitle=?, ");
		sql.append(" inquirytype=?, ");
		sql.append(" inquiryContent=?  ");
		sql.append(" where inquiryNum=? ");
		
		jdbcTemplate.update(sql.toString(),
											inquiryDTO.getInquiryTitle(),
											inquiryDTO.getInquiryType(),
											inquiryDTO.getInquiryContent(),
											inquiryDTO.getInquiryNum());

	}
	 
	/**
	 * 1:1문의 삭제처리
	 */
	 @Override
	public void deleteInquiry(String inquiryNum) {
		StringBuffer sql = new StringBuffer();
		sql.append(" delete inquiry ");
		sql.append(" where inquiryNum =? ");
		
		jdbcTemplate.update(sql.toString(),inquiryNum);
		
	}
	 
	/**
	 * 관심리스트 목록
	 */
	 @Override
	public List<bookmarkForm> bookmarkList(String memberId) {
		StringBuffer sql = new StringBuffer();
		sql.append(" select village.id, ");
		sql.append(" exprnVillageNm, ");
		sql.append(" bookmarkNum, ");
		sql.append("  rdnmadr,  ");
		sql.append("  exprnCn ");
		sql.append("   from bookmark, village ");
		sql.append("  where bookmark.id = village.id ");
		sql.append("    and memberId = ? ");
		
		List<bookmarkForm> list = jdbcTemplate.query(sql.toString(),new BeanPropertyRowMapper<>(bookmarkForm.class),memberId);
		return list;
	}
	 
	/**
	 * 관심리스트 삭제
	 */
	 @Override
	public void deleteBookmark(long bookmarkNum) {
		StringBuffer sql = new StringBuffer();
		sql.append(" delete bookmark  ");
		sql.append(" where bookmarkNum=?   ");
		
		jdbcTemplate.update(sql.toString(),bookmarkNum);
		
	}
	 
	//1:1문의 답변 양식
		@Override
		public InquiryDTO detailInquiry(Long inquiryNum) {
			 StringBuffer sql = new StringBuffer();
			 sql.append("select inquiryNum,");
			 sql.append("	inquiryType,");
			 sql.append("	inquiryTitle,");
			 sql.append("	memberId,");
			 sql.append("	icdate,");
			 sql.append("	inquiryContent");
			 sql.append(" from ");
			 sql.append(" inquiry");
			 sql.append(" where inquiryNum = ?");
			 
			 InquiryDTO inquiryDTO = jdbcTemplate.queryForObject(
					 sql.toString(),
					 new BeanPropertyRowMapper<>(InquiryDTO.class),
					 inquiryNum);
			 
			return inquiryDTO;
		}
		 
		 
		//1:1문의 답변
			@Override
			public int replyInquiry(InquiryComDTO inquiryComDTO) {
				StringBuffer sql = new StringBuffer();
				sql.append(" insert into  ");
				sql.append(" inquiryComment(inquiryCommentNum,inquiryNum, ");
				sql.append(" inquiryCommentTitle,memberId,inquiryCommentContent)  ");
				sql.append(" values (inquiryComment_inquiryCommentNum_seq.nextval, ");
				sql.append(" ?,?,?,?) ");
				
				int result = jdbcTemplate.update(sql.toString(),
												inquiryComDTO.getInquiryNum(),inquiryComDTO.getInquiryCommentTitle(),
												inquiryComDTO.getMemberId(), inquiryComDTO.getInquiryCommentContent());
				
				
				return result;
			}
			//관리자 1:1문의 리스트
			@Override
			public List<InquiryDTO> managerInquiry() {
				String sql = "select * from inquiry ";
				List<InquiryDTO> list = jdbcTemplate.query(sql.toString(),
						new BeanPropertyRowMapper<>(InquiryDTO.class));
				
				return list;
			}

			@Override
			public InquiryComDTO mfindInquiry(long inquiryNum, String memberId) {
				String sql = "select inquiryNum,memberId from inquiry where inquiryNum = ? ";
				
				InquiryComDTO inquiryComDTO = jdbcTemplate.queryForObject(
						 sql.toString(),
						 new BeanPropertyRowMapper<>(InquiryComDTO.class),
						 inquiryNum);
				
				return inquiryComDTO;
			}
	 
}

