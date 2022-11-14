package com.swe7.aym.admin.dto;

import com.swe7.aym.admin.Admin;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class AdminDto {
    private Long adminId;
    private Long userId;

    public AdminDto(Admin admin){
        this.adminId = admin.getAdminId();
        this.userId = admin.getUserId();
    }
}
