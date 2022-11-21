package com.swe7.aym.member.dto;

import com.swe7.aym.member.Authority;
import com.swe7.aym.member.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MemberSaveDto {
    private String email;
    private String nickname;
    private String phone_number;
    private int gender;

    @Builder
    public MemberSaveDto(String email, String nickname, String phone_number, int gender){
        this.email = email;
        this.nickname = nickname;
        this.phone_number = phone_number;
        this.gender = gender;
    }
    public Member toEntity(){
        return Member.builder()
                .email(email)
                .nickname(nickname)
                .phone_number(phone_number)
                .gender(gender)
                .authority(Authority.ROLE_USER)
                .build();
    }
}
