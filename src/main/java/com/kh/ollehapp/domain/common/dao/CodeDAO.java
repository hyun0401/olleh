package com.kh.ollehapp.domain.common.dao;

import java.util.List;

import com.kh.ollehapp.web.form.Code;

public interface CodeDAO {

	List<Code> getCode(String pcode);
}
