package com.kh.ollehapp.upload.dao;

import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.jdbc.core.BatchPreparedStatementSetter;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.kh.ollehapp.upload.dto.UpLoadFileDTO;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@Repository
@RequiredArgsConstructor
public class UpLoadFileDAOImpl implements UpLoadFileDAO {
	
	private final JdbcTemplate jt;
	
	@Override
	public void addFile(UpLoadFileDTO uploadFileDTO) {
		List<UpLoadFileDTO> list = new ArrayList<>();
		list.add(uploadFileDTO);
		addFiles(list);
	}
	
	@Override
	public void addFiles(List<UpLoadFileDTO> list) {
	
		StringBuffer sql = new StringBuffer();
		
		sql.append("insert into uploadFile( ");
		sql.append("  fileNum, ");
		sql.append("  reviewNum, ");
		sql.append("  storeFileName, ");
		sql.append("  uploadFileName, ");
		sql.append("  fileSize, ");
		sql.append("  fileType ");
		sql.append("  ) ");
		sql.append("  values( ");
		sql.append("    uploadFile_fileNum_seq.nextval, ");
		sql.append("    ?, ");
		sql.append("    ?, ");
		sql.append("    ?, ");
		sql.append("    ?, ");
		sql.append("    ? ");
		sql.append("  ) ");
		
		jt.batchUpdate(sql.toString(), new BatchPreparedStatementSetter() {
			
			@Override
			public void setValues(PreparedStatement ps, int i) throws SQLException {
				ps.setLong(1, list.get(i).getReviewNum());
				ps.setString(2, list.get(i).getStoreFileName());
				ps.setString(3, list.get(i).getUploadFileName());
				ps.setString(4, list.get(i).getFileSize());
				ps.setString(5, list.get(i).getFileType());
			}
			
			@Override
			public int getBatchSize() {
				return list.size();
			}
			
		});
		
		
	}
	
	//파일조회
	@Override
	public List<UpLoadFileDTO> getFiles(Long reviewNum) {
		
		StringBuffer sql = new StringBuffer();
		
		sql.append("select * " );
		sql.append("  from uploadFile " );
		sql.append(" where reviewNum = ?  " );
		
		List<UpLoadFileDTO> list = 
				jt.query(
						sql.toString(), 
						new BeanPropertyRowMapper<>(UpLoadFileDTO.class),
						reviewNum);
		return list;
	}
	
	//파일삭제
	@Override
	public void deleteFileByReviewNum(Long reviewNum) {
		String sql = "delete from uploadFile where reviewNum = ? ";
		
		jt.update(sql, reviewNum);
	}
	
	//파일이름 가져오기
	@Override
	public List<String> getStoreFileName(Long reviewNum) {
		
		String sql = "select storeFileName from uploadFile where reviewNum = ? ";
		
		List<String> storeFileName = 
				jt.queryForList(sql, String.class, reviewNum);
		
		return storeFileName;
	}
	
	
	
	
	
	//파일이름으로 삭제		
	@Override
	public void deleteFileBystoreFileName(String storeFileName) {
		String sql = "delete from upLoadFile where storeFileName = ? ";
		jt.update(sql, storeFileName);
		
	}
	
}