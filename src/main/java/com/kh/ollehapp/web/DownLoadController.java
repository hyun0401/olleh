package com.kh.ollehapp.web;

import java.net.MalformedURLException;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kh.ollehapp.upload.FileStore;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequiredArgsConstructor
public class DownLoadController {

	private final FileStore fileStore;
	
	/**
	 * 이미지 다운로드
	 */
	@ResponseBody	//http응답 메세지 바디에 직접내용쓰기
	@GetMapping("/images/{fname}")
	public Resource downLoadImage(@PathVariable String fname) throws MalformedURLException  {
		Resource resource = new UrlResource("file:"+fileStore.getFullPath(fname));
		return resource;
	}
	
}
