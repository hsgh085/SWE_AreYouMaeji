package com.swe7.aym.user.dto;

import com.swe7.aym.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserSaveDto {
    private String email;
    private String nickname;
    private String phone_number;
    private int gender;

    @Builder
    public UserSaveDto(String email, String nickname, String phone_number, int gender){
        this.email = email;
        this.nickname = nickname;
        this.phone_number = phone_number;
        this.gender = gender;
    }
    public User toEntity(){
        return User.builder()
                .email(email)
                .nickname(nickname)
                .phone_number(phone_number)
                .gender(gender)
                .build();
    }
}
