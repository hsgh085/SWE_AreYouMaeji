package com.swe7.aym.member.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MemberUpdateDto {
    private String nickname;
    private String phone_number;

    @Builder
    public MemberUpdateDto(String nickname, String phone_number){
        this.nickname = nickname;
        this.phone_number = phone_number;
    }
}
