package com.swe7.aym.jpa.controller;

import com.swe7.aym.jpa.member.Member;
import com.swe7.aym.jpa.member.MembersService;
import com.swe7.aym.jpa.member.dto.MemberDto;
import com.swe7.aym.jpa.member.dto.MemberSaveDto;
import com.swe7.aym.jpa.member.dto.MemberUpdateDto;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/api/member")
public class MemberController {

    private final MembersService memberService;
    @PostMapping("")
    public Long save(@RequestBody MemberSaveDto requestDto){
        return memberService.save(requestDto);
    }
    @PutMapping("")
    public Long update(@RequestHeader(value="Authorization") String email, @RequestBody MemberUpdateDto requestDto){
        return memberService.update(email, requestDto);
    }
    @GetMapping("")
    public MemberDto findByEmail(@RequestHeader(value="Authorization") String email){
        return memberService.findByEmail(email);
    }
    @GetMapping("/stars")
    public float getAvgStar(@RequestHeader(value="Authorization") String email){
        return memberService.getAvgStar(email);
    }
    @PutMapping("/report/{id}")
    public Boolean incNoRep(@PathVariable Long id, @RequestHeader(value="Authorization") String email){
        return memberService.incNoRep(id, email);
    }

    @GetMapping(path = "/findAll")
    public List<Member> findAllMemberForDev(@RequestHeader(value="Authorization") String email) {
        return memberService.findAll();
    }

    @GetMapping(value="/kakao")
    public MemberDto kakaoLogin(@RequestParam(value = "code", required = false) String code) {

        String access_Token = memberService.getAccessToken(code);
        MemberDto memberDto = memberService.getMemberInfo(access_Token);

        return memberDto;
    }

}
