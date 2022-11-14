package com.swe7.aym.controller;

import com.swe7.aym.user.UserService;
import com.swe7.aym.user.dto.UserDto;
import com.swe7.aym.user.dto.UserSaveDto;
import com.swe7.aym.user.dto.UserUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;
    @PostMapping("/api/user")
    public Long save(@RequestBody UserSaveDto requestDto){
        return userService.save(requestDto);
    }
    @PutMapping("/api/user/{id}")
    public Long update(@PathVariable Long id, @RequestBody UserUpdateDto requestDto){
        return userService.update(id, requestDto);
    }
    @GetMapping("/api/user/{id}")
    public UserDto findById(@PathVariable Long id){
        return userService.findById(id);
    }
    @GetMapping("/api/user/stars/{id}")
    public float getAvgStar(@PathVariable Long id){
        return userService.getAvgStar(id);
    }
    @GetMapping("/api/user/reported/{id}")
    public float incNoRep(@PathVariable Long id){
        return userService.incNoRep(id);
    }

}
