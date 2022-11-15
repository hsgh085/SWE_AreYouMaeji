package com.swe7.aym.admin.dto;

import com.swe7.aym.admin.Admin;
import com.swe7.aym.user.User;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AdminDto {
    private Long adminId;
    private User user;

    public AdminDto(Admin admin){
        this.adminId = admin.getAdminId();
        this.user = admin.getUser();
    }
}
