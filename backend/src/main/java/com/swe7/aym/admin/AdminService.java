package com.swe7.aym.admin;

import com.swe7.aym.admin.dto.AdminSaveDto;
import com.swe7.aym.user.User;
import com.swe7.aym.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional
public class AdminService {
    private final AdminRepository adminRepository;
    private final UserRepository userRepository;

    public Long save(AdminSaveDto adminSaveDto){
        return adminRepository.save(adminSaveDto.toEntity()).getAdminId();
    }

    public Long findById(Long id){
        Optional<User> user = userRepository.findById(id);
        if (user.isPresent()){
            Optional<Long> entity = adminRepository.findByUser(user.get());
            if (entity.isPresent()){
                return entity.get();
            }
            else
                return 0L;
        }
        else
            return 0L;
    }
}
