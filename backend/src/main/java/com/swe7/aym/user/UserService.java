package com.swe7.aym.user;

import com.swe7.aym.user.dto.UserDto;
import com.swe7.aym.user.dto.UserSaveDto;
import com.swe7.aym.user.dto.UserUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;

    public Long save(UserSaveDto requestDto){
        return userRepository.save(requestDto.toEntity()).getUserId();
    }

    public Long update(String email, UserUpdateDto requestDto){
        Optional<User> user = userRepository.findByEmail(email);
        if(user.isPresent()) {
            user.get().update(
                    requestDto.getNickname(),
                    requestDto.getPhone_number(),
                    user.get().getNo_report()
            );
            return user.get().getUserId();
        }
        else {
            return 0L;
        }
    }

    public UserDto findByEmail(String email) {
        Optional<User> entity = userRepository.findByEmail(email);
        if(entity.isPresent()) {
            return new UserDto(entity.get());
        }
        else {
            return null;
        }
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
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent()) {
            user.get().update(
                    user.get().getNickname(),
                    user.get().getPhone_number(),
                    user.get().getNo_report() + 1
            );
            return true;
        }
        else return false;
    }

    public List<User> findAll(){
        return userRepository.findAll();
    }

    public Boolean isRegisterd(String email){
        return userRepository.existsByEmail(email);
    }
}
