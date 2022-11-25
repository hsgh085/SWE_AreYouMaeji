package com.swe7.aym.config;

import com.swe7.aym.redis.token.TokenRepository;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginInterceptor implements HandlerInterceptor {

    private TokenRepository tokenRepository;
    @Override
    public boolean preHandle(
            HttpServletRequest request,
            HttpServletResponse response,
            Object handler
    ) throws Exception {
        String email = request.getHeaders("Authorization").nextElement().toString();
        if (email.equals("null") || !tokenRepository.findTokenByEmail(email).isPresent())
            return false;
        return true;
    }

}
