package com.swe7.aym.admin;

import com.swe7.aym.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional
public class AdminService {
    private final AdminRepository adminRepository;

    public Long findById(Long id){
        Optional<Admin> entity = adminRepository.findById(id);
        if (entity.isPresent()){
            return entity.get().getUser().getUserId();
        }
        else
            return 0L;
    }
}
