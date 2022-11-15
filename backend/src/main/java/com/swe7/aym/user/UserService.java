package com.swe7.aym.user;

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

    public Long update(Long id, UserUpdateDto requestDto){
        User user = userRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("업데이트 : 잘못된 회원 아이디"));
        user.update(
                requestDto.getNickname(),
                requestDto.getPhone_number(),
                user.getNo_report()
        );
        return id;
    }

    public UserDto findById(Long id) {
        User entity = userRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("회원 조회 : 잘못된 회원 아이디"));
        return new UserDto(entity);
    }

    public float getAvgStar(Long id) {
        float client_sum = userRepository.getSumClientStar(id);
        float helper_sum = userRepository.getSumHelperStar(id);
        int cnt = userRepository.getCntStar(id);
        if (cnt == 0) return 0;
        return client_sum + helper_sum / cnt;
    }

    public Long incNoRep(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(()->new IllegalArgumentException("업데이트 : 잘못된 회원 아이디"));
        user.update(
                user.getNickname(),
                user.getPhone_number(),
                user.getNo_report() + 1
        );
        return id;
    }
}
