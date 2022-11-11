package com.swe7.aym.user.dto;

import com.swe7.aym.user.User;
import lombok.Getter;

@Getter
public class UserDto {
    private Long userId;
    private String email;
    private String nickname;
    private String phone_number;
    private int gender;
    private int no_report;

    public UserDto(User user){
        this.userId = user.getUserId();
        this.email = user.getEmail();
        this.nickname = user.getNickname();
        this.phone_number = user.getPhone_number();
        this.gender = user.getGender();
        this.no_report = user.getNo_report();
    }
}
