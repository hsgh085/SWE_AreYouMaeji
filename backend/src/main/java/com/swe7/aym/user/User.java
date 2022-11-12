package com.swe7.aym.user;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Getter
@NoArgsConstructor
public class User implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    @Column(length = 50)
    private String email;

    @Column(length = 50)
    private String nickname;

    @Column(length = 20)
    private String phone_number;

    private int gender;

    private int no_report;

    @Builder
    public User(String email, String nickname, String phone_number,
                int gender, int no_report){
        this.email = email;
        this.nickname = nickname;
        this.phone_number = phone_number;
        this.gender = gender;
        this.no_report = no_report;
    }

    public void update(String nickname, String phone_number, int no_report) {
        this.nickname = nickname;
        this.phone_number = phone_number;
        this.no_report = no_report;
    }

    public void increaseNoRep(){
        this.no_report = this.no_report + 1;
    }
}
