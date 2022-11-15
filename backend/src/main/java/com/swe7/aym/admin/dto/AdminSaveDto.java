package com.swe7.aym.admin.dto;

import com.swe7.aym.admin.Admin;
import com.swe7.aym.user.User;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AdminSaveDto {
    private User user;
    @Builder
    public AdminSaveDto(User user){
        this.user = user;
    }

    public Admin toEntity(){
        return Admin.builder()
                .user(user)
                .build();
    }
}
