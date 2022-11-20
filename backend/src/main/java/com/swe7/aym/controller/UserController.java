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
@RequestMapping(value = "/api/user/*")
public class UserController {

    private final UserService userService;
    @PostMapping("/")
    public Long save(@RequestBody UserSaveDto requestDto){
        return userService.save(requestDto);
    }
    @PutMapping("/{email}")
    public Long update(@PathVariable String email, @RequestBody UserUpdateDto requestDto){
        return userService.update(email, requestDto);
    }
    @GetMapping("/{email}")
    public UserDto findByEmail(@PathVariable String email){
        return userService.findByEmail(email);
    }
    @GetMapping("/{email}/stars")
    public float getAvgStar(@PathVariable String email){
        return userService.getAvgStar(email);
    }
    @GetMapping("/{email}/report")
    public Boolean incNoRep(@PathVariable String email){
        return userService.incNoRep(email);
    }

    @GetMapping("/findAll")
    public List<User> findAllUserForDev(){
        return userService.findAll();
    }

    @GetMapping(value="/kakao")
    public UserDto kakaoLogin(@RequestParam(value = "code", required = false) String code) throws Exception {

        System.out.println(code);
        String access_Token = userService.getAccessToken(code);

        System.out.println(access_Token);
        UserDto user = userService.getUserInfo(access_Token);

        return user;
    }

}
