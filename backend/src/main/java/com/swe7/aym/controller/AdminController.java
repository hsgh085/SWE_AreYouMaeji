package com.swe7.aym.controller;

import com.swe7.aym.admin.AdminService;
import com.swe7.aym.admin.dto.AdminSaveDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class AdminController {
    private final AdminService adminService;

    @GetMapping("/api/admin/{id}")
    public Long findById(@PathVariable Long id){
        return adminService.findById(id);
    }

    @PostMapping("/api/admin/")
    public Long save(@RequestBody AdminSaveDto requestDto) {
        return adminService.save(requestDto);
    }
}
