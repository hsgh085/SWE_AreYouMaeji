package com.swe7.aym.jpa.member.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MemberUpdateDto {
    private String nickname;
    private String phone_number;
    private int gender;

    @Builder
    public MemberUpdateDto(String nickname, String phone_number, int gender){
        this.nickname = nickname;
        this.phone_number = phone_number;
        this.gender = gender;
    }
}
