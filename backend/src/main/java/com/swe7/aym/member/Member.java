package com.swe7.aym.member;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@NoArgsConstructor
public class Member implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long member_id;

    @Column(length = 50)
    private String email;

    @Column(length = 50)
    private String nickname;

    @Column(length = 20)
    private String phone_number;

    private int gender;
    @ColumnDefault("0")
    private int no_report;

    @Enumerated(EnumType.STRING)
    private Authority authority;

    @Builder
    public Member(Long member_id, String email, String nickname, String phone_number,
                int gender, int no_report, Authority authority){
        this.member_id = member_id;
        this.email = email;
        this.nickname = nickname;
        this.phone_number = phone_number;
        this.gender = gender;
        this.no_report = no_report;
        this.authority = authority;
    }

    public void update(String nickname, String phone_number, int no_report) {
        this.nickname = nickname;
        this.phone_number = phone_number;
        this.no_report = no_report;
    }

    public UsernamePasswordAuthenticationToken toAuthentication() {
        return new UsernamePasswordAuthenticationToken(email, email);
    }
}
