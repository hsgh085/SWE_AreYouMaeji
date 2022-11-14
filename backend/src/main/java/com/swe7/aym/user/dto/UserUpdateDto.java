package com.swe7.aym.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserUpdateDto {
    private String nickname;
    private String phone_number;

    @Builder
    public UserUpdateDto(String nickname, String phone_number){
        this.nickname = nickname;
        this.phone_number = phone_number;
    }
}
