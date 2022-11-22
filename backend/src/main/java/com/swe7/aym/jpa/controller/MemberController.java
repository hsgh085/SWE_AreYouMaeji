package com.swe7.aym.jpa.controller;

import com.swe7.aym.jpa.member.Member;
import com.swe7.aym.jpa.member.dto.MemberDto;
import com.swe7.aym.jpa.member.dto.MemberSaveDto;
import com.swe7.aym.jpa.member.dto.MemberUpdateDto;
import com.swe7.aym.jpa.member.MembersService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/member/*")
public class MemberController {

    private final MembersService memberService;
    @PostMapping("")
    public Long save(@RequestBody MemberSaveDto requestDto){
        return memberService.save(requestDto);
    }
    @PutMapping("/{email}")
    public Long update(@PathVariable String email, @RequestBody MemberUpdateDto requestDto){
        return memberService.update(email, requestDto);
    }
    @GetMapping("/{email}")
    public MemberDto findByEmail(@PathVariable String email){
        return memberService.findByEmail(email);
    }
    @GetMapping("/{email}/stars")
    public float getAvgStar(@PathVariable String email){
        return memberService.getAvgStar(email);
    }
    @GetMapping("/{email}/report")
    public Boolean incNoRep(@PathVariable String email){
        return memberService.incNoRep(email);
    }

    @GetMapping("/findAll")
    public List<Member> findAllMemberForDev(){
        return memberService.findAll();
    }

    @GetMapping(value="/kakao")
    public MemberDto kakaoLogin(@RequestParam(value = "code", required = false) String code) throws Exception {

        String access_Token = memberService.getAccessToken(code);
        MemberDto memberDto = memberService.getMemberInfo(access_Token);

        return memberDto;
    }

}
