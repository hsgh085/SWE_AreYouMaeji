package com.swe7.aym.controller;

import com.swe7.aym.user.User;
import com.swe7.aym.user.UserService;
import com.swe7.aym.user.dto.UserDto;
import com.swe7.aym.user.dto.UserSaveDto;
import com.swe7.aym.user.dto.UserUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class UserController {

    private final UserService userService;
    @PostMapping("/api/user")
    public Long save(@RequestBody UserSaveDto requestDto){
        return userService.save(requestDto);
    }
    @PutMapping("/api/user/{email}")
    public Long update(@PathVariable String email, @RequestBody UserUpdateDto requestDto){
        return userService.update(email, requestDto);
    }
    @GetMapping("/api/user/{email}")
    public UserDto findByEmail(@PathVariable String email){
        return userService.findByEmail(email);
    }
    @GetMapping("/api/user/{email}/stars")
    public float getAvgStar(@PathVariable String email){
        return userService.getAvgStar(email);
    }
    @GetMapping("/api/user/{email}/report")
    public Boolean incNoRep(@PathVariable String email){
        return userService.incNoRep(email);
    }
    @GetMapping("/api/user/{email}/kakao")
    public Boolean isRegistered(@PathVariable String email){
        return userService.isRegistered(email);
    }
    @GetMapping("/api/user/findAll")
    public List<User> findAllUserForDev(){
        return userService.findAll();
    }

}
