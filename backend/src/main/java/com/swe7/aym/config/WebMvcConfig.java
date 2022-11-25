package com.swe7.aym.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {

    private final long MAX_AGE_SECS = 3600;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        // 모든 경로에 대해
        registry.addMapping("/**")
                // Origin이 http:localhost:3000에 대해
                .allowedOrigins("http://localhost:3000", "http://ec2-3-38-226-253.ap-northeast-2.compute.amazonaws.com")
                // GET, POST, PUT, PATCH, DELETE, OPTIONS 메서드를 허용합니다.
                .allowedMethods("*")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(MAX_AGE_SECS);
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry){
        registry.addInterceptor(new LoginInterceptor())
                .addPathPatterns("/**")
                .excludePathPatterns("/api/member/kakao")
                .excludePathPatterns("/swagger-ui/**")
                .excludePathPatterns("/api/v2/**")
                .excludePathPatterns("/v3/api-docs")
                .excludePathPatterns("/webjars/**")
                .excludePathPatterns("/swagger-resources/**");
    }
}