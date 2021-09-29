//인터셉터
package com.kh.ollehapp.web;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import com.kh.ollehapp.web.interceptor.LoginCheckInterceptor;

@Configuration
public class WebConfig implements WebMvcConfigurer {

	@Override
	public void addInterceptors(InterceptorRegistry registry) {
		
		registry.addInterceptor(new LoginCheckInterceptor())
																.order(1)
																.addPathPatterns("/member/**")
																.addPathPatterns("/**/modifyReview")
																.addPathPatterns("/**/detailReview")
																.addPathPatterns("/updateReview")
																.addPathPatterns("/mypage/**")	
																.addPathPatterns("/reviewList/**")																	
																.addPathPatterns("/reservation/**")																	
																.addPathPatterns("/**/ReservatoinVill")
																.addPathPatterns("/**/UserReservation")
																.addPathPatterns("/**/bookmark")												
																.addPathPatterns("/**/reviewDetail")												
																.excludePathPatterns(
																					"/",
																					"/login",
																					"/logout",
																					"/member/joinForm",
																					"/member/join",
																					"/member/findForm",
																					"/member/findIdPw"
																		);
																

	}
}
