package com.swe7.aym.admin;

import com.swe7.aym.admin.dto.AdminDto;
import com.swe7.aym.user.User;
import com.swe7.aym.user.UserRepository;
import com.swe7.aym.user.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional
public class AdminService {
    private final UserRepository userRepository;

    public Long findById(Long id){
        User entity = userRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("관리자가 아닙니다."));
        return entity.getUserId();
    }
}
