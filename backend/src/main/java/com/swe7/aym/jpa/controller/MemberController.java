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
    @GetMapping("/report")
    public Boolean incNoRep(@RequestHeader(value="Authorization") String email){
        return memberService.incNoRep(email);
    }

    @GetMapping(path = "/findAll")
    public List<Member> findAllMemberForDev(@RequestHeader(value="Authorization") String email) {
        System.out.println(email);
        System.out.println(memberService.findAll());
        return memberService.findAll();
    }

    @GetMapping(value="/kakao")
    public MemberDto kakaoLogin(@RequestParam(value = "code", required = false) String code) {

        String access_Token = memberService.getAccessToken(code);
        MemberDto memberDto = memberService.getMemberInfo(access_Token);

        return memberDto;
    }

}
