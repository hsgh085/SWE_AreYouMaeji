package com.swe7.aym.member.dto;

import com.swe7.aym.member.Member;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class MemberResponseDto {
    private Long member_id;
    private String email;
    private String nickname;
    private String phone_number;
    private int gender;
    private int no_report;

    private String jwttoken;

    @Builder
    public MemberResponseDto(Member member, String jwttoken){
        this.member_id = member.getMember_id();
        this.email = member.getEmail();
        this.nickname = member.getNickname();
        this.phone_number = member.getPhone_number();
        this.gender = member.getGender();
        this.no_report = member.getNo_report();
        this.jwttoken = jwttoken;
    }
}