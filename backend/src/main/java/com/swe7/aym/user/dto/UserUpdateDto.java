package com.swe7.aym.user.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class UserUpdateDto {
    private String nickname;
    private String phone_number;
    private int no_report;

    @Builder
    public UserUpdateDto(String nickname, String phone_number, int no_report){
        this.nickname = nickname;
        this.phone_number = phone_number;
        this.no_report = no_report;
    }
}
