package com.swe7.aym.jpa.member;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.io.Serializable;

@Entity
@Getter
@NoArgsConstructor
public class Member implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long member_id;

    @Column(length = 50)
    @NotNull
    private String email;

    @Column(length = 50)
    @NotNull
    private String nickname;

    @Column(length = 20)
    @NotNull
    private String phone_number;

    private int gender;
    @ColumnDefault("0")
    private int no_report;

    @Enumerated(EnumType.STRING)
    @NotNull
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

    public void update(String nickname, String phone_number, int gender, int no_report) {
        this.nickname = nickname;
        this.phone_number = phone_number;
        this.no_report = no_report;
        this.gender= gender;
    }
    public void updateReport(){
        this.no_report = this.no_report + 1;
    }
}
