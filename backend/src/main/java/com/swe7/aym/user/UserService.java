package com.swe7.aym.user;

import com.sun.org.apache.xpath.internal.operations.Bool;
import com.swe7.aym.user.dto.UserDto;
import com.swe7.aym.user.dto.UserSaveDto;
import com.swe7.aym.user.dto.UserUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@RequiredArgsConstructor
@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;

    public Long save(UserSaveDto requestDto){
        return userRepository.save(requestDto.toEntity()).getUserId();
    }

    public Long update(String email, UserUpdateDto requestDto){
        User user = userRepository.findByEmail(email);
        user.update(
                requestDto.getNickname(),
                requestDto.getPhone_number(),
                user.getNo_report()
        );
        return user.getUserId();
    }

    public UserDto findByEmail(String email) {
        User entity = userRepository.findByEmail(email);
        return new UserDto(entity);
    }
    public float getAvgStar(String email) {
        try {
            float client_sum = userRepository.getSumClientStar(email);
            float helper_sum = userRepository.getSumHelperStar(email);
            int cnt = userRepository.getCntStar(email);
            return client_sum + helper_sum / cnt;
        }
        catch (Exception e) {
            return 0;
        }
    }

    public Boolean incNoRep(String email) {
        User user = userRepository.findByEmail(email);
        user.update(
                user.getNickname(),
                user.getPhone_number(),
                user.getNo_report() + 1
        );
        return true;
    }
}
