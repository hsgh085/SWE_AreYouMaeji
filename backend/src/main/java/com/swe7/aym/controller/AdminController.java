package com.swe7.aym.controller;

import com.swe7.aym.admin.AdminService;
import com.swe7.aym.post.dto.PostDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class AdminController {
    private final AdminService adminService;

    @GetMapping("/api/admin/{id}")
    public Long findById(@PathVariable Long id){
        return adminService.findById(id);
    }
}
