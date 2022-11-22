package com.swe7.aym.jpa.member.dto;

import com.swe7.aym.jpa.member.Authority;
import com.swe7.aym.jpa.member.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Getter
@NoArgsConstructor
public class MemberDto {
    private Long member_id;
    private String email;
    private String nickname;
    private String phone_number;
    private int gender;
    private int no_report;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    public MemberDto(Member member){
        this.member_id = member.getMember_id();
        this.email = member.getEmail();
        this.nickname = member.getNickname();
        this.phone_number = member.getPhone_number();
        this.gender = member.getGender();
        this.no_report = member.getNo_report();
        this.authority = Authority.ROLE_USER;
    }
    public Member toEntity(){
        return Member.builder()
                .member_id(member_id)
                .email(email)
                .nickname(nickname)
                .phone_number(phone_number)
                .gender(gender)
                .authority(authority)
                .build();
    }

}
